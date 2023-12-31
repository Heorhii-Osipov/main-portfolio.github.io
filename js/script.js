const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close');
      menuLink = document.querySelector('.menu__list');
      menuOver = document.querySelector('.menu__overlay')

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});
menuLink.addEventListener('click', () => {
  menu.classList.remove('active');
});
menuOver.addEventListener('click', () => {
  menu.classList.remove('active');
});

const counters = document.querySelectorAll('.skills__ratings-counter'),
      lines = document.querySelectorAll('.skills__ratings-line span');

counters.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});

"use strict"

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('form');
  form.addEventListener('submit', formSend);

  async function formSend(e) {
    e.preventDefault();

    let error = formValidate(form);

    let formData = new FormData(form);
    

    if (error === 0){
      form.classList.add('_sending');
        let response = await fetch('sendmail.php', {
        method: 'POST',
        body:formData
      });
      if(response.ok){
        let result = await response.json();
        alert(result.message);
        form.reset();
        form.classList.remove('_sending');
      }else{
        alert("Your message has been successfully sent");     //  whent uplouad files on hosting with php need to change value in alert on "Error"
        form.reset();
        form.classList.remove('_sending');   
      } 
    } else {
        alert('Fill in required fields');
    }
  }

  function formValidate(form){
    let error = 0;
    let formReq = document.querySelectorAll('._req');

    for (let index = 0; index < formReq.length; index++) {
      const input = formReq[index];
      formRemoveError(input);

      if(input.classList.contains('_email')) {
         if (emailTest(input)){
           formAddError(input);
           error++;
          }
      }else if(input.getAttribute("type") === "checkbox" && input.checked === false){
            formAddError(input);
            error++;
         }else{
          if(input.value === '') {
            formAddError(input);
            error++;
          }
         }
      
      
    }
    return error;

  }
  function formAddError(input){
    input.parentElement.classList.add('_error');
    input.classList.add('_error');
  }
  function formRemoveError(input){
    input.parentElement.classList.remove('_error');
    input.classList.remove('_error');
  }

  function emailTest(input) {
    return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
  }

});

