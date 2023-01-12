const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const {
    elements: {email, password},
  } = event.currentTarget;

  if (email.value === '' || password.value === '') {
    return alert('Усі поля повинні бути заповнені!');
  }

  const formData = {
    email: email.value,
    password: password.value,
  };

  console.log(formData);
  event.currentTarget.reset();
};