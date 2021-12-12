const express = require("express");

// import Routes
const RegistrationRouter = require("./routes/usersRouter");


const PORT = 5000;
const app = express();

app.use((req,res, next) => {
    console.log("Request => ", new Date());
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, X-Auth-Token"
    );
    res.header("Access-Control-Allow-Methods", "DELETE, POST, PUT, GET");
    next();
});

app.use("/api/users", RegistrationRouter);


app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

