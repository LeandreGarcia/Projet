fetch('http://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(data =>{
    data.forEach(user =>{
        const paragrapheTxt = document.createElement('p')
        paragrapheTxt.textContent = user.name
        document.body.appendChild(paragrapheTxt)
    }
    )
})

//https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&appid={API key}