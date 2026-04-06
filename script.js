const WHATSAPP_NUMBER = "919429133499";
const CART_STORAGE_KEY = "satnam-ahmedabad-cart";
const ORDER_FORM_STORAGE_KEY = "satnam-ahmedabad-order-form";

const products = [
  {
    id: "prod-milk",
    name: "Amul Taaza Milk",
    category: "Dairy Essentials",
    price: 34,
    unit: "500 ml",
    image: "https://www.bbassets.com/media/uploads/p/s/40041431_1-amul-taaza-fresh-toned-milk.jpg",
    shortDescription: "Trusted Amul milk for tea, coffee, breakfast, and daily kitchen use.",
    featured: true,
    inStock: true,
    keywords: ["milk", "amul", "taaza", "dairy", "tea", "coffee"],
  },
  {
    id: "prod-curd",
    name: "Amul Masti Dahi",
    category: "Dairy Essentials",
    price: 47,
    unit: "400 g",
    image: "https://www.bbassets.com/media/uploads/p/s/104851_4-amul-masti-dahi.jpg",
    shortDescription: "A reliable dairy staple for meals, raita, and everyday family use.",
    featured: true,
    inStock: true,
    keywords: ["curd", "dahi", "amul", "masti", "dairy"],
  },
  {
    id: "prod-butter",
    name: "Amul Butter",
    category: "Dairy Essentials",
    price: 58,
    unit: "100 g",
    image: "https://www.bbassets.com/media/uploads/p/s/104860_8-amul-butter-pasteurised.jpg",
    shortDescription: "Classic butter for toast, sandwiches, parathas, and breakfast plates.",
    featured: false,
    inStock: true,
    keywords: ["butter", "amul", "dairy", "breakfast"],
  },
  {
    id: "prod-cola",
    name: "Coca-Cola Soft Drink",
    category: "Snacks & Beverages",
    price: 40,
    unit: "750 ml",
    image: "https://www.bbassets.com/media/uploads/p/s/40262162_2-coca-cola-soft-drink-zero-sugar-no-calories.jpg",
    shortDescription: "A classic soft drink pick for quick refreshment, guests, and add-on orders.",
    featured: true,
    inStock: true,
    keywords: ["drink", "cola", "cold drink", "beverage", "coca cola"],
  },
  {
    id: "prod-sprite",
    name: "Sprite Soft Drink",
    category: "Snacks & Beverages",
    price: 38,
    unit: "750 ml",
    image: "https://www.bbassets.com/media/uploads/p/s/251006_13-sprite-soft-drink-lime-flavoured.jpg",
    shortDescription: "A lemon-lime soft drink for chilled refreshment and quick grab-and-go orders.",
    featured: true,
    inStock: true,
    keywords: ["sprite", "soft drink", "lemon lime", "cold drink"],
  },
  {
    id: "prod-fanta",
    name: "Fanta Orange Soft Drink",
    category: "Snacks & Beverages",
    price: 40,
    unit: "750 ml",
    image: "https://www.bbassets.com/media/uploads/p/s/251019_8-fanta-soft-drink-orange-flavoured.jpg",
    shortDescription: "Orange-flavoured fizzy drink that matches the chilled bottles visible in-store.",
    featured: false,
    inStock: true,
    keywords: ["fanta", "orange", "soft drink", "cold drink"],
  },
  {
    id: "prod-maaza",
    name: "Maaza Mango Drink",
    category: "Snacks & Beverages",
    price: 35,
    unit: "600 ml",
    image: "https://www.bbassets.com/media/uploads/p/s/265690_16-maaza-mango-drink.jpg",
    shortDescription: "Popular mango drink for summer refreshment, kids, and impulse add-on purchases.",
    featured: false,
    inStock: true,
    keywords: ["maaza", "mango", "juice", "drink", "beverage"],
  },
  {
    id: "prod-kinley-water",
    name: "Kinley Drinking Water",
    category: "Snacks & Beverages",
    price: 18,
    unit: "1 ltr",
    image: "https://www.bbassets.com/media/uploads/p/s/265686_9-kinley-drinking-water-with-added-minerals.jpg",
    shortDescription: "Packaged drinking water for quick hydration and routine convenience purchases.",
    featured: false,
    inStock: true,
    keywords: ["kinley", "water", "mineral water", "drinking water"],
  },
  {
    id: "prod-kurkure",
    name: "Kurkure Masala Munch",
    category: "Snacks & Beverages",
    price: 30,
    unit: "94 g",
    image: "https://www.bbassets.com/media/uploads/p/s/40207351_7-kurkure-namkeen-masala-munch.jpg",
    shortDescription: "Crunchy masala snack that reflects the visible chip and namkeen shelf stock.",
    featured: true,
    inStock: true,
    keywords: ["kurkure", "namkeen", "chips", "masala munch", "snack"],
  },
  {
    id: "prod-lays",
    name: "Lay's American Style Cream & Onion",
    category: "Snacks & Beverages",
    price: 40,
    unit: "82 g",
    image: "https://www.bbassets.com/media/uploads/p/s/40203553_12-lays-potato-chips-american-style-cream-onion-flavour.jpg",
    shortDescription: "A familiar potato chip favorite from the front snack racks outside the store.",
    featured: true,
    inStock: true,
    keywords: ["lays", "chips", "cream onion", "snack", "potato chips"],
  },
  {
    id: "prod-uncle-chipps",
    name: "Uncle Chipps Spicy Treat",
    category: "Snacks & Beverages",
    price: 20,
    unit: "48 g",
    image: "https://www.bbassets.com/media/uploads/p/s/40015992_18-uncle-chips-uncle-chips-potato-chips-spicy-treat-flavour.jpg",
    shortDescription: "Classic ridged chips with a spicy profile for quick snack-time purchases.",
    featured: false,
    inStock: true,
    keywords: ["uncle chipps", "chips", "spicy treat", "snack"],
  },
  {
    id: "prod-aloo-bhujia",
    name: "Haldiram's Aloo Bhujia",
    category: "Snacks & Beverages",
    price: 63,
    unit: "200 g",
    image: "https://www.bbassets.com/media/uploads/p/s/40095341_5-haldiram-namkeen-aloo-bhujia.jpg",
    shortDescription: "A namkeen staple for tea-time serving, snacking, and everyday family gatherings.",
    featured: false,
    inStock: true,
    keywords: ["haldiram", "aloo bhujia", "namkeen", "snack"],
  },
  {
    id: "prod-atta",
    name: "Fortune Chakki Fresh Atta",
    category: "Atta & Pantry",
    price: 208,
    unit: "5 kg",
    image: "https://www.bbassets.com/media/uploads/p/s/40120174_7-fortune-chakki-fresh-atta-100-atta-0-maida.jpg",
    shortDescription: "A dependable household staple for soft rotis and regular family cooking.",
    featured: true,
    inStock: true,
    keywords: ["atta", "flour", "wheat", "roti", "fortune"],
  },
  {
    id: "prod-oil",
    name: "Fortune Sunflower Oil",
    category: "Atta & Pantry",
    price: 185,
    unit: "800 g pouch",
    image: "https://www.bbassets.com/media/uploads/p/s/274145_17-fortune-sun-lite-sunflower-refined-oil.jpg",
    shortDescription: "A practical kitchen essential for daily cooking, frying, and home meal prep.",
    featured: false,
    inStock: true,
    keywords: ["oil", "sunflower", "cooking oil", "fortune"],
  },
  {
    id: "prod-bread",
    name: "Britannia 100% Whole Wheat Bread",
    category: "Bakery",
    price: 55,
    unit: "450 g",
    image: "https://www.bbassets.com/media/uploads/p/s/40092239_4-britannia-100-whole-wheat-bread.jpg",
    shortDescription: "A bakery essential for breakfast toast, sandwiches, and fast snack prep.",
    featured: false,
    inStock: true,
    keywords: ["bread", "bakery", "toast", "britannia", "whole wheat"],
  },
  {
    id: "prod-noodles",
    name: "Maggi 2-Minute Noodles",
    category: "Indian / International Groceries",
    price: 58,
    unit: "280 g",
    image: "https://www.bbassets.com/media/uploads/p/s/266162_22-maggi-2-minute-instant-noodles-masala.jpg",
    shortDescription: "An instant meal favorite for quick snacks, kids, and late-evening convenience.",
    featured: true,
    inStock: true,
    keywords: ["noodles", "instant", "international", "quick meal", "maggi"],
  },
  {
    id: "prod-soya",
    name: "Ching's Dark Soy Sauce",
    category: "Indian / International Groceries",
    price: 44,
    unit: "210 g",
    image: "https://www.bbassets.com/media/uploads/p/s/270509_8-chings-secret-dark-soy-sauce.jpg",
    shortDescription: "A useful pantry sauce for noodles, stir-fries, and quick Indo-Chinese meals.",
    featured: false,
    inStock: true,
    keywords: ["soy sauce", "sauce", "international", "chings"],
  },
  {
    id: "prod-kinder-joy",
    name: "Kinder Joy Blue Edition",
    category: "Chocolates & Candy",
    price: 45,
    unit: "20 g",
    image: "https://www.bbassets.com/media/uploads/p/s/30005023_11-kinder-joy-for-boys-with-surprise.jpg",
    shortDescription: "A familiar kids' treat seen near the front counter among impulse snack items.",
    featured: true,
    inStock: true,
    keywords: ["kinder joy", "chocolate", "candy", "kids", "surprise"],
  },
  {
    id: "prod-alpenliebe",
    name: "Alpenliebe Gold Caramel Toffee",
    category: "Chocolates & Candy",
    price: 50,
    unit: "144 g",
    image: "https://www.bbassets.com/media/uploads/p/s/40016440_17-alpenliebe-gold-caramel-candy.jpg",
    shortDescription: "Popular caramel candy that matches the candy shelves visible inside the store.",
    featured: false,
    inStock: true,
    keywords: ["alpenliebe", "gold", "toffee", "candy", "caramel"],
  },
  {
    id: "prod-center-fruit",
    name: "Center Fruit Bubble Gum",
    category: "Chocolates & Candy",
    price: 15,
    unit: "23.6 g",
    image: "https://www.bbassets.com/media/uploads/p/s/40016437_9-center-fruit-chewing-gum-stick-fruits-flavour.jpg",
    shortDescription: "Front-counter gum item suited for quick checkout add-ons and school-time picks.",
    featured: false,
    inStock: true,
    keywords: ["center fruit", "gum", "chewing gum", "candy"],
  },
  {
    id: "prod-matka-kulfi",
    name: "Matka Kulfi",
    category: "Frozen Treats",
    price: 50,
    unit: "100 ml",
    image: "https://www.bbassets.com/media/uploads/p/s/40237788_2-dairy-day-matka-kulfi-made-with-milk-rich-creamy.jpg",
    shortDescription: "A freezer favorite inspired by the kulfi cups and tubs visible in the store ice cream section.",
    featured: true,
    inStock: true,
    keywords: ["matka kulfi", "ice cream", "kulfi", "frozen dessert"],
  },
  {
    id: "prod-ice-cream-sandwich",
    name: "Vanilla Ice Cream Sandwich",
    category: "Frozen Treats",
    price: 40,
    unit: "90 ml",
    image: "https://www.bbassets.com/media/uploads/p/s/40341112_1-gianis-vanilla-ice-cream-sandwich.jpg",
    shortDescription: "A sandwich-style frozen treat based on the bars and sandwich items visible in the freezer.",
    featured: false,
    inStock: true,
    keywords: ["ice cream sandwich", "vanilla", "frozen dessert"],
  },
  {
    id: "prod-cassata",
    name: "Cassata Slice Ice Cream",
    category: "Frozen Treats",
    price: 70,
    unit: "150 ml",
    image: "https://www.bbassets.com/media/uploads/p/s/40301944_2-creambell-party-slice-cassata-ice-cream.jpg",
    shortDescription: "A cassata-style frozen treat that reflects the colorful slice packs seen in the freezer.",
    featured: false,
    inStock: true,
    keywords: ["cassata", "ice cream", "frozen dessert", "slice"],
  },
  {
    id: "prod-choco-cone",
    name: "Chocolate Ice Cream Cone",
    category: "Frozen Treats",
    price: 50,
    unit: "110 ml",
    image: "https://www.bbassets.com/media/uploads/p/s/40300873_1-hangyo-belgium-chocolate-cone.jpg",
    shortDescription: "A chocolate cone inspired by the multiple cone-style frozen treats visible in the chest freezer.",
    featured: true,
    inStock: true,
    keywords: ["ice cream cone", "chocolate cone", "frozen treat"],
  },
];

