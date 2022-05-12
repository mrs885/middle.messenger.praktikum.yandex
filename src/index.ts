import {Home, Login, Signin, ErrorPage, Profile, Main} from "./pages/index"
import Block from "./utils/block";
import { Link } from "./components/Link/link";
import { Input } from "./components/Input/input";
import { Label } from "./components/Label/label";
import { Button } from "./components/Button/button";
import { renderDom } from "./utils/renderDom";
import state from "./utils/state";

const pageCreator = {
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
    },
    login: {
        "input-login": new Input({
            className: "text-field__input",
            inputType: "text",
            inputPlaceholder: "Логин",
            value: state.user.login,
            events: {
                input: (e) => {
                    state.user.login = (e.target as HTMLInputElement).value;
                    console.log(state);
                }
            }
        }),
        "label-login": new Label({
            className: "text-field__label",
            value: "Логин",
        }),
        "login-helper": new Label({
            className: "text-field__helper",
            value: `&nbsp;`,
        }),
        "input-password": new Input({
            className: "text-field__input",
            inputType: "password",
            inputPlaceholder: "Пароль",
            value: state.user.password
        }),
        "label-password": new Label({
            className: "text-field__label",
            value: "Пароль",
        }),
        "password-helper": new Label({
            className: "text-field__helper",
            value: "неверный пароль",
        }),
        "login-button": new Button ({
            label: "Авторизоваться",
            events: {
                click: (e) => {
                    e.stopPropagation();
                    pageCreator.login["input-login"].setProps({
                        value: '123'
                    })
                    console.log(pageCreator.login["input-login"])
                }
            }
        }),
        "link-no-account": new Link({
            link: "home",
            text: "Нет аккаунта?",
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
    home: Home(pageCreator.indexPages),
    404: ErrorPage(pageCreator.error404),
    500: ErrorPage(pageCreator.error500),
    login: Login(pageCreator.login)
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
