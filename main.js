document.addEventListener("DOMContentLoaded", function () {
  let imagesItems = [...document.querySelectorAll(".img-wrap")];
  let titles = [...document.querySelectorAll(".text")];
  const contact = document.querySelector(".contact");
  const mainImage = document.querySelector(".recommend-image img");
  const thumbImages = document.querySelectorAll(".recommend-thumbnails img");
  const release = document.querySelector(".new-release");

  let setItemActive = (entries) => {
    entries.map((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      } else {
        entry.target.classList.remove("active");
      }
    });
  };

  let options = {
    threshold: 0.5,
  };

  let observer = new IntersectionObserver(setItemActive, options);

  imagesItems.map((item, index) => {
    item.children[0].style.backgroundImage = `url(./images/${index + 1}.jpg)`;
    index % 2 == 0 ? (item.style.left = "55%") : (item.style.left = "5%");
    observer.observe(item);
  });

  titles.map((title, index) => {
    index % 2 == 0
      ? (title.style.transform = "translateX(5%)")
      : (title.style.transform = "translateX(102%)");
    observer.observe(title);
  });

  observer.observe(contact);
  observer.observe(release);

  thumbImages.forEach((thumbImage) => {
    thumbImage.addEventListener("mouseover", (event) => {
      mainImage.src = event.target.src;
      mainImage.animate({ opacity: [0, 1] }, 500);
    });
  });
});