const siteHeader = document.querySelector(".site-header");
const categoryLinks = document.querySelectorAll(".category-strip a");
const menuToggle = document.querySelector(".menu-toggle");
const mobilePanel = document.querySelector(".mobile-panel");
const mobileLinks = document.querySelectorAll(".mobile-links a");
const searchForm = document.querySelector("#search-form");
const searchInput = document.querySelector("#site-search");
const anchorLinks = document.querySelectorAll('a[href^="#"]');
const productGrid = document.querySelector("#product-grid");
const catalogEmpty = document.querySelector("#catalog-empty");
const catalogResultText = document.querySelector("#catalog-result-text");
const filterButtons = document.querySelectorAll(".filter-chip");
const cartDrawer = document.querySelector("#cart-drawer");
const cartOverlay = document.querySelector("#cart-overlay");
const openCartButtons = document.querySelectorAll("[data-open-cart]");
const closeCartButtons = document.querySelectorAll("[data-close-cart]");
const cartCountElements = document.querySelectorAll("[data-cart-count]");
const cartTotalElements = document.querySelectorAll("[data-cart-total]");
const cartItemsContainer = document.querySelector("#cart-items");
const cartEmptyState = document.querySelector("#cart-empty-state");
const cartSubtotal = document.querySelector("#cart-subtotal");
const clearCartButton = document.querySelector("#clear-cart-button");
const checkoutForm = document.querySelector("#checkout-form");
const orderTypeSelect = document.querySelector("#order-type");
const addressField = document.querySelector("#address-field");
const formFeedback = document.querySelector("#form-feedback");
const currentPage = document.body.dataset.page || "home";

