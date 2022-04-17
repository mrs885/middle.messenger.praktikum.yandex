const app = document.getElementById('app')

let a

a = document.createElement('a')
a.setAttribute('href', '404.html')
a.innerHTML = '404'
app.appendChild(a)

a = document.createElement('div')
app.appendChild(a)

a = document.createElement('a')
a.setAttribute('href', '500.html')
a.innerHTML = '500'
app.appendChild(a)