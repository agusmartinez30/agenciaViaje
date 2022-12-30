import { Comentario } from "../model/Comentarios.js";
import { Viaje } from "../model/Viaje.js";

const paginaIncio = async (req, res)  => {

  const promiseDB = []

  promiseDB.push(Viaje.findAll({limit: 3}))
  promiseDB.push(Comentario.findAll({limit: 3}))

  try {
    const resultado = await Promise.all(promiseDB)
    res.render("inicio", {
      pagina: "Inicio",
      clase: 'home',
      viajes: resultado[0],
      testimonios: resultado[1]
    });
    
  } catch (error) {
    console.log(error)
  }

};

const paginaNosotros = (req, res) => {
  res.render("nosotros", {
    pagina: "Nosotros",
  });
};

const paginaViajes = async (req, res) => {
  const viajes = await Viaje.findAll();

  res.render("viajes", {
    pagina: "Proximos destinos",
    viajes,
  });
};

const paginaDetalleViaje = async (req, res) => {
  // const { viaje} = req.params
  const { slug } = req.params;
  console.log(slug);
  try {
    const resultado = await Viaje.findOne({ where: { slug } });
    res.render("paginaDetalle", {
      pagina: "Informacion viaje",
      resultado,
    });
  } catch (error) {
    console.log(error);
  }
};

const paginaComentarios = async (req, res) => {
  try {
    const testimonios = await Comentario.findAll();
    console.log(testimonios);

    res.render("comentarios", {
      pagina: "Comentarios",
      testimonios,
    });
  } catch (error) {
    console.log(error);
  }
};

export {
  paginaIncio,
  paginaNosotros,
  paginaViajes,
  paginaComentarios,
  paginaDetalleViaje,
};
