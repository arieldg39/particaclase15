function verLista(lista){
    const lacteo="yogurt";
    var a =1;
    for (let i = 0; i < lista.length; i++) {
        const element = lista[i]
        if(element===lacteo)
        {
            console.log("Tenes un Lacteo en tu Lista de Compra - Intem -> "+a);
        }
        a++;
    }    
    
}

const lista = []
lista.push(prompt("Ingrear Articulo para Comprar"));
lista.push(prompt("Ingrear Articulo para Comprar"));
lista.push(prompt("Ingrear Articulo para Comprar"));

verLista(lista);

