const http = require('http')

const port = 8080

console.clear();

const server = http.createServer((request, response) => {
    const metodo = request.method
    const url = request.url

    response.setHeader('Content-Type', 'text/json')
    response.statusCode = 200

    const mensaje = {
        message: '',
    }

    if (metodo === 'GET' && url === '/koders') {
        mensaje.message = 'Aquí están todos los koders'
    } else if (metodo === 'POST' && url === '/koders') {
        mensaje.message = 'Aquí puedes crear koders'
    } else {
        response.statusCode = 400
        mensaje.message = 'No se que hacer, aiuda'
    }

    const respuesta = JSON.stringify(mensaje) // convertir mensaje a JSON
    console.log(respuesta)

    response.write(respuesta) // response.write('{"message": "Aqui estan todos los koders"}')
    response.end()
})

// arrancamos el servidor
server.listen(port, () => {
    console.log(`El servidor arranco en el puerto ${port}`)
})