let activeFilter = "all";
let activeQuery = "";
let cart = loadStoredCart();

function loadStoredCart() {
  try {
    const storedCart = JSON.parse(localStorage.getItem(CART_STORAGE_KEY));
    return Array.isArray(storedCart) ? storedCart : [];
  } catch (error) {
    return [];
  }
}

function saveCart() {
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
}

function loadStoredForm() {
  try {
    const storedForm = JSON.parse(localStorage.getItem(ORDER_FORM_STORAGE_KEY));
    return storedForm && typeof storedForm === "object" ? storedForm : {};
  } catch (error) {
    return {};
  }
}

function saveFormState() {
  if (!checkoutForm) return;
  const formData = new FormData(checkoutForm);
  localStorage.setItem(
    ORDER_FORM_STORAGE_KEY,
    JSON.stringify({
      customerName: String(formData.get("customerName") || ""),
      customerPhone: String(formData.get("customerPhone") || ""),
      orderType: String(formData.get("orderType") || ""),
      customerAddress: String(formData.get("customerAddress") || ""),
      customerNotes: String(formData.get("customerNotes") || ""),
    })
  );
}

function restoreFormState() {
  if (!checkoutForm) return;
  const storedForm = loadStoredForm();
  checkoutForm.elements.customerName.value = storedForm.customerName || "";
  checkoutForm.elements.customerPhone.value = storedForm.customerPhone || "";
  checkoutForm.elements.orderType.value = storedForm.orderType || "";
  checkoutForm.elements.customerAddress.value = storedForm.customerAddress || "";
  checkoutForm.elements.customerNotes.value = storedForm.customerNotes || "";
  syncAddressField();
}

