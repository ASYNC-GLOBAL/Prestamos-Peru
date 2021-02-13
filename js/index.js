let infoNegocioContainer = document.getElementById('info-negocio-container')
let infoNegocioValor = document.querySelectorAll('.info-negocio-valor')
let personContainer = document.getElementById('person-container');
let flagContador = false;


eventFunction();


function eventFunction() {
    window.addEventListener('scroll', scrollPersonaContador)
    window.addEventListener('scroll', scrollInfoNegocio)
}



function scrollPersonaContador() {
    let scrollPersonContainer = personContainer.offsetTop;
    if (scrollPersonContainer - 450 < scrollY()) {
        if (flagContador != true) {
            contador();
            flagContador = true;
        }

    }
}

function scrollInfoNegocio() {

    for (let i = 0; i < infoNegocioValor.length; i++) {
        scrollInfoNegocioValor = infoNegocioValor[i].offsetTop
        if (scrollInfoNegocioValor - 600 < scrollY()) {
            infoNegocioValor[i].style.opacity = 1
            infoNegocioValor[i].classList.add('slide-scale');
        }
    }
}


function scrollY() {
    return document.documentElement.scrollTop;
}



/********** CONTADOR PARA EL NUMERO DE CLIENTES********** */

function contador() {
    const counters = document.querySelectorAll('.counter');
    const speed = 400;
    let count = 0;
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const inc = target / speed;
            if (count < target) {
                count += inc;
                counter.innerHTML = addCommas(count)
                setTimeout(updateCount, 1);
            } else {
                counter.innerHTML = addCommas(target);
            }
        };
        updateCount();
    });
}


function addCommas(nStr) {
    nStr += '';
    x = nStr.split('.');
    x1 = x[0];
    x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    return x1 + x2;
}

/* SWIPER */

var mySwiper = new Swiper('.swiper-container', {
    speed: 400,
    spaceBetween: 20,
    centeredSlides: true,
    centeredSlidesBounds: true,
    slidesPerView: 'auto',
    loopedSlides: 3,


    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
})