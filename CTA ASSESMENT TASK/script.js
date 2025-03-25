document.addEventListener("DOMContentLoaded", function () {
    const dropdowns = document.querySelectorAll(".dropdown-container, .dropdown-container2");

    dropdowns.forEach((dropdown) => {
        const dropbtn = dropdown.querySelector("button");
        const dropdownContent = dropdown.querySelector("ul");

        dropbtn.addEventListener("click", function (event) {
            event.stopPropagation(); // Prevents the click from triggering the document event immediately
            dropdownContent.classList.toggle("show");
        });

        document.addEventListener("click", function (event) {
            if (!dropdown.contains(event.target)) {
                dropdownContent.classList.remove("show");
            }
        });
    });
});