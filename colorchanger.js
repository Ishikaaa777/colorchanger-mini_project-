const buttons=document.querySelectorAll('.button')
const body = document.querySelector('body');

buttons.forEach(function(button) {
    // Add an event listener to each button 
    button.addEventListener('click', function(event) {
         console.log(event)
        console.log(event.target) //targeting the button that was clicked

        if(event.target.id === 'grey'){
            body.style.backgroundColor= event.target.id;
//targeting the button with id grey and changing the background color to grey

        }
        if(event.target.id === 'white'){
            body.style.backgroundColor= event.target.id;
//targeting the button with id white and changing the background color to white

        }
        if(event.target.id === 'yellow'){
            body.style.backgroundColor= event.target.id;
//targeting the button with id yellow and changing the background color to yellow

        }
        if(event.target.id === 'blue'){
            body.style.backgroundColor= event.target.id;
            //targeting the button with id blue and changing the background color to blue
        }
       
        
    })
});

