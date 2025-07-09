import { createI18n } from "vue-i18n";

const messages = {
  es: {
    nav: {
      home: "Inicio",
      about: "Sobre Mí",
      abilities: "Habilidades",
      projects: "Proyectos",
      contact: "Contacto",
      change: "Cambiar el Idioma",
    },
    home: {
      hi: "¡Hola!",
      iam: "Soy Armando Vaquero",
      developer: [
        "Desarrollador Web Junior",
        "Full Stack Developer",
        "Apasionado por la Tecnología",
      ],
      description:
        "Apasionado por el desarrollo full stack, con formación en ciberseguridad y experiencia en entornos ágiles.",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About Me",
      abilities: "Abilities",
      projects: "Projects",
      contact: "Contact",
      change: "Change Language",
    },
    home: {
      hi: "Hi!",
      iam: "I'm Armando Vaquero",
      developer: ["Junior Web Developer", "Full Stack Developer", "Passionate about Technology"],
      description:
        "Passionate about full stack development, with a background in cybersecurity and experience in agile environments.",
    },
  },
};

export const i18n = createI18n({
  legacy: false,
  locale: "es",
  messages,
});