function formatCurrency(value) {
  return `Rs ${new Intl.NumberFormat("en-IN").format(value)}`;
}

function getProductById(productId) {
  return products.find((product) => product.id === productId);
}

function getCartCount() {
  return cart.reduce((total, item) => total + item.quantity, 0);
}

function getCartSubtotal() {
  return cart.reduce((total, item) => {
    const product = getProductById(item.id);
    return total + (product ? product.price * item.quantity : 0);
  }, 0);
}

function normalizeText(value) {
  return value.trim().toLowerCase();
}

function productMatchesQuery(product, query) {
  if (!query) return true;
  const searchableText = [
    product.name,
    product.category,
    product.shortDescription,
    product.unit,
    ...product.keywords,
  ]
    .join(" ")
    .toLowerCase();

  return searchableText.includes(query);
}

function productMatchesFilter(product, filterValue) {
  if (filterValue === "all") return true;
  if (filterValue === "featured") return product.featured;
  if (filterValue === "instock") return product.inStock;
  return product.category === filterValue;
}

function getFilteredProducts() {
  return products.filter(
    (product) => productMatchesFilter(product, activeFilter) && productMatchesQuery(product, activeQuery)
  );
}

function renderProducts() {
  if (!productGrid || !catalogEmpty || !catalogResultText) return;

  const filteredProducts = getFilteredProducts();
  productGrid.innerHTML = "";

  filteredProducts.forEach((product) => {
    const card = document.createElement("article");
    card.className = `inventory-card${product.inStock ? "" : " out-of-stock"}`;
    card.innerHTML = `
      <div class="inventory-media">
        <img src="${product.image}" alt="${product.name} at Satnam Stores">
        <span class="inventory-tag">${product.featured ? "Featured" : product.category}</span>
      </div>
      <div class="inventory-copy">
        <div class="inventory-header">
          <div class="inventory-category">${product.category}</div>
          <h3>${product.name}</h3>
          <p>${product.shortDescription}</p>
        </div>
        <div class="inventory-meta">
          <div class="inventory-price">
            <strong>${formatCurrency(product.price)}</strong>
            <span>Per ${product.unit}</span>
          </div>
          <span class="stock-pill${product.inStock ? "" : " out"}">
            ${product.inStock ? "In Stock" : "Out of Stock"}
          </span>
        </div>
        <div class="inventory-footer">
          <button
            class="add-cart-button"
            type="button"
            data-add-to-cart="${product.id}"
            ${product.inStock ? "" : "disabled"}
            aria-label="${product.inStock ? `Add ${product.name} to cart` : `${product.name} is out of stock`}"
          >
            ${product.inStock ? "Add to Cart" : "Unavailable"}
          </button>
        </div>
      </div>
    `;
    productGrid.appendChild(card);
  });

  catalogEmpty.classList.toggle("is-hidden", filteredProducts.length > 0);
  productGrid.classList.toggle("is-hidden", filteredProducts.length === 0);

  if (!filteredProducts.length) {
    catalogResultText.textContent = "No products found for the current search";
    return;
  }

  const filterLabel =
    activeFilter === "all" ? "all products" : activeFilter === "featured" ? "featured products" : activeFilter;
  const queryLabel = activeQuery ? ` matching "${activeQuery}"` : "";
  catalogResultText.textContent = `Showing ${filteredProducts.length} ${filterLabel}${queryLabel}`;
}

