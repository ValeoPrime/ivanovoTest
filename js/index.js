const body = document.querySelector('body')
const search = document.querySelector('.header__search')
const searchPopUp = document.querySelector('.search_popUp')

search.addEventListener('click', () => {
    searchPopUp.style.display = "block"
    body.style.overflow = 'hidden'
})

searchPopUp.addEventListener('click', (event) => {
    if (event.target.classList.contains('search_popUp')) {
        searchPopUp.style.display = "none"
        body.style.overflow = 'visible'
    }
    if (event.target.classList.contains('search__popUp_icon')) {
        console.log('Отправка запроса на поиск');
    }
})


const gamburgerMenu = document.querySelector('.header__gamburger')
const gamburgerBackground = document.querySelector('.gamburger__background')
const navList = document.querySelector('.nav__list')



gamburgerMenu.addEventListener('click', () => {
    gamburgerBackground.style.right = '0%'
    navList.style.display = 'flex'
    navList.style.right = '0%'
})

navList.addEventListener('click', () => {
    gamburgerBackground.style.right = '-90%'
    navList.style.right = '-90%'
})