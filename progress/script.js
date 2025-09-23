document.addEventListener("DOMContentLoaded", () => {
  const preloader = document.getElementById("preloader");
  const content = document.getElementById("content");
  const nav = document.querySelector("nav");
  const footer = document.querySelector("footer");
  const overlay = document.querySelector(".overlay");

  setTimeout(() => {
    preloader.classList.add("fade-out");

    setTimeout(() => {
      preloader.style.display = "none";
      content.style.display = "block";

      nav.classList.add("fade-in-down");
      footer.classList.add("fade-in-up");
      overlay.classList.add("fade-in");
    }, 1000);
  }, 2500);

  const profiles = document.querySelectorAll("footer.list img");
  const progressGroups = document.querySelectorAll(".show > div");
  const profileName = document.getElementById("profile-name");

  progressGroups.forEach((group) => (group.style.display = "none"));
  progressGroups[0].style.display = "block";

  const progressValues = {
    gian: [80, 70, 40],
    bea: [55, 0, 58],
    bien: [49, 34, 11],
    chad: [80, 60, 40],
    adrian: [50, 30, 15],
  };

  const names = {
    gian: "Gian Alexis Asis",
    bea: "Beatrice Bataan",
    bien: "Bien Angelo Borje",
    chad: "Chad De Leon",
    adrian: "Adrian John De Lino",
  };

  profiles.forEach((img, index) => {
    img.addEventListener("click", () => {
      progressGroups.forEach((group) => (group.style.display = "none"));
      const group = progressGroups[index];
      group.style.display = "block";
      const className = group.className;

      profileName.textContent = names[className];

      const values = progressValues[className];
      const bars = group.querySelectorAll("progress");
      const labels = document.querySelectorAll(".info p");

      bars.forEach((bar, i) => {
        bar.value = 0;
        bar.max = 100;
        let val = 0;
        const interval = setInterval(() => {
          if (val >= values[i]) clearInterval(interval);
          bar.value = val++;
        }, 10);
        labels[i].textContent =
          labels[i].textContent.split(":")[0] + `: ${values[i]}%`;
      });
    });
  });

  profiles[0].click();
});