function updateCategoryRail(activeSection) {
  categoryLinks.forEach((link) => {
    const linkSection = normalizeText(link.dataset.navLink || "");
    link.classList.toggle("is-active", Boolean(activeSection) && linkSection === activeSection);
  });
}

function setActiveFilter(filterValue) {
  activeFilter = filterValue;
  filterButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.filter === filterValue);
  });
  renderProducts();
}

function syncAddressField() {
  if (!orderTypeSelect || !addressField) return;
  const requiresAddress = orderTypeSelect.value === "Delivery";
  const addressInput = checkoutForm?.elements.customerAddress;
  addressField.classList.toggle("is-required", requiresAddress);
  if (addressInput) {
    addressInput.required = requiresAddress;
    addressInput.setAttribute("aria-required", String(requiresAddress));
  }
}

function clearFieldErrors() {
  if (!checkoutForm) return;
  checkoutForm.querySelectorAll(".form-field").forEach((field) => field.classList.remove("has-error"));
  formFeedback.textContent = "";
  formFeedback.className = "form-feedback";
}

function setFeedback(message, type) {
  if (!formFeedback) return;
  formFeedback.textContent = message;
  formFeedback.className = `form-feedback ${type ? `is-${type}` : ""}`.trim();
}

function validateOrderForm() {
  if (!checkoutForm) return false;

  clearFieldErrors();

  const fields = {
    name: checkoutForm.elements.customerName,
    phone: checkoutForm.elements.customerPhone,
    orderType: checkoutForm.elements.orderType,
    address: checkoutForm.elements.customerAddress,
  };

  const errors = [];

  if (!fields.name.value.trim()) {
    errors.push({ field: fields.name, message: "Please enter your full name." });
  }

  if (!fields.phone.value.trim()) {
    errors.push({ field: fields.phone, message: "Please enter your phone number." });
  }

  if (!fields.orderType.value) {
    errors.push({ field: fields.orderType, message: "Please choose pickup or delivery." });
  }

  if (fields.orderType.value === "Delivery" && !fields.address.value.trim()) {
    errors.push({ field: fields.address, message: "Please enter your delivery address." });
  }

  if (errors.length > 0) {
    errors.forEach(({ field }) => {
      field.closest(".form-field")?.classList.add("has-error");
    });
    errors[0].field.focus();
    setFeedback(errors[0].message, "error");
    return false;
  }

  return true;
}

