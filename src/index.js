import Home from "./pages/home/home"
import Login from "./pages/login/login"
import Signin from "./pages/signin/signin"
import Error from "./pages/error/error"

const state = {
    user: {
        login: "admin",
        password: "12345",
        email: "ivan@yandex.ru",
        firstName: "Ivan",
        lastName: "Ivanov",
        authButtName: "Авторизоваться",
        regButtName: "Зарегистрироваться",
    },
    indexPages: [
        ['404', '404'],
        ['500', '500'],
        ['Login', 'login'],
        ['Signin', 'signin'],
    ],
    error404: {
        title: "404",
        message: "Не туда попали",
        href: "/index.html",
        link: "Назад к чатам"
    },
    error500: {
        title: "500",
        message: "Мы уже фиксим",
        href: "/index.html",
        link: "Назад к чатам"
    }
}

const app = document.getElementById('app')

//app.innerHTML = Login(state.user)
app.innerHTML = Home(state.indexPages)

// получаем все ссылки на странице
let anchors = document.querySelectorAll('a')
// вешаем на событие onclick обработчик
for ( let anchor of anchors ) anchor.onclick = handler

function handler(event){
    let url = new URL(event.currentTarget.href)
    event.preventDefault()

    switch(url.pathname){
        case '/login':
            app.innerHTML = Login(state.user)
            break
        case '/signin':
            app.innerHTML = Signin(state.user)
            break
        case '/404':
            app.innerHTML = Error(state.error404)
            break
        case '/500':
            app.innerHTML = Error(state.error500)
            break
        default:
    }

}
