import * as RLS from "readline-sync";
import * as FS from "fs";
export default class Mayormenor{
    private estado:boolean;
    public constructor(estado:boolean){   
        this.estado=estado;
    }
    public getEstado():void{
            if (this.estado){
               this.estado=false;
            }else{
                this.estado=true;
            }
    }
    public getTirarCartas():void{
        let tirarCarta:string=RLS.question("Ingrese 0 para tirar una carta, x para finalizar: ");
        let sumaAciertos:number=0;
        while(tirarCarta!="x"){
        let cartaElegida=this.getAleatorio(1,12);
        console.log(cartaElegida);
        let respuestaJugador=RLS.question(`Apuesta por mayor(+) o menor(-) a ${cartaElegida}?: `);
        switch(respuestaJugador){
            case"+":{
                let cartaAComparar:number=this.getAleatorio(1,12);
                if(cartaAComparar>cartaElegida){
                    sumaAciertos++;
                    console.log(`salio [${cartaAComparar}] Felicidades ganaste`);
                    FS.appendFileSync("mayorMenorGuardarInfo.txt",`Hubo un total de ${sumaAciertos} aciertos\n`);
                }else{
                    console.log(`salio [${cartaAComparar}] Lo sentimos vuelve a intentarlo`);
                }
                break;
            }
            case"-":{
                let cartaAComparar=this.getAleatorio(1,12);
                if(cartaAComparar<cartaElegida){
                    sumaAciertos++;
                    console.log(`salio [${cartaAComparar}] Felicidades ganaste`);
                    FS.appendFileSync("mayorMenorGuardarInfo.txt",`Hubo un total de ${sumaAciertos} aciertos\n`);
                }else{
                    console.log(`salio [${cartaAComparar}] Lo sentimos, vuelve a intentarlo`);
                }
                break;
            }
        }
        tirarCarta=RLS.question("Ingrese 0 para tirar una carta, x para finalizar: ");               
        }
    }
    
    private getAleatorio(menorValor:number,mayorValor:number):number{
        return Math.floor(Math.random() * (mayorValor + 1 - menorValor) + menorValor);
    }
}
