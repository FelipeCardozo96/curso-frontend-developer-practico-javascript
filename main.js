const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.menu');
const burgerMenu = document.querySelector('.mobile-menu');
const productDetailCloseIcon = document.querySelector('.product-detail-close')
const shopCart = document.querySelector('.navbar-shopping-cart');
const ShoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
mobileMenu.addEventListener('click', toggleBurgerMenu);
shopCart.addEventListener('click', cartDetail);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside)

function toggleDesktopMenu () {
    const isCartDetailClosed = ShoppingCartContainer.classList.contains('inactive')
    const isProductDetailContainerClosed = productDetailCloseIcon.classList.contains('inactive')

    if (!isCartDetailClosed) {
        ShoppingCartContainer.classList.add ('inactive');
    }
    if (!isProductDetailContainerClosed) {
        productDetailContainer.classList.add('inactive')
    }

    desktopMenu.classList.toggle('inactive')
}

function toggleBurgerMenu () {
    const isCartDetailClosed = ShoppingCartContainer.classList.contains('inactive')
    const isProductDetailContainerClosed = productDetailCloseIcon.classList.contains('inactive')

    if (!isCartDetailClosed) {
        ShoppingCartContainer.classList.add ('inactive');
    }
    if (!isProductDetailContainerClosed) {
        productDetailContainer.classList.add('inactive')
    }

    burgerMenu.classList.toggle('inactive')
}

function cartDetail () {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive')
    const isProductDetailContainerClosed = productDetailCloseIcon.classList.contains('inactive')

    if (!isMobileMenuClosed) {
        burgerMenu.classList.add ('inactive');
    }
    if (!isDesktopMenuClosed) {
        desktopMenu.classList.add ('inactive')
    }
    if (!isProductDetailContainerClosed) {
        productDetailContainer.classList.add('inactive')
    }

    ShoppingCartContainer.classList.toggle('inactive')
}

function openProductDetailAside() {
    const isCartDetailClosed = ShoppingCartContainer.classList.contains('inactive')
    if (!isCartDetailClosed) {
        ShoppingCartContainer.classList.add ('inactive');
    }
    productDetailContainer.classList.remove('inactive')
}

function closeProductDetailAside() {
    const isCartDetailClosed = ShoppingCartContainer.classList.contains('inactive')
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive')
    if (!isDesktopMenuClosed) {
        desktopMenu.classList.add ('inactive')
    }
    if (!isCartDetailClosed) {
        ShoppingCartContainer.classList.add ('inactive');
    }
    productDetailContainer.classList.add('inactive')
}

const productList = [];

productList.push ({
    name:'Bike',
    price: 12700,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push ({
    name:'Bicycle helmet',
    price: 1600,
    image: 'https://m.media-amazon.com/images/I/61eExL-rIAL._AC_SL1001_.jpg'
});

productList.push ({
    name:'Seat',
    price: 300,
    image: 'https://m.media-amazon.com/images/I/61e+sZ9rgNL._AC_SL1500_.jpg'
});
productList.push ({
    name:'Tennis Montain Bike',
    price: 2200,
    image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8ea578f6c07847fca2d0ac85011d7f1f_9366/Tenis_para_Mountain_Bike_Five_Ten_Freerider_Negro_FW2835_01_standard.jpg'
});
productList.push ({
    name:'Sunglasses',
    price: 800,
    image: 'https://cdn.siroko.com/s/files/1/1220/6874/products/gafas-siroko-tech-k3s-london-lateral/1200x/crop_center.jpg?v=1635209602'
});
productList.push ({
    name:'Sunglasses',
    price: 600,
    image: 'https://cdn.siroko.com/s/files/1/1220/6874/products/siroko-tech-k3s-clearfog-lente-antiniebla-frontal/1200x/crop_center.jpg?v=1635209603'
});
productList.push ({
    name:'Bicycle seat bag',
    price: 876,
    image: 'https://m.media-amazon.com/images/I/81k2Gmal+VL._AC_SL1500_.jpg'
}); 

function renderProducts (arr) {
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
     
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image)
        productImg.addEventListener('click', openProductDetailAside)
     
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
     
        const productInfoDiv = document.createElement('div');
     
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
     
     
        const productName = document.createElement('p');
        productName.innerText = product.name;
     
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
     
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', "./icons/bt_add_to_cart.svg");
     
        productInfoFigure.appendChild(productImgCart)
     
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
     
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
     
        cardsContainer.appendChild(productCard);
     }
}

renderProducts(productList)