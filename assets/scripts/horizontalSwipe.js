function horizontalSwipe() {
  let touchstartX = 0;
  let touchstartY = 0;
  let touchendX = 0;
  let touchendY = 0;

  const horizontalSwipe = document.getElementsByTagName("body")[0];

  function handleHorizontalSwipe() {
    if (Math.round(Math.abs(touchendY - touchstartY)) < 30) {
      if (
        touchendX < touchstartX &&
        document.getElementById("sidebar-container").classList.contains("show")
      ) {
        document.getElementById("sidebar-container").classList.remove("show");
        document.querySelector(".header-toggler").classList.remove("active");
      }
      if (
        touchendX > touchstartX &&
        !document.getElementById("sidebar-container").classList.contains("show")
      ) {
        document.getElementById("sidebar-container").classList.add("show");
        document.querySelector(".header-toggler").classList.toggle("active");
      }
    }
  }

  horizontalSwipe.addEventListener("touchstart", (e) => {
    touchstartX = e.changedTouches[0].screenX;
    touchstartY = e.changedTouches[0].screenY;
  });

  horizontalSwipe.addEventListener("touchend", (e) => {
    touchendX = e.changedTouches[0].screenX;
    touchendY = e.changedTouches[0].screenY;
    handleHorizontalSwipe();
  });
}
