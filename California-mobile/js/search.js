export function initSearch() {
  const tags = document.querySelectorAll('.tag');
  const searchInput = document.getElementById('searchInput');

  tags.forEach(tag => {
    tag.addEventListener('click', () => {
      if (!searchInput) return;
      searchInput.value = tag.innerText;
      searchInput.focus();
    });
  });

  const searchButton = document.querySelector('.header__search-button, [aria-controls="searchModal"]');
  const modal = document.getElementById('searchModal');
  const modalInput = document.getElementById('headerSearchInput');
  const closeButtons = document.querySelectorAll('[data-search-close]');
  const body = document.querySelector('.page__body');

  if (!searchButton || !modal || !modalInput) return;

  const openModal = () => {
    modal.hidden = false;
    searchButton.setAttribute('aria-expanded', 'true');
    body?.classList.add('page__body--no-scroll');
    modalInput.focus();
  };

  const closeModal = () => {
    modal.hidden = true;
    searchButton.setAttribute('aria-expanded', 'false');
    body?.classList.remove('page__body--no-scroll');
    searchButton.focus();
  };

  searchButton.addEventListener('click', openModal);

  closeButtons.forEach(button => {
    button.addEventListener('click', closeModal);
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && !modal.hidden) {
      closeModal();
    }
  });
}
