(function () {
  var MID = 111176884;
  var OWN_HOSTS = ['gusev-flyer.ru', 'pryazhnikov-ai.ru', 'vk.com', 'yandex.ru', 'web3forms.com', 'mc.yandex.ru', 'yandex.com'];

  function reach(name, params) {
    if (typeof window.ym !== 'function') return;
    try {
      window.ym(MID, 'reachGoal', name, params || {});
    } catch (e) { /* ignore */ }
  }

  function shopName(el) {
    var card = el.closest ? el.closest('.shop-card, .shop-item, .store-card, .card, article, li') : null;
    if (!card) return '';
    var nameEl = card.querySelector('.shop-name, .store-name, h3, h2');
    if (nameEl && nameEl.textContent) {
      var t = nameEl.textContent.replace(/\s+/g, ' ').trim();
      if (t && t.length <= 60) return t;
    }
    return '';
  }

  function isShopSite(href) {
    if (!href) return false;
    if (href.indexOf('tel:') === 0 || href.indexOf('mailto:') === 0 || href.indexOf('#') === 0) return false;
    if (href.indexOf('http') !== 0) return false;
    var host = href.replace(/^https?:\/\//, '').split('/')[0].toLowerCase();
    for (var i = 0; i < OWN_HOSTS.length; i++) {
      if (host === OWN_HOSTS[i] || host.indexOf('.' + OWN_HOSTS[i]) !== -1) return false;
    }
    return true;
  }

  document.addEventListener('click', function (e) {
    var link = e.target.closest ? e.target.closest('a[href]') : null;
    if (!link) return;
    var href = link.getAttribute('href') || '';
    if (href.indexOf('tel:') === 0) {
      reach('shop_phone_click', { shop: shopName(link) });
      return;
    }
    if (isShopSite(href)) {
      reach('shop_site_click', { shop: shopName(link) });
    }
  }, true);

  document.addEventListener('submit', function (e) {
    var form = e.target;
    if (!form || form.tagName !== 'FORM') return;
    var isAddShop = form.id === 'addShopForm' || form.querySelector('[name="shop_name"]') !== null;
    reach(isAddShop ? 'add_shop_form_submit' : 'contact_form_submit', {
      form: form.id || 'unnamed'
    });
  }, true);
})();
