import flaskBlogImg from "../media/proj1-flaskblog.jpg";
import sqldbvs from "../media/proj2-SQL-DB-VS.jpg";
import data from "../media/proj3-image.png";
// import datapdf from "../media/Proj3-datapdf.pdf";
import unity from "../media/proj4-unity.png";

export const projectCarouselObjects = [
  {
    key: 1,
    image: flaskBlogImg,
    projectTitle: "Flask Blog Website",
    projectDescriptions: `This full-featured Django application was built from scratch
    using function and class based views, Linode Ubuntu server
    with WSGI, and a good portion of Bootstrap CSS/HTML.`,
    links: {
      firstLink: "https://www.ryanswebsite0909.com/",
      secondLink: "https://github.com/Ryankolsen/DjangoWebsite",
    },
  },
  {
    key: 2,
    image: sqldbvs,
    projectTitle: "SQL Server API",
    projectDescriptions: `Windows Forms Application using C# and SQL Server. Created on
    Visual Studio using .NET Framework 4.7.2. This API uses Data
    Binding and Binding Navigator to handle user actions/events.`,
    links: {
      firstLink:
        "https://github.com/Ryankolsen/SQL_DB_VS_/blob/main/DB_VS_EX.mp4",
      secondLink: "https://github.com/Ryankolsen/SQL_DB_VS_",
    },
  },
  {
    key: 3,
    image: data,
    projectTitle: " Jupyter Notebook DataFrame",
    projectDescriptions:
      "  Evaluation of Stack Overflow Survey with 65,000 respondents.",
    links: {
      firstLink:
        "https://github.com/Ryankolsen/Jupyter_Notebook_Stack_Survey_2020",
      secondLink: "",
    },
  },
  {
    key: 4,
    image: unity,
    projectTitle: "2D Unity Game ",
    projectDescriptions: `2D dungeon game created on Unity using C# Scripts on Visual
    Studio<br></br> <br></br>
    To play: Download the link, extract and run the
    DungeonFighter.exe file. This file must be in the same folders
    as everything else you unzipped`,
    links: {
      firstLink:
        "https://github.com/Ryankolsen/UnityDungeonFighter/blob/main/DungeonFighter_Data.zip",
      secondLink: "https://github.com/Ryankolsen/UnityDungeonFighter",
    },
  },
];
