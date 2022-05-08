import {Home, Login, Signin, ErrorP, Profile, Main} from "./pages/index"

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
        ['Profile', 'profile'],
        ['Main', 'main'],
    ],
    error404: {
        title: "404",
        message: "Не туда попали",
        href: "home",
        link: "Назад к чатам"
    },
    error500: {
        title: "500",
        message: "Мы уже фиксим",
        href: "home",
        link: "Назад к чатам"
    }
}

const router = {
    login: Login(state.user),
    signin: Signin(state.user),
    404: ErrorP(state.error404),
    500: ErrorP(state.error500),
    profile: Profile(state.user),
    home: Home(state.indexPages),
    main: Main(),
}

const app: HTMLElement = document.getElementById('app')

//app.innerHTML = Login(state.user)
app.innerHTML = Home(state.indexPages)

app.onclick = handler

function handler(event){
    event.preventDefault()

    let route = event.target.attributes[0]['nodeValue']
    app.innerHTML = router[route]
}
