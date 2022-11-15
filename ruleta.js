"use strict";
exports.__esModule = true;
var RLS = require("readline-sync");
var FS = require("fs");
var Ruleta = /** @class */ (function () {
    function Ruleta(estado) {
        this.estado = estado;
    }
    Ruleta.prototype.getEstado = function () {
        if (this.estado) {
            this.estado = false;
        }
        else {
            this.estado = true;
        }
    };
    Ruleta.prototype.getGirar = function () {
        var apuesta = RLS.questionInt("Ingrese el monto que desea apostar, presione 0 para finalizar: ");
        var arregloNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
            21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36];
        var arregloColores = ["verde", "rojo", "negro", "rojo", "negro", "rojo", "negro", "rojo", "negro", "rojo", "negro", "negro", "rojo",
            "negro", "rojo", "negro", "rojo", "negro", "rojo", "rojo", "negro", "rojo", "negro", "rojo", "negro", "rojo", "negro", "rojo", "negro", "negro",
            "rojo", "negro", "rojo", "negro", "rojo", "negro", "rojo"];
        var premioTotal = 0;
        var premio = 0;
        var recaudacion = 0;
        var cantidadAciertos = 0;
        while (apuesta != 0) {
            var numero = RLS.questionInt("Ingrese un numero entre 0 y 36: ");
            var indiceAleatorio = this.getAleatorio(0, 36);
            if (numero == indiceAleatorio) {
                console.log("[" + arregloNumeros[indiceAleatorio] + "] [" + arregloColores[indiceAleatorio] + "]");
                premio = apuesta * 2;
                premioTotal += premio;
                cantidadAciertos++;
                console.log("Felicidades ganaste " + premio);
                recaudacion = ((apuesta * 24) - premio);
                FS.appendFileSync("casinoRecaudacion.txt", "La ruleta lleva recaudado un total de: " + recaudacion + " pesos\n");
            }
            else {
                console.log("[" + arregloNumeros[indiceAleatorio] + "] [" + arregloColores[indiceAleatorio] + "]");
                console.log("Lo sentimos no tuviste aciertos, vuelve a intentarlo");
                recaudacion = (apuesta * 24);
                FS.appendFileSync("casinoRecaudacion.txt", "La ruleta lleva recaudado un total de: " + recaudacion + " pesos\n");
            }
            apuesta = RLS.questionInt("Ingrese el monto que desea apostar, presione 0 para finalizar: ");
            FS.appendFileSync("ruletaGuardarInfo.txt", "Hubo un total de " + premioTotal + " pesos en premios y un total de " + cantidadAciertos + " cantidad de aciertos\n");
        }
    };
    Ruleta.prototype.getAleatorio = function (menorValor, mayorValor) {
        return Math.floor(Math.random() * (mayorValor + 1 - menorValor) + menorValor);
    };
    return Ruleta;
}());
exports["default"] = Ruleta;
