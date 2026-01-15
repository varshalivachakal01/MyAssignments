let genderType="female"

function printGender() {
    let color="brown"

    if (genderType.startsWith("female")) {
        var age = 30
        let  color = "pink"
        console.log("Color inside if block", color);
          console.log("Age inside if block", age);
    }

    console.log("Age outside if block but inside function", age);
     console.log("Color outside if block but inside function", color);
}

printGender()
console.log(genderType);
 //console.log("Color outside of function", color);
  //console.log("Age outside of function", age);

