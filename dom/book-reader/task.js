document.addEventListener("DOMContentLoaded", function () {
    const fontSizeLinks = document.querySelectorAll(".font-size");
  
    fontSizeLinks.forEach(function (link) {
      link.addEventListener("click", function (event) {
        event.preventDefault();
  
        fontSizeLinks.forEach(function (fontSizeLink) {
          fontSizeLink.classList.remove("font-size_active");
        });
  
        link.classList.add("font-size_active");
  
        const newSize = link.getAttribute("data-size");
  
        const bookElement = document.getElementById("book");
        bookElement.classList.remove("book_fs-big", "book_fs-small");
  
        if (newSize === "big") {
          bookElement.classList.add("book_fs-big");
        } else if (newSize === "small") {
          bookElement.classList.add("book_fs-small");
        }
      });
    });
  });
  