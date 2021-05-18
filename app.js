const express = require('express');
const dishRoutes = require('./routes/index');

const app = express();
app.use(express.json());


app.use('/api', dishRoutes);
app.use('/', (req,res)=>{
    res.json({"msg": "The api is running"})
})



const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
  )
);

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`);
  // Close server & exit process
  // server.close(() => process.exit(1));
});
