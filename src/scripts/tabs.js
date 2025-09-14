const menuDetails = document.querySelector(".menu__details");

let currentTabId = null;

function renderTab(tab, container) {
  if (tab.id === currentTabId) {
    return;
  }

  currentTabId = tab.id;

  container.classList.remove("show");

  setTimeout(() => {
    if (!tab.items || tab.items.length === 0) {
      container.innerHTML = `
        <h3 class="menu__details-header">${tab.name}</h3>
        <div class="menu__no-items">
          <p>No items are available in this menu.</p>
        </div>
      `;
    } else {
      const itemsHtml = tab.items
        .map(
          (item) => `
            <li class="menu__item">
              <div class="menu__item-details">
                <h4 class="menu__item-header">${item.name}</h4>
                <p class="menu__item-description">${item.description}</p>
              </div>
              <span class="menu__item-price">$${item.price.toFixed(2)}</span>
            </li>
          `
        )
        .join("");

      container.innerHTML = `
        <h3 class="menu__details-header">${tab.name}</h3>
        <ul class="menu__items">
          ${itemsHtml}
        </ul>
      `;
    }

    void container.offsetWidth;

    container.classList.add("show");
  }, 600);
}

fetch("./data/menu-items.json")
  .then((response) => response.json())
  .then((menuData) => {
    const tabMap = {};
    menuData.tabs.forEach((t) => (tabMap[t.name] = t.id));

    document.querySelectorAll(".menu__tabs .tab").forEach((tabEl) => {
      tabEl.addEventListener("click", () => {
        document
          .querySelectorAll(".menu__tabs .tab")
          .forEach((el) => el.classList.remove("active"));
        tabEl.classList.add("active");

        const tabName = tabEl.querySelector(".tab__text").textContent.trim();
        const tabId = tabMap[tabName];
        const tabData = menuData.tabs.find((t) => t.id === tabId);

        if (tabData) renderTab(tabData, menuDetails);
      });
    });

    const activeTabName = document
      .querySelector(".menu__tabs .tab.active .tab__text")
      .textContent.trim();
    const activeTabId = tabMap[activeTabName];
    const activeTabData = menuData.tabs.find((t) => t.id === activeTabId);
    if (activeTabData) renderTab(activeTabData, menuDetails);
  });
