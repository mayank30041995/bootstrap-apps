/*
Template Name: Twito - Landing Page Template
Author: Themesdesign
Version: 1.0.0
Website: https://themesdesign.in/
Contact: Themesdesign@gmail.com
File: Main Js File
*/

//  Window scroll sticky class add
function initStickyNavbar() {
    function windowScroll() {
        var navbar = document.getElementById("navbar");
        if (navbar) {
            if (document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50) {
                navbar.classList.add("is-sticky");
            } else {
                navbar.classList.remove("is-sticky");
            }
        }
    }

    // Use DOMContentLoaded event to ensure the DOM is fully loaded
    document.addEventListener('DOMContentLoaded', function () {
        window.addEventListener('scroll', function (ev) {
            ev.preventDefault();
            windowScroll();
        });
    });
}

// Call the function to initialize the script
initStickyNavbar();



var swiper = new Swiper(".feedback-slider", {
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

//active menu 
const toggleButton1 = document.querySelector('.navbar-toggale-button button ');
const navbarMenu1 = document.querySelector('.navbar-menu');
toggleButton1.addEventListener('click', () => {
    // Toggle the 'hidden' class on the .navbar-menu element for the first set of menus
    navbarMenu1.classList.toggle('hidden');
});

document.addEventListener("DOMContentLoaded", function () {
    const menuItems = document.querySelectorAll('.navbar-menu a');

    menuItems.forEach(item => {
        item.addEventListener('click', function () {
            const parentId = item.parentElement.parentElement.getAttribute('id');

            if (parentId) {
                const parentContainer = document.getElementById(parentId);

                if (parentContainer) {
                    console.log('+++ parentContainer', parentContainer);
                    const linksInsideContainer = parentContainer.querySelectorAll('li a.id');

                    linksInsideContainer.forEach(link => {
                        link.classList.remove('active');
                    });
                }
            }

            // Add 'active' class to the clicked link
            this.classList.add('active');
        });
    });

});


//
/********************* scroll top js ************************/
//

var backToTopButton = document.getElementById("back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (
        document.body.scrollTop > 50 ||
        document.documentElement.scrollTop > 50
    ) {
        backToTopButton.style.opacity = "1";
    } else {
        backToTopButton.style.opacity = "0";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
document.querySelector("#back-to-top").addEventListener("click", () => {
    topFunction()
})

document.addEventListener('DOMContentLoaded', function () {
    'use strict';

    document.querySelectorAll('#navbar7 .dropdown-item').forEach(function (menuItem) {

        if (menuItem.href == window.location.href) {
            console.log('+++ menuItem', menuItem);
            menuItem.classList.add('active');
           
        }
    });
});


// Dark/Light Mode Toggle
let darkModeButton = document.getElementById("modeSetting");
let isDarkMode = sessionStorage.getItem('darkMode') === 'true' || false;

function updateDarkButtonIcon() {
    darkModeButton.innerHTML = isDarkMode ? `<i class="ri-sun-line"></i>` : `<i class="ri-moon-fill"></i>`;
}

darkModeButton.addEventListener("click", function () {
    isDarkMode = !isDarkMode;
    document.documentElement.setAttribute("data-mode", isDarkMode ? "dark" : "light");
    sessionStorage.setItem('darkMode', isDarkMode.toString());
    updateDarkButtonIcon()
});

// Right-to-Left (RTL) Mode Toggle
let rtlModeButton = document.getElementById("rtlSetting");
// let isRTLMode = sessionStorage.getItem('rtlMode') === 'true' || false;
let isRTLMode = document.documentElement.getAttribute("dir") || sessionStorage.getItem('rtlMode');

// Function to update button text based on RTL mode
function updateButtonText() {
    rtlModeButton.innerText = isRTLMode ? "LTR" : "RTL";
}

rtlModeButton.addEventListener("click", function () {
    isRTLMode = !isRTLMode;
    document.documentElement.setAttribute("dir", isRTLMode ? "rtl" : "ltr");
    sessionStorage.setItem('rtlMode', isRTLMode.toString());
    updateButtonText()
});

// document.documentElement.setAttribute("data-mode", isDarkMode ? "dark" : "light");
// document.documentElement.setAttribute("dir", isRTLMode ? "rtl" : "ltr");

// updateButtonText()
updateDarkButtonIcon()

function init() {
    
    if (sessionStorage.getItem('rtlMode')) {
        if (document.documentElement.getAttribute("dir") != sessionStorage.getItem('rtlMode')) {
            isRTLMode = document.documentElement.getAttribute("dir");
            sessionStorage.setItem('rtlMode', isRTLMode)
        }
    } else if (document.documentElement.getAttribute("dir")) {
        isRTLMode = document.documentElement.getAttribute("dir")
        sessionStorage.setItem('rtlMode', isRTLMode)
    } else {
        isRTLMode = "ltr"
    }
    
    if (sessionStorage.getItem('rtlMode')) {
        if (document.documentElement.getAttribute("dir") != sessionStorage.getItem('data-mode')) {
            isDarkMode = document.documentElement.getAttribute("dir");
            sessionStorage.setItem('data-mode', isDarkMode)
        }
    } else if (document.documentElement.getAttribute("data-mode")) {
        isDarkMode = document.documentElement.getAttribute("data-mode")
        sessionStorage.setItem('data-mode', isDarkMode)
    } else {
        isDarkMode = "ltr"
    }
}



init();
