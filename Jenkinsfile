pipeline {
    agent any

    tools {
        nodejs 'node18'
    }

    triggers {
        githubPush()
    }

    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/Ompokar/cypress-learning.git',
                    credentialsId: '4b0bad3c-77f4-431e-bc06-e1866c1fe0c6'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Run Cypress Tests') {
            steps {
                bat 'npm run test'
            }
        }
    }

    post {
        success {
            echo '✅ Build & Cypress tests passed!'
        }
        failure {
            echo '❌ Build or tests failed'
        }
    }
}
