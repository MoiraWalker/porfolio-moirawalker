import React from "react";
import Sketch from "react-p5";

export const P5 = () => {
  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(p5.displayWidth, p5.displayHeight).parent(canvasParentRef);
    p5.noStroke();
    p5.background("white");
  };

  const draw = (p5) => {
    p5.ellipse(p5.mouseX, p5.mouseY, 120, 120, p5.random(20, 80));
    p5.fill(64, 60, 226, 150);
    p5.noStroke();
    p5.frameRate(10);
  };

  const resetBg = (p5) => {
    p5.background("white");
  };

  return <Sketch draw={draw} setup={setup} mouseClicked={resetBg} />;
};
