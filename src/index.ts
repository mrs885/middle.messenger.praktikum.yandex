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
        }),
    },
    error500: {
        title: "500",
        message: "Мы уже фиксим",
        link: new Link({
            link: "home",
            text: "Назад к чатам",
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
                    console.log('Login clicked');
                }
            }
        }),
        "link-no-account": new Link({
            link: "home",
            text: "Нет аккаунта?",
        }),
    },
    signin: {
        "input-email": new Input({
            className: "text-field__input",
            inputType: "text",
            inputPlaceholder: "Почта",
            value: state.user.email,
            events: {
                input: (e) => {
                    state.user.email = (e.target as HTMLInputElement).value;
                }
            }
        }),
        "label-email": new Label({
            className: "text-field__label",
            value: "Почта",
        }),
        "email-helper": new Label({
            className: "text-field__helper",
            value: `&nbsp;`,
        }),
        "input-login": new Input({
            className: "text-field__input",
            inputType: "text",
            inputPlaceholder: "Логин",
            value: state.user.login,
            events: {
                input: (e) => {
                    state.user.login = (e.target as HTMLInputElement).value;
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
        "input-name": new Input({
            className: "text-field__input",
            inputType: "text",
            inputPlaceholder: "Имя",
            value: state.user.firstName,
            events: {
                input: (e) => {
                    state.user.firstName = (e.target as HTMLInputElement).value;
                }
            }
        }),
        "label-name": new Label({
            className: "text-field__label",
            value: "Имя",
        }),
        "name-helper": new Label({
            className: "text-field__helper",
            value: `&nbsp;`,
        }),
        "input-lastname": new Input({
            className: "text-field__input",
            inputType: "text",
            inputPlaceholder: "Фамилия",
            value: state.user.lastName,
            events: {
                input: (e) => {
                    state.user.lastName = (e.target as HTMLInputElement).value;
                }
            }
        }),
        "label-lastname": new Label({
            className: "text-field__label",
            value: "Фамилия",
        }),
        "lastname-helper": new Label({
            className: "text-field__helper",
            value: `&nbsp;`,
        }),
        "input-tel": new Input({
            className: "text-field__input",
            inputType: "tel",
            inputPlaceholder: "Телефон",
            value: state.user.tel,
            events: {
                input: (e) => {
                    state.user.tel = (e.target as HTMLInputElement).value;
                }
            }
        }),
        "label-tel": new Label({
            className: "text-field__label",
            value: "Телефон",
        }),
        "tel-helper": new Label({
            className: "text-field__helper",
            value: `&nbsp;`,
        }),
        "input-pass": new Input({
            className: "text-field__input",
            inputType: "password",
            inputPlaceholder: "Пароль",
            value: state.user.password,
            events: {
                input: (e) => {
                    state.user.password = (e.target as HTMLInputElement).value;
                }
            }
        }),
        "label-pass": new Label({
            className: "text-field__label",
            value: "Пароль",
        }),
        "pass-helper": new Label({
            className: "text-field__helper",
            value: `&nbsp;`,
        }),
        "input-pass2": new Input({
            className: "text-field__input",
            inputType: "password",
            inputPlaceholder: "Пароль",
            value: state.user.password2,
            events: {
                input: (e) => {
                    state.user.password2 = (e.target as HTMLInputElement).value;
                }
            }
        }),
        "label-pass2": new Label({
            className: "text-field__label",
            value: "Пароль еще раз  ",
        }),
        "pass2-helper": new Label({
            className: "text-field__helper",
            value: `&nbsp;`,
        }),
        "signin-button": new Button ({
            label: "Зарегистрироваться",
            events: {
                click: (e) => {
                    e.stopPropagation();
                    console.log('Register clicked');
                }
            }
        }),
        "link-no-account": new Link({
            link: "home",
            text: "Войти",
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
    login: Login(pageCreator.login),
    signin: Signin(pageCreator.signin)
}

const newWindow = window as any;
newWindow.user = state.user;

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
