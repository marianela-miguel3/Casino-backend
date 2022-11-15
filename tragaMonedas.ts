import * as RLS from "readline-sync";
import * as FS from "fs";
export default class Tragamonedas{
    private estado:boolean;
        public constructor(estado:boolean) {
           this.estado=estado;
        }
   
    public getEstado():void{
        if (this.estado){
         this.estado=false;
        }else{
        this.estado=true;
        }
    }
    
   public getResultadoNumero():void{
    let carrete1:number;
    let carrete2:number;
    let carrete3:number;
    let monto:number=RLS.questionInt("Ingrese el monto de su apuesta, presione 0 para finalizar: ");
    let premio:number=0;
    let premioTotal:number=0;
    let recaudacion:number=0;
         while(monto!=0){
               carrete1=this.getAleatorio(1, 10);
               carrete2=this.getAleatorio(1, 10);
               carrete3=this.getAleatorio(1, 10);
                    if ((carrete1==carrete2) && (carrete1==carrete3)) {
                     premio=(monto*2);
                     premioTotal+=premio;
                     console.log(`[${carrete1}] [${carrete2}] [${carrete3}]`);
                     console.log(`Felicidades ganaste ${premio} pesos`);
                     recaudacion=((monto*24)-premio);
                     FS.appendFileSync("casinoRecaudacion.txt",`El tragamonedas lleva recaudado un total de: ${recaudacion} pesos\n`);
                    }else if((carrete1==carrete2)||(carrete1==carrete3)||(carrete2==carrete3)){
                     premio=(monto*1);
                     premioTotal+=premio;
                     console.log(`[${carrete1}] [${carrete2}] [${carrete3}]`);
                     console.log(`Felicidades ganaste ${premio} pesos`);
                     recaudacion=((monto*24)-premio);
                     FS.appendFileSync("casinoRecaudacion.txt",`El tragamonedas lleva recaudado un total de: ${recaudacion} pesos\n`);
                    }else{
                        console.log(`[${carrete1}] [${carrete2}] [${carrete3}]`);
                        console.log("Lo sentimos no tuviste aciertos, vuelve a intentarlo");
                        recaudacion=(monto*24);
                        FS.appendFileSync("casinoRecaudacion.txt",`El tragamonedas lleva recaudado un total de: ${recaudacion} pesos\n`);
                    }
                    monto=RLS.questionInt("Si desea seguir jugando ingrese el monto de su apuesta, sino presione 0 para finalizar: ");
                }
                FS.appendFileSync("tragamonedasGuardarInfo.txt",`En total hubo ${premioTotal} pesos en premios\n`);
    }

    public getResultadoFruta():void{
        let premio:number=0;
        let premioTotal:number=0;
        let monto:number=RLS.questionInt("Ingrese el monto de su apuesta, presione 0 para finalizar: ");
        let arregloFruta:string[]=["melon","banana","manzana","sandia","naranja","mandarina"];
        let recaudacion:number=0;
        while(monto!=0){
        let fruta1:number=this.getAleatorio(0,5);
        let fruta2:number=this.getAleatorio(0,5);
        let fruta3:number=this.getAleatorio(0,5);
        let carrete1:string=arregloFruta[fruta1];
        let carrete2:string=arregloFruta[fruta2];
        let carrete3:string=arregloFruta[fruta3];
        if ((carrete1==carrete2) && (carrete1==carrete3)) {
            premio=(monto*2);
            premioTotal+=premio;
            console.log(`[${carrete1}] [${carrete2}] [${carrete3}]`);
            console.log(`Felicidades ganaste ${premio}`);
            recaudacion=((monto*24)-premio);
            FS.appendFileSync("casinoRecaudacion.txt",`El tragamonedas especial lleva recaudado un total de: ${recaudacion} pesos\n`);
        }else if((carrete1==carrete2)||(carrete1==carrete3)||(carrete2==carrete3)){
            premio=(monto*1.5);
            premioTotal+=premio;
            console.log(`Felicidades ganaste ${premio}`);
            console.log(`[${carrete1}] [${carrete2}] [${carrete3}]`);
            recaudacion=((monto*24)-premio);
            FS.appendFileSync("casinoRecaudacion.txt",`El tragamonedas especial lleva recaudado un total de: ${recaudacion} pesos\n`);
        }else{
            console.log(`[${carrete1}] [${carrete2}] [${carrete3}]`);
            console.log("Lo sentimos no tuviste ningun acierto, vuelve a intentarlo: ");
            recaudacion=(monto*24);
            FS.appendFileSync("casinoRecaudacion.txt",`El tragamonedas especial lleva recaudado un total de: ${recaudacion} pesos\n`);
        }
        monto=RLS.questionInt("Si desea seguir jugando ingrese el monto de su apuesta, sino presione 0 para finalizar: ");
    }
    FS.appendFileSync("tragamonedasGuardarInfo.txt",`Hubo un total de ${premioTotal} pesos en premios\n`);
    }

   
    private getAleatorio(menorValor:number,mayorValor:number):number {
    return Math.floor(Math.random()*((mayorValor+1)-menorValor)+menorValor);
    }
}



    
    
   
