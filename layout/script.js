let trip = document.querySelectorAll('.pick__trip');
let Btnmenu = document.querySelector('.btn_menu');
trip.forEach(function (element) {
    element.addEventListener('click',  MenuCheked) ;
    })

//      function MenuCheked() {
      
//      };
//      Btnmenu.addEventListener('click', OpenMenu);
//      let Menu = document.querySelector('.menu__block');

//       function OpenMenu() {
//         Menu.style.display = 'block';
//       }

//       function CloseMenu() {
// let target = event.target;

//         if (target.classList!= ".menu__block" || Menu.style.display == 'block' ) {
//             Menu.style.display = 'none';
//         }
//       }