import reactCert from "../media/reactCert.pdf";
import frontCert from "../media/frontCert.pdf";
import javaCert from "../media/javaCert.pdf";
import javascriptCert from "../media/javascript.pdf";
import reactCert2 from "../media/LearnReactToday-certificate.pdf";

const reactCertPdf = reactCert;
const frontEndPdf = frontCert;
const javascriptCertPdf = javascriptCert;
const javaCertPdf = javaCert;
const reactCert2Pdf = reactCert2;

export const certificates = [
  {
    id: "1",
    name: "JavaScript Concepts",
    from: "SC Codes",
    date: "May 2, 2021",
    source: javascriptCertPdf,
  },
  {
    id: "2",
    name: "Frontend Concepts",
    from: "SC Codes",
    date: "May 9, 2021",
    source: frontEndPdf,
  },
  {
    id: "3",
    name: "React Applications",
    from: "SC Codes",
    date: "July 4, 2021",
    source: reactCertPdf,
  },
  {
    id: "4",
    name: "Java Concepts",
    from: "SC Codes",
    date: "July 14, 2021",
    source: javaCertPdf,
  },
  {
    id: "5",
    name: "Learn React Today",
    from: "Web Dev Simplified",
    date: "Dec 16 2021",
    source: reactCert2Pdf,
  },
];
