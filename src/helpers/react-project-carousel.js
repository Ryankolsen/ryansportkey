import googleApiImage from "../media/googleApiImage2.jpg";
import connMod from "../media/ConnModCodeImgBoth.png";
import pokemonImg from "../media/pokemon.jpg";
import reduxToolkitImg from "../media/reduxToolkitImg.png";

export const projectCarouselObjects = [
  {
    key: 1,
    image: connMod,
    projectTitle: "React Native Application",
    projectDescriptions:
      "This React Native application is up on Google Play for Android. It is industry specific, I made it for my current job/role, and allows a user to search an extensive modification code list by a couple of different metrics.",

    links: {
      firstLink: "https://github.com/Ryankolsen/ConnectorModCodes",
      firstLinkButtonText: "Code on GitHub",
      secondLink:
        "https://play.google.com/store/apps/details?id=com.ryankolsen.ConnectorModCodes",
      secondLinkButtonText: "Play Store Link",
    },
  },
  {
    key: 2,
    image: googleApiImage,
    projectTitle: "React Google Book API",
    projectDescriptions: `This App uses React Redux Toolkit, 
      Typescript, and RTK Query to access the Google Books API, allows a user to search for books by any author, 
      and has the option to add books to a favorite list that can be viewed. Please note this is a work in progress.`,
    links: {
      firstLink: "https://main--astonishing-rolypoly-ad8c2b.netlify.app/",
      firstLinkButtonText: "Website",
      secondLink: "https://github.com/Ryankolsen/googleBookApi",
      secondLinkButtonText: "Code on GitHub",
    },
  },
  {
    key: 3,
    image: pokemonImg,
    projectTitle: "React Pokemon API",
    projectDescriptions:
      "This application was built with React, Typescript, React Redux and React Router to connect to a Pokemon API, access, mutate, and display information to a user.",

    links: {
      firstLink: "https://github.com/Ryankolsen/PokemonAPI",
      firstLinkButtonText: "Code on GitHub",
      secondLink: "",
      secondLinkButtonText: "",
    },
  },
  {
    key: 4,
    image: reduxToolkitImg,
    projectTitle: "Redux Essentials Example",
    projectDescriptions:
      "This is the completed Redux Essentials tutorial from Redux docs including Dataflow, Async Logic and Data Fetching, Performance and Normalizing Data. I leaned a ton from completing this small social media feed app with some real-world features",

    links: {
      firstLink: "https://github.com/Ryankolsen/react-reduxtoolkit-app",
      firstLinkButtonText: "Code on GitHub",
      secondLink:
        "https://redux.js.org/tutorials/essentials/part-1-overview-concepts",
      secondLinkButtonText: "Redux Tutorial Link",
    },
  },
];
