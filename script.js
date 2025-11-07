require(["esri/views/MapView", "esri/WebMap"], (MapView, WebMap) => {
  const webmap = new WebMap({
    portalItem: {
      id: "6b836b2859194fdfa156458f2d2842e9"
    }
  });

const view = new MapView({
    map: webmap,
    container: "viewDiv"
  });
});

document.getElementById("zoom_in").addEventListener("click", () => {view.zoom += 1;});

document.getElementById("zoom_out").addEventListener("click", () => {view.zoom -= 1;});