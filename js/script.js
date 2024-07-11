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
    spaceBetween: 1,
    
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



//Blog sammury slider for mobile
function changeToSliderForMobile(){
    const blogSummarySection = document.querySelector('.blog-summary-slider-section')

    if (typeof(blogSummarySection) != 'undefined' && blogSummarySection != null && window.innerWidth < 768){
        const blogSumWrapper = blogSummarySection.querySelector('.blog-summary-wrapper')
        const blogSumList = blogSummarySection.querySelector('.blog-summary-list')
        const blogSumItems = blogSummarySection.querySelectorAll('.summary-item')

        blogSumWrapper.classList.add('swiper')
        blogSumWrapper.classList.add('swiper-2')

        blogSumList.classList.add('swiper-wrapper')

        blogSumItems.forEach((item) => {
            item.classList.add('swiper-slide')
        })

        const swiper2 = new Swiper('.swiper-2', {
            //loop: true,
            slidesPerView: 1,
            spaceBetween: 1,
            
            navigation: {
              nextEl:  '.bl-right-arrow',
              prevEl: '.bl-left-arrow',
            },
          });
    }

}

window.addEventListener('DOMContentLoaded', changeToSliderForMobile);
window.addEventListener('resize', changeToSliderForMobile);

//Services slider one
const swiper4 = new Swiper('.swiper-service-1', {
    //loop: true,
    slidesPerView: 1,
    spaceBetween: 1,
    
    navigation: {
      nextEl:  '.serv-right-arrow-1',
      prevEl: '.serv-left-arrow-1',
    },

    breakpoints: {
        
        768: {
          slidesPerView: 3,
          spaceBetween: 1,
        },
        
      }
  });

  //Services slider two
const swiper5 = new Swiper('.swiper-service-2', {
    //loop: true,
    slidesPerView: 1,
    spaceBetween: 1,
    
    navigation: {
      nextEl:  '.serv-right-arrow-2',
      prevEl: '.serv-left-arrow-2',
    },

    breakpoints: {
        
        768: {
          slidesPerView: 3,
          spaceBetween: 1,
        },
        
      }
  });

  //Services slider three
const swiper6 = new Swiper('.swiper-service-3', {
    //loop: true,
    slidesPerView: 1,
    spaceBetween: 1,
    
    navigation: {
      nextEl:  '.serv-right-arrow-3',
      prevEl: '.serv-left-arrow-3',
    },

    breakpoints: {
        
        768: {
          slidesPerView: 3,
          spaceBetween: 1,
        },
        
      }
  });

   //Services slider four
const swiper7 = new Swiper('.swiper-service-4', {
    //loop: true,
    slidesPerView: 1,
    spaceBetween: 1,
    
    navigation: {
      nextEl:  '.serv-right-arrow-4',
      prevEl: '.serv-left-arrow-4',
    },

    breakpoints: {
        
        768: {
          slidesPerView: 3,
          spaceBetween: 1,
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
    if ($('.info-blocks').length) {
        // Open the first item and set it as active
        var $firstInfoBlock = $('.info-blocks .info-bl:first');
        $firstInfoBlock.find('.info-content').show();
        $firstInfoBlock.addClass('active');

        // Add click event listener
        $('.info-bl h4').on('click', function () {
            var $currentInfoBlock = $(this).closest('.info-bl');
            var $currentInfoContent = $currentInfoBlock.find('.info-content');
            var $currentInfoBl = $(this).closest('.info-bl');

            // If the current block is already active, just toggle it
            if ($currentInfoBl.hasClass('active')) {
                $currentInfoContent.slideToggle();
                $currentInfoBl.toggleClass('active');
            } else {
                // Close all other blocks and remove their active class
                $('.info-bl .info-content').slideUp();
                $('.info-bl').removeClass('active');

                // Open the current block and set it as active
                $currentInfoContent.slideDown();
                $currentInfoBl.addClass('active');
            }
        });
    }

    if ($('.faq-block').length) {
        // Add click event listener
        $('.faq-item h4.title').on('click', function () {
            var $currentFaqItem = $(this).closest('.faq-item');
            var $currentFaqContent = $currentFaqItem.find('.faq-content');

            // If the current item is already active, just toggle it
            if ($currentFaqItem.hasClass('active')) {
                $currentFaqContent.slideToggle();
                $currentFaqItem.toggleClass('active');
            } else {
                // Close all other items and remove their active class
                $('.faq-item .faq-content').slideUp();
                $('.faq-item').removeClass('active');

                // Open the current item and set it as active
                $currentFaqContent.slideDown();
                $currentFaqItem.addClass('active');
            }
        });
    }

});