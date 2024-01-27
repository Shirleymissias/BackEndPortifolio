import express from 'express'
import cors from 'cors'
import sequelize from './src/database/sequelize.js'

const port = 3000

const app = express()

app.use(express.json())

app.use(cors())

const homeInfo = {
    name:"Shirley",
    role:"Dev",
    info:"Sou boa demias programando é isso"
}

const aboutInfo = {
    title: "Frontend Developer & Graphic Designer",
    paragraphOne: " Lorem ipsum dolor sit amet consectetur adipisicing elit. At reiciendis, quas voluptatum facere quam iusto itaque sapiente dolor provident aspernatur unde, suscipit illum, velit similique animi iste corporis repellendus veritatis minus voluptas. Sunt, eligendi. Praesentium explicabo facere quo ad earum.",
    paragrapTwo: " Lorem ipsum dolor sit amet consectetur adipisicing elit. At reiciendis, quas voluptatum facere quam iusto itaque sapiente dolor provident."
}

app.get('/home', (request, response) => {
    response.json(homeInfo)
})

app.get('/about', (request, response) => {
    response.json(aboutInfo)
})



app.listen(port, () => {
    console.log('Servidor funcionando')
})