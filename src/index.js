import Home from "./pages/home/home"
import Login from "./pages/login/login"
import Signin from "./pages/signin/signin"

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
    ]
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
        default:
    }

}
