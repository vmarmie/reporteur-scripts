document.addEventListener("DOMContentLoaded", () => {
  const scriptsReporter = document.querySelectorAll(
    'script[data-reporter="true"]'
  );
  document.addEventListener("scroll", () => {
    scriptsReporter.forEach((item) => {
      item.setAttribute("src", item.attributes["data-src"].value);
    });
  });
});
