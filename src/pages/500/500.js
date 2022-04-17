(function page500()
{
    const data = [1, 2, 3, 4]

    const app = document.getElementById('app')

    data.forEach(item => {
        
        let li = document.createElement('li')
        li.textContent = item
        app.appendChild(li)
        
        }
    )
})()