const app = require('./src/app')
const port =  process.env.PORT || 3000

let server = app.listen(port, () => {
  let host = server.address().address
  let port = server.address().port
  console.log("App Carro está em http://%s:%s", host, port)
})