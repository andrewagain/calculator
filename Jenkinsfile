pipeline {
    agent {
	docker { image 'node:lts-alpine' }
	args '-u node'
    }

    stages {
        stage('Build') {
            steps {
		sh 'yarn'
            }
        }
        stage('Test') {
            steps {
                sh 'yarn test --watchAll=false'
            }
        }
        stage('Done') {
            steps {
                echo 'All tests have passed.'
            }
        }
    }
}
