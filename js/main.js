'use strict';

{
  const open = document.getElementById('open');
  const overlay = document.querySelector('.overlay');
  const close = document.querySelector('.close');

  open.addEventListener('click', () => {
    overlay.classList.add('show');
    open.classList.add('hide');
  });
  close.addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
  });
}
{
  function scrollCallback(entries){
    entries.forEach(entry => {
      if(!entry.isIntersecting){
        header.classList.add('scrolled');
        toTop.classList.add('scrolled');
      }else{
        header.classList.remove('scrolled');
        toTop.classList.remove('scrolled');
      }
    });
  }
  const toTop = document.getElementById('to_top');
  toTop.addEventListener('click', e =>{
    e.preventDefault(); 
    window.scrollTo({
      top:0,
      behavior:"smooth",
    });
  });
  const header = document.querySelector('header');
  const scrollObserver = new IntersectionObserver(scrollCallback);
  scrollObserver.observe(document.getElementById('target-2'));
}
// カルーセル
{
  
}

//preventDefaultはデフォルト動作を防ぐ