'use strict';

/**
 * element toggle function
 */

const elemToggleFunc = function (elem) { elem.classList.toggle("active"); }


  // Event listener for the Checkout button
  

/**
 * navbar variables
 */

const navbar = document.querySelector("[data-nav]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const overlay = document.querySelector("[data-overlay]");

const navElemArr = [navOpenBtn, navCloseBtn, overlay];

for (let i = 0; i < navElemArr.length; i++) {

  navElemArr[i].addEventListener("click", function () {
    elemToggleFunc(navbar);
    elemToggleFunc(overlay);
    elemToggleFunc(document.body);
  })

}



/**
 * go top
 */

const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  if (window.scrollY >= 800) {
    goTopBtn.classList.add("active");
  } else {
    goTopBtn.classList.remove("active");
  }

})

let totalAmount = 0;

        // Function to add the amount to the total
        function addAmount(amount) {
            totalAmount += amount;
            document.getElementById('ok').innerText = `$${totalAmount}`;
        }

        // Add event listeners for each button
        document.getElementById('but1').addEventListener('click', function() {
            addAmount(10);
        });

        document.getElementById('but2').addEventListener('click', function() {
            addAmount(10);
        });

        document.getElementById('but3').addEventListener('click', function() {
            addAmount(10);
        });

        document.getElementById('but4').addEventListener('click', function() {
            addAmount(8);
        });

        document.getElementById('but5').addEventListener('click', function() {
            addAmount(12);
        });

        document.getElementById('but6').addEventListener('click', function() {
            addAmount(7);
        });
        document.getElementById("checkoutBtn").addEventListener("click", function() {
          // Trigger the hidden Razorpay button inside the form
          document.getElementById("checkoutBtn").querySelector("script").click();
        });
         // Trigger the hidden Razorpay button when custom button is clicked
    

      