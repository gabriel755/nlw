def gv
pipeline{
    agent any 


    stages{
        stage("buildApp"){
            script{
                gv == load "groovy/build.groovy"
            }
        }
        
        stage("testApp"){
            script{
                gv == load "groovy/test.groovy"
            }
        }

        stage("containerRegistry"){
            script {
                gv == load "groovy/registry.groovy"
            }
        }
        stage("deployApp"){
            script {
                gv == load "groovy/deploy.groovy"
            }
        }






}