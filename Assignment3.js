function oddnumber(){
    let result=""
    for(let i=0;i<=25;i++){
        if(i%2!==0){
            result +=i+" "
            
        }   
    }
    console.log(result,"are the oddnumbers between 1 and 25")
}
oddnumber()