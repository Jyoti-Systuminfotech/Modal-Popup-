$(function() {

// $('#exampleModalCenter').modal();


})

// const form = document.querySelector('.needs-validation');

// // Get the form fields
// const nameInput = form.querySelector('input[type="text"]');
// const emailInput = form.querySelector('input[type="email"]');
// const phoneInput = form.querySelector('input[type="tel"]');
// const dateInput = form.querySelector('input[type="date"]');
// const travelersInput = form.querySelector('input[type="number"]');
// const messageInput = form.querySelector('textarea');
// const checkInput = form.querySelector('input[type="checkbox"]');

// // Add an event listener for form submission
// form.addEventListener('submit', function (event) {
//   event.preventDefault();

//   // Validate the form fields
//   if (form.checkValidity() === false) {
// 	event.stopPropagation();
// 	form.classList.add('was-validated');
// 	return;
//   }
//   submitForm();
// });

// function submitForm() {
//   const formData = {
// 	name: nameInput.value.trim(),
// 	email: emailInput.value.trim(),
// 	phone: phoneInput.value.trim(),
// 	date: dateInput.value.trim(),
// 	travelers: travelersInput.value.trim(),
// 	message: messageInput.value.trim(),
// 	check: cInput.value.trim(),
//   };
//   console.log(formData);
//   form.reset();
//   form.classList.remove('was-validated');
// }


// function submitFeedback(event) {
// event.preventDefault(); // Prevent form submission

// // Fetch form values
// var name = document.getElementById('name').value;
// var email = document.getElementById('email').value;
// var phone = document.getElementById('phone').value;
// var date = document.getElementById('date').value;
// var travelers = document.getElementById('travelers').value;
// var check = document.getElementById('check').checked;
// var isValid = true;

// // Perform validation
// if (name.trim() === '') {
// 	Swal.fire('Error', 'Please enter your name.', 'error');
// 	isValid = false;
// 	return;
// }

// if (email.trim() === '') {
// 	Swal.fire('Error', 'Please enter your email address.', 'error');
// 	isValid = false;
// 	return;
// }

// if (phone.trim() === '') {
// 	Swal.fire('Error', 'Please enter your phone number.', 'error');
// 	isValid = false;
// 	return;
// }
// if (phone.length !== 10) {
// 	Swal.fire('Error', 'Please enter a correct phone number.', 'error');
// 	isValid = false;
// 	return;
// }

// if (date.trim() === '') {
// 	Swal.fire('Error', 'Please enter the date.', 'error');
// 	isValid = false;
// 	return;
// }

// if (!check) {
// 	Swal.fire('Error', 'Please agree to the terms and conditions.', 'error');
// 	isValid = false;
// 	return;
// }

// if (travelers.trim() === '') {
// 	Swal.fire('Error', 'Please enter the number of travelers.', 'error');
// 	isValid = false;
// 	return;
// }

// if (!isValid) {
// 	return;
// }

// // Show success message using SweetAlert
// Swal.fire('Thank you!', 'Thank you for your response!', 'success');
// document.getElementById('feedbackForm').reset();
// }

// document.getElementById('feedbackForm').addEventListener('submit', submitFeedback);

// const form = document.querySelector('.needs-validation');

//   // Get the form fields
//   const nameInput = form.querySelector('input[type="text"]');
//   const emailInput = form.querySelector('input[type="email"]');
//   const phoneInput = form.querySelector('input[type="tel"]');
//   const dateInput = form.querySelector('input[type="text"]');
//   const travelersInput = form.querySelector('input[type="number"]');

//   // Add an event listener for form submission
//   form.addEventListener('submit', function(event) {
//     event.preventDefault();

//     // Validate the form fields
//     if (form.checkValidity() === false) {
//       event.stopPropagation();
//       form.classList.add('was-validated');
//       return;
//     }
//     submitForm();
//   });

//   function submitForm() {
//     const formData = {
//       name: nameInput.value.trim(),
//       email: emailInput.value.trim(),
//       phone: phoneInput.value.trim(),
//       date: dateInput.value.trim(),
//       travelers: travelersInput.value.trim(),
//     };
//     console.log(formData);
//     form.reset();
//     form.classList.remove('was-validated');
//   }

// Function to handle form submission
function submitFeedback(event) {
	event.preventDefault(); // Prevent form submission
  
	// Fetch form values
	var name = document.getElementById('name').value;
	var email = document.getElementById('email').value;
	var phone = document.getElementById('phone').value;
	var date = document.getElementById('date').value;
	var travelers = document.getElementById('travelers').value;
	var check = document.getElementById('check').checked;
	const closeButton = document.querySelector('closeButton');
	var isValid=true;
  
	// Perform validation
	if (name.trim() === '') {
	  alert('Please enter your name.');
	  isValid = false;
	  return;
	}
  
	if (email.trim() === '') {
	  alert('Please enter your email address.');
	  // return;
	  isValid = false;
	  return;
	}
  
	if (phone.trim() === '') {
	  alert('Please enter your phone number.');
	  // return;
	  isValid = false;
	  return;
	}
	if (phone.length!==10){
	  alert('Please enter correct phone number.');
	  // return;
	  isValid = false;
	  return;
	}
  
	if (date.trim() === '') {
	  alert('Please enter the date.');
	  // return;
	  isValid = false;
	  return;
	}
	if (!check) {
	  alert('Please agree to the terms and conditions.');
	  isValid = false;
	  return;
	}
  
	if (travelers.trim() === '') {
	  alert('Please enter the number of travelers.');
	  // return;
	  isValid = false;
	  return;
	}
	if (!isValid) {
	  return;
	}
  
	// Form is valid, perform further actions (e.g., submit the form)
	alert('Thank you for your response!');
	document.getElementById('feedbackForm').reset();
  }
  // Add event listener to form submission
  document.getElementById('feedbackForm').addEventListener('submit', submitFeedback);
  
  var closeButton = document.getElementById('closeButton');
  closeButton.addEventListener('click', function() {
	// Handle close button click event
	var container = document.querySelector('.container');
	container.style.display = 'none';
  });