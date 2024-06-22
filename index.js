const express = require('express');
const app = express();
const port = process.env.PORT || 5000

app.get('/', (req, res) => {
  res.status(200).json([{ name: 'Anant', age: 23 }]);
});

app.listen(port, ()=>{
    console.log(`App is running on port ${port}`);
})
