let products = [];
const cart = {};

const updateCart = () => {
    let totalPrice = 0;
    document.querySelector('#cartSummary_items').replaceChildren([]);

    for (const key of Object.keys(cart)) {
        const item = products.find((product) => `${product.id}` === key);
        const quantity = cart[key];
        const price = item.price;

        const itemRow = document.createElement('tr');

        const itemName = document.createElement('th');
        itemName.innerText = item.title;

        const itemQuantity = document.createElement('td');
        // เพิ่มปุ่มลบและเพิ่ม
        const minusBtn = document.createElement('button');
        minusBtn.innerText = '-';
        minusBtn.className = 'cartMinusBtn';
        minusBtn.onclick = () => {
            if (cart[item.id] > 1) {
                cart[item.id]--;
            } else {
                delete cart[item.id];
            }
            updateCart();
        };
        const plusBtn = document.createElement('button');
        plusBtn.innerText = '+';
        plusBtn.className = 'cartPlusBtn';
        plusBtn.onclick = () => {
            cart[item.id]++;
            updateCart();
        };
        const qtySpan = document.createElement('span');
        qtySpan.innerText = ' ' + quantity + ' ';
        itemQuantity.append(minusBtn, qtySpan, plusBtn);

        const itemPrice = document.createElement('td');
        itemPrice.innerText = quantity * price;

        itemRow.append(itemName, itemQuantity, itemPrice);
        document.querySelector('#cartSummary_items').append(itemRow);

        totalPrice += price * quantity;
    }

    document.querySelector('#cartSummary_total').innerText = totalPrice;
}

const createCard = (product) => {
    const productCard = document.createElement('div');
    productCard.className = 'productCard';

    const productThumbnail = document.createElement('img');
    productThumbnail.className = 'productThumbnail';
    productThumbnail.src = product.thumbnail;

    const productBottomSheet = document.createElement('div');
    productBottomSheet.className = 'productBottomSheet';

    const productInfoContainer = document.createElement('div');
    productInfoContainer.className = 'productInfoContainer';

    const productName = document.createElement('strong');
    productName.className = 'productName';
    productName.innerText = product.title;

    const productPrice = document.createElement('div');
    productPrice.className = 'productPrice';
    productPrice.innerText = '$' + product.price;

    const addToCart = document.createElement('button');
    addToCart.className = 'addToCart';
    addToCart.innerText = `+`;

    addToCart.addEventListener('click', () => {
        if (cart[product.id] === undefined) cart[product.id] = 0;
        cart[product.id] = cart[product.id] + 1;

        updateCart();
    });

    productInfoContainer.append(productName, productPrice);
    productBottomSheet.append(productInfoContainer, addToCart);
    productCard.append(productThumbnail, productBottomSheet);

    document.querySelector('#productList').appendChild(productCard);
};

const hookViewCart = () => {
    const viewCartButton = document.querySelector('#viewCart');
    viewCartButton.addEventListener('click', () => {
        console.log('inside hookViewCart');
        const cartSummary = document.querySelector('#cartSummary');
        const display = cartSummary.style.display;

        if (display === 'none') {
            cartSummary.style.display = 'block';
        } else {
            cartSummary.style.display = 'none';
        }
    });
};

const fetchProduct = () => {
    fetch('https://dummyjson.com/products/category/motorcycle')
        .then(res => res.json())
        .then((productResponse) => {
            products = productResponse.products;

            products.forEach(product => {
                createCard(product);
            });
        });
}

fetchProduct();
hookViewCart();
