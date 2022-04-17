import data from "../../utils/data"

const app = document.getElementById('app')

data.forEach(item => {
    
    let li = document.createElement('li')
    li.textContent = item
    app.appendChild(li)
    
    }
)