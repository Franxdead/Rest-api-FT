const express = require('express');
const app = express();
require("dotenv").config();
const userRoutes = require("./routes/user")

const mongoose = require("mongoose");
const port = process.env.PORT || 8000;
//middleware
app.use(express.json());
app.use('/api', userRoutes);
//Rutas
app.get('/', (req, res) =>{
    res.send('Bienvenido a mi api');
});
//Conexion Mongodb
mongoose
    .connect(process.env.MONGODB_URI)
    .then(()=> console.log('Conectado a MongoDB Atlas'))
    .catch((error) => console.error(error));

app.listen(port, () => console.log('server listening on port', port));