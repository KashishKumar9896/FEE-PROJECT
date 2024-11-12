// const sign_in_btn = document.querySelector("#sign-in-btn");
// const sign_up_btn = document.querySelector("#sign-up-btn");
// const container = document.querySelector(".container");

// sign_up_btn.addEventListener('click', () =>{
//     container.classList.add("sign-up-mode");
// });

// sign_in_btn.addEventListener('click', () =>{
//     container.classList.remove("sign-up-mode");
// });





// // Elements for toggling between Sign In and Sign Up modes
// const sign_in_btn = document.querySelector("#sign-in-btn");
// const sign_up_btn = document.querySelector("#sign-up-btn");
// const container = document.querySelector(".container");

// // Elements for forms and messages
// const registerForm = document.querySelector("#register-form");
// const loginForm = document.querySelector("#login-form");
// const message = document.querySelector("#message"); // For success/error messages

// // Toggle to Sign-Up Mode
// sign_up_btn.addEventListener('click', () => {
//     container.classList.add("sign-up-mode");
// });

// // Toggle to Sign-In Mode
// sign_in_btn.addEventListener('click', () => {
//     container.classList.remove("sign-up-mode");
// });

// // Handle Registration
// registerForm.addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevent form submission

//     // Get user input from registration form
//     const username = document.getElementById('reg-username').value;
//     const email = document.getElementById('reg-email').value;
//     const password = document.getElementById('reg-password').value;

//     // Create a user object
//     const user = {
//         username: username,
//         email: email,
//         password: password
//     };

//     // Save user to local storage using username as the key
//     localStorage.setItem(username, JSON.stringify(user));

//     // Show success message
//     message.innerText = "Registration successful!";
//     message.style.color = "green";

//     // Clear the form fields after registration
//     registerForm.reset();
// });

// // Handle Login
// loginForm.addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevent form submission

//     // Get user input from login form
//     const username = document.getElementById('login-username').value;
//     const password = document.getElementById('login-password').value;

//     // Retrieve user data from local storage
//     const userData = localStorage.getItem(username);
//     if (userData) {
//         const user = JSON.parse(userData);
        
//         // Check if the password matches
//         if (user.password === password) {
//             message.innerText = "Login successful!";
//             message.style.color = "green";

//             // Redirect to the dashboard or homepage (optional)
//             // window.location.href = 'dashboard.html'; // Uncomment and replace with your dashboard URL
//         } else {
//             message.innerText = "Invalid password!";
//             message.style.color = "red";
//         }
//     } else {
//         message.innerText = "User not found!";
//         message.style.color = "red";
//     }

//     // Clear the form fields after login
//     loginForm.reset();
// });





// // Elements for toggling between Sign In and Sign Up modes
// const sign_in_btn = document.querySelector("#sign-in-btn");
// const sign_up_btn = document.querySelector("#sign-up-btn");
// const container = document.querySelector(".container");

// // Elements for forms
// const registerForm = document.querySelector("#register-form");
// const loginForm = document.querySelector("#login-form");

// // Toggle to Sign-Up Mode
// sign_up_btn.addEventListener('click', () => {
//     container.classList.add("sign-up-mode");
// });

// // Toggle to Sign-In Mode
// sign_in_btn.addEventListener('click', () => {
//     container.classList.remove("sign-up-mode");
// });

// // Handle Registration
// registerForm.addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevent form submission

//     // Get user input from registration form
//     const username = document.getElementById('reg-username').value;
//     const email = document.getElementById('reg-email').value;
//     const password = document.getElementById('reg-password').value;

//     // Create a user object
//     const user = {
//         username: username,
//         email: email,
//         password: password
//     };

//     // Save user to local storage using username as the key
//     localStorage.setItem(username, JSON.stringify(user));

//     // Show success alert
//     alert("Registration successful!");

//     // Clear the form fields after registration
//     registerForm.reset();
// });

// // Handle Login
// loginForm.addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevent form submission

//     // Get user input from login form
//     const username = document.getElementById('login-username').value;
//     const password = document.getElementById('login-password').value;

//     // Retrieve user data from local storage
//     const userData = localStorage.getItem(username);
//     if (userData) {
//         const user = JSON.parse(userData);
        
//         // Check if the password matches
//         if (user.password === password) {
//             alert("Login successful!");  // Success pop-up message

//             // Redirect to the dashboard or homepage (optional)
//             // window.location.href = 'dashboard.html'; // Uncomment and replace with your dashboard URL
//         } else {
//             alert("Invalid password!");  // Error pop-up message
//         }
//     } else {
//         alert("User not found!");  // Error pop-up message
//     }

//     // Clear the form fields after login
//     loginForm.reset();
// });


// // Elements for toggling between Sign In and Sign Up modes
// const sign_in_btn = document.querySelector("#sign-in-btn");
// const sign_up_btn = document.querySelector("#sign-up-btn");
// const container = document.querySelector(".container");

