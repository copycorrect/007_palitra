const d = document;

let navMobButton = d.querySelector('.nav-mob-button');
let navMob = d.querySelector('.nav');

navMobButton.onclick = () => {
    navMobButton.classList.toggle('open');
    navMob.classList.toggle('open');
    linkActive();
}

let nav = d.querySelectorAll('.nav li');

let linkActive = () =>{
    nav.forEach(navLi => {
        navLi.addEventListener('click', function () {
            let currents = d.querySelector('.nav').querySelectorAll('.active');
            currents.forEach(current => current.classList.remove('active'));
            navLi.querySelector('a').classList.add('active');
            navMobButton.classList.remove('open');
            navMob.classList.remove('open');
        });
    })
}
linkActive();

let links = d.querySelectorAll('a[href^="#"]');
links.forEach(link => {
    // console.log(link);
    link.addEventListener('click', function (e) {
        e.preventDefault();
        links.forEach(current => current.classList.remove('active'));
        link.classList.add('active');

        let href = link.getAttribute('href').substring(1);
        if (!href) {
            return 0
        }
        window.scrollTo({
            top:
                d.querySelector('#' + href).offsetTop -
                d.querySelector('.header').offsetHeight,
            behavior: 'smooth',
        });
    });
});
let servicesAllButton = d.querySelector('._services-all');
let servicesBlock = d.querySelector('.services-block');

servicesAllButton.onclick = () => {
    // servicesBlock.classList.add('open');
    servicesBlock.classList.toggle('open');
    // servicesAllButton.textContent.toggle('Скрыть дополнительные услуги Palitra Team');
}

let blocks = d.querySelectorAll('section');
let header = d.querySelector('.header');

window.addEventListener('scroll', function() {

    let scroll = window.scrollY;

    for (let i = 0; i < blocks.length; i++) {

        let block = blocks[i];
        let top = block.offsetTop - header.offsetHeight;
        let bottom = block.offsetTop + block.offsetHeight;

        if (scroll > top && scroll < bottom) {

            let isDark = block.classList.contains('bg-dark');

            if (!isDark){
                header.style.backgroundColor = 'gray';
            } else {
                header.style.backgroundColor = 'black';
            }

            // console.log(isDark);


            // console.log(newLinkActive);
            // links.querySelector('.active').classList.remove('active');
            // links.querySelector('newLinkActive').classList.add('active');
        }
    }
});

