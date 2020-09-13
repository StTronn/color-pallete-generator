import React, { useState, useRef, useEffect } from "react";
import kMeans from "./utils/clustering";
import { meanPoint } from "./utils/stats-utils";
import "./App.css";

function App() {
  const [image, setImage] = useState(null);
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
        // Scale image so that width is 100px.
        const aspectRatio = img.hTeight / img.width;
        canvas.width = 600;
        canvas.height = aspectRatio * canvas.width;
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

        const data = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
        let colors = [];
        for (let i = 0; i < data.length; i += 4) {
          colors.push([data[i], data[i + 1], data[i + 2], data[i + 3]]);
        }
        setColors(colors);
        generatePallete(colors, 4);
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
      <canvas ref={canvasRef} width={100} height={200} />
    </div>
  );
}

const generatePallete = (allColours, k) => {
  const clusters = kMeans(allColours, k);

  // Calculate palette (mean colour of each cluster)
  const colours = clusters.map((x) => meanPoint(x));
  const palette = colours.map((x) => ({ r: x[0], g: x[1], b: x[2], a: x[3] }));
  console.log(palette);
};

function colorToHex(colour) {
  return Object.values(colour).reduce(function (total, current, index) {
    // (ignore alpha information for hex string)
    if (index != 3) {
      const hexValue = Math.round(current).toString(16);
      if (hexValue.length == 1) {
        return (total += "0" + hexValue);
      } else {
        return (total += hexValue);
      }
    } else {
      return total;
    }
  }, "");
}

export default App;
