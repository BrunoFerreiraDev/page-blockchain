// Styled Components
import { Canvas } from "./styles";

interface starsInterface {
  x: number;
  y: number;
  radius: number;
  vx: number;
  vy: number;
}

interface ConectingDotsInterface {
  canvasId: string;
  strokeStyle: string;
  fillStyle: string;
  background: string;
  numberOfStar: number;
}

const ConectingDots: React.FC<ConectingDotsInterface> = ({
  canvasId,
  fillStyle,
  strokeStyle,
  background,
  numberOfStar,
}) => {
  if (typeof document !== "undefined") {
    const canvas = document.getElementById(canvasId) as HTMLCanvasElement;
    const ctx = canvas?.getContext("2d");

    if (canvas !== null && ctx !== null) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      console.log({ width: canvas.width, height: canvas.height });
      const stars: starsInterface[] = [], // Array that contains the stars
        FPS = 60, // Frames per second
        x = numberOfStar, // Number of stars
        mouse = {
          x: 0,
          y: 0,
        }; // mouse location

      // Push stars to array

      for (let i = 0; i < x; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1 + 1,
          vx: Math.floor(Math.random() * 50) - 25,
          vy: Math.floor(Math.random() * 50) - 25,
        });
      }

      // Draw the scene

      const draw = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.globalCompositeOperation = "lighter";

        for (let i = 0, x = stars.length; i < x; i++) {
          const s = stars[i];

          ctx.fillStyle = fillStyle;
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.radius, 0, 2 * Math.PI);
          ctx.fill();
          ctx.fillStyle = fillStyle;
          ctx.stroke();
        }

        ctx.beginPath();
        for (let i = 0, x = stars.length; i < x; i++) {
          const starI = stars[i];
          ctx.moveTo(starI.x, starI.y);
          if (distance(mouse, starI) < 150) ctx.lineTo(mouse.x, mouse.y);
          for (let j = 0, x = stars.length; j < x; j++) {
            const starII = stars[j];
            if (distance(starI, starII) < 150) {
              //ctx.globalAlpha = (1 / 150 * distance(starI, starII).toFixed(1));
              ctx.lineTo(starII.x, starII.y);
            }
          }
        }
        ctx.lineWidth = 0.05;
        ctx.strokeStyle = strokeStyle;
        ctx.stroke();
      };

      const distance = (
        point1: { x: number; y: number },
        point2: { x: number; y: number }
      ) => {
        let xs = 0;
        let ys = 0;

        xs = point2.x - point1.x;
        xs = xs * xs;

        ys = point2.y - point1.y;
        ys = ys * ys;

        return Math.sqrt(xs + ys);
      };

      // Update star locations

      const update = () => {
        for (let i = 0, x = stars.length; i < x; i++) {
          const s = stars[i];

          s.x += s.vx / FPS;
          s.y += s.vy / FPS;

          if (s.x < 0 || s.x > canvas.width) s.vx = -s.vx;
          if (s.y < 0 || s.y > canvas.height) s.vy = -s.vy;
        }
      };

      canvas.addEventListener("mousemove", function (e) {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
      });

      // Update and draw

      (function tick() {
        draw();
        update();
        requestAnimationFrame(tick);
      })();
    }
  }
  return <Canvas id={canvasId} color={background}></Canvas>;
};
export { ConectingDots };
export default ConectingDots;
