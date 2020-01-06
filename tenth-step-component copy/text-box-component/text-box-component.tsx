import { Component, h, Prop, State, Event, EventEmitter } from '@stencil/core';
import isEmail from 'validator/lib/isEmail';


@Component({
  tag: 'text-box-component',
  styleUrl: 'text-box-component.css',
  shadow: false
})
export class TextBoxComponent {
  @Prop() id: string = '';
  @Prop() label: string = '';
  @Prop() placeholder: string = '';
  @Prop() required: boolean = false;
  @Prop() type: string = 'text'; // text, password, date, number, email, phone
  @Prop({ mutable: true, reflect: true }) value: string;

  @State() hasError: boolean = false;
  @State() isValid: boolean = false;

  @Event() inputValidated: EventEmitter;


  _validate(e) {
    let data = e.currentTarget.value;
    console.log(data);
    this._checkRequired(data);
    
    if (this.type === 'email') {
      this._checkEmail(data);
    }

    const payload = {
      valid: !this.hasError,
      value: data
    }

    this.inputValidated.emit(payload);
  }

  _checkEmail(inputText) { 
    if(!isEmail(inputText)) {
      console.log('Email Invalid');
      this.hasError = true;
    }
  }

  _checkRequired(data) {
    if (this.required) {
      if (data === "") {
        console.log('booo');
        this.hasError = true;
      } else {
        console.log('good');
        this.hasError = false;

      }
    }
  }




  render() {
    const newClass = (this.hasError) ? 'border-red-500': '';
      
    return (
<div class="mb-4 w-full">
      <label class="block mb-2">
        {this.label} 
      </label>
      <textarea 
      onChange={(e) => this._validate(e)} 
      class={"w-full shadow appearance-none border rounded text-gray-700" + newClass} 
      placeholder= {this.placeholder}> 
      </textarea> 
        
</div>

    )    
  }
}
