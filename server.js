const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const rappers = {
  '21 savage': {
    'age': 29,
    'birthName': 'Sheyaa Bin Abraham-Joseph',
    'birthLocation': 'London, England'
  },
  'chance the rapper': {
    'age': 29,
    'birthName': 'Chancelor Bennett',
    'birthLocation': 'Chicago, Illinois'
  },
  'dylan': {
    'age': 'Dylan',
    'birthName': 'Dylan',
    'birthLocation': 'Dylan'
  }
}
app.get('/', (request, response)=>{
  response.sendFile(__dirname + '/index.html')
})

app.get('/api/:rapperName', (request, response)=>{
  const rappersName = request.params.rapperName.toLocaleLowerCase()
  if(rappers[rappersName]) {
    response.json(rappers[rappersName])
  }else {
    response.json(rappers['dylan'])
  }
  // response.json(rappers)
})

app.listen(process.env.PORT || PORT, ()=>{
  console.log(`Server is running on port ${PORT}! You better go catch it!`)
})