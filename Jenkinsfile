pipeline {
    agent any
    stages{
        
stage('build') {
               
              docker.build("akib123/node-app1:v1.0")
                 }
        

        stage('deploy') {
            steps{
               sshagent(credentials: ['illusion']) {
               sh 'ssh illusion@172.17.0.1 "ls -l"'
               //sh 'ssh illusion@172.17.0.1 "minikube start -p node"'
               sh 'ssh illusion@172.17.0.1 "minikube kubectl -- get pods "'


    }
            }
        }



    }
}