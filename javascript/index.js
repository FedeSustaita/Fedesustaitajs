let totalC = 0 
let totalS = 0 
let total = 0 
let pedidos=[]
class combos{   //class para crear cada uno de los combos 
    constructor(combo,comida, bebida, guarnicio, precio){
    this.combo=combo;
    this.comida=comida;
    this.bebida=bebida;
    this.guarnicio=guarnicio;
    this.precio=precio;
    }
}
const combo1 = new combos(
    1,
    "hamburguesa",
    "gaseosa",
    "papas",
    24
); 
console.log(combo1);

const combo2 = new combos(
    2,
    "pasta",
    "agua",
    "nada",
    20
); 
console.log(combo2);

const combo3 = new combos(
    3,
    "pizza",
    "jugo",
    "nada",
    14
); 
console.log(combo3);

const combo4 = new combos(
    4,
    "hamburguesa",
    "jugo",
    "ensalada",
    22
); 
console.log(combo4)

const codigo = parseInt(prompt("ingresar 1 para entrar en el programa"))
while (codigo == 1) {   //ciclo while para ingresar en el programa
    let precio = 0
    const codigoCYS = parseInt(prompt("ingresar 1 para pedir combos y 0 para pedir por separados"))
    if (codigoCYS==1) {     //ciclo if para ver si ingresa al pedido de combos o por separados
        
    const Ccombo = parseInt(prompt("ingresar codigo del combo")) 
    if (Ccombo>0 && Ccombo<5) {     //ciclo if para ver que ingrese los codigos correspondientes
    while (Ccombo>0 && Ccombo<5) {  //ciclo while con switch para diferenciar cada combo
        switch (Ccombo) {
            case 1:
                precio = precio + 24
                pedidos.push("Combo1 $24")
                console.log("Pidio el combo 1 ");
                break;
            case 2:
                precio = precio + 20
                pedidos.push("Combo2 $20")
                console.log("Pidio el combo 2 ");
                break;
            case 3:
                precio = precio + 14
                pedidos.push("Combo3 $14")
                console.log("Pidio el combo 3 ");
                break;
            case 4:
                precio = precio + 22
                pedidos.push("Combo4 $22")
                console.log("Pidio el combo 4 ");
                break;
        
            default:
                break;
        }
        console.log( "paga "+ precio);
        break;
    }
}

    totalC = totalC + precio    //total de los productos por combo
    total= total + totalC   //suma del total con el productos por combo
    }

    else if(codigoCYS == 0){
        let cuentaC = 0;
        let cuentaB = 0;
        let cuentaG = 0;
        let comidas = parseInt(prompt("Que desea pedir? ingresar el codigo comidas"));
    
        if (comidas != 5 && comidas > 0) { //ciclo if para ver que ingrese bien los codigos de los alimentos
    
            while (comidas < 5 && comidas > 0) {    //ciclo while con switch para diferenciar cada uno de los distintos alimentos
                switch (comidas) {
                    case 1:
                        cuentaC = cuentaC + 10;
                        pedidos.push("Hamburguesa $10")
                        console.log("Pidio una hamburguesa");
                        break;
                    case 2 :
                        cuentaC = cuentaC + 8;
                        pedidos.push("Pizza $8")
                        console.log("Pidio una pizza");
                        break;
                    case 3 :
                        cuentaC = cuentaC + 15;
                        pedidos.push("Pasta $15")
                        console.log("Pidio una pasta");
                        break;
                    default:
                        alert("No pidio comida");
                        break;
                }
                break;
            }
            alert("Cuesta: $" + cuentaC)
            let bebidas = parseInt(prompt("ingresar el codigo bebidas"));
    
                if (bebidas != 5 && bebidas > 0) {  //ciclo if para ver que ingrese bien los codigos de los alimentos
    
                    while (bebidas < 5 && bebidas > 0) {    //ciclo while con switch para diferenciar cada uno de los distintos alimentos
                        switch (bebidas) {
                            case 1:
                                cuentaB = cuentaB + 5;
                                pedidos.push("Agua $5")
                                console.log("Pidio una pizza");
                                break;
                            case 2 :
                                cuentaB = cuentaB + 6;
                                pedidos.push("Jugo $6")
                                console.log("Pidio una jugo");
                                break;       
                            case 3 :
                                cuentaB = cuentaB + 6;
                                pedidos.push("Gaseosa $6")
                                console.log("Pidio una gaseosa");
                                break;       
                            default:
                                alert("No pidio bebida");
                                break;
                        }
                        break
                    }
                    alert("Cuesta: $" + cuentaB)
                    let guarnicion = parseInt(prompt("ingresar el codigo guarnicion"));
    
                        if (guarnicion != 5 && guarnicion > 0) {    //ciclo if para ver que ingrese bien los codigos de los alimentos
    
                            while (guarnicion < 5 && guarnicion > 0) {  //ciclo while con switch para diferenciar cada uno de los distintos alimentos
                                switch (guarnicion) {
                                    case 1:
                                        cuentaG = cuentaG + 8;
                                        pedidos.push("Papas Fritas $8")
                                        console.log("Pidio una Papas frita");
                                        break;
                                    case 2 :
                                        cuentaG = cuentaG + 8;
                                        pedidos.push("Pure de papa $8")
                                        console.log("Pidio un pure de papa");
                                        break;
                                    case 3 :
                                        cuentaG = cuentaG + 6;
                                        pedidos.push("Ensalada $6")
                                        console.log("Pidio una ensalada");
                                        break;
                                    default:
                                        alert("No pidio guarnicion");
                                        break;
                                }
                                break;
                            }
                            alert("Cuesta: $" + cuentaG);
                        } 
                        else{
                            alert("ERROR al ingresar codigo");
                        }      
                } 
                else {
                    alert("ERROR al ingresar codigo");
                }   
        } 
        else {
            alert("ERROR al ingresar codigo");
        }
        totalS = totalS +cuentaB + cuentaC + cuentaG;    //total de los productos por separado
        total= total + totalS   //suma del total con el productos por separados
    }   //Fin del Ciclo

    const codigo = parseInt(prompt("ingresar 1 para seguir pidiendo")) 
    if(codigo != 1){
        break;
    }
}   //Fin del Ciclo 

pedidos.sort()   //.sort para organizar los pedidos en orden alfabetico
console.log(pedidos);

for(const recorrido of pedidos){    //ciclo for para agregar los productos elegidos a un ticket
    let ubicacion = document.getElementById("ticket")
    let li = document.createElement("li")
    li.innerHTML = recorrido
    ubicacion.append(li)
};

let totall = document.getElementById("totall")  //para escribir el total al final del ticket
totall.innerText = "Total:"+ total

const dividirC = parseInt(prompt("si quiere dividir la cuenta aprete 1"))
if (dividirC == 1) {    //para dividir la cuenta en caso de que sean varias personas
    const cantidadP = parseInt(prompt("ingrese la cantidad de personas"))
    const division = total/cantidadP
    console.log("El monto a pagar por cada uno es " + division);
}
