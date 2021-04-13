var cir1 = document.querySelector('.cir1')
var cir2 = document.querySelector('.cir2')
var close = document.querySelector('.close')
var smile = document.querySelector('.smile')
var img = document.querySelector('.img_container')
var info = document.querySelector('.info')
var a = document.querySelectorAll('.nav_container .li .a')
var line = document.querySelectorAll('.nav_container li .line')

cir2.setAttribute('onclick', 'img2_()');
cir1.setAttribute('onclick', 'img1_()');
close.setAttribute('onclick', 'close_()');

function img2_() {
    console.log('s');
    cir2.classList.add('anim');
    cir1.style.display = 'none';
    smile.style.display = 'none';
    close.style.display = 'block'


}

function img1_() {
    cir1.classList.add('anim');
    cir2.style.display = 'none';
    smile.style.display = 'none';
    console.log('s');
    close.style.display = 'block'
}

function close_() {
    cir2.classList.remove('anim');
    cir1.classList.remove('anim');
    cir1.style.display = 'block';
    cir2.style.display = 'block';
    smile.style.display = 'block';
    close.style.display = 'none'
}
document.body.onscroll = function() {
    let scroll = this.scrollY;
    let nav = document.querySelector('.nav');
    let a = document.querySelector('.nav_container');
    if (scroll > 80) {
        console.log(nav.classList)
        nav.classList.add('active');
        nav.classList.remove('des');
        a.classList.add('active');

    } else {
        nav.classList.remove('active');
        nav.classList.add('des');
        a.classList.remove('active');


    }
    if (scroll > 400) {
        img.classList.add('active');
        info.classList.add('active');
    } else {
        img.classList.remove('active')
        info.classList.remove('active')
    }
    console.log(scroll)



}