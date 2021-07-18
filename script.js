console.log('This is project 4');
const naam = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
let validEmail = false;
let validPhone = false;
let validUser = false;
$('#failure').hide();
$('#success').hide();
//console.log(name , email , phone );
naam.addEventListener('blur', () => {
    console.log('name is blrred ');
    //validate your name here;
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/;
    let str = naam.value;
    let result = regex.exec(str);
    console.log(str, result);
    if (regex.test(str)) {
        console.log('it matched');
        naam.classList.remove('is-invalid');
        validUser = true;
    }
    else {
        console.log('No matched');
        naam.classList.add('is-invalid');
        validUser = false;
    }
})



email.addEventListener('blur', () => {
    console.log('email is blured ');
    //validate your email here;
    let regex = /^([_\-\.0-9a-zA-Z]+)@([a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let str = email.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log('it matched');
        email.classList.remove('is-invalid');
        validEmail = true;
    }
    else {
        console.log('No matched');
        email.classList.add('is-invalid');
        validEmail = false;
    }
})




phone.addEventListener('blur', () => {
    console.log('phone is blured ');
    //validate your phone here;
    let regex = /^[0-9]{10}$/;
    let str = phone.value;

    if (regex.test(str)) {
        console.log('Phone i s valid ');
        phone.classList.remove('is-invalid');
        validPhone = true;
    }
    else {
        console.log('Phon is not valid');
        phone.classList.add('is-invalid');
        validPhone = false;
    }
})

let submit  = document.getElementById('submit');
submit.addEventListener('click',(e)=>
{
    e.preventDefault();
    console.log('You clicked on submit');
     if (validEmail && validUser && validPhone )
     {
         console.log('Submitted');
        let success = document.getElementById('success');
        let failure = document.getElementById('failure');
        success.classList.add('show');
        $('#failure').hide();
        $('#success').show();

     }
     else
     {
         console.log('Please check the details you have filled ');
         let success = document.getElementById('success');
         let failure = document.getElementById('failure');
         failure.classList.add('show');
         $('#success').hide();
         $('#failure').show();
    }
   
})