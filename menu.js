'use strict';
{
  const menubtn = document.getElementById('menu-btn');
  const hamburger = document.querySelectorAll('.text a');
  const hamA =Array.from(hamburger);
  hamA.forEach(function(element){
    element.addEventListener('click',function(){
      menubtn.checked = false
    })
  })
}

// {
//   const open = document.getElementById('open');
//   const overlay = document.querySelector('.overlay');
//   const close = document.querySelector('.close');

//   open.addEventListener('click', () => {
//     overlay.classList.add('show');
//     open.classList.add('hide');
//   });
//   close.addEventListener('click', () => {
//     overlay.classList.remove('show');
//     open.classList.remove('hide');
//   });
// }