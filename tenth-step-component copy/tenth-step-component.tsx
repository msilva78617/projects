import { Component, h, Prop } from '@stencil/core';
//import app from '../../utils/firebase';

// interface Unicorn {
//     name: string;
//     label: string;
//     hair_color: string;
//     horn_color: string;
//     special_power?: string;
//     favorite_food?: string;
//     age?: number;
//     id: string;
// }

@Component({
  tag: 'tenth-step-component',
  styleUrl: 'tenth-step-component.css',
  shadow: false
})
export class TenthStepComponent {

    
@Prop() text: string = "";

render() {


        
     return (

        <div class="font-sans subpixel-antialiased">

        <div class= "items-center">
          <h1 class= "text-center text-3xl uppercase subpixel-antialiased text-teal-500 ">
            10th Step Inventory          
            </h1>
        </div>

        <div class= "items-center bg-teal-100 mx-5">
          <p class= "text-center px-3 m-8">
            As we work the first nine steps, we prepare ourselves for the adventure of a new life. 
            But when we approach Step 10, we commence to put our AA way of life to practical use, 
            day by day, in fair weather or foul. Then comes the acid test: can we stay sober, keep emotional balance,
            and live to good purpose under all conditions.
          </p>
  
        </div>
     
        <div>
          <h1 class= "text-left font-bold mx-5 my-2 text-1xl uppercase subpixel-antialiased">
           Sober Action Checklist         
          </h1>
          <p class= "text-left px-2 mx-6 my-2 underline">
            Check off everything that you did today. 
          </p>

          <div class="mx-8">
          <checkbox-component 
          class= "text-left px-2 mx-6"
            text= "Went to a meeting">
          </checkbox-component>
          <checkbox-component 
          class= "text-left px-2 mx-6"
            text= "Prayed">
          </checkbox-component>
          <checkbox-component 
          class= "text-left px-2 mx-6"
            text= "Called my sponsor">
          </checkbox-component>
          <checkbox-component 
          class= "text-left px-2 mx-6"
            text= "Called another alcoholic">
          </checkbox-component>
          <checkbox-component 
          class= "text-left px-2 mx-6"
            text= "Helped someone">
          </checkbox-component>
          <checkbox-component 
          class= "text-left px-2 mx-6"
            text= "Did service work">
          </checkbox-component>
          <checkbox-component 
          class= "text-left px-2 mx-6"
            text= "Meditated">
          </checkbox-component>
          <checkbox-component 
          class= "text-left px-2 mx-6"
            text= "Engaged in fellowship">
          </checkbox-component>
          <checkbox-component 
          class= "text-left px-2 mx-6"
            text= "Read any AA literature">
          </checkbox-component>
          <checkbox-component 
          class= "text-left px-2 mx-6"
            text= "Was kind and loving towards all">
          </checkbox-component>
          </div>
        </div>

        <div>


          <h1 class= "text-left font-bold mx-5 my-2 text-1xl uppercase subpixel-antialiased">
           Reflection Questions         
          </h1>
          <p class= "text-left px-2 mx-3 my-2">
            At the end of the day, we review the happenings of the hours just past. 
            Casting up a balance sheet, crediting ourselves with things well done, and chalking up debts where due. 
          </p>
          <p class= "text-left px-2 mx-6 my-2 underline">
            Check off anything that you can relate to today. Explain or add detail in the space provided. 
          </p>

          <div class="mx-8 w-full">
          <checkbox-with-popup-component 
          class= "text-left px-2 mx-6"
            text= "Was I resentful?">
          </checkbox-with-popup-component>
          <checkbox-with-popup-component 
          class= "text-left px-2 mx-6"
            text= "Was I selfish?">
          </checkbox-with-popup-component>
          <checkbox-with-popup-component 
          class= "text-left px-2 mx-6"
            text= "Was I dishonest?">
          </checkbox-with-popup-component>
          <checkbox-with-popup-component 
          class= "text-left px-2 mx-6"
            text= "Was I fearful?">
          </checkbox-with-popup-component>
          <checkbox-with-popup-component 
          class= "text-left px-2 mx-6"
            text= "Am I obsessing about anything?">
          </checkbox-with-popup-component>
          <checkbox-with-popup-component
          class= "text-left px-2 mx-6"
            text= "Am I keeping secrets?">
          </checkbox-with-popup-component>
          <checkbox-with-popup-component
          class= "text-left px-2 mx-6"
            text= "Did I cause any harm?">
          </checkbox-with-popup-component>
          <checkbox-with-popup-component
          class= "text-left px-2 mx-6"
            text= "Do I owe an apology?">
          </checkbox-with-popup-component>
       
          </div>

          <div>
          <p class= "text-left px-2 mx-6 my-2 underline font-sans subpixel-antialiased">
            Reflect on each questions and answer in the space provided. 
          </p>
          <div
          class="mx-8">
          <text-box-component
          label= "10 things that you are grateful for today.">
          </text-box-component>
          <text-box-component
          label= "Something that you experienced today that you deserve to remember.">
          </text-box-component>
          <text-box-component
          label= "What did I do today that I can be proud of?">
          </text-box-component>
          </div>
          </div>
          
          
        </div>

        </div>
     
    )

    }
}

