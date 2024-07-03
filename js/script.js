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

