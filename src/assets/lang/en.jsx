export default {
  header: {
    title: "Nacho",
    home: "Home",
    about: "About",
    experience: "Experience",
    contact: "Contact",
    en: "English",
    es: "Spanish",
  },

  home: {
    title: {
      span1: "Front-End ",
      span2: "Hi, I'm Nacho ",
      span3: "Developer",
    },
    techStack: "Tech Stack",
  },

  about: {
    title: {
      span1: "About ",
      span2: "Me.",
    },
    info: {
      info1: [
        "My name is Ignacio Manuel Baez and they call me ",
        <b key={1}>&quot;Nacho&quot;</b>,
        ". I'm from ",
        <b key={2}>Mar del Plata, </b>,
        "Buenos Aires, Argentina.",
      ],
      info2: [
        "I'm a ",
        <b key={1}>Front-end </b>,
        "developer in a constant process of adapting and learning new methods and technologies.",
      ],
      info3: [
        "I seek to improve myself day by day, achieve my goals, and set new objectives. I consider myself a person with ",
        <b key={1}>healthy ambition.</b>,
      ],
    },
  },

  experience: {
    title: {
      span1: "My ",
      span2: "Experience",
    },
    card: {
      title: "TO DO APP",
      desc: "Manage your tasks, plan your ideas and organize your routine by creating multiple notebooks.",
      btn1: "Code",
      btn2: "Demo",
    },
  },

  contact: {
    title: {
      span1: "Contact ",
      span2: "Me.",
    },
    subtitle: "Hit me up!",
    form: {
      name: "Name",
      nameRequired: "Name is required",
      nameInvalid: "Name can only contain letters and blank spaces",
      email: "Email",
      emailRequired: "Email is required",
      emailInvalid: "Invalid email",
      message: "Message",
      messageRequired: "Message is required",
      messageInvalid: "The message must contain between 1 and 250 characters",
      send: "Send",
      sent: "Message sent!",
    },
  },

  footer: {
    span1: "This web was made 100% by",
    span2: "with React.js",
  },
};
