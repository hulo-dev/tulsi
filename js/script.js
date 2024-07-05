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