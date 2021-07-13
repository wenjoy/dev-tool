// import './inspector';
document.addEventListener('mouseover', (e) => {
    const target = e.target
    
    const {
        top,
        left,
        width,
        height
    } = (target as HTMLElement).getBoundingClientRect()

    const hover = document.getElementById('selector')
    hover.style.top = top+'px'
    hover.style.left = left+'px'
    hover.style.width = width+'px'
    hover.style.height = height+'px'
})