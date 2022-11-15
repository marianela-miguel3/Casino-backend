import * as RLS from "readline-sync";
import * as FS from "fs";
export default class Ruleta {
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

  public getGirar(): void {
    let apuesta:number= RLS.questionInt("Ingrese el monto que desea apostar, presione 0 para finalizar: ");
    if (apuesta<=0){
      throw new Error("La apuesta debe superar los $0");
    }
      let arregloNumeros: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
      21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36];
    let arregloColores: string[] = ["verde","rojo","negro","rojo","negro","rojo","negro","rojo","negro","rojo","negro","negro","rojo",
    "negro","rojo","negro","rojo","negro","rojo","rojo","negro","rojo","negro","rojo","negro","rojo","negro","rojo","negro","negro",
    "rojo","negro","rojo","negro","rojo","negro","rojo"];
    let premioTotal:number=0;
    let premio:number=0;
    let recaudacion:number=0;
    let cantidadAciertos:number=0;
    while(apuesta!=0){
      let numero: number= RLS.questionInt("Ingrese un numero entre 0 y 36: ");
      let indiceAleatorio: number= this.getAleatorio(0, 36);
         if (numero == indiceAleatorio) {
            console.log(`[${arregloNumeros[indiceAleatorio]}] [${arregloColores[indiceAleatorio]}]`);
            premio=apuesta*2;
            premioTotal+=premio;
            cantidadAciertos++;
            console.log(`Felicidades ganaste ${premio}`);
            recaudacion=((apuesta*24)-premio);
            FS.appendFileSync("casinoRecaudacion.txt",`La ruleta lleva recaudado un total de: ${recaudacion} pesos\n`);
          } else {
            console.log(`[${arregloNumeros[indiceAleatorio]}] [${arregloColores[indiceAleatorio]}]`);
            console.log("Lo sentimos no tuviste aciertos, vuelve a intentarlo");
            recaudacion=(apuesta*24);
            FS.appendFileSync("casinoRecaudacion.txt",`La ruleta lleva recaudado un total de: ${recaudacion} pesos\n`);
          }
    apuesta= RLS.questionInt("Ingrese el monto que desea apostar, presione 0 para finalizar: ");
    FS.appendFileSync("ruletaGuardarInfo.txt",`Hubo un total de ${premioTotal} pesos en premios y un total de ${cantidadAciertos} cantidad de aciertos\n`);
    }
    try{
    }catch (error){
      console.log("ocurrio un error esperado");
      console.log(error);
    }
  }

  private getAleatorio(menorValor: number, mayorValor: number): number {
    return Math.floor(
      Math.random() * (mayorValor + 1 - menorValor) + menorValor);
  }
}
