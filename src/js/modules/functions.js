/* Проверка поддержки webp, добавление класса  webp  или no-webp   для  HTML */
export function isWebp(){
    //проверка поддержки webp
    function testWebp(callback) {
        let webP = new Image();
        webP.onload = webP.onerror = function () {
            callback(webP.height == 2);
        };
        webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQV1A41C4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    //добавление класса _webp или   _no-webp для HTML
    testWebp(function (support) {
        let className = support === true ? 'webp' : 'no-webp';
        document.documentElement.classList.add(className);
    })
}
const burger = document.querySelector('.header_burger');
    const menu = document.querySelector('.header_menu');

    burger.addEventListener('click', () => {
        menu.classList.toggle('header_menu-open')
})

$('.testimonials_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    Infinite:true,
    arrows: true,
    fade: true,
    asNavFor: '.testimonials_users'
  });
  $('.testimonials_users').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    Infinite:true,
    arrows: false,
    asNavFor: '.testimonials_slider',
    dots: false,
    centerMode: true,
    focusOnSelect: true
  });