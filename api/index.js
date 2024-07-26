import express from 'express';
import cors from 'cors';
import routes from './routes/index.js'

const app = express()

app.use(cors())
app.use(express.static('public'))
app.use('/', routes)

const { SERVER_PORT: port = 3003 } = process.env;

app.listen(port, () => {
  console.log(`🚀 Server ready at http://127.0.0.1:${port}`);
})