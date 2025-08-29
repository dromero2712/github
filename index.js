const app = http.createServer((request,response)=> {
  response.end("servidor node iniciado")
})
const PORT = 3000
console.log("servidor levantado en el puerto 3000")