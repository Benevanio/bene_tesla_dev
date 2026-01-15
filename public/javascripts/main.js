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

    // ============================================
    // TREE OF LIFE - Animações ao descer na tela
    // ============================================
    
    const observerOptions = {
      threshold: 0.3,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Animar galhos
          if (entry.target.classList.contains('tree-branch')) {
            entry.target.classList.add('visible');
          }
          
          // Animar folhas
          if (entry.target.classList.contains('leaf')) {
            entry.target.classList.add('visible');
          }
          
          // Animar pássaros tech
          if (entry.target.classList.contains('tech-bird')) {
            entry.target.classList.add('visible');
          }
        }
      });
    }, observerOptions);

    // Observar todos os elementos que devem ser animados
    const treeBranches = document.querySelectorAll('.tree-branch');
    const leaves = document.querySelectorAll('.leaf');
    const techBirds = document.querySelectorAll('.tech-bird');

    treeBranches.forEach(branch => observer.observe(branch));
    leaves.forEach(leaf => observer.observe(leaf));
    techBirds.forEach(bird => observer.observe(bird));

    // Adicionar efeito parallax suave nas flores
    document.addEventListener('scroll', function() {
      const treeSection = document.querySelector('.tree-section');
      if (!treeSection) return;

      const scrollPosition = window.pageYOffset;
      const treeSectionPosition = treeSection.offsetTop;
      const relativeScroll = scrollPosition - treeSectionPosition;
      
      if (relativeScroll > -500 && relativeScroll < 1000) {
        const flowers = document.querySelectorAll('.flowers-decoration');
        flowers.forEach(flower => {
          flower.style.transform = `translateY(${relativeScroll * 0.3}px)`;
        });
      }
    });

    // Interatividade nos skills (leaves)
    const skillLeaves = document.querySelectorAll('.leaf');
    skillLeaves.forEach(leaf => {
      leaf.addEventListener('click', function() {
        // Criar um pequeno efeito de clique
        const ripple = document.createElement('span');
        ripple.style.position = 'absolute';
        ripple.style.width = '20px';
        ripple.style.height = '20px';
        ripple.style.background = 'rgba(255, 255, 255, 0.5)';
        ripple.style.borderRadius = '50%';
        ripple.style.pointerEvents = 'none';
        ripple.style.animation = 'ripple 0.6s ease-out';
        
        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
      });
    });

    // Animação de ripple (adicionar ao CSS se não existir)
    if (!document.querySelector('style[data-ripple]')) {
      const style = document.createElement('style');
      style.setAttribute('data-ripple', 'true');
      style.textContent = `
        @keyframes ripple {
          from {
            transform: scale(0);
            opacity: 1;
          }
          to {
            transform: scale(4);
            opacity: 0;
          }
        }
      `;
      document.head.appendChild(style);
    }
  });
