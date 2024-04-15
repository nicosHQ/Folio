
window.sr = ScrollReveal();
  sr.reveal('.contenedor-header', {
    duration: 1000,
    origin: 'bottom',
    distance: '-100px'
  }),
  sr.reveal('.contenido-banner',{
    duration: 2000,
    origin: 'right',
    distance: '-100px'
  }),
  sr.reveal('.skill',{
    duration: 2000,
    origin: 'right',
    distance: '-100px'
  }),
  sr.reveal('.programas2',{
    duration: 2000,
    origin: 'left',
    distance: '-100px'
  }),
  sr.reveal('.rotate',{
    duration: 2000,
    rotate:{
        x: 0,
        y: 180,
    }
  }),
  sr.reveal('.izq',{
    duration: 2000,
    origin: 'right',
    distance: '-100px'
  }),
  sr.reveal('.der',{
    duration: 2000,
    origin: 'left',
    distance: '-100px'
  }),
  sr.reveal('.sobremi',{
    duration: 2000,
    origin: 'top',
    distance: '-100px',
    easing: 'cubic-bezier(0.5, 0, 0, 1)' ,
    scale: 0.85,
  });