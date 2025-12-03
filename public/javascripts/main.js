document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu li a');
  
    hamburger.addEventListener('click', function() {
      this.classList.toggle('active');
      navMenu.classList.toggle('active');
    });
  
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
      });
    });
  
    navLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
          window.scrollTo({
            top: targetSection.offsetTop - 70,
            behavior: 'smooth'
          });
        }
      });
    });

    // Modal de Currículo
    const cvModal = document.getElementById('cv-modal');
    const openCvModal = document.getElementById('open-cv-modal');
    const closeCvModal = document.getElementById('close-cv-modal');

    if (openCvModal) {
      openCvModal.addEventListener('click', function(e) {
        e.preventDefault();
        cvModal.classList.add('show');
      });
    }

    if (closeCvModal) {
      closeCvModal.addEventListener('click', function() {
        cvModal.classList.remove('show');
      });
    }

    // Fechar modal ao clicar fora
    window.addEventListener('click', function(e) {
      if (e.target === cvModal) {
        cvModal.classList.remove('show');
      }
    });

    // Fechar modal com ESC
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && cvModal.classList.contains('show')) {
        cvModal.classList.remove('show');
      }
    });
  });
