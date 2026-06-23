const carouselElement = (image) => {
    return `
        <div class="p-4 rounded mb-4 flex-shrink-0 bg-image bg-cover bg-center relative bg-[url('${image.url}/1980/1080')] h-200 w-400">
            <h1 class="text-3xl font-bold mb-4 text-white relative z-10">Welcome to My Website</h1>
        </div>
    `;
};

export default carouselElement;