let burguerBtn = document.getElementById('burguer-btn');
let burguerNav = document.getElementById('burguer-nav');

let productSection = document.getElementById('products-section');
let modalContainer = document.getElementById('modal-container')

burguerBtn.addEventListener('click', () => {
    console.log('Click')
    burguerNav.classList.toggle('open');
})

const fetchResponse = async () => {
    let res = await fetch('https://fakestoreapi.com/products');
    let data = await res.json()
    let categories = [];

    console.log(data)

    data.forEach(product => {
        if(!categories.includes(product.category.name)){
            categories.push(product.category.name);
        }
        let html = `<div class="card" data-id=${product.id}>
                    <div class='img-container'>
                        <img src=${product.image} alt="Imagen">
                    </div>
                    <div class='product-info'>
                        <h4>${product.title.slice(0, 25)}...</h4>
                        <button class='detail-button' value="${product.id}"> + Más información</button>
                        <span>${product.category}</span>
                    </div>
                    <div class="action">
                        <div class="price">
                            <small>Price</small>
                            <span>$${product.price}</span>
                        </div>
                        <div class="btn-add">
                            <button>Añadir al carrito</button>
                        </div>
                    </div>
                </div>`
        productSection.innerHTML += html;
    })

    addEvents();
}

fetchResponse();

const addEvents = () => {
    let detailBtns = document.querySelectorAll('.detail-button')

    detailBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            let productId = btn.value;
            console.log(productId)
        })
    })
}

const showModal = (id) => {
    
}

