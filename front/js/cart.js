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
// Supprimer un produit
function deleteProduct() {
    const deleteProduct = document.getElementsByClassName("deleteItem");
}
function afficherProduit(product) {
    lesAutreDonnées(product);
    console.log(product);
}
// Parcourir l'array
function whatInMyCart(listProducts) {
    // Parcourir l'array pour afficher les produits
    for (const product of cart) {
        console.log(product.color);
        afficherProduit(product);

    }
    console.log(listProducts);
}

function lesAutreDonnées(infoProduct) {
    // va chercher dans l api les donée : 
    // image etc en rapport avec l id de 
    console.log(infoProduct);
}

let cart = arrayCart();
whatInMyCart(cart);  

