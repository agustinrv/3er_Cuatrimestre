"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var persona_js_1 = require("../Persona/persona.js");
var Empleado = /** @class */ (function (_super) {
    __extends(Empleado, _super);
    function Empleado(legajo, sueldo, nombre, apellido, dni, sexo) {
        var _this = _super.call(this, nombre, apellido, dni, sexo) || this;
        _this._legajo = legajo;
        _this._sueldo = sueldo;
        return _this;
    }
    Empleado.prototype.GetLegajo = function () {
        return this._legajo;
    };
    Empleado.prototype.GetSueldo = function () {
        return this._sueldo;
    };
    Empleado.prototype.Hablar = function (idioma) {
        return "la persona habla :" + idioma;
    };
    Empleado.prototype.ToString = function () {
        return _super.prototype.ToString.call(this) + " - " + this._legajo + " - " + this._sueldo;
    };
    return Empleado;
}(persona_js_1.Persona));
exports.Empleado = Empleado;
