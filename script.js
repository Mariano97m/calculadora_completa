const CALCULAR = document.getElementById('calcular');
const ERROR = document.getElementById('error');
const FLU = document.getElementById('flu');
const MAN = document.getElementById('man');
const VOL = document.getElementById('vol');
//AGREGADO
const VOL2 = document.getElementById('vol2');

CALCULAR.addEventListener('click', () => {
    const DATO = document.getElementById('peso').value
    
    if (DATO > 0){
        if (DATO <=30){
            ERROR.style.display = 'none'
            let flujo = calcFlujo(DATO);
            let mant = /*Math.round()*/flujo*1.5;
            let mannt = Math.round(mant); console.log(mant);
            //--------------
            let fluj = Math.round(flujo)
            FLU.innerHTML = fluj + ' cc/hr';
            MAN.innerHTML = 'm+m/2 ' + mannt + ' cc/hr';
            //AGREADO
             let resultado = flujo;
            VOL.innerHTML = "Volumen diario: " + resultado*24 + " cc/d"
            VOL.style.display = "block"

            FLU.style.display = 'block';
            MAN.style.display = 'block';
            VOL2.style.display = "none"
            } else if (DATO > 30){
            ERROR.style.display = 'none'
            let flujo = calcFlujo(DATO);
            let resultado = flujo;

            VOL.innerHTML = "Volumen diario SC * 1500: " + Math.round(resultado*1500)  + " cc"
            VOL2.innerHTML = "Volumen diario SC * 2000: " + Math.round(resultado*2000) + " cc"

            VOL.style.display = "block"
            VOL2.style.display = "block"

            FLU.style.display = 'none';
            MAN.style.display = 'none';
        } 

        } else {
        ERROR.style.display = 'block';
        FLU.style.display = 'none';
        MAN.style.display = 'none';
        //AGREADO
        VOL.style.display = "none"
        VOL2.style.display = "none"
    }

})

function calcFlujo(peso){
        kilos = peso;
        let flujo = 0;
        let aux = 0;
        let aux2 = 0;
        let aux3 = 0;
        let aux4 = 0

        if (kilos > 0 && kilos <=10){
             aux= 100*kilos;
            resultado = aux;
            flujo = aux/24;
            

            return flujo;

        }
        if (kilos > 10 && kilos <=30){
            if (kilos > 10 && kilos <=20){
                aux = 1000;
                aux2 = kilos - 10;
                aux3 = aux2*50 + aux;
                flujo = aux3/24;
                return flujo;
            } 
            else if (kilos > 21 && kilos <=30){
            aux = 1000;
            aux2 = 500;
            aux3 = kilos - 20;
            aux4 = aux3*20 + aux + aux2;
            flujo = aux4/24;
            return flujo;
            } 
        
        }
        if (kilos > 30){
            aux = kilos*4 + 7;
            console.log(aux);
            aux2 = kilos*1 + 90;
            console.log(aux2)
            flujo = aux/aux2; 
            console.log(flujo);
            return flujo
        }

    
    }