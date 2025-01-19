pipeline {
    agent any

    environment {
        NODE_ENV = 'production'
    }

    tools {
        nodejs 'NodeJS-20' // Use the Node.js version configured in Jenkins
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'jenkins', url: 'https://github.com/cloudinator25/basic-next.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install --force' // or 'yarn install'
            }
        }

    }

    post {
        success {
            echo 'Build, test, and deploy completed successfully!'
        }
        failure {
            echo 'Pipeline failed. Check the logs for details.'
        }
        always {
            archiveArtifacts artifacts: '**/logs/*.log', allowEmptyArchive: true
        }
    }
}

