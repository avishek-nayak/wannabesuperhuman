(function(){
  const overlay = document.getElementById('story-overlay');
  const trigger = document.getElementById('story-trigger');
  const closeBtn = document.getElementById('story-close');

  function open(e){
    if(e) e.preventDefault();
    overlay.classList.add('open');
    overlay.setAttribute('aria-hidden','false');
    document.body.classList.add('story-open');
    overlay.scrollTop = 0;
    closeBtn.focus();
  }
  function close(){
    overlay.classList.remove('open');
    overlay.setAttribute('aria-hidden','true');
    document.body.classList.remove('story-open');
    trigger.focus();
  }

  trigger.addEventListener('click', open);
  closeBtn.addEventListener('click', close);
  document.addEventListener('keydown', e => {
    if(e.key === 'Escape' && overlay.classList.contains('open')) close();
  });

  // Open via hash for deep-linking
  if(window.location.hash === '#story') open();
  window.addEventListener('hashchange', () => {
    if(window.location.hash === '#story') open();
  });
})();
