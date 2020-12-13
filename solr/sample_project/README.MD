# SAMPLE SOLR CRUD APPLICATION

1. mavan dependancy 

this added when project is started. 

2. defining the entity class.

```java 

/**
 * 
 */
package com.doj.app.pojo;

import org.springframework.data.annotation.Id;
import org.springframework.data.solr.core.mapping.Indexed;
import org.springframework.data.solr.core.mapping.SolrDocument;

/*------------------------------------------------------- 
|   this define the solr core name 
|--------------------------------------------------------*/
@SolrDocument(collection="Order")
public class Order {
    
/*
|-------------------------------------------------------------
|     @Id ::this define the primary key in the spring data 
|     @Indexed(name = "oid", type = "long")
|     @Indexed defines the such field is indexed
|     name parameter used to define datafield in the collection
|     type parameter for defining the data type of data field.
|-------------------------------------------------------------*/
    @Id
    @Indexed(name = "oid", type = "long")
    private Long orderid;
 
    @Indexed(name = "oname", type = "string")
    private String orderName;
    
    @Indexed(name = "odesc", type = "string")
    private String orderDescription;
    
    @Indexed(name = "pname", type = "string")
    private String productName;

    @Indexed(name = "cname", type = "string")
    private String customerName;
    
    @Indexed(name = "cmobile", type = "string")
    private String customerMobile;

/*------------------------------------------------------- 
|   this define getter and setter methods.
|--------------------------------------------------------*/

	public Long getOrderid() {
		return orderid;
	}

	public void setOrderid(Long orderid) {
		this.orderid = orderid;
	}

	public String getOrderName() {
		return orderName;
	}

	public void setOrderName(String orderName) {
		this.orderName = orderName;
	}

	public String getProductName() {
		return productName;
	}

	public void setProductName(String productName) {
		this.productName = productName;
	}

	public String getCustomerName() {
		return customerName;
	}

	public void setCustomerName(String customerName) {
		this.customerName = customerName;
	}

	public String getCustomerMobile() {
		return customerMobile;
	}

	public void setCustomerMobile(String customerMobile) {
		this.customerMobile = customerMobile;
	}

	public String getOrderDescription() {
		return orderDescription;
	}

	public void setOrderDescription(String orderDescription) {
		this.orderDescription = orderDescription;
	}
    
}
	
```

3.  defining the repository.


```java

package com.doj.app.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.solr.repository.Query;
import org.springframework.data.solr.repository.SolrCrudRepository;

import com.doj.app.pojo.Order;
/*-------------------------------------------------------
|   solr order repository for removing boiler plate code
--------------------------------------------------------*/

public interface SolrOrderRepository extends SolrCrudRepository<Order, Long> {
	
	Order findByOrderid(Long orderid);
	
    @Query("odesc:*?0*")
    Page<Order> findByOrderDescription(String searchTerm, Pageable pageable);
    
    @Query("odesc:*?0* OR oname:*?0* OR pname:*?0*")
    Page<Order> findByCustomerQuery(String searchTerm, Pageable pageable);
 
    @Query(name = "Order.findByNamedQuery")
    Page<Order> findByNamedQuery(String searchTerm, Pageable pageable);
}
```
