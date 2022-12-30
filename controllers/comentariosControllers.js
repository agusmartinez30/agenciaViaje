import { Comentario } from "../model/Comentarios.js";

const guardarComentarios = async (req, res) => {
  const { nombre, correo, mensaje } = req.body;

  const errores = [];

  if (nombre.trim() === "") {
    errores.push({ mensaje: "El nombre esta vacio" });
  }
  if (correo.trim() === "") {
    errores.push({ mensaje: "El correo esta vacio" });
  }
  if (mensaje.trim() === "") {
    errores.push({ mensaje: "El mensaje esta vacio" });
  }

  if (errores.length > 0) {
    const testimonios = await Comentario.findAll();
    res.render("comentarios", {
      pagina: "Comentarios",
      errores,
      nombre,
      correo,
      mensaje,
      testimonios,
    });
  } else {
    // guardar en la bd
    try {
      await Comentario.create({
        nombre,
        correo,
        mensaje,
      });

      res.redirect("/comentarios");
    } catch (error) {
      console.log(error);
    }
  }
};

// const getComentarios = async (req, res) =>{

// }

export { guardarComentarios };
