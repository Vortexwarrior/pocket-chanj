// I couldn't comment on the files, so I'm commenting here to say that I 
// nested the js directory inside public to follow MVC structure
// I did not change any of the code. 

// JV ---- LOGIN FORM HANDLER 
const loginFormHandler = async (event) => {
    event.preventDefault();
  
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    if (email && password) {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // if succcessful, redirect the broswer to the profile page
        document.location.replace('/chart');
      } else {
        alert('Failed to log in');
      }
    }
  };
  
// JV ---- SIGNUP FORM HANDLER 
// const signupFormHandler = async (event) => {
//   event.preventDefault();

//   const name = document.querySelector('#name-signup').value.trim();
//   const email = document.querySelector('#email-signup').value.trim();
//   const password = document.querySelector('#password-signup').value.trim();

//   if (name && email && password) {
//       const response = await fetch('/api/users', {
//         method: 'POST',
//         body: JSON.stringify({ name, email, password }),
//         headers: { 'Content-Type': 'application/json' },
//       });

//       if (response.ok) {
//           document.location.replace('/chart');
//       } else {
//         alert(response.statusText);
//       }
//   }
// };

document
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler);

// document
//     .querySelector('.signup-form')
//     .addEventListener('submit', signupFormHandler);
