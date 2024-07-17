pipeline {
    agent any
        //stage('Checkout') {
        //    steps {
                // Checkout code from the repository
        //        git 'https://github.com/your-username/your-vite-project.git'
        //    }
        //}

        stage('Install Dependencies and run') {
            steps {
                // Install project dependencies
                sh 'npm install'
                sh 'npm run dev'
            }
        }

    post {
        always {
            // Clean workspace after the build
            cleanWs()
        }

        success {
            // Notify on success (e.g., send an email or a Slack message)
            echo ' succeeded!'
        }

        failure {
            // Notify on failure (e.g., send an email or a Slack message)
            echo ' failed!'
        }
    }
}