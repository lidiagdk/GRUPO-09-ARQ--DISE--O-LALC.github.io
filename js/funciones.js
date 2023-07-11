//Funciones

//Funcion declarada

const Array = ["", "","AMBA", "","", "","AMBA", "","", "","NORTE", "","", "","CENTRO", "","", "","CORRIENTES", "","", "","", "","", "","", "","", "","", ""];


const zonas = [
    {prov: "02", zona: "AMBA"},
    {prov: "06", zona: "AMBA"},
    {prov: "54", zona: "LITORAL"}
];
function buscaZona(zonas) {
    return zonas.prov === {idProvincia};
}
const zonaok = zonas.find( zonas => zonas.prov === idProvincia );
console.log(zonaok); 

function muestraalerta() {
   return `Lo contactaremos a la brevedad`;
 
}