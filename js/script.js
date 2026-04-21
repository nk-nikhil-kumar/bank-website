/* 
   =================================================
   1. MOBILE MENU TOGGLE 
   (Phone par hamburger icon se menu open/close karna)
   =================================================
*/

// Hamburger menu wale element ko document me se uthao
const hamburgerMenu = document.getElementById('hamburgerMenu');

// Jab bhi Hamburger pe click(tab) ho
hamburgerMenu.addEventListener('click', function() {
    
    // navbar-links wale dibbe pakdo 
    const navLinks = document.getElementById('navLinks');
    
    // ClassList '.toggle' dekhega agar 'show' pehle se hain toh hta dga, varna add kar dega.
    // CSS me '.show' class hone par Mobile menu show ho jata h.
    navLinks.classList.toggle('show'); 
});


/* 
   =================================================
   2. ACCORDION (Drop downs open / close karna)
   (Niyam aur Rules ka tab logic)
   =================================================
*/

function toggleAccordion(clickedElement) {
    // clickedElement = Jis header pe user nai click kiya hai (Jaise "कर्जविषयक नियम")
    
    // Text body uss header  ke turant baad wala element hai, usko pakdo (Jaise <ul>, <ol>)
    const accordionBody = clickedElement.nextElementSibling;
    
    // Body array block par ".active" class toggle karein taaki Content ki height badhe(Khul jaaye) / Kam ho (Band ho jaaaye)
    accordionBody.classList.toggle('active');
    
    // Uske sath-sath header ko bhi .active class do taaki uska arrow animation ghum jaye (Up ⏶ to Down ⏷)
    clickedElement.classList.toggle('active');
}
