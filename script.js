
const form =document.querySelector('.header form');
const email =document.querySelector('.header form input[type=text]');

form.addEventListener('submit',(e) =>{
    e.preventDefault();
    let emailvalue = email.value;
 if(validateEmail(emailvalue)){
     console.log('This is a validemail');
     form.classList.remove('error');
 }
 else{
     form.classList.add('error');
 }
 
});
function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}