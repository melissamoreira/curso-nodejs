const http = require('http');

const servidor = http.createServer((req, res) => {
    res.end(`
        <html>
            <body>
                <h1>Livraria Cristal</h1>
            </body>
        </html>
    `);
}).listen(3000);