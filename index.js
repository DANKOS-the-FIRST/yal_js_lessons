const http = require('http')

const server = http.createServer((req, res) => {
    console.log(req.url);

    res.write('<h1>Hello from nodejs</h1>')
    res.end(
        `<div style="background: green; width: 200px; height: 500px">
            <h1>Tested nodemon</h1>
        </div>`
    )
})

server.listen(3000, () => {
    console.log('server is running...');
})