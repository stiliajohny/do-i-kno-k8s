const questions = [
    // Novice questions
    { text: "What is Kubernetes?", choices: ["A container orchestration platform", "A programming language", "A cloud service", "An operating system"], correct: 0 },
    { text: "Which company originally developed Kubernetes?", choices: ["Microsoft", "Google", "Amazon", "IBM"], correct: 1 },
    { text: "What is a Pod in Kubernetes?", choices: ["A single container", "A group of one or more containers", "A network policy", "A storage volume"], correct: 1 },
    { text: "Which command lists all pods in the default namespace?", choices: ["kubectl list pods", "kubectl get pods", "kubectl show pods", "kubectl describe pods"], correct: 1 },
    { text: "What does a Service in Kubernetes do?", choices: ["Manages storage volumes", "Exposes an application running on a set of Pods", "Manages secrets and configurations", "Handles logging"], correct: 1 },
    { text: "True or False: A Deployment in Kubernetes helps manage updates to an application.", choices: ["True", "False"], correct: 0 },
    { text: "Which component of Kubernetes is responsible for maintaining the desired state of objects?", choices: ["kubelet", "etcd", "kube-controller-manager", "kube-scheduler"], correct: 2 },
    { text: "What is Minikube?", choices: ["A Kubernetes management tool", "A command-line tool for Kubernetes", "A local Kubernetes cluster setup", "A cloud-based Kubernetes service"], correct: 2 },
    { text: "What file format is commonly used for Kubernetes manifests?", choices: ["JSON", "XML", "YAML", "INI"], correct: 2 },
    { text: "How do you access the Kubernetes dashboard?", choices: ["kubectl dashboard", "minikube dashboard", "kubectl get dashboard", "minikube get dashboard"], correct: 1 },
    { text: "What is the default namespace in Kubernetes?", choices: ["default", "kube-system", "kube-public", "namespace"], correct: 0 },
    { text: "True or False: A ConfigMap is used to manage configuration data in key-value pairs.", choices: ["True", "False"], correct: 0 },
    { text: "Which command is used to create a new namespace?", choices: ["kubectl create ns", "kubectl create namespace", "kubectl new namespace", "kubectl add ns"], correct: 1 },
    { text: "What is Helm in the context of Kubernetes?", choices: ["A security tool", "A logging tool", "A package manager", "A monitoring tool"], correct: 2 },
    { text: "Which command shows the details of a specific pod?", choices: ["kubectl get pod <pod-name>", "kubectl show pod <pod-name>", "kubectl describe pod <pod-name>", "kubectl details pod <pod-name>"], correct: 2 },
    { text: "True or False: In Kubernetes, a NodePort service exposes the service on a static port on each Node.", choices: ["True", "False"], correct: 0 },
    { text: "What is the purpose of a ReplicaSet?", choices: ["To manage storage volumes", "To ensure a specified number of pod replicas are running", "To handle network traffic", "To manage namespaces"], correct: 1 },
    { text: "Which Kubernetes object is used for stateful applications?", choices: ["Deployment", "StatefulSet", "ReplicaSet", "DaemonSet"], correct: 1 },
    { text: "How do you delete a namespace and all its resources?", choices: ["kubectl delete ns <namespace>", "kubectl remove ns <namespace>", "kubectl delete namespace <namespace>", "kubectl destroy namespace <namespace>"], correct: 2 },
    { text: "What is kubectl?", choices: ["A command-line interface for running commands against Kubernetes clusters", "A Kubernetes dashboard", "A Kubernetes API server", "A Kubernetes node agent"], correct: 0 },
    
    // Intermediate questions
    { text: "Which storage type is persistent in Kubernetes?", choices: ["ConfigMap", "Secret", "PersistentVolume", "EmptyDir"], correct: 2 },
    { text: "How do you scale a deployment to 3 replicas?", choices: ["kubectl scale deployment <deployment-name> --replicas=3", "kubectl set replicas <deployment-name> 3", "kubectl resize deployment <deployment-name> --replicas=3", "kubectl update deployment <deployment-name> --replicas=3"], correct: 0 },
    { text: "True or False: A DaemonSet ensures that all nodes run a copy of a Pod.", choices: ["True", "False"], correct: 0 },
    { text: "Which command applies a configuration change to a resource by filename?", choices: ["kubectl change -f <filename>", "kubectl apply -f <filename>", "kubectl update -f <filename>", "kubectl set -f <filename>"], correct: 1 },
    { text: "What is the role of the kube-apiserver?", choices: ["To maintain the desired state of the cluster", "To schedule pods to nodes", "To expose the Kubernetes API", "To manage network traffic"], correct: 2 },
    { text: "How can you view the logs of a pod?", choices: ["kubectl logs <pod-name>", "kubectl view logs <pod-name>", "kubectl get logs <pod-name>", "kubectl describe logs <pod-name>"], correct: 0 },
    { text: "Which component of Kubernetes schedules pods to nodes?", choices: ["kubelet", "kube-proxy", "kube-scheduler", "kube-controller-manager"], correct: 2 },
    { text: "What is the purpose of a Kubernetes Ingress?", choices: ["To manage secrets", "To expose HTTP and HTTPS routes to services", "To manage storage volumes", "To schedule pods"], correct: 1 },
    { text: "Which command creates a new deployment?", choices: ["kubectl run deployment <deployment-name> --image=<image>", "kubectl create deployment <deployment-name> --image=<image>", "kubectl new deployment <deployment-name> --image=<image>", "kubectl apply deployment <deployment-name> --image=<image>"], correct: 1 },
    { text: "What does the kubelet do?", choices: ["Exposes the Kubernetes API", "Manages network policies", "Ensures containers are running in a pod", "Schedules pods to nodes"], correct: 2 },
    { text: "True or False: A ServiceAccount in Kubernetes provides an identity for processes that run in a Pod.", choices: ["True", "False"], correct: 0 },
    { text: "Which Kubernetes object is used to configure access to external resources like databases?", choices: ["Secret", "ConfigMap", "Endpoint", "PersistentVolume"], correct: 0 },
    { text: "How do you view the current context of kubectl?", choices: ["kubectl current-context", "kubectl get context", "kubectl config current-context", "kubectl view context"], correct: 2 },
    { text: "Which resource defines a set of network access rules for pods?", choices: ["NetworkPolicy", "Service", "Endpoint", "ConfigMap"], correct: 0 },
    { text: "What does kubectl exec do?", choices: ["Executes a command inside a container", "Displays the status of a container", "Scales a deployment", "Deletes a pod"], correct: 0 },
    { text: "Which Kubernetes component is responsible for network proxy and load balancing?", choices: ["kubelet", "kube-proxy", "kube-scheduler", "kube-controller-manager"], correct: 1 },
    { text: "True or False: A StatefulSet provides unique network identifiers for pods.", choices: ["True", "False"], correct: 0 },
    { text: "Which resource would you use to store sensitive information like passwords in Kubernetes?", choices: ["ConfigMap", "Secret", "PersistentVolume", "Service"], correct: 1 },
    { text: "How do you update the image of a running deployment?", choices: ["kubectl set image deployment/<deployment-name> <container-name>=<new-image>", "kubectl update deployment/<deployment-name> --image=<new-image>", "kubectl apply deployment/<deployment-name> --image=<new-image>", "kubectl change image deployment/<deployment-name> --image=<new-image>"], correct: 0 },
    { text: "Which command deletes a pod?", choices: ["kubectl delete pod <pod-name>", "kubectl remove pod <pod-name>", "kubectl destroy pod <pod-name>", "kubectl drop pod <pod-name>"], correct: 0 },
    
    // Advanced questions
    { text: "What is the role of etcd in a Kubernetes cluster?", choices: ["Scheduling pods to nodes", "Storing all cluster data", "Exposing the Kubernetes API", "Managing network policies"], correct: 1 },
    { text: "How do you roll back a deployment to a previous revision?", choices: ["kubectl rollout undo deployment/<deployment-name>", "kubectl rollback deployment/<deployment-name>", "kubectl revert deployment/<deployment-name>", "kubectl undo deployment/<deployment-name>"], correct: 0 },
    { text: "True or False: A PersistentVolumeClaim binds to a PersistentVolume and provides storage to a pod.", choices: ["True", "False"], correct: 0 },
    { text: "Which resource allows you to define custom application metrics in Kubernetes?", choices: ["HorizontalPodAutoscaler", "CustomResourceDefinition", "ConfigMap", "Secret"], correct: 1 },
    { text: "What is the main purpose of a CustomResourceDefinition (CRD)?", choices: ["To create custom storage volumes", "To define custom resources", "To manage network policies", "To schedule pods"], correct: 1 },
    { text: "How do you create a ResourceQuota?", choices: ["kubectl apply -f <filename>", "kubectl create quota <quota-name>", "kubectl set quota <quota-name>", "kubectl add quota <quota-name>"], correct: 0 },
    { text: "What is the purpose of the kube-controller-manager?", choices: ["To schedule pods to nodes", "To expose the Kubernetes API", "To run controllers that manage the state of the cluster", "To manage network policies"], correct: 2 },
    { text: "True or False: A HorizontalPodAutoscaler automatically scales the number of pods based on observed CPU utilization.", choices: ["True", "False"], correct: 0 },
    { text: "Which resource provides DNS names for Kubernetes services?", choices: ["Endpoint", "Service", "Ingress", "NetworkPolicy"], correct: 1 },
    { text: "How do you apply a new configuration to an existing resource?", choices: ["kubectl apply -f <filename>", "kubectl create -f <filename>", "kubectl set -f <filename>", "kubectl update -f <filename>"], correct: 0 }
];

