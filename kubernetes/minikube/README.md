# minikube commands

|command |use|
| ---------| ------- |
|    kubectl cluster info    |  check for cluster details  and cluster helthcheck. |
|    kubectl get nodes   |  check running cluster cluster nodes. |
|    kubectl get pods    |  check running pods. |
|   kubectl create deployment first-deployment --image=katacoda/docker-http-server    | it allows to run cointainer into cluster |
|   kubectl expose deployment first-deployment --port=80 --type=NodePort| expose port of the cointainer. |
|    minikube addons enable dashboard   |  Enable the dashboard using Minikube|
|kubectl apply -f /opt/kubernetes-dashboard.yaml|add new yaml deployment.|
