function numero(n){

n1=[];
var n2,suma,promedio;


for(var i=0; i<10; i++){

    listLetters.unshift(i);
    n1=listLetters.unshift(i);
    i++;
}

for(var i=0; i<10; i++){

    listLetters.unshift(i);
    n2=listLetters.unshift(i);
    suma=suma+n2;
    i++;

}
promedio=suma/10;
console.log("suma de todos los elementos"+suma);
console.log("promedio de todos los elementos"+promedio);

return n1;
} 