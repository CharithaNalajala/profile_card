function toggleInfo() {
  const extraInfo = document.getElementById("extraInfo");
  const btn = document.getElementById("toggleBtn");

  if (extraInfo.style.display === "none" || extraInfo.style.display === "") {
    extraInfo.style.display = "block";
    btn.innerText = "Show Less";
  } else {
    extraInfo.style.display = "none";
    btn.innerText = "Show More";
  }
}
