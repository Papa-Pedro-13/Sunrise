$(function () {

  document.addEventListener('click', function (e) {

    //Всплывающия форма(попап)
    let close = document.querySelector('.popup__close');


    if (e.target == close) {
      e.preventDefault()
      let popup = document.querySelector('.popup');
      popup.setAttribute('style', 'opacity:0; visibility: hidden;');

      let body = document.querySelector('body');
      body.setAttribute('style', 'overflow-y: scroll;');
    }

    let popOpen = document.querySelectorAll('.popup__link');

    popOpen.forEach((el) => {
      if (e.target == el) {

        let popup = document.querySelector('.popup');
        popup.setAttribute('style', 'opacity:1; visibility: visible;');

        let body = document.querySelector('body');
        body.setAttribute('style', 'overflow-y: hidden;');
      }
    })
    let popup = document.querySelector('.popup');
    if (e.target == popup) {
      let popup = document.querySelector('.popup');
      popup.setAttribute('style', 'opacity:0; visibility: hidden;');

      let body = document.querySelector('body');
      body.setAttribute('style', 'overflow-y: scroll;');
    }


    //Бургер меню
    let burger = document.querySelector('.header__burger');
    let span = document.querySelector('.header__burger span');
    if ((e.target == burger || e.target == span) && !(burger.classList.contains('header__burger--active'))) {
      burger.classList.add('header__burger--active');
      let menu = document.querySelector('.header__burger-menu');
      menu.classList.add('header__burger-menu--active');
    }
    else if ((e.target == burger || e.target == span) && (burger.classList.contains('header__burger--active'))) {
      burger.classList.remove('header__burger--active');
      let menu = document.querySelector('.header__burger-menu');
      menu.classList.remove('header__burger-menu--active');
    }


  });
})