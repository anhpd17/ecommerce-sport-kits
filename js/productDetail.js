let linkMiniImgs = [
    "https://retrokitshop.com/cdn/shop/products/3fb19b84.jpg?v=1683888377&width=990",
    "https://retrokitshop.com/cdn/shop/products/d6692857.jpg?v=1683888377&width=990",
    "https://retrokitshop.com/cdn/shop/products/1c4ca3b5.jpg?v=1683888377&width=990",
    "https://retrokitshop.com/cdn/shop/products/1dd090cf.jpg?v=1683888377&width=990",
    "https://retrokitshop.com/cdn/shop/products/3c38b95d.jpg?v=1683888377&width=990",
    "https://retrokitshop.com/cdn/shop/products/86fde43d.jpg?v=1683888377&width=990",
    "https://retrokitshop.com/cdn/shop/products/4777ea13.jpg?v=1683888377&width=990",
    "https://retrokitshop.com/cdn/shop/products/af93e140.jpg?v=1683888377&width=990"
]

let miniImgDiv = document.querySelector('.mini-img');
let queryMiniImg = '';
for (let index = 0; index < linkMiniImgs.length; index++) {
    const element = linkMiniImgs[index];
    queryMiniImg += `<img src="${element}" onclick="changeBigImg('${element}')">`
}
miniImgDiv.innerHTML = queryMiniImg;

function changeBigImg(link) {
    let bigImg = document.getElementById('big-image');
    bigImg.src = link;
}