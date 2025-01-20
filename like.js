'use strict';



// top
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