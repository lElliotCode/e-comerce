let burguerBtn = document.getElementById('burguer-btn');
let burguerNav = document.getElementById('burguer-nav');

let productSection = document.getElementById('products-section');
let modalContainer = document.getElementById('modal-container');

burguerBtn.addEventListener('click', () => {
    console.log('Click')
    burguerNav.classList.toggle('open');
})
let categories = [];
const fetchData = async () => {
    let res = await fetch('https://fakestoreapi.com/products');
    let data = await res.json()

    return data;
}

const data = fetchData();

const displayProducts = (data) => {
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
}

const initializeApp = async () => {
    const data = await fetchData(); 
    displayProducts(data);
    addEvents();
}

initializeApp();

const addEvents = () => {
    let detailBtns = document.querySelectorAll('.detail-button')

    detailBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            let productId = btn.value;
            showModal(productId)

            modalContainer.style.display = 'flex';
        })
    })
}

let backBtn = document.querySelectorAll('.back-btn');
    backBtn.forEach(btn => btn.addEventListener('click', () => {
        modalContainer.style.display = 'none';
    }));

const showModal = async (id) => {

    let req = await fetch(`https://fakestoreapi.com/products/${id}`)
    let product = await req.json()


    let htmlContent = `
            <div class="product-modal">
                <button class="back-btn">  Volver </button>
                <div class="img-container">
                    <img src=${product.image} alt="">
                </div>
                <div class="informacion">
                    <h2>${product.title}</h2>
                    <p>${product.description}.</p>
                    <span>${product.category}</span>
                    <div class="actions">
                        <small>Price: $${product.price}</small>
                        <button>Añadir al carrito</button>
                    </div>
                </div>
            </div>`
    
            

    modalContainer.innerHTML = htmlContent;

    let backBtn = document.querySelectorAll('.back-btn');
    backBtn.forEach(btn => btn.addEventListener('click', () => {
        modalContainer.style.display = 'none';
    }));
}






