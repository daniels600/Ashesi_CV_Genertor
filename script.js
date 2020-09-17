const form = document.getElementById('create-form');
const f_name = document.getElementById('f_name');
const m_name = document.getElementById('m_name');
const l_name = document.getElementById('l_name');
const email = document.getElementById('email');
const phone_num = document.getElementById('phone');
const gender = document.getElementById('gender');
const p_addr = document.getElementById('postal-addr');


// Show input error message
function showError(input, message) {
  const formKit = input.parentElement;
  formKit.className = 'formKit error';
  const small = formKit.querySelector('small');
  small.innerHTML = message;
}

// Show success outline
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'formKit success';
}

// Check email is valid
function checkEmail(input) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
    return true;
  } else {
    showError(input, 'Email is not valid');
    return false;
  }
}



// check name as string
function checkName(input) {
    var regex = /^[a-zA-Z\s]+$/;
    if(regex.test(input.value) === true) {
      showSuccess(input);
      return true;
    }else {
      showError(input, 'Enter only letters');
      return false;
    }
}


// check phone as numbers 
function checkPhone(input) {
  
  if(/^\d+$/.test(input.value)) {
    showSuccess(input);
    return true;
  } else {
    showError(input, 'Enter only numbers');
    return false;
  }
}

//check validity of form 
function validateForm () {
  if( checkName(f_name) && checkName(m_name) && checkName(l_name) && checkEmail(email) && checkPhone(phone_num)){

    // creating the key-value pair for the inputs taken
    let u_name =  `${f_name.value}  ${m_name.value}  ${l_name.value}`;
    localStorage.setItem('name', `${u_name}`);
   
    let u_email = `${email.value}`;
    localStorage.setItem('email',`${u_email}`);

    let u_phone = `${phone_num.value}`;
    localStorage.setItem('phone_num',`${u_phone}`);


    let postal_address = `${p_addr.value}`;
    localStorage.setItem('postal-addr', `${postal_address}`);

   
    // transfering the values to cv.html

    // let name = document.getElementById('name-holder');
    // name.innerHTML += `${localStorage.getItem("name")}`;

    // let p_address = document.getElementById("postal-holder");
    // p_address.innerHTML += localStorage.getItem('postal-addr');

    // let p_number = document.getElementById('phone-holder');
    // p_number.innerHTML += localStorage.getItem('phone_num');

    // let p_email = document.getElementById('email-holder');
    // p_email.innerHTML += localStorage.getItem('emai');

    return true;
  }
  else{
    return false;
  }
}


