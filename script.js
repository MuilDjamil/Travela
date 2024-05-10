document.addEventListener("DOMContentLoaded", () => {
  const navigationToggler = document.getElementById("navigation-toggler")
  const navbarNavigation = document.getElementById("navbar-navigation")

  navigationToggler.addEventListener("click", () => {
    navbarNavigation.classList.toggle("show")
  })
})