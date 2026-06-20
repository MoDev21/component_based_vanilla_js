import linkBtn from "./linkBtn.js";

let navBtnArray = [
    { href: "#", text: "Home" },
    { href: "#", text: "About" },
    { href: "#", text: "Contact" },
    { href: "#", text: "Blog" }
];

const navBar = () => {
    return `        <nav class="bg-gray-800 p-4">
            <div class="container mx-auto flex items-center justify-between">
                <a href="#" class="text-white text-lg font-bold">My Website</a>
                <div class="space-x-4">
                    ${navBtnArray.map((btn) => linkBtn(btn.href, btn.text)).join(" ")}
                </div>
            </div>
        </nav>`;
};

export default navBar;