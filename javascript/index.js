let codigo = parseInt(prompt("Ingrese 0 para entrar al programa"));
let total = 0;
let cuenta = 0;
function Tcuentadiv (personas) {
    cantporperso = cuenta / personas;
    alert("Cada uno tiene que pagar $" + cantporperso);
};
while(codigo == 0) {
    let cuentaC = 0;
    let cuentaB = 0;
    let cuentaG = 0;
    let comidas = parseInt(prompt("Que desea pedir? ingresar el codigo comidas"));

    if (comidas != 5) {

        while (comidas < 5) {
            switch (comidas) {
                case 1:
                    cuentaC = cuentaC + 10;
                    alert("Pidio una hamburguesa");
                    break;
                case 2 :
                    cuentaC = cuentaC + 8;
                    alert("Pidio una pizza");
                    break;
                case 3 :
                    cuentaC = cuentaC + 15;
                    alert("Pidio una pasta");
                    break;
                default:
                    alert("No pidio comida");
                    break;
            }
            break
        }
        alert("Cuesta: $" + cuentaC)
        let bebidas = parseInt(prompt("ingresar el codigo bebidas"));

            if (bebidas != 5) {

                while (bebidas < 5) {
                    switch (bebidas) {
                        case 1:
                            cuentaB = cuentaB + 5;
                            alert("Pidio una agua");
                            break;
                        case 2 :
                            cuentaB = cuentaB + 6;
                            alert("Pidio una jugo");
                            break;       
                        case 3 :
                            cuentaB = cuentaB + 6;
                            alert("Pidio una gaseosa");
                            break;       
                        default:
                            alert("No pidio bebida");
                            break;
                    }
                    break
                }
                alert("Cuesta: $" + cuentaB)
                let guarnicion = parseInt(prompt("ingresar el codigo guarnicion"));

                    if (guarnicion != 5) {

                        while (guarnicion < 5) {
                            switch (guarnicion) {
                                case 1:
                                    cuentaG = cuentaG + 8;
                                    alert("Pidio unas papas frita");
                                    break;
                                case 2 :
                                    cuentaG = cuentaG + 8;
                                    alert("Pidio un pure de papa");
                                    break;
                                case 3 :
                                    cuentaG = cuentaG + 6;
                                    alert("Pidio una ensalada");
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
    total = cuentaB + cuentaC + cuentaG;
    cuenta = cuenta + total;
    alert("el total es de: $" + total);
    let codigo = parseInt(prompt("aprete 0 para seguir pidiendo"));
    if (codigo != 0){
        break;
    };
};
alert("Termino el pedido la cuenta es de: $"+ cuenta + " quiere dividir la cuenta?");

let divcuenta = parseInt(prompt("si quiere dividir la cuenta ingrese 0"));
if (divcuenta == 0) {
    let personas = parseInt(prompt("cantidad de personas"));
    Tcuentadiv(personas);
};
