function toggleMenu() {
    const menu = document.querySelector('.navbar-menu');
    const body = document.body;

    menu.classList.toggle('show'); 

    if (menu.classList.contains('show')) {
        body.classList.add('no-scroll'); 
    } else {
        body.classList.remove('no-scroll'); 
    }
}



document.querySelector('.backdrop').addEventListener('click', function() {
    const menu = document.querySelector('.navbar-menu');
    const backdrop = document.querySelector('.backdrop');
    menu.classList.remove('show');
    backdrop.classList.remove('show');
    document.body.style.overflow = 'auto';  
});

function toggleMenu() {
    const menu = document.querySelector('.navbar-menu');
    const backdrop = document.querySelector('.backdrop');
    menu.classList.toggle('show');
    
    if (menu.classList.contains('show')) {
        document.body.style.overflow = 'hidden';
        backdrop.classList.add('show');
    } else {
        document.body.style.overflow = 'auto';
        backdrop.classList.remove('show');
    }
}

