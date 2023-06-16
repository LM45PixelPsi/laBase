const inclSVG = async (...svgContainerDataAttributes) => {
  const fetchPromises = svgContainerDataAttributes.map(
    (svgContainerDataAttribute) => {
      const svgPath = `./assets/visual/svg/${svgContainerDataAttribute}.svg`;
      return fetch(svgPath)
        .then((response) => response.text())
        .then((svgText) => {
          const svgContainers = document.querySelectorAll(
            `[data-svgi="${svgContainerDataAttribute}"]`
          );
          svgContainers.forEach((svgContainer) => {
            svgContainer.innerHTML = svgText;
          });
        })
        .catch((error) => {
          console.error(
            `Error fetching SVG for ${svgContainerDataAttribute}: ${error}`
          );
        });
    }
  );

  await Promise.all(fetchPromises);
};

// inclSVG("", "");

// mettre dans la funct le nom du svg placer dans le dossier (s'assurer que la div à la data-svgi correspondant au nom du svg
// ex :      <div class="svg-container" data-svgi="leNomDuSvg"></div> )
