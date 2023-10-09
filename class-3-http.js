const http= require('http');


const server = http.createServer((request,response)=>{
    if(request.url == '/'){
        response.write('<h1> Ram ram, Hello ji </h1>');
    }
    else if(request.url == '/about')
    {
        response.write('<h1> About page Hello ji, Ram ram </h1>');
    }
    response.end();
});
server.listen(5003);
console.log("http run on port 5003");


//first run this on terminal, then
//use localhost:5002 to see the code