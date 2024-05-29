document.querySelector('.header__burger').addEventListener('click', (e) => {
    e.preventDefault();
    console.log('test');
    document.querySelector('.header__mobile').classList.toggle('active');
});