// Etape 8
// Récupérer l'array produit depuis le localstorage
let cart = JSON.parse(localStorage.getItem("cartProducts"));
console.log(cart);

// On connecte l api

// Si le panier est vide
// if(cart === null) {
//     console.log("vide")
// } else {
// // Parcourir l'array pour afficher les produits
//     cart.array.forEach(element => {
//         console.log(element);
        

        
//     });
// }
// selection du point de depart : 
const cart__items = document.querySelector("#cart__items");
// article contenant tous nos info produit
let article = document.createElement("article");
article.className = "cart__item";
article.textContent = "test";
cart__items.appendChild(article);
    // <div class="cart__item__img">
    let imgContener = document.createElement("div");
    imgContener.className = "cart__item__im";
    article.appendChild(imgContener);
        // <img src="../images/product01.jpg" alt="Photographie d'un canapé">
        let img = document.createElement("img");
        //img.setAttribute("src", product.imageUrl);
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
            //nameProduct.textContent = product.name;
            itemContentDescription.appendChild(nameProduct);
            // <p>couleur</p>
            let colorProduct = document.createElement("p");
            //colorProduct.textContent = element.color;
            itemContentDescription.appendChild(colorProduct);
            // <p>prix</p>
            let priceProduct = document.createElement("p");
            //priceProduct.textContent = product.price;
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


