import header from "./components/organismes/header.js";
import carousel from "./components/molecules/carousel.js";
import footer from "./components/organismes/footer.js";
import navBar from "./components/organismes/navbar.js";

const app = document.getElementById("app");

app.innerHTML = `
    ${header()}
    ${carousel()}
    ${footer()}
`;
