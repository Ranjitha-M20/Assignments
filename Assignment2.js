const browserName="Chrome"
function getBrowserName(){
    if(browserName==="Chrome"){
        let browserName="Firefox"
        console.log("Inside block:",browserName)
    }
    console.log("outside block:",browserName)
}
getBrowserName()