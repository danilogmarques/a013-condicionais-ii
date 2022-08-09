const num =  Number(prompt ("escolha um número"))

//parte 1
if(num % 2 === 0){
    console.log("seu núumero é divisivel por 2")}
    
    if(num % 3 === 0){
       console.log("seu número é divisivel por por 3")}   

//parte 2
if(num % 2 === 0 && num % 3 === 0){
    console.log(" seu número é divisivel por 2 ou por 3")
}else{
    console.log("se número não é divisivel nem por 2 nem por 3")
}