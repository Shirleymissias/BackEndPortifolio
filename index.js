import express from 'express'
import cors from 'cors'

const port = 3000

const app = express()

app.use(express.json())

app.use(cors())

const homeInfo = {
    name:"Shirley",
    role:"Dev",
    info:"Sou boa demias programando é isso"
}

app.get('/home', (request, response) => {
    response.json(homeInfo)
})



app.listen(port, () => {
    console.log('Servidor funcionando')
})