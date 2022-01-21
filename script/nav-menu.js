const bar = document.querySelector('.bars-icon')

bar.addEventListener('click', function() {
    document.querySelector('.nav-menu-wrapper').classList.toggle('show')
})