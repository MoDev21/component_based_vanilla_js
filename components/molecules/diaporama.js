import diaporamaElement from "../atoms/diaporamaElement.js";


var images = [
    {"url": "https://picsum.photos/", "alt": "header Image 1"},
    {"url": "https://picsum.photos/", "alt": "header Image 2"},
    {"url": "https://picsum.photos/", "alt": "header Image 3"},
    {"url": "https://picsum.photos/", "alt": "header Image 4"},
    {"url": "https://picsum.photos/", "alt": "header Image 5"}
];

const diaporama = () => {
    return `
    <div class="w-auto h-auto bg-slate-900 p-4 rounded flex flex-row items-center gap-4 overflow-scroll">
        ${images.map((image) => diaporamaElement(image)).join(" ")}
    </div>`;
}

export default diaporama;