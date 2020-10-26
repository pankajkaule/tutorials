# kubernetes

basics of the kubernatives.

kubernatives is the divided as the master node and worker node

1. mastern node includes
   - controller manager
   - etcd database
   - api server
   - schedular

2. worker node includes
   - docker
   - kubelet
   - kubernatives proxy
  
## etcd database

this is the database is used for the storing the configuration information of the node.
this information is the ralated to the cluster.
this is the high availability key value pair.
this is the database only accesible to the kubernatives database only.
this the distrubuted key value pair accesible to all.

## api server

kubernatives is the api server which provides the all operation on the cluster.
api server implements an  
kubeconfig is the package along the server side tools that is used for the communication.
it exposes the kubernatives api

## controller manager

it is the used for the regulates the state of the cluster.and the perform the task
it runs the diffrent kinds of the controller to handle the nodes and the endpoints.

## schedular

this is the service provided by the master responsible for the distrubuting the workload
this is the process allocates the availeble pods to availeble nodes.
this schedular is the responsible for the workload utilisation and allocation of the node to the new pod.

## kubernatives client services

### kubelet service

it is the small service availeble to each node for the relaying the information
to and from the control plane service
it is communicates with the etcd database and the writes the information.
it maintain the state of the work and the node server
it manages the network rules and port forwarding

### kubernatives proxy services

this service run on the each node 
this service is helps to making service availeble to the external host.
this helps to forwarding the request to the correct conteiner.
and the is the capable for the primitive load balancing 
it manages the pods the on the node volumes secrets creating new container healthe check

### kubectl command line toool

command line tool us used to the create update delete and get the api object.
kubernatives api acts as the commutator among the diffrent component of the kubernatives.
