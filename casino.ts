import Ruleta from "./ruleta";
import Tragamonedas from "./tragaMonedas";
import Mayormenor from "./mayorMenor";
import * as FS from "fs";
export default class Casino{
    private ruleta:Ruleta;
    private tragamonedas:Tragamonedas;
    private mayorMenor:Mayormenor;

    public constructor (){
         this.ruleta=new Ruleta(true);
         this.tragamonedas=new Tragamonedas(true);
         this.mayorMenor=new Mayormenor(true);
    };
    public jugarTragamonedas():void{
        this.tragamonedas.getResultadoNumero();
    };
    public jugarTragamonedasEspecial():void{
        this.tragamonedas.getResultadoFruta();
    };
    public jugarRuleta():void{
        this.ruleta.getGirar();
    };
    public jugarMayorMenor():void{
        this.mayorMenor.getTirarCartas();
    };
   
    public mostrarInfo(ruta:string){
        let informacionJugador:string[]=(FS.readFileSync(ruta,'utf8')).split("\n");
        console.log(informacionJugador);
    };

};