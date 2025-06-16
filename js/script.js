const btn = document.querySelector('.btn-starter')
const hilang = document.querySelector('.hilang')


btn.addEventListener('click', () => {
    hilang.classList.remove('missing')
})