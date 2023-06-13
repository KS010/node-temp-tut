const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url==='/'){
        return res.end(`It's our home page boii!`)
        // return
    }
    else if(req.url === '/about'){
        return res.end(`It's our About Us page boii!`)
        
        // return
    }
    else {return res.end(`Nikal pehli fursat me galat kholi me ghus rela h`)}
});

// server.listen(5000);
server.listen(5000,()=>{
 console.log('Server is up and running at Port 5000')
})