// // Elements for forms
// const registerForm = document.querySelector("#register-form");
// const loginForm = document.querySelector("#login-form");

// // Elements for modal
// const modal = document.querySelector("#popup-modal");
// const popupMessage = document.querySelector("#popup-message");
// const closeBtn = document.querySelector(".close-btn");

// // Function to show modal with a message
// function showModal(message, color) {
//     popupMessage.innerText = message;
//     popupMessage.style.color = color;
//     modal.style.display = "block";
// }

// // Close modal when the close button is clicked
// closeBtn.addEventListener('click', () => {
//     modal.style.display = "none";
// });

// // Close modal when user clicks outside the modal
// window.addEventListener('click', (event) => {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// });

// // Toggle to Sign-Up Mode
// sign_up_btn.addEventListener('click', () => {
//     container.classList.add("sign-up-mode");
// });

// // Toggle to Sign-In Mode
// sign_in_btn.addEventListener('click', () => {
//     container.classList.remove("sign-up-mode");
// });

// // Handle Registration
// registerForm.addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevent form submission

//     // Get user input from registration form
//     const username = document.getElementById('reg-username').value;
//     const email = document.getElementById('reg-email').value;
//     const password = document.getElementById('reg-password').value;

//     // Create a user object
//     const user = {
//         username: username,
//         email: email,
//         password: password
//     };

//     // Save user to local storage using username as the key
//     localStorage.setItem(username, JSON.stringify(user));

//     // Show success message in modal
//     showModal("Registration successful!", "green");

//     // Clear the form fields after registration
//     registerForm.reset();
// });

// // Handle Login
// loginForm.addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevent form submission

//     // Get user input from login form
//     const username = document.getElementById('login-username').value;
//     const password = document.getElementById('login-password').value;

//     // Retrieve user data from local storage
//     const userData = localStorage.getItem(username);
//     if (userData) {
//         const user = JSON.parse(userData);
        
//         // Check if the password matches
//         if (user.password === password) {
//             showModal("Login successful!", "green");
//             // Optionally, redirect to dashboard
//         } else {
//             showModal("Invalid password!", "red");
//         }
//     } else {
//         showModal("User not found!", "red");
//     }

//     // Clear the form fields after login
//     loginForm.reset();
// });

// Elements for toggling between Sign In and Sign Up modes
const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

// Modal elements
const modal = document.querySelector("#popup-modal");
const popupMessage = document.querySelector("#popup-message");
const closeBtn = document.querySelector(".close-btn");

// Function to show modal with a message
function showModal(message, color) {
    popupMessage.innerText = message;
    popupMessage.style.color = color;
    modal.style.display = "block";
}

// Close modal when the close button is clicked
closeBtn.addEventListener('click', () => {
    modal.style.display = "none";
});

// Close modal when user clicks outside the modal
window.addEventListener('click', (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});

// Toggle to Sign-Up Mode
sign_up_btn.addEventListener('click', () => {
    container.classList.add("sign-up-mode");
});

// Toggle to Sign-In Mode
sign_in_btn.addEventListener('click', () => {
    container.classList.remove("sign-up-mode");
});

// Handle Registration
document.querySelector('.sign-up-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    // Get user input from registration form
    const username = document.querySelector('.sign-up-form input[type="text"]').value;
    const email = document.querySelector('.sign-up-form input[type="email"]').value;
    const password = document.querySelector('.sign-up-form input[type="password"]').value;

    // Check if the username already exists
    if (localStorage.getItem(username)) {
        showModal("Username already exists!", "red");
        return;
    }

    // Create a user object
    const user = {
        username: username,
        email: email,
        password: password
    };

    // Save user to local storage using username as the key
    localStorage.setItem(username, JSON.stringify(user));

    // Show success modal
    showModal("Registration successful!", "green");

    // Clear the form fields after registration
    document.querySelector('.sign-up-form').reset();
});

// Handle Login
document.querySelector('.sign-in-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    // Get user input from login form
    const username = document.querySelector('.sign-in-form input[type="text"]').value;
    const password = document.querySelector('.sign-in-form input[type="password"]').value;

    // Retrieve user data from local storage
    const userData = localStorage.getItem(username);

    if (userData) {
        const user = JSON.parse(userData);
        
        // Check if the password matches
        if (user.password === password) {
            showModal("Login successful!", "green");

            setTimeout(function() {
                window.location.href = "../ok/index.html"; // Replace with the actual path of your new page
            }, 2000);
            // Optionally, redirect to dashboard
            // window.location.href = 'dashboard.html';
        } else {
            showModal("Invalid password!", "red");
        }
    } else {
        showModal("User not found!", "red");
    }

    // Clear the form fields after login
    document.querySelector('.sign-in-form').reset();
});

  