const buttonClick = document.getElementById('btn');
const matriz1 = document.querySelector('#A');
const matriz2 = document.querySelector('#B');
const respuesta = document.querySelector('#R');
const cleanClick = document.querySelector('#cleanBTN')

buttonClick.addEventListener('click', actionButton);
cleanClick.addEventListener('click', cleanButton);

function cleanButton(){
    matriz1.value="";
    matriz2.value="";
    respuesta.value="";
}
function actionButton(){
        const valor1 = listenClickBtn(matriz1.value)
        const valor2 = listenClickBtn(matriz2.value)
        
        fila_m1 = valor1.length;
        col_m1 = valor1[0].length;

        fila_m2 = valor2.length;
        col_m2 = valor2[0].length;

        let resultado = new Array(fila_m1);

        if(col_m1 != fila_m2){
            window.alert("No puede hacer la multiplicacion.");
        }else{
            for(let n = 0; n < resultado.length; n++){
                resultado[n] = new Array(col_m2).fill(0);
            }

            for(let i = 0; i < resultado.length; i++){
                for(let j = 0; j < resultado[i].length; j++){
                    for(let k = 0; k < col_m1; k++)[
                        resultado [i][j] += valor1[i][k]*valor2[k][j]
                    ]
                }
            }
            
            for(let i=0;i<fila_m1;i++){
    
                for (let j=0;j<col_m2;j++){
                    respuesta.value+= resultado [i][j]+" "
                   
                }
                respuesta.value+="\n";
                }
            }
        }

    function listenClickBtn(matriz){
     let num= ""
     let arregloAux = [];
     let arreglo = [];


     for (let i=0; i < matriz.length; i++){
        if(matriz[i]=="\n"){
            arregloAux.push(num)
            arreglo.push(arregloAux);
            arregloAux = []
            num= ""
        }else if(i==matriz.length-1){
            num = num.concat(matriz[i])
            arregloAux.push(num)
            arreglo.push(arregloAux)
        }else if(matriz[i]!==","){
            num = num.concat(matriz[i])
        }else if(matriz[i] ==","){
            arregloAux.push(num)
            num=""
        } 
    }
    return arreglo
} 
