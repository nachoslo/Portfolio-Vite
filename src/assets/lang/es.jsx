export default {
  header: {
    title: "Nacho",
    home: "Inicio",
    about: "Acerca de",
    experience: "Experiencia",
    contact: "Contacto",
    en: "Inglés",
    es: "Español",
  },

  home: {
    title: {
      span1: "Desarrollador ",
      span2: "Soy Nacho ",
      span3: "Front-End",
    },
    techStack: "Tecnologías",
  },

  about: {
    title: {
      span1: "Sobre ",
      span2: "Mi.",
    },
    info: {
      info1: [
        "Mi nombre es Ignacio Manuel Baez y me dicen ",
        <b key={1}>&quot;Nacho&quot;</b>,
        ". Soy de ",
        <b key={2}>Mar del Plata, </b>,
        "Buenos Aires, Argentina.",
      ],
      info2: [
        "Soy desarrollador ",
        <b key={1}>Front-end </b>,
        "en constante proceso de adaptación y aprendizaje hacia nuevos métodos y tecnologías.",
      ],
      info3: [
        "Busco autosuperarme día a día, alcanzar mis metas, y proponerme nuevos objetivos. Me considero una persona con ",
        <b key={1}>ambición sana.</b>,
      ],
    },
  },

  experience: {
    title: {
      span1: "Mi ",
      span2: "Experiencia",
    },
    card: {
      title: "TO DO APP",
      desc: "Gestiona tus tareas, planifica tus ideas y organiza tu rutina creando multiples anotadores.",
      btn1: "Código",
      btn2: "Prueba",
    },
  },

  contact: {
    title: {
      span1: "Contáctame",
      span2: ".",
    },
    subtitle: "Golpeame!",
    form: {
      name: "Nombre",
      nameRequired: "El nombre es requerido",
      nameInvalid: "El nombre solo puede contener letras y espacios en blanco.",
      email: "Email",
      emailRequired: "El email es requerido",
      emailInvalid: "Email inválido",
      message: "Mensaje",
      messageRequired: "El mensaje es requerido",
      messageInvalid: "El mensaje debe contener entre 1 y 250 caracteres.",
      send: "Enviar",
      sent: "Mensaje Enviado!"
    },
  },

  footer: {
    span1: "Esta web fue creada 100% por",
    span2: "con React.js",
  },
};
