const share = document.querySelector('.fa-share')
const links = document.querySelector('.tooltip')

share.addEventListener('click', () => {
    links.classList.toggle('active');
})