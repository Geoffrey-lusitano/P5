// Etape 8
// Récupérer l'array produit depuis le localstorage
function arrayCart() {
    let cart = localStorage.getItem("cartProducts");
    if (cart != null) {
        return JSON.parse(cart);
    } else {
        return [];
    }
}
// Supprimer un produit
function deleteProduct() {
    const deleteProduct = document.getElementsByClassName("deleteItem");
}
// Affiche le produit dans la page panier
function afficherProduit(product) {
    //showCartStorage(product);
    
}
// Parcourir l'array
async function whatInMyCart(listProducts) {
    // Parcourir l'array pour afficher les produits
    for (const product of cart) {
        //console.log(product.color);
        //afficherProduit(product);
        structure(product);
        showCartStorage(product);
        lesAutreDonnées(product);
         
    }
    //console.log(listProducts);
}
// Affiche les données du local storage
async function showCartStorage() {
    for (const i of cart) {
        console.log(i.productId);
        console.log(i.color);
        console.log(i.quantity);
        nameProduct.textContent = "ID : " + i.productId;
        colorProduct.textContent = "Color : " + i.color;
        qte.textContent = "Quantity : " + i.quantity;
    }
}
// Récupere et affiche les données manquantes du produits depuis l'API
async function lesAutreDonnées(infoProduct) {
    // va chercher dans l api les données : 
    let result = await fetch(`http://localhost:3000/api/products/`)
    let data = await result.json();
    for (const i of data) {
        priceProduct.textContent = "Prix : " +  i.price;
    }
    console.log(i.price);
}
// Structure HTML
async function structure() {
// selection du point de depart : 
const cart__items = document.querySelector("#cart__items");
// article contenant tous nos info produit
let article = document.createElement("article");
article.className = "cart__item";
cart__items.appendChild(article);
    // <div class="cart__item__img">
    let imgContener = document.createElement("div");
    imgContener.className = "cart__item__im";
    article.appendChild(imgContener);
        // <img src="../images/product01.jpg" alt="Photographie d'un canapé">
        let img = document.createElement("img");
        //img.setAttribute("src", data[0].imageUrl);
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
            
            itemContentDescription.appendChild(nameProduct);
            // <p>couleur</p>
            let colorProduct = document.createElement("p");
            
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
                input.value = "";
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
let cart = arrayCart();

                                         
whatInMyCart(cart);  
