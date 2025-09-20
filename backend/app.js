const express = require("express")
const dotenv = require("dotenv")
const cookieParser = require("cookie-parser")
const HrRoutes = require("./routes/hr.routes")

dotenv.config()

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json())
app.use(cookieParser())


app.get("/", (req, res) => {
    res.send("Hello, World!");
})

app.use("/api", HrRoutes)


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});