// Etape 8
// Récupérer l'array produit depuis le localstorage
function arrayCart() {
    let cart = localStorage.getItem("cartProducts");
    if (cart != null) {
        return JSON.parse(cart);
    } else {
        return [];
    }
    console.log(cart);
}

// Parcourir l'array
function whatInMyCart() {
    let cart = arrayCart();
    // Parcourir l'array pour afficher les produits
    for (let item = 0; item < cart.length; item++) {
        console.log(`id:${cart[item].productId}, color : ${cart[item].color}, quantity : ${cart[item].quantity}`);
    }
}
arrayCart();
whatInMyCart(arrayCart());  
//selection du point de depart : 
function afficherProduit() {
    fetch(`http://localhost:3000/api/products/${productId}`)
        .then((res) => res.json())
    const cart__items = async () => {
        document.querySelector("#cart__items");
        // article contenant tous nos info produit
        let article = document.createElement("article");
        article.className = "cart__item";
        article["data-id"] = `${cart[item].productId}`;
        article["data-color"] = `${cart[item].color}`;
        cart__items.appendChild(article);
            // <div class="cart__item__img">
            let imgContener = document.createElement("div");
            imgContener.className = "cart__item__im";
            article.appendChild(imgContener);
                // <img src="../images/product01.jpg" alt="Photographie d'un canapé">
                let img = document.createElement("img");
                    img.setAttribute("src", product.imageUrl);
                    imgContener.appendChild(img);
            // <div class="cart__item__content">
            let itemContent = document.createElement("div");
            itemContent.className = "cart__item__content";
            article.appendChild(itemContent);
                // <div class="cart__item__content__description">
                let itemContentDescription = document.createElement("div");
                itemContentDescription.className = "cart__item__content__description";
                itemContent.appendChild(itemContentDescription);
                    // <h2>Nom du produit</h2>
                    let nameProduct = document.createElement("h2");
                    nameProduct.textContent = product.name;
                    itemContentDescription.appendChild(nameProduct);
                    // <p>couleur</p>
                    let colorProduct = document.createElement("p");
                    colorProduct.textContent = `${cart[item].color}`;
                    itemContentDescription.appendChild(colorProduct);
                    // <p>prix</p>
                    let priceProduct = document.createElement("p");
                    priceProduct.textContent = product.price;
                    itemContentDescription.appendChild(priceProduct);
                // div class="cart__item__content__settings
                let itemContentSettings = document.createElement("div");
                itemContentDescription.className = "cart__item__content__settings";
                itemContent.appendChild(itemContentSettings);
                    // <div class="cart__item__content__settings__quantity">
                    let itemContentSettingsQuantity = document.createElement("div");
                    itemContentSettingsQuantity.className = "cart__item__content__settings__quantity";
                    itemContentSettings.appendChild(itemContentSettingsQuantity)
                        // <p>Qté : </p>
                        let qte = document.createElement("p");
                        itemContentSettingsQuantity.appendChild(qte);
                        // <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="42">
                        let input = document.createElement("input");
                        input.className = "itemQantity";
                        input.name = "itemQantity";
                        input.value = `${cart[item].quantity}`;
                        itemContentSettingsQuantity.appendChild(input);
                    // <div class="cart__item__content__settings__delete">
                    let itemContentSettingsDelete = document.createElement("div");
                    itemContentSettingsDelete.className = "cart__item__content__settings__delete";
                    itemContentSettings.appendChild(itemContentSettingsDelete);
                        // <p class="deleteItem">Supprimer</p>
                        let itemDelete = document.createElement("p");
                        itemDelete.textContent = "Supprimer";
                        itemDelete.className = "deleteItem";
                        itemContentSettingsDelete.appendChild(itemDelete);
    }
}
afficherProduit(whatInMyCart());

// Supprimer un produit
function deleteProduct() {
    const deleteProduct = document.getElementsByClassName("deleteItem");
}

