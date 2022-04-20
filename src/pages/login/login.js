import Handlebars from "handlebars"
//import tmpl from "../../../static/login.hbs"

const data = {
    login: "user"
}

const page = Handlebars.compile(tmpl)

document.body.appendChild(page(date))
