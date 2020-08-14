import { ControlValueAccessor } from '@angular/forms';
import { Input, Directive, Injectable } from '@angular/core';

@Injectable()
export abstract class BaseFormComponent implements ControlValueAccessor {

    val = '';

    constructor() { }

    onChange: any = () => { };
    onTouch: any = () => { };

    set value(val: any) {  // this value is updated by programmatic changes if( val !== undefined && this.val !== val){
        this.val = val;
        this.onChange(val);
        this.onTouch(val);
    }

    get value(): any {
        return this.val;
    }

    // this method sets the value programmatically
    writeValue(val: any): void {
        this.val = val;
    }

    // upon UI element value changes, this method gets triggered
    registerOnChange(fn: any): void {
        this.onChange = fn;
    }
    // upon touching the element, this method gets triggered
    registerOnTouched(fn: any): void {
        this.onTouch = fn;
    }
}
