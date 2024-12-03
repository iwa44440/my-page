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
{
  function callback(entries, obs){
    entries.forEach(entry => {
      if(!entry.isIntersecting){
        return;
      }
      entry.target.classList.add("appear");
      console.log(entry.target);
      obs.unobserve(entry.target);
    });
  }
  const option ={
    threshold:0.2,
  };
  const observer = new IntersectionObserver(callback, option);
  const targets = document.querySelectorAll(".animate");
  targets.forEach(target =>{
    observer.observe(target);
  });
}
//PCモータルウインドウ
{
  const op1 = document.getElementById('op1');
  const cl1 = document.getElementById('cl1');
  const mo1 = document.getElementById('mo1');
  const mask = document.getElementById('mask');

  op1.addEventListener('click', () => {
    mo1.classList.remove('hidden');
    mask.classList.remove('hidden');
  });

  cl1.addEventListener('click', () => {
    mo1.classList.add('hidden');
    mask.classList.add('hidden');
  });

  mask.addEventListener('click', () => {
    // modal.classList.add('hidden');
    // mask.classList.add('hidden');
    cl1.click();
  });
}
{
  const op2 = document.getElementById('op2');
  const cl2 = document.getElementById('cl2');
  const mo2 = document.getElementById('mo2');
  const mask = document.getElementById('mask');

  op2.addEventListener('click', () => {
    mo2.classList.remove('hidden');
    mask.classList.remove('hidden');
  });

  cl2.addEventListener('click', () => {
    mo2.classList.add('hidden');
    mask.classList.add('hidden');
  });

  mask.addEventListener('click', () => {
    // modal.classList.add('hidden');
    // mask.classList.add('hidden');
    cl2.click();
  });
}
{
  const op3 = document.getElementById('op3');
  const cl3 = document.getElementById('cl3');
  const mo3 = document.getElementById('mo3');
  const mask = document.getElementById('mask');

  op3.addEventListener('click', () => {
    mo3.classList.remove('hidden');
    mask.classList.remove('hidden');
  });

  cl3.addEventListener('click', () => {
    mo3.classList.add('hidden');
    mask.classList.add('hidden');
  });

  mask.addEventListener('click', () => {
    // modal.classList.add('hidden');
    // mask.classList.add('hidden');
    cl3.click();
  });
}
{
  const op4 = document.getElementById('op4');
  const cl4 = document.getElementById('cl4');
  const mo4 = document.getElementById('mo4');
  const mask = document.getElementById('mask');

  op4.addEventListener('click', () => {
    mo4.classList.remove('hidden');
    mask.classList.remove('hidden');
  });

  cl4.addEventListener('click', () => {
    mo4.classList.add('hidden');
    mask.classList.add('hidden');
  });

  mask.addEventListener('click', () => {
    // modal.classList.add('hidden');
    // mask.classList.add('hidden');
    cl4.click();
  });
}
{
  const op5 = document.getElementById('op5');
  const cl5 = document.getElementById('cl5');
  const mo5 = document.getElementById('mo5');
  const mask = document.getElementById('mask');

  op5.addEventListener('click', () => {
    mo5.classList.remove('hidden');
    mask.classList.remove('hidden');
  });

  cl5.addEventListener('click', () => {
    mo5.classList.add('hidden');
    mask.classList.add('hidden');
  });

  mask.addEventListener('click', () => {
    // modal.classList.add('hidden');
    // mask.classList.add('hidden');
    cl5.click();
  });
}
//preventDefaultはデフォルト動作を防ぐ