import {Home, Login, Signin, ErrorPage, Profile, Main} from "./pages/index"
import Block from "./utils/block";
import { Link } from "./components/Link/link";
import { renderDom } from "./utils/renderDom";

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
        link: new Link({
            link: "home",
            text: "Назад к чатам",
            className: 'error__link',
        }),
    },
    error500: {
        title: "500",
        message: "Мы уже фиксим",
        link: new Link({
            link: "home",
            text: "Назад к чатам",
            className: 'error__link',
        }),
    }
}

// const router = {
//     login: Login(state.user),
//     signin: Signin(state.user),
//     404: ErrorP(state.error404),
//     500: ErrorP(state.error500),
//     profile: Profile(state.user),
//     home: Home(state.indexPages),
//     main: Main(),
// }


const router : Record<string, Block> = {
    home: Home(state.indexPages),
    404: ErrorPage(state.error404),
    500: ErrorPage(state.error500),
    login: Login(state.user)
}

const root = renderDom('app', router['home']);

root.addEventListener('click', handler);

function handler(event){
    event.preventDefault();
    const route = event.target.attributes[0]['nodeValue'];
    Object.keys(router).forEach(r => {
        if (r == route){
            renderDom('app', router[route]);
            return;
        }
    })
    
}
