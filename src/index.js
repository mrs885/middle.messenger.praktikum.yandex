import Handlebars from "handlebars"
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


const templ = `
    <div class="{{ wrapperClassName }}">
        {{ buttonText }}
    </div>`

const page = Handlebars.compile(templ)({
    wrapperClassName: 'chat__wrapper',
    buttonText: 'Добавить чат'
})

const body = document.getElementById('templ')

body.innerHTML = page

