let burguerBtn = document.getElementById('burguer-btn');
let burguerNav = document.getElementById('burguer-nav');

burguerBtn.addEventListener('click', () => {
    console.log('Click')
    burguerNav.classList.toggle('open');
})

