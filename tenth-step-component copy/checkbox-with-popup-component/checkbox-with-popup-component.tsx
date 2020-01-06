import { Component, h, Prop, State, Event, EventEmitter, Method } from '@stencil/core';


@Component({
    tag: 'checkbox-with-popup-component',
    styleUrl: 'checkbox-with-popup-component.css',
    shadow: false
})
export class CheckboxWithPopupComponent {
    @Prop() id: string = '';
    @Prop() type: string = 'text'; // text, password, date, number, email, phone
    @Prop() text: string = '';

    @State() checkedValue: boolean= false;
    @State() showTextBox: boolean= false;

    @Event() onClick: EventEmitter;

    @Method()
    async  show() {
        this.showTextBox = true;
      }

      textBoxShow() {
        var popup = document.getElementById("myPopup");
        popup.classList.toggle("popupShow");
        // if (popup.style.display === "none") {
        //     popup.style.display = "block";
        //   } else {
        //     popup.style.display = "none";
        //   }
      };


    checked(e)  {
        this.checkedValue = e.target.checked; 
        console.log('checked event:', e.target.checked);
        if (this.checkedValue === true) {
            console.log('should show box');
            //this.checkbox.emit();---> needs to talk to firebase;
            this.show();
            //this.textBoxShow();
        }
    }


    

    render() {       
        let textbox = '';

        if (this.checkedValue) {
            textbox = <text-box-component></text-box-component>
        }

        return (

<label class="custom-label flex">
      <div class="bg-white shadow w-6 h-6 p-1 flex justify-center items-center mr-2">
            <input onChange={(e) => this.checked(e)} 
            type="checkbox"
            id= "checkbox" 
            class= "hidden"
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
      <div class= "flex-col w-3/4">
        <span 
        class="select-none"> 
        {this.text}
        </span>
        <div class="border-solid popupShow">
            {textbox}
        </div> 
       
    </div>

</label>
            
        )
    }
}
