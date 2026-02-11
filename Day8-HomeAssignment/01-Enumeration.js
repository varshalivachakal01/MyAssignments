var Environment;
(function (Environment) {
    Environment["LOCAL"] = "LOCAL";
    Environment["DEVELOPMENT"] = "DEVELOPMENT";
    Environment["STAGING"] = "STAGING";
    Environment["PRODUCTION"] = "PRODUCTION";
})(Environment || (Environment = {}));
function runTests(env) {
    if (!Object.values(Environment).includes(env)) { //To verify invalid input envinorment mentioned
        console.error("Invalid environment specified.");
        return;
    }
    console.log("Envinorment in which tests are running is ".concat(env)); //To print envinorment enum
    return;
}
runTests(Environment.LOCAL);
runTests(Environment.DEVELOPMENT);
runTests(Environment.PRODUCTION);
runTests(Environment.LOCAL);
runTests(Environment.STAGING);
runTests("InvalidEnv"); // invalue enum value
