pipeline {
  agent any
  stages {
    stage('Install dependencies ') {
      steps {
        sh '''npm install
'''
      }
    }

    stage('Run Unit Tests') {
      steps {
        sh 'npm test utils.test.js'
      }
    }

  }
}