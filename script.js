const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))


// Thumbnail Carousel

const thumbnails = document.querySelectorAll(".thumb");
const displayedImage = document.getElementById("displayedImage");

let currentIndex = 0;

function updateImage(index) {
    displayedImage.style.opacity = "0";

    setTimeout(() => {
        displayedImage.src = thumbnails[index].src;
        displayedImage.style.opacity = "1";
    }, 300);

    thumbnails.forEach(thumb => thumb.classList.remove("active"));

    thumbnails[index].classList.add("active");

    currentIndex = index;
}

thumbnails.forEach((thumb, index) => {
    thumb.addEventListener("click", () => updateImage(index));
});

document.getElementById("prevBtn").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + thumbnails.length) % thumbnails.length;
    updateImage(currentIndex);
});

document.getElementById("nextBtn").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % thumbnails.length;
    updateImage(currentIndex);
});

updateImage(currentIndex);


document.getElementById("prevBtn").addEventListener("click", () => {
    document.querySelector(".thumbnails").scrollBy({ left: -100, behavior: "smooth" });
});

document.getElementById("nextBtn").addEventListener("click", () => {
    document.querySelector(".thumbnails").scrollBy({ left: 100, behavior: "smooth" });
});