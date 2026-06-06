(() => {
  const header = document.querySelector('[data-header]');
  const nav = document.querySelector('[data-nav]');
  const toggle = document.querySelector('[data-nav-toggle]');

  const setHeaderState = () => {
    if (!header) return;
    header.classList.toggle('is-scrolled', window.scrollY > 12);
  };

  setHeaderState();
  window.addEventListener('scroll', setHeaderState, { passive: true });

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const isOpen = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!isOpen));
      nav.classList.toggle('is-open', !isOpen);
    });

    nav.addEventListener('click', (event) => {
      const target = event.target;
      if (target instanceof HTMLAnchorElement) {
        toggle.setAttribute('aria-expanded', 'false');
        nav.classList.remove('is-open');
      }
    });
  }

  const pairingScript = document.getElementById('addon-pairings');
  const serviceSelect = document.querySelector('[data-service-select]');
  const addonPanel = document.querySelector('[data-addon-panel]');
  const addonPlaceholder = document.querySelector('[data-addon-placeholder]');
  const addonOptions = document.querySelector('[data-addon-options]');
  const addonTitle = document.querySelector('[data-addon-title]');
  const addonHint = document.querySelector('[data-addon-hint]');
  const addonsInput = document.querySelector('[data-addons-input]');
  const bookingForm = document.querySelector('[data-booking-form]');

  if (!pairingScript || !(serviceSelect instanceof HTMLSelectElement) || !addonPanel || !addonOptions) {
    return;
  }

  let pairings = {};

  try {
    pairings = JSON.parse(pairingScript.textContent || '{}');
  } catch {
    pairings = {};
  }

  const formatAddonValue = (items) =>
    items
      .map((item) => `${item.name} (${item.priceLabel}, ${item.durationLabel})`)
      .join('; ');

  const getSelectedExtras = () => {
    const checked = addonOptions.querySelectorAll('input[type="checkbox"]:checked');
    return Array.from(checked).map((input) => {
      const label = input.closest('label');
      return {
        name: label?.querySelector('strong')?.textContent?.trim() || '',
        priceLabel: label?.dataset.priceLabel || '',
        durationLabel: label?.dataset.durationLabel || ''
      };
    });
  };

  const syncAddonsInput = () => {
    if (!(addonsInput instanceof HTMLInputElement)) return;
    const selected = getSelectedExtras();
    addonsInput.value = selected.length ? formatAddonValue(selected) : 'No add-ons selected';
  };

  const renderAddonPanel = (slug) => {
    const pairing = pairings[slug];
    addonOptions.innerHTML = '';

    if (!pairing || !pairing.items?.length) {
      addonPanel.hidden = true;
      addonPanel.classList.remove('is-visible');
      if (addonPlaceholder) addonPlaceholder.hidden = false;
      if (addonsInput instanceof HTMLInputElement) {
        addonsInput.value = 'No add-ons available';
      }
      return;
    }

    if (addonPlaceholder) addonPlaceholder.hidden = true;
    addonPanel.hidden = false;
    requestAnimationFrame(() => addonPanel.classList.add('is-visible'));

    if (addonTitle) {
      addonTitle.textContent = `A few extras that pair well with ${pairing.serviceName}`;
    }

    if (addonHint) {
      if (pairing.hint) {
        addonHint.textContent = pairing.hint;
        addonHint.hidden = false;
      } else {
        addonHint.hidden = true;
      }
    }

    pairing.items.forEach((item) => {
      const label = document.createElement('label');
      label.className = 'addon-option';
      label.dataset.priceLabel = item.priceLabel;
      label.dataset.durationLabel = item.durationLabel;

      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.name = 'addon_choice';
      checkbox.value = item.slug;
      checkbox.addEventListener('change', syncAddonsInput);

      const copy = document.createElement('span');
      copy.className = 'addon-option-copy';

      const name = document.createElement('strong');
      name.textContent = item.name;

      const meta = document.createElement('span');
      meta.className = 'addon-option-meta';
      meta.textContent = `${item.priceLabel} · ${item.durationLabel}`;

      const summary = document.createElement('span');
      summary.className = 'addon-option-summary';
      summary.textContent = item.summary;

      copy.append(name, meta, summary);
      label.append(checkbox, copy);
      addonOptions.append(label);
    });

    syncAddonsInput();
  };

  const handleServiceChange = () => {
    const selectedOption = serviceSelect.selectedOptions[0];
    const slug = selectedOption?.dataset.slug;

    addonPanel.classList.remove('is-visible');

    if (!slug || !serviceSelect.value) {
      addonPanel.hidden = true;
      if (addonPlaceholder) addonPlaceholder.hidden = false;
      if (addonsInput instanceof HTMLInputElement) {
        addonsInput.value = '';
      }
      return;
    }

    renderAddonPanel(slug);
  };

  serviceSelect.addEventListener('change', handleServiceChange);

  if (bookingForm) {
    bookingForm.addEventListener('submit', syncAddonsInput);
  }

  if (serviceSelect.value) {
    handleServiceChange();
  }
})();
