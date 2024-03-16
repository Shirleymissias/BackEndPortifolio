import express, { request, response } from 'express'
import cors from 'cors'
import {connection} from './database/mysql-connect.js'

const port = 3000;

const app = express();
const routs = express.Router();

app.use(express.json());
app.use(cors());

// const homeInfo = {
//     name:"Shirley",
//     role:"Dev",
//     info:"Sou boa demias programando é isso"
// }

// const aboutInfo = {
//     title: "Frontend Developer & Graphic Designer",
//     paragraphOne: " Lorem ipsum dolor sit amet consectetur adipisicing elit. At reiciendis, quas voluptatum facere quam iusto itaque sapiente dolor provident aspernatur unde, suscipit illum, velit similique animi iste corporis repellendus veritatis minus voluptas. Sunt, eligendi. Praesentium explicabo facere quo ad earum.",
//     paragrapTwo: " Lorem ipsum dolor sit amet consectetur adipisicing elit. At reiciendis, quas voluptatum facere quam iusto itaque sapiente dolor provident."
// }

routs.get("/", async (request, response) => {
    const [rows] = await connection.query("select * from users LIMIT 1");
    return response.status(200).json(rows);
})

// app.get('/', (request, response) => {
//     response.json(homeInfo)
// })

app.get('programming_languages', async (request, response) => {
    const data = [
        {id: 1, language: 'Linguagem 1', percentage: 30}
    ]

    //const data = (await connection).execute('select * from programming_languages')

    return response.json()
})


app.post('programming_languages', async(request, response) => {
    const data = request.body
    const query = await connection.execute('', [])

    return response.json()
})

app.listen(port, () => {
    console.log('Servidor funcionando')
});

