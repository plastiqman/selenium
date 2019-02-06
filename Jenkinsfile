pipeline {
  agent any
  stages {
    stage('Install npm') {
      steps {
        sh 'node --version'
        sh 'npm --version'
        sh 'npm install'
      }
    }
    stage('Test') {
      steps {
        sh 'npm run test-google'
      }
    }
  }
}