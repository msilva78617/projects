import { Component, Prop, State, h, Event, EventEmitter, Method, Element } from '@stencil/core';


@Component({
  tag: 'calculator-simple-component',
  styleUrl: 'calculator-simple-component.css',
  shadow: false
})
export class CalculatorSimpleComponent {
  
  public typeOfService: Array<any> = [
        {
          name: 'Bad Service',
          karma: {
            good: {
              percent: 0.15,
            },
            bad: {
              percent: 0.00,
            }
          },
          alertMessage: 'What kind of karma do you want?'
          },
          {
          name: 'Okay Service',
          percent: 0.20
          },
          {
          name: 'Good Service',
          percent: 0.22
          },
          {
          name: 'Great Service',
          karma: {
            goodThisLife: {
              percent: 0.30,
            },
            goodNextLife: {
              percent: 0.25,
            },
          },
          alertMessage: 'When do you want your good karma?'
          },
        ];

  public visible: boolean= false;


@Prop() type: string = 'text'; // text, password, date, number, email, phone
@Prop({ mutable: true, reflect: true }) value: string;
@Prop() button1Label: string= '';
@Prop() button2Label: string= '';
//@Prop() content: any;




@State() serviceValue: string;
@State() billTotal: any;
@State() button1Input: any;
@State() button2Input: any;
@State() badServiceInput: boolean= false;// false = bad karma and true = good
@State() greatServiceInput: boolean= false;// false = goodNextLife and true = goodThisLife:
@State() showModal: boolean= false; //false = no show and true = show


@Event() onClick: EventEmitter;
@Event() onChange: EventEmitter;
@Event() onInput: EventEmitter;
@Event() button1: EventEmitter;
@Event() button2: EventEmitter;

@Element() modalElement: HTMLElement;

@Method()
      async  open() {
          this.showModal = true;
        }

billInput(e) {
  this.billTotal = e.target.value;
  return this.billTotal;
  }

handleSelect(e) {
  if (e.target.value === 'Okay Service') {
    this.serviceValue = e.target.value;
    this.showModal = false;

    return this.serviceValue;
  } else if (e.target.value === 'Good Service'){
    this.serviceValue = e.target.value;
    this.showModal = false;
    return this.serviceValue;
  } else {
    this.serviceValue = e.target.value;
    return this.showModal = true;
}
}

getModalMessage() {
  if (this.serviceValue === this.typeOfService[0].name) {
    return this.typeOfService[0].alertMessage;
  } else if (this.serviceValue === this.typeOfService[3].name) {
    return this.typeOfService[3].alertMessage;
  }
}

getButton1Label() {
  if (this.serviceValue === this.typeOfService[0].name) {
    this.button1Label = "Bad";
    return this.button1Label;
  } else if (this.serviceValue === this.typeOfService[3].name) {
    this.button1Label = "Next Life";
    return this.button1Label; 
  }
}

getButton2Label() {
  if (this.serviceValue === this.typeOfService[0].name) {
    this.button2Label = "Good";
    return this.button2Label;
  } else if (this.serviceValue === this.typeOfService[3].name) {
    this.button2Label = "This Life";
    return this.button2Label;  
  }
}


calculateTip () {
    if (this.serviceValue === 'Bad Service') {
        if (this.badServiceInput) {
          var calTip = this.billTotal * this.typeOfService[0].karma.good.percent;
          return Math.ceil(calTip);
        } else if (this.badServiceInput === false) {
          var calTip = this.billTotal * this.typeOfService[0].karma.bad.percent;
          return Math.ceil(calTip);
        }
    } else if (this.serviceValue=== 'Great Service') {
        if (this.greatServiceInput === false) {
          var calTip = this.billTotal * this.typeOfService[3].karma.goodNextLife.percent;
          return Math.ceil(calTip);
        } else if (this.greatServiceInput === true) {
          var calTip = this.billTotal * this.typeOfService[3].karma.goodThisLife.percent;
          return Math.ceil(calTip);
        }
    } else {
      for (var i = 0; i < this.typeOfService.length; i++) {
        if (this.serviceValue === this.typeOfService[i].name) {
          var calTip = this.billTotal*this.typeOfService[i].percent;
          return Math.ceil(calTip);
        }        
      }
    }
};

handleButton1Click(event) {
  this.visible = false;
  this.button1Input = event.target.value;
  if (this.serviceValue === this.typeOfService[0].name) {
    this.badServiceInput = false;
    this.button1.emit();
    this.showModal = false;
    return this.badServiceInput;
  } else {
    this.greatServiceInput = false;
    this.button1.emit();
    this.showModal = false;
    return this.badServiceInput;
  }
};
 
handleButton2Click(event) {
  this.button2Input = event.target.value;
  if (this.serviceValue === this.typeOfService[0].name) {
    this.badServiceInput = true;
    this.button2.emit();
    this.showModal = false;
    return this.badServiceInput;
  } else {
    this.greatServiceInput = true;
    this.button2.emit();
    this.showModal = false;
    return this.greatServiceInput;
  }
};

handleClick(event) {
  if (event.target.id === "button1") {
    return this.handleButton1Click(event);
  } else if (event.target.id === "button2") {
    return this.handleButton2Click(event);
  }
}

tipPlusBillTotal () {
  var total = this.calculateTip()+parseFloat(this.billTotal);
  return total.toFixed(2);
}




  render() {

    return (
      <div class="font-sans subpixel-antialiased ">

        <div class= "items-center">
          <h1 class= "text-center text-3xl uppercase subpixel-antialiased text-teal-500 ">
            The Good Karma Tip Calculator
          </h1>
          <p class= "text-center px-3">
          According to Karma, what happens to a person, happens because they caused it with their actions. This tip calculator can assist in maximizing your good karma. Use it wisely.
          </p>
        </div>

        <div class="m-10 px-30">
          <text-box-component onChange= {(e) => this.billInput(e)}
            placeholder= "Enter bill total"
            label= "How much is your bill?"
            type= "number"> 
          </text-box-component>
        </div>

        <div class= "m-8 px-30">
          <drop-down-component onInput={(event) => this.handleSelect(event)} 
            label = "How was the service?"
            option1= {this.typeOfService[0].name}
            option2= {this.typeOfService[1].name}
            option3= {this.typeOfService[2].name}
            option4= {this.typeOfService[3].name}>
          </drop-down-component>
        </div>
          
      

        <div class= "text-lg text-center px-3">
          <p>
        Tip is ${this.calculateTip()}.
          </p>
          <p>
         Bill plus tip is ${this.tipPlusBillTotal()}.
          </p>
        </div>

        <modal-component 
          onClick= {(event) => this.handleClick(event)}
          parentModalLabel= {this.getModalMessage()}
          button1Label= {this.getButton1Label()}
          button2Label= {this.getButton2Label()}
          showModal={this.showModal}
          >
          </modal-component>
      </div>
      

 
     
    ) 
  }   
};

