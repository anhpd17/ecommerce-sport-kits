function renderHome(){
    let products = document.querySelector('.products');
    let query = '';
    for (let index = 0; index < ProductData.length; index++) {
        const element = ProductData[index];
        query += `
        <div class="product-item1">
            <div class="product-icon">
                <img src="${element.img}" alt="">
            </div>
            <div class="info" style="font-weight: bold;">${element.name}</div>
            <div class="info" >$${element.price} USD</div>
            <div class="detail-outer">
            <a href="${element.urlPage}" style="text-decoration: none"><div class="detail-container">Details</div></a>
            </div>
        </div>
        `
    }

    products.innerHTML = query;
}

renderHome();