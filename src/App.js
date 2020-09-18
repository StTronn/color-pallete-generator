import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import kMeans from "./utils/clustering";
import Pallete from "./components/Pallete";
import Spinner from "react-spinkit";
import Info from "./components/Info";
import Pic from "./pic2.jpg";
import { meanPoint } from "./utils/stats-utils";
import "./App.css";

const Holder = styled.div`
  display: grid;
  height: 80vh;
  align-items: center;
  justify-items: center;
  @media (max-width: 1100px) {
    height: auto;
  }
`;

const Cointainer = styled.div`
  display: grid;
  width: 100vw;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
    @media (max-width: 1100px) {
        height:auto;
        row-gap:50px;
        grid-template-columns:1fr;
  }
}`;
//`

function App() {
  const [colors, setColors] = useState([
    "#081c28",
    "#e77978",
    "#827a8b",
    "#266074",
  ]);
  const [uploadedOnce, setUploadedOnce] = useState(false);
  const [loading, setLoading] = useState(false);
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
    setColors([]);
    setLoading(true);
    setUploadedOnce(true);
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
        setLoading(false);
      };
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  const width = Math.max(window.innerWidth * 0.4, 600);
  let display = uploadedOnce ? "block" : "none";
  display = loading ? "none" : display;
  return (
    <div>
      <Cointainer className="py-12 md:px-4 sm:px-6 lg:py-16 lg:px-8 ">
        <Holder>
          <Info inputRef={inputRef} />
        </Holder>
        <div className="text-center">
          <canvas
            style={{ display: display }}
            ref={canvasRef}
            width={width}
            height={200}
          />
          {!uploadedOnce && <img alt="pic" src={Pic} width={width} />}
          {loading && (
            <Holder>
              <Spinner name="folding-cube" color="teal" />
            </Holder>
          )}
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
