pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Git repository-dan kodni olish
                git 'https://github.com/abdinazarov7799/barterly-frontend.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                // Zaruriy paketlarni o'rnatish
                sh 'npm install'
            }
        }

        stage('Run Development Server') {
            steps {
                // Loyihani ishga tushirish
                sh 'npm run dev'
            }
        }
    }

    post {
        always {
            // Builddan so'ng ish joyini tozalash
            cleanWs()
        }

        success {
            // Yaxshi ish holati uchun xabar yuborish
            echo 'Build succeeded!'
        }

        failure {
            // Xato yuzaga kelganida xabar yuborish
            echo 'Build failed!'
        }
    }
}
