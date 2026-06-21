import diaporamaElement from "../atoms/diaporamaElement.js";


var images = [
    {"url": "https://picsum.photos/", "alt": "Random Image 1"},
    {"url": "https://picsum.photos/", "alt": "Random Image 2"},
    {"url": "https://picsum.photos/", "alt": "Random Image 3"},
    {"url": "https://picsum.photos/", "alt": "Random Image 4"},
    {"url": "https://picsum.photos/", "alt": "Random Image 5"}
];

const diaporama = () => {
    return `
    <div class="bg-slate-900 p-4 rounded mb-4 flex flex-row items-center gap-4 overflow-scroll ">
        ${images.map((image) => diaporamaElement(image)).join(" ")}
    </div>`;
}

export default diaporama;