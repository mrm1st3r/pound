properties properties: [
    [$class: 'BuildDiscarderProperty', strategy: [$class: 'LogRotator', artifactDaysToKeepStr: '', artifactNumToKeepStr: '', daysToKeepStr: '30', numToKeepStr: '10']],
    disableConcurrentBuilds()
]

@Library('holisticon-build-library')
def maven = new de.holisticon.ci.jenkins.Maven()

timeout(60) {
  node {
    def buildNumber = env.BUILD_NUMBER
    def branchName = env.BRANCH_NAME
    def workspace = env.WORKSPACE
    def buildUrl = env.BUILD_URL

    try {

      // PRINT ENVIRONMENT TO JOB
      echo "workspace directory is $workspace"
      echo "build URL is $buildUrl"
      echo "build Number is $buildNumber"
      echo "branch name is $branchName"
      echo "PATH is $env.PATH"

      stage('Checkout') {
        checkout scm
      }

      stage('Build') {
        def appVersion = maven.getProjectVersion()
        echo "Building version $appVersion"
        sh "./mvnw clean package"
        archiveArtifacts artifacts: '**/target/*.jar'
      }

      stage('Unit-Tests') {
        sh "./mvnw verify -Dmaven.test.failure.ignore"
      }

      stage('Backend I-Tests') {
        sh "./mvnw verify -Pitest -Dmaven.test.failure.ignore -DskipFrontend"
      }

    } catch (e) {
      rocketSend channel: 'holi-demos', emoji: ':rotating_light:', message: 'Fehler'
      throw e
    } finally {
      junit healthScaleFactor: 1.0, testResults: '*/target/surefire-reports/TEST*.xml'
      jacoco sourcePattern: '**/src/main/java, **/src/main/kotlin'
    }
  }
}
