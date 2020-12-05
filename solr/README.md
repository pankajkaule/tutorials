# apache solr

## apache solr introduction

### features

1. restful api
2. full text search
3. ready to deploy
4. nosql database
5. highly scalable
6. text centric
   
Note : solr is used along with the hadoop. hadoop is generally used to handle large amount of the data. and solr help us to find data among these.

There are logically four layers in which the overall architecture of solr can be divided. 

1. The storage layer is responsible for the managing of indexes and configuration metadata
2.  It is inside the J2EE container on which the instance will run, 
3.  the solr engine is the application package that runs on top of the container.
4.  interaction denotes how the client/ Apache Solr server can interact with the web browser. 

#### major building blocks of the solr

the classes of the solr and the lucene are organised and layered.

each and every class is defined to perform specific tasks.

following are the some major building blocks of the solr and lucene.

| sr no | block | use |
|-------|--------|----|
| 1 | request handler | all the request that we make are processed by the one of the solr class SolrRequestHandler. you can configure the handler to specific uri endpoint.and request made to it served by this endpoint. |
2|search component|search component defines the logic to implement the feature provided by search handler. these component should be registered in  the SearchHandler request handler which sserves the user query. for example features such as the query, spell checking, faceting and hit highlighting are implemented as the component and registered to search handlers multiple component are registered to search handlers|
|3|query parser| it translate the user query that lucene understand they are generally registered in the search component a component that performs search operations|
|4|similarity|this class determines the how lucene weights terms and scores the document if you want to change the scoring behaviour then this is the class to extend|
|5|response writer| this decides how the user query is formated.  for each response type such as the xml json or velocity this exists seprate response writer.|
|6|analyser or tokeniser|smallest unit that lucene understand that is the token the implementatio of the tokenizer decide how to break down the text into token |
|7|update request processor|while indexing your documentyou can invoke a set of the UpdateRequestProcessor as part of the your chain to perform custom action upon your data|

#### major differences between the sql database and the solr

1. relevance ranking : ranking is based on the combination of the boolean model and the vector space model. boolean for document approval and vsm for ranking
2. denormalised data : 
3. schema vs schemaless : solr is scmaless it doesnt need schema
4. text analysis and navigation


#### genral terminology 

solr instance : solr application server

solr core : each of   your indexes and file required for that index makes a core

### important configuration files: 

solr.xml : first file that solr looks for $SOLR_HOME direcrtory.

solrconfig.xml : this is the file contain core specific configuration and defination related to the request handling abd many more.

schema.xml: cointain whole schema. defination of field and field type and scoring strategy 

core.properties: solr refers this file as core discovery

### directory structure :

to set up and use solr you need to to understand two sets of directory structure 

1. solr distrubution
2. solr home directory

which cointains the indices and configuration of all cores.

|file /directory |use|
|----|----|
|bin| this cointain the utility script for starting stoping and administrating solr|
|solr/solr.cmd|starting and stopping perposes|
|solr.in.sh/solr.in.cmd|Environment file for settings specific to instances.|
|oom_solr.sh|using this script you can for kill process running on the port|
|solr.port|when you start the solr instance by using this script this file is created it is the for inter use and it is automatically deleted on stopping instance|
|post |this script for indexing the documents in the solr|
|install_solr_service.sh|if you want to install solr as a service this script is used |
|init.d| for run solr by using init processs in unix environment|

server directory : is the cetral place for the every thing related to the solr instance.
this conteains the solr home directory and the logs of it it also contains the jetty configuration files. which is used to modify the server configuration.
 
 Note : for production environment its advisible to configure solr home and logs directory is differ from the solr server directory.

 some are sub directiry for the solr server directory

 1. contexts : solr uses the jetty internally and this directory contains the deployment descriptor for the jetty for solr
 2. etc : contains the jetty configuration files.
 3. lib : this contains the jetty and other library files required for the solr instances.
 4. logs : by default solr logs are created in this directiory.
 5. modules : it is used for the jetty module definations.
 6. resorces : this contains the configuration files such as log4j.properties
 7. scripts : this  contains the scripts required for the solr cloud.
 8. solr : this is the default home directory for the solr.
 9. solr-webapps : jetty extracts the solr in this directory.
 10. start.jar : this is the excutable jar for the starting the solr jetty.

