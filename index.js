const { default: axios } = require('axios');
const express = require('express');
const app = express();

app.get('/', async (req, res) => {
  //can also be a simple database call
 let {data} = await axios.get('https://jsonplaceholder.typicode.com/photos',{params:{albumId:req.query.albumId}})
 res.json(data)
})

app.get('/:id', async (req, res) => {
 let {data} = await axios.get(`https://jsonplaceholder.typicode.com/photos/${req.params.id}`)
 res.json(data)
})

app.listen(3000, () => {
  console.log('Server started on port 3000');
})