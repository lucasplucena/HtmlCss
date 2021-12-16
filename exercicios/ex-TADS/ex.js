function media(){
    let a=0, total=0;
    if (arguments[a]==null){
        console.log("Vc nao entrou com nenhum número");
    }
    else{
        while(a < arguments.length){
            total+=arguments[a];
            a++;
        }
    }
    console.log(`O total é ${total/arguments.length}`);
}