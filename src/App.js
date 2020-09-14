import React, { useState, useRef, useEffect } from "react";
import kMeans from "./utils/clustering";
import Pallete from "./components/Pallete";
import { meanPoint } from "./utils/stats-utils";
import "./App.css";

function App() {
  const [colors, setColors] = useState(null);
  const canvasRef = useRef(null);
  let ctx;
  let canvas;
  useEffect(() => {
    canvas = canvasRef.current;
    ctx = canvas.getContext("2d");
    //Our first draw
    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  }, []);

  const loadImage = (e) => {
    const reader = new FileReader();
    reader.onload = function (event) {
      const img = new Image();
      img.src = event.target.result;
      img.onload = function () {
        canvas.width = 600;
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

        const data = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
        let colors = [];
        for (let i = 0; i < data.length; i += 4) {
          colors.push([data[i], data[i + 1], data[i + 2], data[i + 3]]);
        }
        setColors(generatePallete(colors, 4));
      };
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  return (
    <div className="App">
      <input
        type="file"
        onChange={(e) => {
          loadImage(e);
        }}
      />
      {colors && <Pallete colors={colors} />}
      <canvas ref={canvasRef} width={100} height={200} />
    </div>
  );
}

const generatePallete = (allColours, k) => {
  const clusters = kMeans(allColours, k);

  // Calculate palette (mean colour of each cluster)
  const colours = clusters.map((x) => meanPoint(x));
  const palette = colours.map((x) => ({ r: x[0], g: x[1], b: x[2], a: x[3] }));
  return palette.map((x) => rgbToHex(x.r, x.g, x.b));
};

function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  r = Math.round(r);
  g = Math.round(g);
  b = Math.round(b);
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

export default App;
