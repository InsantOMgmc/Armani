const burger = document.querySelector('.burger');
const links = document.querySelectorAll('a[href*="#"]');
const body = document.body;
const nav = document.querySelector('.header__nav');

// Sticky header
window.addEventListener('scroll', function () {
  var header = document.querySelector('.header');
  if (header) {
    header.classList.toggle('sticky', window.scrollY > 0);
  }
});

// Burger
if (burger) {
  burger.addEventListener('click', function () {
    this.classList.toggle('active');
    if (nav) {
      nav.classList.toggle('open');
    }
    body.classList.toggle('lock');
  });
}

// Smooth scrolling
if (links.length > 0) {
  links.forEach(function (link) {
    link.addEventListener('click', event => {
      event.preventDefault();

      const blockId = link.getAttribute('href').substring(1);
      if (blockId) {
        const block = document.getElementById(blockId);
        if (block) {
          block.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
          if (nav) {
            nav.classList.remove('open');
          }
          body.classList.remove('lock');
          if (burger) {
            burger.classList.remove('active');
          }
        }
      }
    });
  });
}

// Open Menu
const openMenuBtns = document.querySelectorAll(".menu-btn");
const menuBanner = document.querySelector(".hero__active-menu");
openMenuBtns.forEach(element => {
  element.addEventListener('click', () => {
    menuBanner.classList.remove('hide');
    menuBanner.classList.add('active');
  });
})


function closeMenu() {
  if (menuBanner) {
    menuBanner.classList.add('hide');
    setTimeout(function () {
      menuBanner.classList.remove('active');
    }, 300);
  }
}

function comeBack() {
  window.history.back();
}

const cartAddButton = document.getElementById("cart-btn-add");
if (cartAddButton) {
  cartAddButton.addEventListener("click", () => {
    cartAddButton.innerText = 'Добалено';
  });
}

const basket = document.getElementById("basket");
const openButtons = document.querySelectorAll(".openBasket");
const closeButtons = document.querySelectorAll(".closeBasket");

if (basket && openButtons.length && closeButtons.length) {
  openButtons.forEach(button => {
    button.addEventListener("click", () => {
      basket.classList.add('open');
      openButtons.forEach(btn => btn.style.display = 'none');
    });
  });

  closeButtons.forEach(button => {
    button.addEventListener("click", () => {
      basket.classList.remove('open');
      openButtons.forEach(btn => btn.style.display = 'block');
    });
  });
}


const menuItemCart = document.querySelectorAll(".menu-item__cart");
const addedToCart = document.getElementById("addedToCart");
let timeoutId;

if (menuItemCart.length > 0 && addedToCart) {
  menuItemCart.forEach(item => {
    item.addEventListener('click', () => {
      const parent = item.parentElement;
      const cartItem = parent.parentElement;
      const itemName = cartItem.querySelector(".menu-item__name");
      const addedToCartName = addedToCart.querySelector(".added-cart__name");

      if (itemName && addedToCartName) {
        console.log(addedToCartName);
        console.log(itemName);
        addedToCart.style.display = "block";
        addedToCartName.innerText = itemName.innerText;

        if (timeoutId) {
          clearTimeout(timeoutId);
        }

        timeoutId = setTimeout(() => {
          addedToCart.style.display = "none";
        }, 1500);
      }
    });
  });
}


function locateToOrderPage() {
  window.location.href = "order.html";
}
const menuItem = document.querySelectorAll(".menu-item__img-wrapper");
if (menuItem && menuItem.length > 0) {
  menuItem.forEach(item => {
    item.addEventListener("click", () => {
      window.location.href = "cart.html";
    })
  })
}

// Категорий на страницу меню
const menuCategories = document.querySelectorAll(".main-menu__category");
const menuItems = document.querySelectorAll(".main-menu__catalog .main-menu__item");

if (menuCategories && menuCategories.length > 0 && menuItems && menuItems.length > 0) {
  menuCategories.forEach(category => {
    category.addEventListener("click", () => {
      const categoryType = category.dataset.type; // Получаем тип категории

      // Переключаем активный класс на категории
      menuCategories.forEach(item => item.classList.remove("active"));
      category.classList.add("active");

      // Отображаем или скрываем карточки в зависимости от типа категории
      menuItems.forEach(item => {
        const itemType = item.dataset.type;
        if (categoryType === "all" || categoryType === itemType) {
          item.style.display = "flex";
        } else {
          item.style.display = "none";
        }
      });
    });
  });
}
// Карточка товара
const foodSize = document.querySelectorAll(".food-property__size");
const foodLayer = document.querySelectorAll(".food-property__layer");
if (foodSize && foodLayer) {
  foodSize.forEach(item => {
    item.addEventListener("click", () => {
      foodSize.forEach(btn => btn.classList.remove("active"));
      item.classList.add("active")
    })
  })
  foodLayer.forEach(item => {
    item.addEventListener("click", () => {
      foodLayer.forEach(btn => btn.classList.remove("active"));
      item.classList.add("active")
    })
  })
}


const mainMenuItem = document.querySelectorAll(".main-menu__item");
if (mainMenuItem && mainMenuItem.length > 0) {
  mainMenuItem.forEach(item => {
    const itemImgWrapper = item.querySelector(".menu-item__img-wrapper");

    if (!itemImgWrapper) return;

    const iconTypes = {
      hot: "hot",
      vegan: "vegan",
      new: "new"
    };

    const type = item.dataset.type;
    // Добавить иконку соответствующей карте
    // Если data-type == "hot" то добавить иконку перчика и т.д
    if (iconTypes[type]) {
      itemImgWrapper.innerHTML += `
        <img src="img/icons/${type}.svg" alt="${type}-icon" class="menu-item__icon">
      `;
    }
  });
}

function openPolicy(selector) {
  body.classList.add("lock")
  const policyItem = document.querySelector("." + selector + "__policy");
  policyItem.classList.add("open")
}
function closePolicy(selector) {
  body.classList.remove("lock")
  const policyItem = document.querySelector("." + selector + "__policy");
  policyItem.classList.remove("open")
}

const menuCategoryBtns = document.querySelectorAll('.menu-category');
menuCategoryBtns.forEach(btn => {
  console.log(btn);
})