function openCartDrawer() {
  if (!cartDrawer || !cartOverlay) return;
  cartDrawer.classList.add("is-open");
  cartDrawer.setAttribute("aria-hidden", "false");
  cartOverlay.hidden = false;
  document.body.classList.add("cart-open");
}

function closeCartDrawer() {
  if (!cartDrawer || !cartOverlay) return;
  cartDrawer.classList.remove("is-open");
  cartDrawer.setAttribute("aria-hidden", "true");
  cartOverlay.hidden = true;
  document.body.classList.remove("cart-open");
}

function updateCartSummary() {
  const count = getCartCount();
  const subtotal = getCartSubtotal();

  cartCountElements.forEach((element) => {
    element.textContent = String(count);
  });

  cartTotalElements.forEach((element) => {
    element.textContent = formatCurrency(subtotal);
  });

  if (cartSubtotal) {
    cartSubtotal.textContent = formatCurrency(subtotal);
  }
}

function renderCart() {
  if (!cartItemsContainer || !cartEmptyState) return;

  updateCartSummary();
  cartItemsContainer.innerHTML = "";

  if (!cart.length) {
    cartEmptyState.classList.remove("is-hidden");
    return;
  }

  cartEmptyState.classList.add("is-hidden");

  cart.forEach((cartItem) => {
    const product = getProductById(cartItem.id);
    if (!product) return;

    const lineTotal = product.price * cartItem.quantity;
    const item = document.createElement("article");
    item.className = "cart-item";
    item.innerHTML = `
      <img src="${product.image}" alt="${product.name} in cart">
      <div class="cart-item-copy">
        <div class="cart-item-header">
          <div>
            <strong>${product.name}</strong>
            <span>${product.unit}</span>
          </div>
          <strong>${formatCurrency(lineTotal)}</strong>
        </div>
        <div class="cart-item-meta">${product.category}</div>
        <div class="cart-item-footer">
          <div class="quantity-controls">
            <button class="quantity-button" type="button" data-quantity-action="decrease" data-product-id="${product.id}" aria-label="Decrease quantity of ${product.name}">-</button>
            <span class="quantity-value">${cartItem.quantity}</span>
            <button class="quantity-button" type="button" data-quantity-action="increase" data-product-id="${product.id}" aria-label="Increase quantity of ${product.name}">+</button>
          </div>
          <button class="remove-item" type="button" data-remove-item="${product.id}">Remove</button>
        </div>
      </div>
    `;
    cartItemsContainer.appendChild(item);
  });
}

function addToCart(productId) {
  const product = getProductById(productId);
  if (!product || !product.inStock) return;

  const existingItem = cart.find((item) => item.id === productId);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ id: productId, quantity: 1 });
  }

  saveCart();
  renderCart();
  setFeedback(`${product.name} added to cart.`, "success");
}

function updateQuantity(productId, action) {
  const item = cart.find((cartItem) => cartItem.id === productId);
  if (!item) return;

  if (action === "increase") {
    item.quantity += 1;
  }

  if (action === "decrease") {
    item.quantity -= 1;
  }

  cart = cart.filter((cartItem) => cartItem.quantity > 0);
  saveCart();
  renderCart();
}

function removeFromCart(productId) {
  cart = cart.filter((item) => item.id !== productId);
  saveCart();
  renderCart();
}

function clearCart() {
  cart = [];
  saveCart();
  renderCart();
}

function buildWhatsAppMessage(formData) {
  const items = cart
    .map((cartItem) => {
      const product = getProductById(cartItem.id);
      if (!product) return "";
      return `- ${product.name} x${cartItem.quantity} - ${formatCurrency(product.price * cartItem.quantity)}`;
    })
    .filter(Boolean)
    .join("\n");

  const address = formData.orderType === "Delivery" ? formData.customerAddress : "N/A";
  const notes = formData.customerNotes || "N/A";

  return `Hi, I would like to place an order from Satnam Stores.

Name: ${formData.customerName}
Phone: ${formData.customerPhone}
Order Type: ${formData.orderType}
Address: ${address}
Notes: ${notes}

Items:
${items}

Estimated Total: ${formatCurrency(getCartSubtotal())}

Please confirm availability. Thank you.`;
}

