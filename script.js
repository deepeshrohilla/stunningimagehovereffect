var fire_gif = document.querySelector(".fire-gif")
var main_img = document.querySelector(".main-img")

main_img.addEventListener("mouseenter", () => {
    fire_gif.style.transform = "scale(1) rotate(360deg)"
})
main_img.addEventListener("mouseout", () => {
    fire_gif.style.transform = "scale(0) rotate(0deg)"
})