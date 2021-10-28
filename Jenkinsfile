pipeline {
  agent { docker { image 'node:14-alpine' } }
  stages {
    stage('Run Unit tests') {
      steps {
        sh 'npm test '
      }
    }

  }
}