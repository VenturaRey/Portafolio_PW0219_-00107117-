function numero(n){

array=[1,2,3,4,5];
array1=[];

for(var i=0; i<4;i++){
    for(var j=1;j<4;j++){

        array1[i]=array[i]+array[j];

    }
}

for(var i=0; i<4; i++){

console.log(array1[i]);

}


return array1;

}