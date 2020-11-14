# why event sourcing

the main concept behind the event sourcing is capture the state of the application.

event sourcing is the one of the best way to automatically update the state and publish an event.

## creating event source entity

here we will crete account entity. basically this entity acts as the our use-case to demonstrate event sourcing.

```java
@Aggregate
public class AccountAggregate {

    @AggregateIdentifier
    private String id;

    private double accountBalance;

    private String currency;

    private String status;
}
```

@Aggregate annotation tells Axon that this entity will be managed by axon basically similar to the @Entity annotation  available with jpa.

@AggregateIdentifier annotation is used for the identifing a particular instance of aggregates.

## modelling the commands and events

Axon works on the concept of the command and events. Commands are the user initiated  actions that can change  the state of the aggregate.

itmeans commands is used to change the state of the aggregate.

Events are the actual changing of state.

Commands:

1. Create Account
2. Credit Money
3. debit Money

According to the command event fired.

these fired eventsts are the

- Account Created Event
- Money Created Event
- Money Debited Event

### Base Commands and Base Events

#### base command snippet

```java
public class BaseCommand<T> {

    @TargetAggregateIdentifier
    public final T id;

    public BaseCommand(T id) {
        this.id = id;
    }
}
```

#### BaseEvent Snippet

```java
public class BaseEvent<T> {

    public final T id;

    public BaseEvent(T id) {
        this.id = id;
    }
}
```

we have java classes Generics here Basically this makes our id field flexible across different classes that extend these classes.

however the most impo to note here is the @TargetAggregateIdentifier annotation.

Basically this is an axon specific requirement to identifies the aggregate instance  in other words this annotation is required to determine the instance of the aggregate that should handle the command. the annotation is placed on either the field or the gettter method. in this example we choose to put in the field.

### create account command

```java
public class CreateAccountCommand extends BaseCommand<String> {

    public final double accountBalance;

    public final String currency;

    public CreateAccountCommand(String id, double accountBalance, String currency) {
        super(id);
        this.accountBalance = accountBalance;
        this.currency = currency;
    }
}
```

### Credit Money Command

```java
public class CreditMoneyCommand extends BaseCommand<String> {

    public final double creditAmount;

    public final String currency;

    public CreditMoneyCommand(String id, double creditAmount, String currency) {
        super(id);
        this.creditAmount = creditAmount;
        this.currency = currency;
    }
}
```

### Debit Money Command

```java
public class DebitMoneyCommand extends BaseCommand<String> {

    public final double debitAmount;

    public final String currency;

    public DebitMoneyCommand(String id, double debitAmount, String currency) {
        super(id);
        this.debitAmount = debitAmount;
        this.currency = currency;
    }
}
```

Next step is to implements the events

### Account Created Event

```java
public class AccountCreatedEvent extends BaseEvent<String> {

    public final double accountBalance;

    public final String currency;

    public AccountCreatedEvent(String id, double accountBalance, String currency) {
        super(id);
        this.accountBalance = accountBalance;
        this.currency = currency;
    }
}
```

### Money Credited Event

```java
public class MoneyCreditedEvent extends BaseEvent<String> {

    public final double creditAmount;

    public final String currency;

    public MoneyCreditedEvent(String id, double creditAmount, String currency) {
        super(id);
        this.creditAmount = creditAmount;
        this.currency = currency;
    }
}
```

### Money Debited Event

```java
public class MoneyDebitedEvent extends BaseEvent<String> {

    public final double debitAmount;

    public final String currency;

    public MoneyDebitedEvent(String id, double debitAmount, String currency) {
        super(id);
        this.debitAmount = debitAmount;
        this.currency = currency;
    }
}
```

### Account Activated Event

```java
public class AccountActivatedEvent extends BaseEvent<String> {

    public final Status status;

    public AccountActivatedEvent(String id, Status status) {
        super(id);
        this.status = status;
    }
}
```

### Account Held Event
 

```java
public class AccountHeldEvent extends BaseEvent<String> {

    public final Status status;

    public AccountHeldEvent(String id, Status status) {
        super(id);
        this.status = status;
    }
}
```

we are successfully created base commands commands and events but then we have to implement the command handler and the event handler.

Q. what is the command and event handlers ?
handlers are the methods on aggregate that should be implemented on invoking particular commands and event.

Due to their relation in to the aggregate it is recommended to define the handlers to the in the Aggregate class itself also the command habdlers often 
to access the state of aggregate. 

in our case we will define them in the accountaggregate class see below to Account Aggregate class implementation.

