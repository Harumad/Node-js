const express =require ('express');


const server =express ('server');


// middleware definitions



const serveHomePage =(req,res)=> {
 res.send ('Hello this is HomePage Handler');
}
// route definitions
server.get('/', serveHomePage)



server.listen(3000,()=> console.log ('server is ready'));