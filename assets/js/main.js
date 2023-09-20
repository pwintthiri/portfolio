/*==================== CAROUSELL SLIDER ====================*/ 
const prevButton = document.getElementById('prev-btn');
const nextButton = document.getElementById('next-btn');
const radios = document.querySelectorAll('input[name="slider"]');

let currSlide = 0;


prevButton.addEventListener('click', () => {
    // current slide is no longer checked
    radios[currSlide].checked = false;
    // if currSlide is at 0, update it to the last slide when prev btn is clicked
    if (currSlide === 0) {
        currSlide = radios.length - 1;
    } else {
        currSlide = (currSlide - 1) % (radios.length);
    }
    radios[currSlide].checked = true;
});

nextButton.addEventListener('click', () => {
    // current slide is no longer checked
    radios[currSlide].checked = false;
    // update current slide to current slide + 1, then set that slide to checked
    currSlide = (currSlide + 1) % (radios.length);
    radios[currSlide].checked = true;
});


/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme-button');
const profilePhoto = document.getElementById('profile-photo');
const darkTheme = 'dark-theme';
const iconTheme = 'uil-sun';

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
  profilePhoto.src = selectedTheme === 'dark' ? 'assets/img/myPhotoDark.svg' : 'assets/img/myPhotoLight.svg';
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    console.log(navToggle.classList)
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // Change profile photo theme
    profilePhoto.src = getCurrentTheme() === 'dark' ? 'assets/img/myPhotoDark.svg' : 'assets/img/myPhotoLight.svg';
    
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*==================== MENU SHOW AND HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu')
const navToggle = document.getElementById('nav-toggle')

/* Add a click event listener to toggle the menu and change the icon */
navToggle.addEventListener('click', () => {
    console.log("sec", navToggle.classList)
    navMenu.classList.toggle('show-menu'); // Toggle the menu's visibility
    navToggle.classList.toggle('uil-times');
     // Toggle the icon from bars to times (and vice versa)
});


/*==================== REMOVE MENU MOBILE ====================*/
const navItem = document.querySelectorAll('li.nav-item')

function linkAction(){
    const navMenu = document.getElementById('nav-menu');
    // when we click on each nav-item, we remove the show-menu class
    navMenu.classList.remove('show-menu');
    navToggle.classList.toggle('uil-times');
}
navItem.forEach(n => n.addEventListener('click', linkAction))

/*==================== GALLERY MODAL ====================*/
const modal_elements = document.getElementsByClassName('modal-container');
const gallery_items = document.getElementsByClassName('gallery-item');
const close_buttons = document.getElementsByClassName('close-btn');

for (let i = 0; i < modal_elements.length; i++) {
    const modal_element = modal_elements[i];
    const gallery_item = gallery_items[i];
    const close_button = close_buttons[i];

    gallery_item.addEventListener('click', () => {
        modal_element.classList.add('show');
    })
    close_button.addEventListener('click', () => {
        modal_element.classList.remove('show');
    })  
}