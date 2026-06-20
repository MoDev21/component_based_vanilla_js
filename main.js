import header from "./components/header.js";
import diaporama from "./components/diaporama.js";
import footer from "./components/footer.js";
import navBar from "./components/navbar.js";

const app = document.getElementById("app");

app.innerHTML = `
    ${header()}
    ${diaporama()}
    ${footer()}
`;
