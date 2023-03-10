const mobileOpenMenuBtn = document.getElementById("mobile-open-menu_btn");
const mobileCloseMenuBtn = document.getElementById("mobile-close-menu_btn");
const headerNav = document.getElementById("header-nav");
const mobileBg = document.body

//Showing Mobile Menu When the Open Menu Btn is clicked
mobileOpenMenuBtn.addEventListener('click', openMenu)
function openMenu(){
    headerNav.style.display = 'block';
    mobileOpenMenuBtn.style.display = 'none';
    mobileCloseMenuBtn.style.display = 'block'
    mobileBg.classList.add('mobile-bg')
}

//Closing Mobile Menu when the close btn is clicked
mobileCloseMenuBtn.addEventListener('click', closMenu);
function closMenu(){
    headerNav.style.display = 'none';
    mobileOpenMenuBtn.style.display = 'block';
    mobileCloseMenuBtn.style.display = 'none';
    mobileBg.classList.remove('mobile-bg')
}