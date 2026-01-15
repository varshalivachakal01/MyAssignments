/*
function launchBrowser(broswerName) {
   let c= typeof broswerName
   if (c==='string'){
    if (broswerName===`chrome`) {
      console.log("Browser name is", broswerName);  
    } else if (broswerName===`firefox`) {
      console.log("Browser name is", broswerName);
        
    } else if (broswerName===`edge`) {
      console.log("Browser name is", broswerName); 
    } else if (broswerName===`safari`) {
      console.log("Browser name is", broswerName); 
    } else {
        console.log(broswerName, "is not valid browser name");
        
    }
}
    else {
      console.log("Browser name", broswerName, "is not valid");
      
    }

}

launchBrowser(1)
*/


function runTests(testType) {

    let d =typeof testType
    console.log(d);
    
    if((d!=='string') || ((testType!=="sanity") && (testType!=="regression"))) {        
      testType ='smoke'
    }

    switch (testType) {
        case "sanity":
           console.log("Test Type is", testType); 
            break;
      case "regression":
           console.log("Test Type is", testType); 
            break;
        default:
            console.log("Default Test Type is Smoke", testType); 
            break;
    }
}

runTests(1)
