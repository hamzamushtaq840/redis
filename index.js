const { default: axios } = require('axios');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  axios.get('https://jsonplaceholder.typicode.com/todos/1')
  .then((res)=>
  {
    console.log(res);
  })
  .catch((err)=>console.log(err))
})

app.listen(3000, () => {
  console.log('Server started on port 3000');
})