import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS } from '@angular/forms';

function controlPeso(c:AbstractControl){
  // si el control no ha sido usado retorno null
  if (c.value == null) return null;
  // si se ha ingresado un caracter especial en el titulo
  // la funcion test retornara true
  if(/^([3-9][0-9]|1[0-9][0-9])(?:.[0-9]{1,2})?$/.test(c.value) == false){
  // retorno un error mediante un objeto con un atributo booleado,
  // este atributo será parte del array de errors asociado al control.
  return {controlDePeso: true}
  }
  // en cualquier otro caso retorno null (sin error)
  return null;
 } 

 @Directive({
  selector: '[control-peso]',
  providers:[
    {provide: NG_VALIDATORS, multi: true, useValue:controlPeso}
    ]
})
export class ControlPeso {

  constructor() { }

}

function controlDuracion(c:AbstractControl){
  // si el control no ha sido usado retorno null
  if (c.value == null) return null;
  // si se ha ingresado un caracter especial en el titulo
  // la funcion test retornara true
  if(/^([5-9]|[1-9][0-9])$/.test(c.value) == false){
  // retorno un error mediante un objeto con un atributo booleado,
  // este atributo será parte del array de errors asociado al control.
  return {controlDeDuracion: true}
  }
  // en cualquier otro caso retorno null (sin error)
  return null;
 } 

 @Directive({
  selector: '[control-duracion]',
  providers:[
    {provide: NG_VALIDATORS, multi: true, useValue:controlDuracion}
    ]
})
export class ControlDuracion {

  constructor() { }

}

function controlSeriesRep(c:AbstractControl){
  // si el control no ha sido usado retorno null
  if (c.value == null) return null;
  // si se ha ingresado un caracter especial en el titulo
  // la funcion test retornara true
  if(/^([1-9]|[1-2][0-9]|30)$/.test(c.value) == false){
  // retorno un error mediante un objeto con un atributo booleado,
  // este atributo será parte del array de errors asociado al control.
  return {controlDeSeriesRep: true}
  }
  // en cualquier otro caso retorno null (sin error)
  return null;
 } 

 @Directive({
  selector: '[control-seriesrep]',
  providers:[
    {provide: NG_VALIDATORS, multi: true, useValue:controlSeriesRep}
    ]
})
export class ControlSeriesRep {

  constructor() { }

}


function controlMonto(c:AbstractControl){
  // si el control no ha sido usado retorno null
  if (c.value == null) return null;
  // si se ha ingresado un caracter especial en el titulo
  // la funcion test retornara true
  if(/^[+]?[0-9]{1,9}(?:.[0-9]{1,2})?$/.test(c.value) == false){
  // retorno un error mediante un objeto con un atributo booleado,
  // este atributo será parte del array de errors asociado al control.
  return {controlDeMonto: true}
  }
  // en cualquier otro caso retorno null (sin error)
  return null;
 } 

 @Directive({
  selector: '[control-monto]',
  providers:[
    {provide: NG_VALIDATORS, multi: true, useValue:controlMonto}
    ]
})
export class ControlMonto {

  constructor() { }

}

function controlMontoDecimales(c:AbstractControl){
  // si el control no ha sido usado retorno null
  if (c.value == null) return null;
  // si se ha ingresado un caracter especial en el titulo
  // la funcion test retornara true
  if(/^\d+(?:.[0-9]{1,2})?$/.test(c.value) == false){
  // retorno un error mediante un objeto con un atributo booleado,
  // este atributo será parte del array de errors asociado al control.
  return {controlDeMontoDecimales: true}
  }
  // en cualquier otro caso retorno null (sin error)
  return null;
 } 

 @Directive({
  selector: '[control-monto-decimales]',
  providers:[
    {provide: NG_VALIDATORS, multi: true, useValue:controlMontoDecimales}
    ]
})
export class ControlMontoDecimales {

  constructor() { }

}


function controlDni(c:AbstractControl){
  // si el control no ha sido usado retorno null
  if (c.value == null) return null;
  // si se ha ingresado un caracter especial en el titulo
  // la funcion test retornara true
  if(/(^([0-9]{7,8})|^)$/.test(c.value) == false){
  // retorno un error mediante un objeto con un atributo booleado,
  // este atributo será parte del array de errors asociado al control.
  return {controlDeDni: true}
  }
  // en cualquier otro caso retorno null (sin error)
  return null;
 } 

 @Directive({
  selector: '[control-dni]',
  providers:[
    {provide: NG_VALIDATORS, multi: true, useValue:controlDni}
    ]
})
export class ControlDni {

  constructor() { }

}

function controlEmail(c:AbstractControl){
  // si el control no ha sido usado retorno null
  if (c.value == null) return null;
  // si se ha ingresado un caracter especial en el titulo
  // la funcion test retornara true
  if(/^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/.test(c.value) == false){
  // retorno un error mediante un objeto con un atributo booleado,
  // este atributo será parte del array de errors asociado al control.
  return {controlDeEmail: true}
  }
  // en cualquier otro caso retorno null (sin error)
  return null;
 } 

 @Directive({
  selector: '[control-email]',
  providers:[
    {provide: NG_VALIDATORS, multi: true, useValue:controlEmail}
    ]
})
export class ControlEmail {

  constructor() { }

}

function controlCelular(c:AbstractControl){
  // si el control no ha sido usado retorno null
  if (c.value == null) return null;
  // si se ha ingresado un caracter especial en el titulo
  // la funcion test retornara true
  if(/^(388|0388)?[ -]*([0-9]){7}$/.test(c.value) == false){
  // retorno un error mediante un objeto con un atributo booleado,
  // este atributo será parte del array de errors asociado al control.
  return {controlDeCelular: true}
  }
  // en cualquier otro caso retorno null (sin error)
  return null;
 } 

 @Directive({
  selector: '[control-celular]',
  providers:[
    {provide: NG_VALIDATORS, multi: true, useValue:controlCelular}
    ]
})
export class ControlCelular {

  constructor() { }

}