```java
Aggregate
public class AccountAggregate {

    @AggregateIdentifier
    private String id;

    private double accountBalance;

    private String currency;

    private String status;

    public AccountAggregate() {
    }

    @CommandHandler
    public AccountAggregate(CreateAccountCommand createAccountCommand){
        AggregateLifecycle.apply(new AccountCreatedEvent(createAccountCommand.id, createAccountCommand.accountBalance, createAccountCommand.currency));
    }

    @EventSourcingHandler
    protected void on(AccountCreatedEvent accountCreatedEvent){
        this.id = accountCreatedEvent.id;
        this.accountBalance = accountCreatedEvent.accountBalance;
        this.currency = accountCreatedEvent.currency;
        this.status = String.valueOf(Status.CREATED);

        AggregateLifecycle.apply(new AccountActivatedEvent(this.id, Status.ACTIVATED));
    }

    @EventSourcingHandler
    protected void on(AccountActivatedEvent accountActivatedEvent){
        this.status = String.valueOf(accountActivatedEvent.status);
    }

    @CommandHandler
    protected void on(CreditMoneyCommand creditMoneyCommand){
        AggregateLifecycle.apply(new MoneyCreditedEvent(creditMoneyCommand.id, creditMoneyCommand.creditAmount, creditMoneyCommand.currency));
    }

    @EventSourcingHandler
    protected void on(MoneyCreditedEvent moneyCreditedEvent){

        if (this.accountBalance < 0 & (this.accountBalance + moneyCreditedEvent.creditAmount) >= 0){
            AggregateLifecycle.apply(new AccountActivatedEvent(this.id, Status.ACTIVATED));
        }

        this.accountBalance += moneyCreditedEvent.creditAmount;
    }

    @CommandHandler
    protected void on(DebitMoneyCommand debitMoneyCommand){
        AggregateLifecycle.apply(new MoneyDebitedEvent(debitMoneyCommand.id, debitMoneyCommand.debitAmount, debitMoneyCommand.currency));
    }

    @EventSourcingHandler
    protected void on(MoneyDebitedEvent moneyDebitedEvent){

        if (this.accountBalance >= 0 & (this.accountBalance - moneyDebitedEvent.debitAmount) < 0){
            AggregateLifecycle.apply(new AccountHeldEvent(this.id, Status.HOLD));
        }

        this.accountBalance -= moneyDebitedEvent.debitAmount;

    }

    @EventSourcingHandler
    protected void on(AccountHeldEvent accountHeldEvent){
        this.status = String.valueOf(accountHeldEvent.status);
    }
}

```

as you can see we are handling the three commands in their  own handler methods these handler methods should be annotated with the @CommandHandler Annotation.
there are the three command handler methods because there are three commands we want to handle.

---

**NOTE:**
handler methods use AggregateLifecyle.apply() method to register the events.

---

these events in turns are methods are handled by methods
annotated with @EventSourcingHandler Annotation.

also it is imperetative that all state changes in the event sourced aggregate should be performed in these methods.

another important point to keep in the mind is aggregate identifier must be set in the first method annotated with the Event sourcing handler

---

**NOTE:**
@EventSourcingHandler annotation is the responsible for the sorcing the event.

---

in our example this is the evident in the below method.

```java
@EventSourcingHandler
protected void on(AccountCreatedEvent accountCreatedEvent){
        this.id = accountCreatedEvent.id;
        this.accountBalance = accountCreatedEvent.accountBalance;
        this.currency = accountCreatedEvent.currency;
        this.status = String.valueOf(Status.CREATED);

        AggregateLifecycle.apply(new AccountActivatedEvent(this.id, Status.ACTIVATED));
}
```

Another important thing to point out here is the no-args default constructor. You need to declare such a constructor because Axon framework needs it.
Basically, using this constructor, Axon creates an empty instance of the aggregate.
 Then, it applies the events. If this constructor is not present, it will result in an exception.
 so the constructor is the very important.

we came far in implementing event sourcing with axon and Spring-boot. However, we still didn't' have proper way of testing our application.

to do so, we would expose certain interfaces will allow us to create an account and also perform other operations.
basically you think rest of interfaces as apis.

## the service layer

as the first step we will create a service layer. we will have two service interfaces.

first is AccountCommandService to handle the commands. second is AccountQueryService at this point the query service will just help in fetching a list of events.

Basically we to follow SOLID Principle therefore we have to code the interfaces. Below are the interfaces declarations for our services.

