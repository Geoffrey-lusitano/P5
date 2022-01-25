// Etape 4 : Faire le lien entre un produit de la page d’accueil et la page Produit
// récupération de de l'id du produit de la page index
let params = new URLSearchParams(document.location.search);
// Etape 5 : Récupérer l’id du produit à afficher
let productId = params.get("id");
    // if (productId == null) {
    //     return;
    // }
console.log(productId);
// Etape 6 : Insérer un produit et ses détails dans la page Produit
    //Création d'un tableau conetant les données du produit
    let product = [];
    // interroger l'API pour récupérer les détails du produit 
    fetch(`http://localhost:3000/api/products/${productId}`)
        .then((res) => res.json())
        .then((result) => {
            product = result
            console.log(product);
            // Option 1 
        //     document.querySelector(".item").innerHTML =  ` 
        // <section class="item">
        //   <article>
        //     <div class="item__img">
        //       <img src="${product.imageUrl}" alt="${product.altTxt}">
        //     </div>
        //     <div class="item__content">

        //       <div class="item__content__titlePrice">
        //         <h1 id="title">${product.name}</h1>
        //         <p>Prix : <span id="price">${product.price}</span>€</p>
        //       </div>

        //       <div class="item__content__description">
        //         <p class="item__content__description__title">Description :</p>
        //         <p id="description">${product.description}</p>
        //       </div>

        //       <div class="item__content__settings">
        //         <div class="item__content__settings__color">
        //           <label for="color-select">Choisir une couleur :</label>
        //           <select name="color-select" id="colors">
        //                 <option value="">--SVP, choisissez une couleur --</option>
        //           </select>
        //         </div>

        //         <div class="item__content__settings__quantity">
        //           <label for="itemQuantity">Nombre d'article(s) (1-100) :</label>
        //           <input type="number" name="itemQuantity" min="1" max="100" value="0" id="quantity">
        //         </div>
        //       </div>

        //       <div class="item__content__addButton">
        //         <button id="${product.id}">Ajouter au panier</button>
        //       </div>

        //     </div>
        //   </article>
        // </section>
        // `;
            // Option 2 
            // Ajout de l'image
            let img = document.createElement("img");
                img.setAttribute('src', product.imageUrl);
                document.querySelector(".item__img").appendChild(img);          
            // Ajout du nom
            let name = document.createTextNode(product.name);
            document.querySelector("#title").appendChild(name);
            // Ajout du prix
            let price = document.createTextNode(product.price);
            document.querySelector("#price").appendChild(price);
            // Ajout de la description
            let description = document.createTextNode(product.description);
            document.querySelector("#description").appendChild(description);
        

        });

    
    //     // liste de choix de couleurs
    //     let selectColors = document.getElementById("colors")
    //     console.log(selectColors)
    //     product.colors.forEach((color) => {
    //         let option = document.createElement("option");
    //         option.innerHTML = `${color}`;
    //         option.value = `${color}`;
    //         selectColors.appendChild(option);

    //     })
    //     addProduct(product);
    // };

    // // ajouter le produit dans le panier
    // const addProduct = () => {
    //     let button = document.getElementById(product._id);
    //     console.log(button);
    // };






