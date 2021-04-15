function intersectionCallback(entries, observer) {
  entries.forEach((intersectionEntry) => {
    intersectionEntry.target.setAttribute(
      "data-is-visible",
      intersectionEntry.intersectionRatio > 0.15
    );
  });
}
const observer = new IntersectionObserver(intersectionCallback, {
  threshold: [0.1, 0.2, 0.3, 0.4, 0.9]
});
const items = [...document.querySelectorAll("section")];

items.forEach((ele) => observer.observe(ele));

// for the preview
window.location.hash = "#intro";
setTimeout(() => (window.location.hash = "#details"), 500);
setTimeout(() => (window.location.hash = "#intro"), 2000);
