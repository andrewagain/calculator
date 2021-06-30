pipeline {
  environment {
    registry = "minfy/sample-app"
    registryCredential = 'dockerhub'
    KUBECONFIG="$JENKINS_HOME/.kube/config2"
  }
  agent any
  stages {
    stage('Building image') {
      steps{
        sh "printenv"
        
        sh "docker build -t riteshk03/emoji-search:$BUILD_ID-$BRANCH_NAME ." 
       // sh "docker run -dp 80:80 riteshk03/emoji-search:$BUILD_ID"
        sh "docker push riteshk03/emoji-search:$BUILD_ID-$BRANCH_NAME"
      }
    }
    stage('Creating Deployment') {
      steps {
    
        sh  '''#!/bin/bash
                
                if [[ $GIT_BRANCH == "development" ]]
                then
                    kubectl set image deployment/jenkins-app nginx=riteshk03/emoji-search:$BUILD_ID-$BRANCH_NAME -n $BRANCH_NAME
                elif [[ $GIT_BRANCH == "testing" ]]
                then
                    kubectl set image deployment/jenkins-app nginx=riteshk03/emoji-search:$BUILD_ID-$BRANCH_NAME -n $BRANCH_NAME
                elif [[ $GIT_BRANCH == "master" ]]
                then
                    kubectl set image deployment/jenkins-app nginx=riteshk03/emoji-search:$BUILD_ID-$BRANCH_NAME -n production
                fi         
            '''
      }
    }

    stage('') {
      steps{
        sh '''
            kubectl get deployments -n $BRANCH_NAME
            kubectl get svc -n $BRANCH_NAME
            '''
      }
    }
    }
}
