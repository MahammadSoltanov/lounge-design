function toggleDropdown() {
  const dropdownContent = document.querySelector(".dropdown__content");
  const dropdownButton = document.querySelector(".dropdown__button");

  dropdownContent.classList.toggle("visible");
  dropdownButton.classList.toggle("is-clicked");
}
