function opensidebar() {
  if (document.getElementById("sidebar-container").classList.contains("show")) {
    document.getElementById("sidebar-container").classList.remove("show");
    document.querySelector(".header-toggler").classList.remove('active');
  } else {
    document.getElementById("sidebar-container").classList.add("show");
    document.querySelector(".header-toggler").classList.toggle('active');
  }
}

function closesidebar() {}
