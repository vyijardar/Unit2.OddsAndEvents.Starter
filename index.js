// TODO: this file! :)

const state = {
    numbers: [],
    oddnum: [],
    evennum: []
}
render(state.numbers);

//Adds number from number input to number bank
const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    var number = /^[0-9]+$/;
    const num = event.target.number.value;
    console.log(num);

    if (num.match(number)) {
        state.numbers.push(num);
    }
    event.target.number.value='';
    render(state.numbers);

});

const sortButton=document.querySelector('#sortOne');
sortButton.addEventListener('click',sort);

/** Sorts one number to even or odd */
function sort() {
 const oddOutput = document.querySelector('#odds output');
 const evenOutput = document.querySelector('#evens output');

 for(let i = 0;i < state.numbers.length; i++)
 {
    if(state.numbers[0] % 2 == 1)
    {
        state.oddnum.push(state.numbers.shift());
    }
    else 
    {
        state.evennum.push(state.numbers.shift());
    }
 }
 oddOutput.replaceChildren(...state.oddnum);
 evenOutput.replaceChildren(...state.evennum);
 render(state.numbers);
}

const sortAllBtn = document.querySelector('#sortAll');
sortAllBtn.addEventListener('click',sortAll);

/** Sorts all numbers to even or odd */
function sortAll() {
    const oddOutput = document.querySelector('#odds output');
    const evenOutput = document.querySelector('#evens output');
   
    for (let i = 0; i <= state.numbers.length; i++) {
        if (state.numbers[i] % 2 == 1) {
           state.oddnum.push(state.numbers[i]);
        }
        else
        {state.evennum.push(state.numbers[i]);}

    }

    const oddNumElem = state.oddnum.map((num) => {
        const span = document.createElement('span');
        span.classList.add('odd-num');
        span.style.marginRight = '10px';
        span.textContent = num;
        return span;
    });
    oddOutput.replaceChildren(...oddNumElem);

    for (let i = 0; i <= state.numbers.length; i++) {
        if (state.numbers[i] % 2 == 0) {
           state.evennum.push(state.numbers[i]);
        }

    }

    const evenNumElem = state.evennum.map((num) => {
        const span = document.createElement('span');
        span.classList.add('even-num');
        span.style.marginRight = '10px';
        span.textContent = num;
        return span;
    });
    evenOutput.replaceChildren(...evenNumElem);
    state.numbers.splice(0, state.numbers.length);
    render(state.numbers);
}


function render(arr){
    const output = document.querySelector('#numberBank output');
    const numElement = arr.map((num) => {
        const span = document.createElement('span');
        span.classList.add('num');
        span.style.marginRight = '10px';
        span.textContent = num;
        return span;
    });
    output.replaceChildren(...numElement);
}

