let navMobButton = document.querySelector('.nav-mob-button');
let navMob = document.querySelector('.nav');

navMobButton.onclick = () => {
    navMobButton.classList.toggle('open');
    navMob.classList.toggle('open');
}

let nav = document.querySelectorAll('.nav li');

nav.forEach(navLi => {
    navLi.addEventListener('click', function () {
        let currents = document.querySelector('.nav').querySelectorAll('.active');
        currents.forEach(current => current.classList.remove('active'));
        navLi.querySelector('a').classList.add('active');
    });
})


let links = document.querySelectorAll('a[href^="#"]');
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
                document.querySelector('#' + href).offsetTop -
                document.querySelector('.header').offsetHeight,
            behavior: 'smooth',
        });
    });
});
let servicesAllButton = document.querySelector('._services-all');
let servicesBlock = document.querySelector('.services-block');

servicesAllButton.onclick = () => {
    servicesBlock.classList.add('open');
    // servicesBlock.classList.toggle('open');
    // servicesAllButton.textContent.toggle('Скрыть дополнительные услуги Palitra Team');
}

// $(window).scroll(function(){
//     var $sections = $('section');
//     $sections.each(function(i,el){
//         var top  = $(el).offset().top-100;
//         var bottom = top +$(el).height();
//         var scroll = $(window).scrollTop();
//         var id = $(el).attr('id');
//         if( scroll > top && scroll < bottom){
//             $('a.active').removeClass('active');
//             $('a[href="#'+id+'"]').addClass('active');
//         }
//     })
// });
//
// let scroll = 0
//
// window.addEventListener('scroll', function() {
//     let blocks = document.querySelectorAll('section');
//     // console.log(blocks);
//     blocks.forEach(block => {
//         scroll = window.scrollY;
//         console.log('scroll ' + scroll);
//         if (scroll){
//             console.log(1);
//             return 0
//         }
//         // console.log('block '+ block);
//         let top = block.offsetTop;
//         // console.log('top ' + top);
//         let bottom = top + block.offsetHeight;
//         // console.log('bottom ' + bottom);
//
//
//         let id = block.id;
//         // console.log('id ' + id);
//         let newLinkActive = `a[href="#${id}"]`;
//         // console.log('new ' + newLinkActive);
//         // if( scroll > top && scroll < bottom){
//         //     links.querySelector('.active').classList.remove('active');
//         //     links.querySelector('newLinkActive').classList.add('active');
//         // }
//     });
// });

