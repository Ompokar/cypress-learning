pipeline {
    agent any

    options {
        // This fixes the [90m and [39m scrambled color codes in logs
        ansiColor('xterm') 
    }

    environment {
        // This fixes the symbols like â™‚ by forcing UTF-8 encoding on Windows
        JAVA_TOOL_OPTIONS = '-Dfile.encoding=UTF-8'
    }

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
                bat 'set NO_COLOR=1 && npm run test'
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