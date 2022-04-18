import config from "./utils/config"

const app = document.getElementById('app')

let a

config.indexPages.forEach((item) => {
    a = document.createElement('a')
    a.setAttribute('href', item[1])
    a.innerHTML = item[0]
    app.appendChild(a)
    
    a = document.createElement('div')
    app.appendChild(a)
})
