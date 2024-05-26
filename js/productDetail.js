var selectedSize;
var selectedPlayer;

document.getElementById('input_quan').value = 1;

function renderImg(){
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
}

function changeBigImg(link) {
    let bigImg = document.getElementById('big-image');
    bigImg.src = link;
}

function renderSizeAndType(){
    let sizeDiv = document.querySelector('.sizes');
    let selectDiv = document.querySelector('.select');

    let querySize = '';
    let querySelect = '';

    for (let index = 0; index < productDetailData.FCB.player.length; index++) {
        const element = productDetailData.FCB.player[index];
        querySelect += `<button id="player-${index}" onclick="chooseSize(${index})">${element.name}</button>`
    }

    for (let index = 0; index < sizeProduct.length; index++) {
        const element = sizeProduct[index];
        querySize += `<button id="size-${index}" onclick="chooseSize2(${index})">${element}</button>`
    }

    sizeDiv.innerHTML = querySize;
    selectDiv.innerHTML = querySelect;
}
function chooseSize(index){
    clearColorPlayerBtn();
    let btn = document.getElementById(`player-${index}`);
    btn.classList.toggle('clicked');
    selectedPlayer = productDetailData.FCB.player[index].value;
}

function clearColorPlayerBtn(){
    for (let index = 0; index < productDetailData.FCB.player.length; index++) {
        let idPlayer = `player-${index}`;
        let btn = document.getElementById(idPlayer);
        btn.classList.remove('clicked');
    }
}

renderImg();
renderSizeAndType();

function chooseSize2(index){
    clearColorPlayerBtn2();
    let btn = document.getElementById(`size-${index}`);
    btn.classList.toggle('clicked');
    selectedSize = sizeProduct[index];
}

function clearColorPlayerBtn2(){
    for (let index = 0; index < sizeProduct.length; index++) {
        let idSize = `size-${index}`;
        let btn = document.getElementById(idSize);
        btn.classList.remove('clicked');
    }
}
let addCartBtn = document.getElementById('add-to-cart');
addCartBtn.addEventListener('click', addCart)
function addCart(){
    let cartList = JSON.parse(localStorage.getItem('cart')) || [];
    let newItem = {
        ID: "FCB",
        price: productDetailData.FCB.price,
        name: productDetailData.FCB.name,
        size: selectedSize,
        player: selectedPlayer,
        quantity: Number.parseInt(document.getElementById('input_quan').value)
    }
    cartList.push(newItem);
    localStorage.setItem('cart', JSON.stringify(cartList));
}

function decreaseQuan(){
    if(document.getElementById('input_quan').value > 1){
        document.getElementById('input_quan').value -= 1;
    }
}
function increaseQuan(){
    document.getElementById('input_quan').value = Number.parseInt(document.getElementById('input_quan').value) + 1;
}