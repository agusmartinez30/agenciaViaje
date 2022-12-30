import express from "express";
import router from "./routes/index.js";
import db from "./config/db.js";

const app = express();

// conectar la db
db.authenticate()
  .then(() => console.log("conect bd"))
  .catch((error) => console.log(error));

// definir puerto
const port = process.env.PORT || 5000;

// obtener año actual
app.use((req, res, next) => {
  const year = new Date();
  res.locals.actualYear = year.getFullYear();
  res.locals.nombreSitio = "Agencia de viajes";

  next();
});

// habilitar pug
app.set("view engine", "pug");

// agregar carpeta publica

app.use(express.static("public"));

//  agregar body parser
app.use(express.urlencoded({extended: true}))

// agregar rutas
app.use("/", router);

app.listen(port, () => {
  console.log(`corriendo en el puerto ${port}`);
});
