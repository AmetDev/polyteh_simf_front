pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git url: 'https://github.com/AmetDev/polyteh_simf_front.git', branch: 'main'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

       stage('Restart with PM2') {
            steps {
                sh '''
                    sudo pm2 stop npm || true
                    sudo pm2 delete npm || true
                    sudo pm2 start npm -- start
                '''
            }
       }
    }
}