#### solr home

solr home directory contains the solr configuration files. and its indices and every thing related to the solr instance.

solr has may or may not be multiple cores and they are defined in this directory.  

subdirectories in the solr home directory 

1. solr.xml : this is the covered in the terminolgy section.
2. zoo.cfg: this contains the configuration file for the apache zookeeper if you are not using the solr cloud the ignore this file.
3. configsets: if you wants to share the configuration among the multiple cores on your instaces.
4. lib : this contain all the common libraries.

files related to the each cores are the :

1. core.properties: solr refers to this files for the auto discovery of the core 
2. conf : this is the directory contains all the configuration files for the cores like wise solrconfig.xml and the schema.xml
3. data : this is the directory responsible for tthe indexing documents and the searching the result.

#### how to start the solr :

we can start the solr by using the solr start script 
 we can start the solr by using the terminal using the following command inside the solr directory

```bash
$ cd bin 
$ ./solr start
```
started solr server at  port : 8983 (pid : 2108 ) happy searching!

now our solr instance is started at the port 8983
we can access the web based interface using the link 

http://localhost:8983/solr

if the specified port is busy then the we can change the port using the following command 

```bash
$ ./solr start –p 8980
```


if you want to run the solr in the verbose mode ie: for the short time duration then we can use the following command 

```bash
./solr start –f –p 8983 –V
```



<span style="color:red">Note:  -v is the optional verbose mode for the run solr process in the default mode in the background.</span>


## create a solr core

simplest mode to create core in the solr is schemaless

<span style="color:red">Note:  in the schemaless  fields are dynamically defined by using the field guess mechanism. at the time of the indexing the document.</span>

following is the example of the schemaless core creation

./solr create -c hellocore

this is setup the new core instance directory 
/home/applications/solr-5.3.1/server/solr/hellosolr

<span style='color:red'> Note : -c < corename > is the name of the core which you want to create. </span>

### index the data 

to index the documents you need to select document type and provide in this format. 


### search the results

acess the query tab abd excute query button this show the document you indexed. 

by default solr fetches the 10 document from the index in the query pane 

query text box contain the query which we have to convert in the format of the fieldname: query pane 

<span style='color:red'> Note : here  * : * means all the values in all the fields  </span>

### solr script 

this is the introduced in the 5.3.0.
the script on only provision to start the solr cloud 

following scripts are used to start the solr

bin/solr – *nix
bin/solr.cmd – Windows

<span style='color:red'> Note : o avoid presenting duplicate code, this book uses the name bin/solr to refer to both scripts. The
purpose of both scripts is same. Each is specific to its environment.</span>

start solr command

- solr start
- solr start -p 8983 -h localhost -m 4g
  - -p for port
  - -h for host name
  - -m for heap size
  
##### restart solr 

solr restart -p 8983

##### solr status

solr status

#### core management 

the solr contain single index and its configuration file  such as solrconfig.xml and schema.xml and associated files each core have diffrent index structure and can be used for the diffrent structure.

solr instances has multiple cores.  


###### config sets

introduced a provision to create config sets.
this is a set of the sharable configuration files. that can be used for creation of the new cores this can be used for the distrubuted environment. the 5.x have bundle of pre configured configsets.

this bundles are used instaed of the write the code from the scratch.

location of this configsets are the server/solr/configsets 

following are the configsets are bundled in the solr 5.3.1

basic config : this contain minimal conf needed for run solr

data driven schema config : if you want to go schemaless then you go ahead with it

sample techproducts config : this is full fledged config with most of the optional features enabled you can use the config set as the starting point of the your project.

