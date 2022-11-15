"use strict";
exports.__esModule = true;
var RLS = require("readline-sync");
var FS = require("fs");
var Tragamonedas = /** @class */ (function () {
    function Tragamonedas(estado) {
        this.estado = estado;
    }
    Tragamonedas.prototype.getEstado = function () {
        if (this.estado) {
            this.estado = false;
        }
        else {
            this.estado = true;
        }
    };
    Tragamonedas.prototype.getResultadoNumero = function () {
        var carrete1;
        var carrete2;
        var carrete3;
        var monto = RLS.questionInt("Ingrese el monto de su apuesta, presione 0 para finalizar: ");
        var premio = 0;
        var premioTotal = 0;
        var recaudacion = 0;
        while (monto != 0) {
            carrete1 = this.getAleatorio(1, 10);
            carrete2 = this.getAleatorio(1, 10);
            carrete3 = this.getAleatorio(1, 10);
            if ((carrete1 == carrete2) && (carrete1 == carrete3)) {
                premio = (monto * 2);
                premioTotal += premio;
                console.log("[" + carrete1 + "] [" + carrete2 + "] [" + carrete3 + "]");
                console.log("Felicidades ganaste " + premio + " pesos");
                recaudacion = ((monto * 24) - premio);
                FS.appendFileSync("casinoRecaudacion.txt", "El tragamonedas lleva recaudado un total de: " + recaudacion + " pesos\n");
            }
            else if ((carrete1 == carrete2) || (carrete1 == carrete3) || (carrete2 == carrete3)) {
                premio = (monto * 1);
                premioTotal += premio;
                console.log("[" + carrete1 + "] [" + carrete2 + "] [" + carrete3 + "]");
                console.log("Felicidades ganaste " + premio + " pesos");
                recaudacion = ((monto * 24) - premio);
                FS.appendFileSync("casinoRecaudacion.txt", "El tragamonedas lleva recaudado un total de: " + recaudacion + " pesos\n");
            }
            else {
                console.log("[" + carrete1 + "] [" + carrete2 + "] [" + carrete3 + "]");
                console.log("Lo sentimos no tuviste aciertos, vuelve a intentarlo");
                recaudacion = (monto * 24);
                FS.appendFileSync("casinoRecaudacion.txt", "El tragamonedas lleva recaudado un total de: " + recaudacion + " pesos\n");
            }
            monto = RLS.questionInt("Si desea seguir jugando ingrese el monto de su apuesta, sino presione 0 para finalizar: ");
        }
        FS.appendFileSync("tragamonedasGuardarInfo.txt", "En total hubo " + premioTotal + " pesos en premios\n");
    };
    Tragamonedas.prototype.getResultadoFruta = function () {
        var premio = 0;
        var premioTotal = 0;
        var monto = RLS.questionInt("Ingrese el monto de su apuesta, presione 0 para finalizar: ");
        var arregloFruta = ["melon", "banana", "manzana", "sandia", "naranja", "mandarina"];
        var recaudacion = 0;
        while (monto != 0) {
            var fruta1 = this.getAleatorio(0, 5);
            var fruta2 = this.getAleatorio(0, 5);
            var fruta3 = this.getAleatorio(0, 5);
            var carrete1 = arregloFruta[fruta1];
            var carrete2 = arregloFruta[fruta2];
            var carrete3 = arregloFruta[fruta3];
            if ((carrete1 == carrete2) && (carrete1 == carrete3)) {
                premio = (monto * 2);
                premioTotal += premio;
                console.log("[" + carrete1 + "] [" + carrete2 + "] [" + carrete3 + "]");
                console.log("Felicidades ganaste " + premio);
                recaudacion = ((monto * 24) - premio);
                FS.appendFileSync("casinoRecaudacion.txt", "El tragamonedas especial lleva recaudado un total de: " + recaudacion + " pesos\n");
            }
            else if ((carrete1 == carrete2) || (carrete1 == carrete3) || (carrete2 == carrete3)) {
                premio = (monto * 1.5);
                premioTotal += premio;
                console.log("Felicidades ganaste " + premio);
                console.log("[" + carrete1 + "] [" + carrete2 + "] [" + carrete3 + "]");
                recaudacion = ((monto * 24) - premio);
                FS.appendFileSync("casinoRecaudacion.txt", "El tragamonedas especial lleva recaudado un total de: " + recaudacion + " pesos\n");
            }
            else {
                console.log("[" + carrete1 + "] [" + carrete2 + "] [" + carrete3 + "]");
                console.log("Lo sentimos no tuviste ningun acierto, vuelve a intentarlo: ");
                recaudacion = (monto * 24);
                FS.appendFileSync("casinoRecaudacion.txt", "El tragamonedas especial lleva recaudado un total de: " + recaudacion + " pesos\n");
            }
            monto = RLS.questionInt("Si desea seguir jugando ingrese el monto de su apuesta, sino presione 0 para finalizar: ");
        }
        FS.appendFileSync("tragamonedasGuardarInfo.txt", "Hubo un total de " + premioTotal + " pesos en premios\n");
    };
    Tragamonedas.prototype.getAleatorio = function (menorValor, mayorValor) {
        return Math.floor(Math.random() * ((mayorValor + 1) - menorValor) + menorValor);
    };
    return Tragamonedas;
}());
exports["default"] = Tragamonedas;
