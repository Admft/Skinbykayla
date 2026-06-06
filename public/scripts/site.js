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
  const addonStep = document.querySelector('[data-addon-step]');
  const addonOptions = document.querySelector('[data-addon-options]');
  const addonTitle = document.querySelector('[data-addon-title]');
  const addonHint = document.querySelector('[data-addon-hint]');
  const addonsInput = document.querySelector('[data-addons-input]');
  const bookingDetails = document.querySelector('[data-booking-details]');
  const skipButton = document.querySelector('[data-addon-skip]');
  const continueButton = document.querySelector('[data-addon-continue]');

  if (!pairingScript || !(serviceSelect instanceof HTMLSelectElement) || !addonStep || !addonOptions || !bookingDetails) {
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

  const showBookingDetails = () => {
    syncAddonsInput();
    addonStep.hidden = true;
    bookingDetails.hidden = false;
    bookingDetails.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  };

  const renderAddonStep = (slug) => {
    const pairing = pairings[slug];

    addonOptions.innerHTML = '';
    bookingDetails.hidden = true;

    if (!pairing || !pairing.items?.length) {
      addonStep.hidden = true;
      if (addonsInput instanceof HTMLInputElement) {
        addonsInput.value = 'No add-ons available';
      }
      bookingDetails.hidden = false;
      return;
    }

    addonStep.hidden = false;

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

      const copy = document.createElement('span');
      copy.className = 'addon-option-copy';
      copy.innerHTML = `<strong>${item.name}</strong><span class="addon-option-meta">${item.priceLabel} · ${item.durationLabel}</span><span class="addon-option-summary">${item.summary}</span>`;

      label.append(checkbox, copy);
      addonOptions.append(label);
    });

    if (addonsInput instanceof HTMLInputElement) {
      addonsInput.value = 'No add-ons selected';
    }
  };

  const handleServiceChange = () => {
    const selectedOption = serviceSelect.selectedOptions[0];
    const slug = selectedOption?.dataset.slug;

    if (!slug || !serviceSelect.value) {
      addonStep.hidden = true;
      bookingDetails.hidden = true;
      if (addonsInput instanceof HTMLInputElement) {
        addonsInput.value = '';
      }
      return;
    }

    renderAddonStep(slug);
  };

  serviceSelect.addEventListener('change', handleServiceChange);

  if (skipButton) {
    skipButton.addEventListener('click', () => {
      addonOptions.querySelectorAll('input[type="checkbox"]').forEach((input) => {
        input.checked = false;
      });
      showBookingDetails();
    });
  }

  if (continueButton) {
    continueButton.addEventListener('click', showBookingDetails);
  }

  if (serviceSelect.value) {
    handleServiceChange();
  }
})();
