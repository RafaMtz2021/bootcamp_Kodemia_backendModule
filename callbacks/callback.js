const revertirString = (string) =>{
    let result = '';
    const fin = string.length - 1;

    for(let j=fin;j>=0;j--){
        result += string[j];
    }
    console.log(result);
}
revertirString('Bienvenidos');