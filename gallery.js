const galleryItems = [
    {
        large: "images/flowers-pink-large.jpg",
        thumbnail: "images/flowers-pink-small.jpg",
        caption: "Pink Flowers"
    },
    {
        large: "images/flowers-purple-large.jpg",
        thumbnail: "images/flowers-purple-small.jpg",
        caption: "Purple Flowers"
    },
    {
        large: "images/flowers-red-large.jpg",
        thumbnail: "images/flowers-red-small.jpg",
        caption: "Red Flowers"
    },
    {
        large: "images/flowers-white-large.jpg",
        thumbnail: "images/flowers-white-small.jpg",
        caption: "White Flowers"
    },
    {
        large: "images/flowers-yellow-large.jpg",
        thumbnail: "images/flowers-yellow-small.jpg",
        caption: "Yellow Flowers"
    }
];

const featuredImage = document.getElementById("featured");
const captionText = document.getElementById("caption");
const thumbnailList = document.getElementById("thumbnail-list");

function loadThumbnails() {
    galleryItems.forEach((item, index) => {
        const li = document.createElement("li");
        const img = document.createElement("img");
        img.src = item.thumbnail;
        img.alt = item.caption;
        img.classList.add("thumbnail");
        if (index === 0) img.classList.add("active"); 

        img.addEventListener("click", () => {
            featuredImage.src = item.large;
            captionText.textContent = item.caption;

            document.querySelectorAll(".thumbnail").forEach(thumb => thumb.classList.remove("active"));
            img.classList.add("active");
        });

        li.appendChild(img);
        thumbnailList.appendChild(li);
    });
}

loadThumbnails();

