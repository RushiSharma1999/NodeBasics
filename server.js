const http = require("http");

//creating a server
const server = http.createServer((req, res) => {
    console.log('request made');
});

//listening to the server
server.listen(3000, 'localhost', ()  => {
    console.log('listening for requests on port 3000');
})