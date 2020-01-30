pipeline {
  agent any
  stages {
    stage('Service Build') {
      steps {
        sleep 1
      }
    }

    stage('Build') {
      parallel {
        stage('API Build') {
          steps {
            sleep 1
          }
        }

        stage('Front Build') {
          steps {
            sleep 1
          }
        }

        stage('Mobile Build') {
          steps {
            sleep 1
          }
        }

        stage('Admin Build') {
          steps {
            sleep 1
          }
        }

      }
    }

    stage('Deploy') {
      steps {
        sleep 1
      }
    }

  }
}