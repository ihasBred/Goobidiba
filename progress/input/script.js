window.addEventListener("load", () => {
    const preloader = document.getElementById("preloader");
    const content = document.querySelector(".content");

    content.style.display = "none";

    setTimeout(() => {
        preloader.classList.add("fade-out");

        preloader.addEventListener("transitionend", () => {
            preloader.style.display = "none";
            content.style.display = "block";
        });
    }, 2500);
});
