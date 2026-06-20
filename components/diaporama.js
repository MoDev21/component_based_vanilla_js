var images = [
    {"url": "https://picsum.photos/1200", "alt": "Random Image 1"},
    {"url": "https://picsum.photos/1200", "alt": "Random Image 2"},
    {"url": "https://picsum.photos/1200", "alt": "Random Image 3"},
    {"url": "https://picsum.photos/1200", "alt": "Random Image 4"},
    {"url": "https://picsum.photos/1200", "alt": "Random Image 5"}
];

const diaporama = () => {
    return `<div class="bg-slate-900 p-4 rounded mb-4 flex flex-row items-center gap-4 overflow-x-auto">
        ${images.map((image) => `<img src="${image.url}" alt="${image.alt}" class="w-1200px h-200 mb-4 rounded-xl">`).join(" ")}
    </div>`;
}

export default diaporama;