```java
public interface AccountCommandService {

    public CompletableFuture<String> createAccount(AccountCreateDTO accountCreateDTO);
    public CompletableFuture<String> creditMoneyToAccount(String accountNumber, MoneyCreditDTO moneyCreditDTO);
    public CompletableFuture<String> debitMoneyFromAccount(String accountNumber, MoneyDebitDTO moneyDebitDTO);
}
```

INTERFACE

```java
public interface AccountQueryService {
    public List<Object> listEventsForAccount(String accountNumber);
}
```

Now, we implement these interfaces. First is the AccountCommandServiceImpl.

```java
@Service
public class AccountCommandServiceImpl implements AccountCommandService {

    private final CommandGateway commandGateway;

    public AccountCommandServiceImpl(CommandGateway commandGateway) {
        this.commandGateway = commandGateway;
    }

    @Override
    public CompletableFuture<String> createAccount(AccountCreateDTO accountCreateDTO) {
        return commandGateway.send(new CreateAccountCommand(UUID.randomUUID().toString(), accountCreateDTO.getStartingBalance(), accountCreateDTO.getCurrency()));
    }

    @Override
    public CompletableFuture<String> creditMoneyToAccount(String accountNumber, MoneyCreditDTO moneyCreditDTO) {
        return commandGateway.send(new CreditMoneyCommand(accountNumber, moneyCreditDTO.getCreditAmount(), moneyCreditDTO.getCurrency()));
    }

    @Override
    public CompletableFuture<String> debitMoneyFromAccount(String accountNumber, MoneyDebitDTO moneyDebitDTO) {
        return commandGateway.send(new DebitMoneyCommand(accountNumber, moneyDebitDTO.getDebitAmount(), moneyDebitDTO.getCurrency()));
    }
}
```

the main thing to note here is the command gateway

basically,
this is a convience interface provided by Axon.

you can use this interface to dispatch  commands.

when you are wire up the commandgateway as below, axon will actually provide the defaultcommandgateway implementation.

then using send method on commandgateway we can send a command and wait for the response.

in the example below, we basically dispatch three commands in the three diffrent methods.

then we implement the AccountQueryServiceImpl.

this class is not mandatory for event sourcing using axon. However we are implementing this for our testing purposes.

```java
@Service
public class AccountQueryServiceImpl implements AccountQueryService {

    private final EventStore eventStore;

    public AccountQueryServiceImpl(EventStore eventStore) {
        this.eventStore = eventStore;
    }

    @Override
    public List<Object> listEventsForAccount(String accountNumber) {
        return eventStore.readEvents(accountNumber).asStream().map( s -> s.getPayload()).collect(Collectors.toList());
    }
}
```

Notice that we are wire up something called as eventStore.
provides the  methods to  read events for particular aggregateid available

in other words
we call the readEvents method with aggregateid or account# as input. then we collect the output stream and transform it to list nothing to complex.

## Data Transfer objects

in the next step we will create data transfer objects. Even though our resource might be the entire account but different commands will require diffrent payload. therefore DTO objects are required.

for the purposes we will create DTO model classes.

AccountCreteDTO is used to creating  new account.

```java

public class AccountCreateDTO {

    private double startingBalance;

    private String currency;

    public double getStartingBalance() {
        return startingBalance;
    }

    public void setStartingBalance(double startingBalance) {
        this.startingBalance = startingBalance;
    }

    public String getCurrency() {
        return currency;
    }

    public void setCurrency(String currency) {
        this.currency = currency;
    }
}

```

MoneyCreditDTO for crediting money to account.

```java
public class MoneyCreditDTO {

    private double creditAmount;

    private String currency;

    public double getCreditAmount() {
        return creditAmount;
    }

    public void setCreditAmount(double creditAmount) {
        this.creditAmount = creditAmount;
    }

    public String getCurrency() {
        return currency;
    }

    public void setCurrency(String currency) {
        this.currency = currency;
    }
}
```

MoneyDebitDTO for debiting money
from an account.

```java
public class MoneyDebitDTO {

    private double debitAmount;

    private String currency;

    public double getDebitAmount() {
        return debitAmount;
    }

    public void setDebitAmount(double debitAmount) {
        this.debitAmount = debitAmount;
    }

    public String getCurrency() {
        return currency;
    }

    public void setCurrency(String currency) {
        this.currency = currency;
    }
}
```

as you can see these are standard pojos. 

so as to enable jackson to able serialize and deserialize the objects we have declared standard getter and setter methods.

of course in a real business case you might also have some valodation here.

