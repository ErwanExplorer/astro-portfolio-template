type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
};

const presentation: Presentation = {
  mail: "erwan.sagnardon@campus-la-chataigneraie.org",
  title: "Hi, I’m Erwan 👋",
  //profile: "/profile.webp",
  description: "Bonjour, je suis un *Software Engineer fullstack* basé à *Rouen*, France. Je développe des applications web avec une expertise en développement fullstack. Passionné *d'astronomie* et *d'aérospatiale*, mon ambition est de devenir ingénieur spatial pour contribuer à l'exploration de l'univers.",
  socials: [
    {
      label: "X",
      link: "https://twitter.com/esagnardon",
    },
    {
      label: "Bento",
      link: "https://bento.me/erwan.tech",
    },
    {
      label: "Github",
      link: "https://github.com/erwanexplorer",
    },
  ],
};

export default presentation;
