let host = 'http://localhost:3000/';
let option_selected = 1;
let cart_price = 0;

/* ----------------------------------------------------------
                 Fonction Item page D'acceuil 
-----------------------------------------------------------*/

function initProducts() { 
    fetch(host + 'api/cameras/')
        .then(response => response.json())
        .catch((error) => {
            document.getElementsByClassName('catalog-content')[0].style.height = "400px";
            document.getElementById('db-error').style.display = "block";
        })
        .then((api_data) => { 
            let i = 0;
            while(i < api_data.length) {
                let product_item = document.createElement("a");
                let img_item = document.createElement("img");
                let price_item = document.createElement("div");
                let txt_item = document.createElement("div");
                let buy_item = document.createElement("div");

                /* Création Item Produit */
                product_item.classList.add("product-item");
                product_item.href = "product.html?id=" + api_data[i]['_id'];
                document.querySelector('.product-list').appendChild(product_item);

                /* ANIMATION ITEM */
                product_item.style.animationDelay = "0." + i*2 + "s";
                
                
                /* Image Produit */
                img_item.classList.add("product-img");
                img_item.src = api_data[i]['imageUrl'];
                product_item.appendChild(img_item);

                /* Description produit */
                txt_item.classList.add("product-desc");
                txt_item.innerHTML = "<b>" + api_data[i]['name'] + "</b><br />" + api_data[i]['description'];
                product_item.appendChild(txt_item);
                i++;
            }
        });
}

