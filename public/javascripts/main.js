function initMobileMenu() {
  const menuToggle = document.querySelector('[data-menu-toggle]');
  const navMenu = document.querySelector('[data-menu]');
  const navLinks = document.querySelectorAll('.nav-menu a');

  if (!menuToggle || !navMenu) {
    return;
  }

  menuToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('is-open');
    menuToggle.classList.toggle('is-active', isOpen);
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('is-open');
      menuToggle.classList.remove('is-active');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

function initThemeToggle() {
  const root = document.documentElement;
  const themeToggle = document.querySelector('[data-theme-toggle]');
  const teslaOverlay = document.querySelector('[data-tesla-overlay]');
  const ambientGlow = document.querySelector('[data-ambient-glow]');
  const supportsMatchMedia = typeof window.matchMedia === 'function';
  const mediaQuery = supportsMatchMedia
    ? window.matchMedia('(prefers-color-scheme: dark)')
    : { matches: false };
  const reducedMotionQuery = supportsMatchMedia
    ? window.matchMedia('(prefers-reduced-motion: reduce)')
    : { matches: false };
  let isTransitioning = false;

  function getStoredTheme() {
    try {
      return localStorage.getItem('theme');
    } catch (error) {
      return null;
    }
  }

  function getPreferredTheme() {
    return getStoredTheme() || (mediaQuery.matches ? 'dark' : 'light');
  }

  function setStoredTheme(theme) {
    try {
      localStorage.setItem('theme', theme);
    } catch (error) {
      // Ignore storage failures and keep runtime behavior.
    }
  }

  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);

    if (themeToggle) {
      const label = theme === 'dark' ? 'Alternar para modo claro' : 'Alternar para modo escuro';
      themeToggle.setAttribute('aria-label', label);
      themeToggle.setAttribute('title', label);
    }
  }

  async function runTeslaTransition(nextTheme) {
    if (isTransitioning) {
      return;
    }

    if (!teslaOverlay || !ambientGlow || reducedMotionQuery.matches) {
      applyTheme(nextTheme);
      setStoredTheme(nextTheme);
      return;
    }

    isTransitioning = true;
    ambientGlow.classList.add('is-active');

    await new Promise((resolve) => window.setTimeout(resolve, 1000));

    teslaOverlay.classList.add('is-active');

    await new Promise((resolve) => window.setTimeout(resolve, 2000));

    teslaOverlay.classList.remove('is-active');
    applyTheme(nextTheme);
    setStoredTheme(nextTheme);

    await new Promise((resolve) => window.setTimeout(resolve, 1000));

    ambientGlow.classList.remove('is-active');
    isTransitioning = false;
  }

  applyTheme(getPreferredTheme());

  if (themeToggle) {
    themeToggle.addEventListener('click', async () => {
      if (isTransitioning) {
        return;
      }

      const currentTheme = root.getAttribute('data-theme') || getPreferredTheme();
      const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
      await runTeslaTransition(nextTheme);
    });
  }

  const handleSystemThemeChange = (event) => {
    if (getStoredTheme()) {
      return;
    }

    applyTheme(event.matches ? 'dark' : 'light');
  };

  if (supportsMatchMedia && typeof mediaQuery.addEventListener === 'function') {
    mediaQuery.addEventListener('change', handleSystemThemeChange);
  } else if (supportsMatchMedia && typeof mediaQuery.addListener === 'function') {
    mediaQuery.addListener(handleSystemThemeChange);
  }
}

function initModal() {
  const triggers = document.querySelectorAll('[data-modal-target]');
  const closers = document.querySelectorAll('[data-modal-close]');
  const modalMap = new Map();

  document.querySelectorAll('[data-modal]').forEach((modal) => {
    modalMap.set(modal.getAttribute('data-modal'), modal);
  });

  function openModal(modal) {
    modal.classList.remove('modal--closed');
    modal.classList.add('modal--open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('has-modal-open');
  }

  function closeModal(modal) {
    modal.classList.remove('modal--open');
    modal.classList.add('modal--closed');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('has-modal-open');
  }

  triggers.forEach((trigger) => {
    trigger.addEventListener('click', () => {
      const target = trigger.getAttribute('data-modal-target');
      const modal = modalMap.get(target);

      if (modal) {
        openModal(modal);
      }
    });
  });

  closers.forEach((closer) => {
    closer.addEventListener('click', () => {
      const modal = closer.closest('[data-modal]');

      if (modal) {
        closeModal(modal);
      }
    });
  });

  document.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape') {
      return;
    }

    document.querySelectorAll('.modal.modal--open').forEach(closeModal);
  });

  const downloadButtons = document.querySelectorAll('[data-download-feedback]');

  downloadButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const originalText = button.textContent;
      button.textContent = 'Download iniciado';
      button.classList.add('is-feedback');

      window.setTimeout(() => {
        button.textContent = originalText;
        button.classList.remove('is-feedback');
      }, 1400);
    });
  });
}

function initScrollAnimations() {
  const revealItems = document.querySelectorAll('.reveal');

  if (!revealItems.length) {
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      });
    },
    {
      threshold: 0.2,
      rootMargin: '0px 0px -12% 0px'
    }
  );

  revealItems.forEach((item) => observer.observe(item));
}

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initMobileMenu();
  initModal();
  initScrollAnimations();
});
