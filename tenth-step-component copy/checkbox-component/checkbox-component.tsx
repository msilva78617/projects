import { Component, h, Prop, State, Event, EventEmitter } from '@stencil/core';


@Component({
    tag: 'checkbox-component',
    styleUrl: 'checkbox-component.css',
    shadow: false
})
export class CheckboxComponent {
    @Prop() id: string = '';
    @Prop() type: string = 'text'; // text, password, date, number, email, phone
    @Prop() text: string = '';

    @State() checkedValue: boolean= false;

    @Event() onChange: EventEmitter;

    checked(e)  {
        this.checkedValue = e.target.checked; 
        console.log(this.checkedValue);
        console.log(e.target.checked);
        if (this.checkedValue === true) {
            console.log('should emit');
            //this.checkbox.emit();---> needs to talk to firebase
        }
    }


    

    render() {

        return (

<label class="custom-label flex">
      <div class="bg-white shadow w-6 h-6 p-1 flex justify-center items-center mr-2">
            <input  onChange={(e) => this.checked(e)} 
            type="checkbox"
            id= "checkbox" 
            class="hidden" 
            ></input>
            <svg 
            class="hidden w-4 h-4 text-green-600 pointer-events-none" 
            viewBox="0 0 172 172"><g 
            fill="none" 
            stroke-width="none" 
            stroke-miterlimit="10" 
            font-family="none" 
            font-weight="none" 
            font-size="none" 
            text-anchor="none">
            <path d="M0 172V0h172v172z"/>
            <path d="M145.433 37.933L64.5 118.8658 33.7337 88.0996l-10.134 10.1341L64.5 139.1341l91.067-91.067z" 
                fill="currentColor" 
                stroke-width="1"/>
                </g>
            </svg>
      </div>
      <span 
      class="select-none"> 
      {this.text}
      </span>
</label>
            
        )
    }
}
