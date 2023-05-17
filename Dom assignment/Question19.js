const form = document.querySelector('from');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password')
const errorParagraph = document.querySelector('#error');


form.addEventListener('submit',function(event){
    event.preventDefault();

    errorParagraph.textContent = '';

    const emailValue = emailInput.value;
    const passwordValue = passwordInput.value;
    
    
    // Validate the email and password

    const isEmailvalid = emailValue.includes('@');
    const isPasswordValid = passwordValue.length >=8;

    if(isEmailvalid && isPasswordValid)
    {
        errorParagraph.textContent = 'Valid email and password! ' ;
        errorParagraph.style.color = 'green'
    } else{

        errorParagraph.textContent = 'Invalid email or password !';
        errorParagraph.style.color = 'red';
        
    }



})