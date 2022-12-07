import React from "react";
import Sketch from "react-p5";
import { useEffect, useRef } from "react";


export const P5 = () => {

      const setup = (p5, canvasParentRef) => {
		p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef);
        p5.noStroke();
        p5.background("white")
	};

	const draw = (p5) => {
		p5.ellipse(p5.mouseX, p5.mouseY, 120, 120, p5.random(20, 80));
        p5.fill(64, 60, 226, 150);
        p5.noStroke();
        p5.frameRate(10);
	};

	return <Sketch setup={setup} draw={draw} />;

}

