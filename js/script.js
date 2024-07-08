//tabs
function changeTab(tab) {
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => {
        content.classList.remove('active');
        if (content.id === 'tab-' + tab) {
            content.classList.add('active');
        }
    });
}

function setActiveLink(activeLink) {
    const links = document.querySelectorAll('.tab-button');
    links.forEach(link => {
        link.classList.remove('active');
    });
    activeLink.classList.add('active');
}

document.addEventListener('DOMContentLoaded', function () {
    const tabButtons = document.querySelectorAll('.tab-button');

    tabButtons.forEach(button => {
        button.addEventListener('click', function () {
            event.preventDefault(); 
            const tab = this.getAttribute('data-tab');
            changeTab(tab);
            setActiveLink(this);
        });
    });

    changeTab(1); 
    setActiveLink(document.querySelector('.tab-button[data-tab="1"]'));
});


//set left margin to section with outside image

/*function updateMargin() {
    const outsideImageSection = document.querySelector('.outside-image-section');

    let closestSection = outsideImageSection.previousElementSibling;
   
    if (!closestSection || closestSection.tagName !== 'SECTION') {
        closestSection = outsideImageSection.nextElementSibling;
    }

    if (closestSection && closestSection.tagName === 'SECTION') {
        const parentContentWrapper = closestSection.querySelector('.content-wrapper');
        if (parentContentWrapper) {
            const parentMarginLeft = window.getComputedStyle(parentContentWrapper).marginLeft;
            const childContentWrapper = outsideImageSection.querySelector('.content-wrapper');

            if (childContentWrapper) {
                childContentWrapper.style.marginLeft = parentMarginLeft;
            } 
        } 
    } 
}

window.addEventListener('DOMContentLoaded', updateMargin);
window.addEventListener('resize', updateMargin);*/


function updateMargin() {
    const leftMarginSections = document.querySelectorAll('.cs-left-margin');

    leftMarginSections.forEach(leftMarginSection => {
        let closestSection = leftMarginSection.previousElementSibling;

        if (!closestSection || closestSection.tagName !== 'SECTION') {
            closestSection = leftMarginSection.nextElementSibling;
        }

        if (closestSection && closestSection.tagName === 'SECTION') {
            const parentContentWrapper = closestSection.querySelector('.content-wrapper');
            if (parentContentWrapper) {
                const parentMarginLeft = window.getComputedStyle(parentContentWrapper).marginLeft;
                //const childContentWrapper = leftMarginSection.querySelector('.content-wrapper');
                const childContentWrapper = leftMarginSection.querySelector('.content .text-wrapper');

                if (childContentWrapper) {
                    //childContentWrapper.style.marginLeft = parentMarginLeft;
                    childContentWrapper.style.paddingLeft = parentMarginLeft;
                } 
            } 
        }
    });
}

window.addEventListener('DOMContentLoaded', updateMargin);
window.addEventListener('resize', updateMargin);


//Testimonials swiper
const swiper2 = new Swiper('.swiper-2', {
    //loop: true,
    slidesPerView: 1,
    spaceBetween: 0,
    
    navigation: {
      nextEl: '.cs-right-arrow',
      prevEl: '.cs-left-arrow',
    },

    breakpoints: {
        
        768: {
          slidesPerView: 2.2,
          spaceBetween: 0,
        },
        
      }
  });

  //Locations slider
  const swiper3 = new Swiper('.swiper-3', {
    //loop: true,
    slidesPerView: 1,
    spaceBetween: 0,
    
    navigation: {
      nextEl:  '.loc-right-arrow',
      prevEl: '.loc-left-arrow',
    },

    breakpoints: {
        
        768: {
          slidesPerView: 4,
          spaceBetween: 0,
        },
        
      }
  });

  //new
$(document).ready(function () {
    $('.bio-read').on('click', function () {
        // Find the closest .bio-slide container
        var slide = $(this).closest('.bio-slide');

        // Find the .bio-desc element within the closest .bio-slide and toggle its visibility
        slide.find('.bio-desc').slideToggle();

        // Toggle the .open class for the .bio-read element
        $(this).toggleClass('open');
    });
});