let currentQuestionIndex = 0;
let score = 0;
const quizDiv = document.getElementById("quiz");
const resultDiv = document.getElementById("result");
const questionCounterDiv = document.getElementById("questionCounter");

function displayQuestion() {
    if (currentQuestionIndex < questions.length) {
        const question = questions[currentQuestionIndex];
        quizDiv.innerHTML = `
            <div class="flex flex-col justify-between h-full mb-4 p-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg shadow-xl">
                <div class="mb-6">
                    <div class="text-xl font-bold text-yellow-300">${question.text}</div>
                    <div class="mt-4">
                        ${question.choices.map((choice, index) => `
                            <button onclick="checkAnswer(${index})" class="block w-full bg-green-400 text-white rounded mt-2 p-2 hover:bg-green-600 transition duration-300 ease-in-out transform hover:-translate-y-1">
                                ${choice}
                            </button>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
        
        const progressPercent = ((currentQuestionIndex + 1) / questions.length) * 100;
        questionCounterDiv.innerHTML = `
            <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mt-2">
                <div class="bg-purple-600 h-2.5 rounded-full" style="width: ${progressPercent}%"></div>
            </div>
        `;
    } else {
        showResult();
    }
}

function checkAnswer(selectedIndex) {
    const question = questions[currentQuestionIndex];
    if (selectedIndex === question.correct) {
        score++;
    }
    currentQuestionIndex++;
    displayQuestion();
}

function showResult() {
    const percentage = (score / questions.length) * 100;
    let knowledgeLevel = '';

    if (percentage >= 80) {
        knowledgeLevel = 'Advanced';
    } else if (percentage >= 50) {
        knowledgeLevel = 'Intermediate';
    } else {
        knowledgeLevel = 'Novice';
    }

    resultDiv.innerHTML = `
        <h2 class="text-3xl font-bold">Your Score: ${score} / ${questions.length}</h2>
        <p class="text-xl mt-4">Knowledge Level: ${knowledgeLevel}</p>
    `;
}

displayQuestion();
