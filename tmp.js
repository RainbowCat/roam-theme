var x = document.querySelectorAll(
  ".roam-block-container[data-page-links*=DONE] .rm-block-text > span"
);
for (i = 0; i < x.length; i++) {
  if (
    x[i].hasChildNodes() &&
    x[i].childNodes[0].tagName.toLowerCase() == "span" &&
    x[i].childNodes[0].hasChildNodes() &&
    x[i].childNodes[0].childNodes[0].className == "check-container"
  ) {
    x[i].style.textDecoration = "line-through";
  } else {
    x[i].style.textDecoration = "none";
  }
}
