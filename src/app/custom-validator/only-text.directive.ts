import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validators } from '@angular/forms';

@Directive({
  selector: '[OnlyText]',
  providers:[
  {
    provide:NG_VALIDATORS,
    useExisting:OnlyTextDirective,
    multi:true
  }]
})
export class OnlyTextDirective implements Validators {

  validate(control : AbstractControl):ValidationErrors|null{
    if(control.value!=null && !/^[A-Za-z\s]*$/.test(control.value))
     {
      return({invalidText:true})
     }
     return null;
  }

  constructor() { }

}
