
let toTop = document.querySelector('.top');
let links = document.querySelectorAll('.links a');
let sections = document.querySelectorAll('.section');
let menuIcons = document.querySelector('.menu-icons');
let link = document.querySelector('.header .links');
let text = document.querySelector('.about .read');
let readMore = document.querySelector('.about .readmore');
// burger 
menuIcons.onclick = () => {
    menuIcons.classList.toggle('bx-x');
    link.classList.toggle('active');
}

document.onscroll = () => {
    let header = document.querySelector('.header');
    header.classList.toggle("sticky", scrollY > 100);

    // remove toggle icon and navbar when click navbar links 
    menuIcons.classList.remove('bx-x');
    link.classList.remove('active');
};
// active 
window.onscroll = () => {
    sections.forEach((sec) => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if (top > offset && top < offset + height) {
            let links = document.querySelectorAll(".links a");
            links.forEach((link) => {
                link.classList.remove('active');
            })
            document.querySelector(`.links a[href*=${id}]`).classList.add('active');
            // active section for animation on scroll 
            sec.classList.add('show-animate');
        } else {
            sec.classList.remove('show-animate');
        }
    })
}

// to top 
toTop.onclick = function () {
    window.scrollTo({
        left: 0,
        top: 0,
    })
};

// read more 
readMore.onclick = () => {
    if (text.classList.contains('show')) {
        text.classList.remove('show');
        readMore.innerHTML = "Read more";
    } else {
        text.classList.add('show');
        readMore.innerHTML = "Read less";
    }
}

