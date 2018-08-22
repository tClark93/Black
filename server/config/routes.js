const items = require("../controllers/rest");
const path = require("path")

module.exports = (app) => {
    app.get("/animals", items.getAll)
    app.get("/animals/:id",items.getOne)
    app.post("/animals",items.create)
    app.put("/animalx/:id",items.like)
    app.put("/animals/:id",items.update)
    app.delete("/animals/:id",items.delete)
    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"))
    });
}