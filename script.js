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

view.when(() => {
        console.log("WebMap loaded!");
      }, (err) => {
        console.error("WebMap failed to load:", err);
      });

document.getElementById("zoom_in").addEventListener("click", () => {view.zoom += 1;});

document.getElementById("zoom_out").addEventListener("click", () => {view.zoom -= 1;});