pipeline {
  agent any
  stages {
    stage('Install npm') {
      steps {
        sh 'node --version'
        sh 'npm --version'
        sh '/usr/local/bin/npm install'
      }
    }
    stage('Test') {
      steps {
        sh 'npm --version'
      }
    }
  }
}