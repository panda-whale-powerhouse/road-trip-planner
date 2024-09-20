const express = require('express');

const app = express();

app.get('/', (req, res)=>{
  return res.status(200).send("it's working!");
})

app.listen(3000, () => {
  console.log("Listening on Port 3000...");
})
