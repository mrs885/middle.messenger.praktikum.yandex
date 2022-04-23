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

const app = document.getElementById('app')

//app.innerHTML = Login(state.user)
app.innerHTML = Home(state.indexPages)

app.onclick = handler

function handler(event){
    event.preventDefault()

    //console.log(event)
    let route = event.target.attributes[0]['nodeValue']
    
    switch(route){
        case 'login':
            app.innerHTML = Login(state.user)
            break
        case 'signin':
            app.innerHTML = Signin(state.user)
            break
        case '404':
            app.innerHTML = ErrorP(state.error404)
            break
        case '500':
            app.innerHTML = ErrorP(state.error500)
            break
        case 'profile':
            app.innerHTML = Profile(state.user)
            break
        case 'home':
            app.innerHTML = Home(state.indexPages)
            break
        case 'main':
            app.innerHTML = Main()
            break
        default:
            
    }

}
