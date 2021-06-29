let host = 'http://localhost:3000/';
let option_selected = 1;
let cart_price = 0;


function initProducts() { // Init. listes de produits (index.php)
    fetch(host + '/api/cameras', cameraRoutes)
        .then(response => response.json())
        .catch((error) => {
            document.getElementsByClassName('catalog-content')[0].style.height = "400px";
            document.getElementById('db-error').style.display = "block";
        })
        .then((api_data) => { 
            let i = 0;
            while (i < api_data.length) {
                let product_item = document.createElement("a");
                let img_item = document.createElement("img");
                let price_item = document.createElement("div");
                let txt_item = document.createElement("div");
                let buy_item = document.createElement("div");
                // Create item of new product
                product_item.classList.add("product-item");
                product_item.href = "product.html?id=" + api_data[i]['_id']; // Update link for view this product
                document.querySelector('.product-list').appendChild(product_item);
                product_item.style.animationDelay = "0." + i*2 + "s"; // Animation stylé ;)
                // Create and attach img of new product
                img_item.classList.add("product-img");
                img_item.src = api_data[i]['imageUrl']; // Update link of img
                product_item.appendChild(img_item);
                // Create and attach price of new product
                let price_int = api_data[i]['price']/100;
                price_item.classList.add("product-price");
                price_item.innerHTML = price_int + ".00€";
                product_item.appendChild(price_item);
                // Create, define and attach description of new product
                txt_item.classList.add("product-desc");
                txt_item.innerHTML = "<b>" + api_data[i]['name'] + "</b><br />" + api_data[i]['description'];
                product_item.appendChild(txt_item);
                // Create and attach 'Add to cart' button
                buy_item.classList.add("product-buybtn");
                buy_item.innerHTML = "Ajouter au panier";
                product_item.appendChild(buy_item);
                i++;
            }
        });
}

