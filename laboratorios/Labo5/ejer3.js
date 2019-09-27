function numero(n){

var n=1,numeroaleatorio;
array=[];
validacion=false;


for(var i=0; i<10; i++){

    numeroaleatorio=(Math .floor(Math.random()*100)+1)
    array.push(numeroaleatorio);
    
    }

for(var i=0; i<10; i++){

if(n===array[i]){

console.log("EL numero coincide"+n+arry[i]);
validacion=true;

}
}

if(validacion===false){
console.log("El numero no coincide");
}

return array;

}