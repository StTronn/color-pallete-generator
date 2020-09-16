import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import kMeans from "./utils/clustering";
import Pallete from "./components/Pallete";
import Info from "./components/Info";
import { meanPoint } from "./utils/stats-utils";
import "./App.css";

const Cointainer = styled.div`
  display: grid;
  width: 100vw;
  height: 80vh;
  max-height: 80vw;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
    @media (max-width: 700px) {
        height:auto;
        row-gap:100px;
        grid-template-columns:1fr;
  }
}
`;

function App() {
  const [colors, setColors] = useState(null);
  const [loadingImage, setLoadingImage] = useState(null);
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const inputRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    contextRef.current = canvas.getContext("2d");

    const ctx = contextRef.current;
    //Our first draw
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  }, []);

  const loadImage = (e) => {
    const canvas = canvasRef.current;
    const ctx = contextRef.current;
    const reader = new FileReader();
    reader.onload = function (event) {
      const img = new Image();
      img.src = event.target.result;
      img.onload = function () {
        const aspectRatio = img.height / img.width;
        canvas.width = Math.max(window.innerWidth * 0.4, 600);
        canvas.height = aspectRatio * canvas.width;
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

        const data = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
        let colors = [];
        for (let i = 0; i < data.length; i += 4) {
          colors.push([data[i], data[i + 1], data[i + 2], data[i + 3]]);
        }
        setColors(generatePallete(colors, 4));
      };
    };
    if (e) reader.readAsDataURL(e.target.files[0]);
  };

  const width = Math.max(window.innerWidth * 0.4, 600);
  return (
    <div>
      <Cointainer className="py-12 md:px-4 sm:px-6 lg:py-16 lg:px-8 ">
        <Info inputRef={inputRef} />
        <div className="text-center">
          <canvas ref={canvasRef} width={width} height={200} />

          {colors && <Pallete colors={colors} />}

          <input
            style={{ display: "none" }}
            type="file"
            ref={inputRef}
            onChange={(e) => {
              loadImage(e);
            }}
          />
        </div>
      </Cointainer>
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
