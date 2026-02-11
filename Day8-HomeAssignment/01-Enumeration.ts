enum Environment{//creating enum

LOCAL="LOCAL", 
DEVELOPMENT="DEVELOPMENT", 
STAGING="STAGING", 
PRODUCTION="PRODUCTION"

}



function runTests(env:Environment) {
    if (!Object.values(Environment).includes(env)) {//To verify invalid input envinorment mentioned
        console.error("Invalid environment specified.");
        return;
    }
 console.log(`Envinorment in which tests are running is ${env}`); //To print envinorment enum
    return
}

runTests(Environment.LOCAL)//Envinorment in which tests are running is LOCAL
runTests(Environment.DEVELOPMENT)//Envinorment in which tests are running is DEVELOPMENT
runTests(Environment.PRODUCTION)//Envinorment in which tests are running is PRODUCTION
runTests(Environment.LOCAL)//Envinorment in which tests are running is LOCAL
runTests(Environment.STAGING)//Envinorment in which tests are running is STAGING
runTests("InvalidEnv" as  Environment)// Invalid environment specified.