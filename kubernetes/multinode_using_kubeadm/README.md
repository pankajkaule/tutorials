# kubeadm commands

|Commands |use|
| ---------| ------- |
| kubectl apply -f /opt/kubernetes-dashboard.yaml| start cluster using  kubeadm  |
|sudo cp /etc/kubernetes/admin.conf $HOME/sudo chown $(id -u):$(id -g)$HOME/admin.conf export KUBECONFIG=$HOME/admin.conf| copy path to kubeadm initialization.|
|kubectl apply -f /opt/weave-kube.yaml||