const targetDate=new Date('2025-08-25T00:00:00')

function updateCountdown(){
    const currentDate= new Date();
    const timeDifference=targetDate-currentDate
    
    const days=Math.floor(timeDifference/(1000*60*60*24))
    
    const hours=Math.floor((timeDifference%(1000*60*60*24))/(1000*60*60))

    const minutes=Math.floor((timeDifference%(1000*60*60))/(1000*60))

    const seconds=Math.floor((timeDifference%(1000*60))/1000);

    document.getElementById('day').innerHTML=days
    document.getElementById('hour').innerHTML=hours
    document.getElementById('min').innerHTML=minutes
    document.getElementById('second').innerHTML=seconds

    setTimeout(updateCountdown,1000)
}

updateCountdown()

window.addEventListener('scroll', function() {
    const nav = document.querySelector('.nav');
    const main = document.querySelector('.main');
    const mainHeight = main.offsetHeight;  // Get the height of the main section

    if (window.scrollY > mainHeight) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

function showSidebar(){
    const sidebar=document.querySelector('.sidebar')
    sidebar.style.display='flex'
}
function hideSidebar(){
    const sidebar=document.querySelector('.sidebar')
    sidebar.style.display='none'
}

// Get all menu items
const menuItems = document.querySelectorAll('.navbar ul li');

// Check if any item already has the 'active' class when the page loads
let hasActiveClass = false;
menuItems.forEach(item => {
    if (item.classList.contains('active')) {
        hasActiveClass = true;
    }
});

// If no item has 'active', set it to Home by default
if (!hasActiveClass) {
    document.getElementById('Home').classList.add('active');
}

// Add click event listener to each menu item
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        // Remove 'active' class from all menu items
        menuItems.forEach(i => i.classList.remove('active'));

        // Add 'active' class to the clicked menu item
        item.classList.add('active');
    });
});

