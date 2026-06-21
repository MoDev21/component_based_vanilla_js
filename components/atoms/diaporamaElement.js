const diaporamaElement = (image) => {
    return `
        <div class="w-auto h-auto bg-slate-900 p-4 rounded mb-4">
            <h1 class="text-3xl font-bold mb-4 text-white absolute z-10">Welcome to My Website</h1>
            <img src="${image.url}1980/1080" alt="${image.alt}" class=" w-1080 h-full mb-4 rounded-xl z-0">
        </div>
    `;
};

export default diaporamaElement;