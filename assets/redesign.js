(function(){
  document.addEventListener('DOMContentLoaded',function(){
    const toggle=document.querySelector('.nav-toggle');
    const backdrop=document.querySelector('.nav-backdrop');
    const close=()=>{ document.body.classList.remove('nav-open'); if(toggle) toggle.setAttribute('aria-expanded','false'); };
    if(toggle){
      toggle.addEventListener('click',()=>document.body.classList.toggle('nav-open'));
      toggle.setAttribute('aria-expanded','false');
      toggle.addEventListener('click',()=>toggle.setAttribute('aria-expanded',document.body.classList.contains('nav-open')));
      window.addEventListener('resize',()=>{if(window.innerWidth>980) close();});
    }
    if(backdrop) backdrop.addEventListener('click',close);
    document.querySelectorAll('.main-nav a').forEach(a=>a.addEventListener('click',close));
    document.addEventListener('keydown',e=>{if(e.key==='Escape') close();});
  });
})();