function submitWhatsAppOrder(event) {
  event.preventDefault();

  if (!cart.length) {
    setFeedback("Please add at least one item to your cart before sending the order.", "error");
    return;
  }

  if (!validateOrderForm()) {
    return;
  }

  const formData = {
    customerName: checkoutForm.elements.customerName.value.trim(),
    customerPhone: checkoutForm.elements.customerPhone.value.trim(),
    orderType: checkoutForm.elements.orderType.value,
    customerAddress: checkoutForm.elements.customerAddress.value.trim(),
    customerNotes: checkoutForm.elements.customerNotes.value.trim(),
  };

  localStorage.setItem(ORDER_FORM_STORAGE_KEY, JSON.stringify(formData));
  const message = buildWhatsAppMessage(formData);
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  setFeedback("Opening WhatsApp with your order details.", "success");
  window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  clearCart();
}

function syncHeaderShadow() {
  if (!siteHeader) return;
  siteHeader.classList.toggle("is-scrolled", window.scrollY > 8);
}

function closeMobileMenu() {
  if (!menuToggle || !mobilePanel) return;
  menuToggle.setAttribute("aria-expanded", "false");
  mobilePanel.classList.remove("is-open");
}

function smoothScrollToTarget(selector) {
  const target = document.querySelector(selector);
  if (!target) return;

  const headerOffset = (siteHeader?.offsetHeight || 0) + 86;
  const targetTop = target.getBoundingClientRect().top + window.scrollY - headerOffset;

  window.scrollTo({
    top: targetTop,
    behavior: "smooth",
  });
}

function handleSearchSubmit(event) {
  event.preventDefault();
  activeQuery = normalizeText(searchInput?.value || "");
  setActiveFilter(activeFilter);
  updateCategoryRail("products");
  smoothScrollToTarget("#catalog");
}

if (menuToggle && mobilePanel) {
  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    mobilePanel.classList.toggle("is-open", !isOpen);
  });
}

mobileLinks.forEach((link) => {
  link.addEventListener("click", closeMobileMenu);
});

anchorLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    const targetId = link.getAttribute("href");
    if (!targetId || targetId === "#") return;

    const target = document.querySelector(targetId);
    if (!target) return;

    event.preventDefault();
    smoothScrollToTarget(targetId);
    closeMobileMenu();
  });
});

categoryLinks.forEach((link) => {
  link.addEventListener("click", () => {
    const activeSection = normalizeText(link.dataset.navLink || "");
    updateCategoryRail(activeSection);
  });
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setActiveFilter(button.dataset.filter || "all");
  });
});

if (searchForm && searchInput) {
  searchForm.addEventListener("submit", handleSearchSubmit);
}

updateCategoryRail(currentPage);

productGrid?.addEventListener("click", (event) => {
  const target = event.target;
  if (!(target instanceof HTMLElement)) return;

  const productId = target.dataset.addToCart;
  if (!productId) return;

  addToCart(productId);
  openCartButtons.forEach((button) => button.classList.add("has-cart-feedback"));
});

cartItemsContainer?.addEventListener("click", (event) => {
  const target = event.target;
  if (!(target instanceof HTMLElement)) return;

  const removeId = target.dataset.removeItem;
  if (removeId) {
    removeFromCart(removeId);
    return;
  }

  const productId = target.dataset.productId;
  const action = target.dataset.quantityAction;
  if (productId && action) {
    updateQuantity(productId, action);
  }
});

clearCartButton?.addEventListener("click", clearCart);

openCartButtons.forEach((button) => {
  button.addEventListener("click", () => {
    openCartDrawer();
    closeMobileMenu();
  });
});

closeCartButtons.forEach((button) => {
  button.addEventListener("click", closeCartDrawer);
});

cartOverlay?.addEventListener("click", closeCartDrawer);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeCartDrawer();
  }
});

if (checkoutForm) {
  checkoutForm.addEventListener("input", saveFormState);
  checkoutForm.addEventListener("submit", submitWhatsAppOrder);
}

orderTypeSelect?.addEventListener("change", () => {
  syncAddressField();
  saveFormState();
});

window.addEventListener("scroll", syncHeaderShadow, { passive: true });

restoreFormState();
renderProducts();
renderCart();
syncHeaderShadow();
syncAddressField();
