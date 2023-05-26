const inclSVG = (svgContainerId) => {
  const svgPath = `./assets/visual/svg/${svgContainerId}.svg`;

  fetch(svgPath)
    .then((response) => {
      return response.text();
    })
    .then((svgText) => {
      const svgContainer = document.getElementById(svgContainerId);
      svgContainer.innerHTML = svgText;
    });
};

inclSVG("svgtest4");
