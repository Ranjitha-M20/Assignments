let genderType="female"
function printGender(){
    let color="brown"
    if(genderType==="female"){
        var age=30;
        let color="pink";
        console.log("The color inside the block:",color)
    }
    console.log("The color outside the block:",color)
    console.log("Age is",age)
}

printGender()
console.log(genderType)
genderType="male"
console.log(genderType)