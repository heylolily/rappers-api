const express = require('express')
const app = express()
const PORT = 8000

const rappers = {
    '21 savage': {
        'age': 31,
        'name': 'Sheyaa',
        'location': 'London'
    },
    'chance the rapper': {
        'age': 31,
        'name': 'Chancellor Bennett',
        'location': 'Chicago'
    },
    'dylan': {
        'age': 'dylan',
        'name': 'dylan',
        'location': 'dylan'
    }
}


app.get('/', (request,response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:rapperName', (request, response) => {
    const rappersName = request.params.rapperName
    if (rappers[rappersName]) {
        response.json(rappers[rappersName])
    } else {
        response.json(rappers['dylan'])
    }

})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})