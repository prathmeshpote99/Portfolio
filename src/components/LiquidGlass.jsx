import { useEffect, useState } from "react";

const isMobile = /Mobi|Android/i.test(navigator.userAgent);

const LiquidGlass = () => {
  const [enabled, setEnabled] = useState(false);
  const [followCursor, setFollowCursor] = useState(true);

  useEffect(() => {
    let shaderInstance = null;
    let animationFrame = null;
    const cursor = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

    // Smooth lerp-based movement — eases toward target instead of snapping
    const lerp = (a, b, t) => a + (b - a) * t;

    const moveGlassToCursor = () => {
      if (!shaderInstance || !enabled) return;

      if (followCursor) {
        const rect = shaderInstance.container.getBoundingClientRect();
        const targetX = cursor.x - rect.width / 2;
        const targetY = cursor.y - rect.height / 2;
        const constrained = shaderInstance.constrainPosition(targetX, targetY);

        const currentX = parseFloat(shaderInstance.container.style.left) || 0;
        const currentY = parseFloat(shaderInstance.container.style.top) || 0;

        // Smooth lerp toward target
        const easedX = lerp(currentX, constrained.x, 0.15);
        const easedY = lerp(currentY, constrained.y, 0.15);

        shaderInstance.container.style.left = `${easedX}px`;
        shaderInstance.container.style.top = `${easedY}px`;
        shaderInstance.container.style.transform = "none";
      }

      shaderInstance.updateShader();
      animationFrame = requestAnimationFrame(moveGlassToCursor);
    };

    // Gentle auto-drift when followCursor is off
    let driftTime = 0;
    const driftRadius = 80;
    const driftSpeed = 0.0008;

    const startAutoDrift = () => {
      if (!shaderInstance || !enabled) return;

      const animateDrift = () => {
        if (!shaderInstance || !enabled || followCursor) return;

        driftTime += driftSpeed;
        const centerX = window.innerWidth / 2 - shaderInstance.width / 2;
        const centerY = window.innerHeight / 2 - shaderInstance.height / 2;
        const driftX = centerX + Math.sin(driftTime) * driftRadius;
        const driftY = centerY + Math.cos(driftTime * 1.3) * driftRadius * 0.7;
        const constrained = shaderInstance.constrainPosition(driftX, driftY);

        const currentX = parseFloat(shaderInstance.container.style.left) || 0;
        const currentY = parseFloat(shaderInstance.container.style.top) || 0;

        shaderInstance.container.style.left = `${lerp(currentX, constrained.x, 0.02)}px`;
        shaderInstance.container.style.top = `${lerp(currentY, constrained.y, 0.02)}px`;
        shaderInstance.container.style.transform = "none";
        shaderInstance.updateShader();

        animationFrame = requestAnimationFrame(animateDrift);
      };

      animateDrift();
    };

    const handleMouseMove = (e) => {
      if (e.touches) {
        cursor.x = e.touches[0].clientX;
        cursor.y = e.touches[0].clientY;
      } else {
        cursor.x = e.clientX;
        cursor.y = e.clientY;
      }
    };

    const handleContextMenu = (e) => {
      e.preventDefault();

      const menu = document.createElement("div");
      menu.style.position = "fixed";
      menu.style.top = `${e.clientY}px`;
      menu.style.left = `${e.clientX}px`;
      menu.style.background = "#1e1e1e";
      menu.style.color = "white";
      menu.style.padding = "8px 12px";
      menu.style.borderRadius = "8px";
      menu.style.boxShadow = "0 2px 10px rgba(0,0,0,0.3)";
      menu.style.fontSize = "14px";
      menu.style.zIndex = 10000;
      menu.style.cursor = "pointer";
      menu.style.userSelect = "none";

      const toggleEffect = document.createElement("div");
      toggleEffect.textContent = enabled
        ? "Turn OFF Glass Effect"
        : "Turn ON Glass Effect";
      toggleEffect.onclick = () => {
        setEnabled((prev) => !prev);
        menu.remove();
      };

      const toggleFollow = document.createElement("div");
      toggleFollow.textContent = followCursor
        ? "Disable Follow Cursor"
        : "Enable Follow Cursor";
      toggleFollow.style.marginTop = "8px";
      toggleFollow.onclick = () => {
        setFollowCursor((prev) => {
          const newState = !prev;
          if (window.liquidGlass) {
            window.liquidGlass.container.style.pointerEvents = newState
              ? "none"
              : "auto";
          }
          return newState;
        });
        menu.remove();
      };

      menu.appendChild(toggleEffect);
      menu.appendChild(toggleFollow);
      document.body.appendChild(menu);

      const removeMenu = () => menu.remove();
      setTimeout(() => {
        document.addEventListener("click", removeMenu, { once: true });
      }, 0);
    };

    const initEffect = () => {
      const script = document.createElement("script");
      script.innerHTML = `(${liquidGlassCode.toString()})();`;
      document.body.appendChild(script);

      const waitForGlass = () => {
        if (window.liquidGlass) {
          shaderInstance = window.liquidGlass;

          // 🔁 Set pointer-events based on followCursor
          if (followCursor) {
            shaderInstance.container.style.pointerEvents = "none";
          } else {
            shaderInstance.container.style.pointerEvents = "auto";
          }

          if (followCursor) {
            animationFrame = requestAnimationFrame(moveGlassToCursor);
          } else {
            startAutoDrift();
          }
        } else {
          setTimeout(waitForGlass, 100);
        }
      };
      waitForGlass();
    };

    if (enabled) {
      initEffect();
      window.addEventListener("mousemove", handleMouseMove);
    }

    window.addEventListener("contextmenu", handleContextMenu);

    return () => {
      if (animationFrame) cancelAnimationFrame(animationFrame);
      if (window.liquidGlass) window.liquidGlass.destroy();
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("contextmenu", handleContextMenu);
    };
  }, [enabled, followCursor]);

  return (
    <>
      {/* Desktop toggle — floating button bottom-right */}
      {!isMobile && (
        <button
          onClick={() => setEnabled((prev) => !prev)}
          title={enabled ? "Turn off glass effect" : "Turn on glass effect"}
          style={{
            position: "fixed",
            bottom: "24px",
            right: "24px",
            zIndex: 10000,
            width: "42px",
            height: "42px",
            borderRadius: "50%",
            background: enabled
              ? "rgba(180, 180, 186, 0.2)"
              : "rgba(30, 30, 30, 0.7)",
            border: enabled
              ? "1.5px solid rgba(180, 180, 186, 0.5)"
              : "1.5px solid rgba(180, 180, 186, 0.2)",
            color: enabled ? "#d4d4d8" : "#66666e",
            fontSize: "18px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "all 0.2s ease",
            backdropFilter: "blur(4px)",
            boxShadow: enabled
              ? "0 0 12px rgba(180, 180, 186, 0.2)"
              : "0 2px 8px rgba(0, 0, 0, 0.3)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(180, 180, 186, 0.25)";
            e.currentTarget.style.color = "#f4f4f6";
            e.currentTarget.style.borderColor = "rgba(180, 180, 186, 0.6)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = enabled
              ? "rgba(180, 180, 186, 0.2)"
              : "rgba(30, 30, 30, 0.7)";
            e.currentTarget.style.color = enabled ? "#d4d4d8" : "#66666e";
            e.currentTarget.style.borderColor = enabled
              ? "rgba(180, 180, 186, 0.5)"
              : "rgba(180, 180, 186, 0.2)";
          }}
        >
          {enabled ? "✦" : "✧"}
        </button>
      )}

      {/* Mobile controls — always visible on touch devices */}
      {isMobile && (
        <div
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            zIndex: 10000,
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <button
            onClick={() => setEnabled((prev) => !prev)}
            style={{
              padding: "8px 12px",
              backgroundColor: "#1e1e1e",
              color: "white",
              border: "none",
              borderRadius: "6px",
              fontSize: "14px",
            }}
          >
            {enabled ? "Turn OFF Glass Effect" : "Turn ON Glass Effect"}
          </button>
          <button
            onClick={() => setFollowCursor((prev) => !prev)}
            style={{
              padding: "8px 12px",
              backgroundColor: "#1e1e1e",
              color: "white",
              border: "none",
              borderRadius: "6px",
              fontSize: "14px",
            }}
          >
            {followCursor ? "Disable Follow Cursor" : "Enable Follow Cursor"}
          </button>
        </div>
      )}
    </>
  );
};

const liquidGlassCode = function () {
  (function () {
    "use strict";

    if (window.liquidGlass) {
      window.liquidGlass.destroy();
      console.log("Previous liquid glass effect removed.");
    }

    function smoothStep(a, b, t) {
      t = Math.max(0, Math.min(1, (t - a) / (b - a)));
      return t * t * (3 - 2 * t);
    }

    function length(x, y) {
      return Math.sqrt(x * x + y * y);
    }

    function roundedRectSDF(x, y, width, height, radius) {
      const qx = Math.abs(x) - width + radius;
      const qy = Math.abs(y) - height + radius;
      return (
        Math.min(Math.max(qx, qy), 0) +
        length(Math.max(qx, 0), Math.max(qy, 0)) -
        radius
      );
    }

    function texture(x, y) {
      return { type: "t", x, y };
    }

    function generateId() {
      return "liquid-glass-" + Math.random().toString(36).substr(2, 9);
    }

    class Shader {
      constructor(options = {}) {
        this.width = options.width || 100;
        this.height = options.height || 100;
        this.fragment = options.fragment || ((uv) => texture(uv.x, uv.y));
        this.canvasDPI = 1;
        this.id = generateId();
        this.offset = 10;
        this.mouse = { x: 0, y: 0 };
        this.mouseUsed = false;
        this.createElement();
        this.setupEventListeners();
        this.updateShader();
      }

      createElement() {
        this.container = document.createElement("div");
        this.container.style.cssText = `
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: ${this.width}px;
          height: ${this.height}px;
          overflow: hidden;
          border-radius: 50%;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.35), 0 -10px 30px inset rgba(0, 0, 0, 0.2), 0 0 20px rgba(255, 255, 255, 0.05);
          cursor: grab;
          backdrop-filter: url(#${this.id}_filter) blur(0.25px) contrast(1) brightness(1.05) saturate(1.1);
          z-index: 9999;
          pointer-events: none;
        `;

        this.svg = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "svg"
        );
        this.svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
        this.svg.setAttribute("width", "0");
        this.svg.setAttribute("height", "0");
        this.svg.style.cssText = `
          position: fixed;
          top: 0;
          left: 0;
          pointer-events: none;
          z-index: 9998;
        `;

        const defs = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "defs"
        );
        const filter = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "filter"
        );
        filter.setAttribute("id", `${this.id}_filter`);
        filter.setAttribute("filterUnits", "userSpaceOnUse");
        filter.setAttribute("colorInterpolationFilters", "sRGB");
        filter.setAttribute("x", "0");
        filter.setAttribute("y", "0");
        filter.setAttribute("width", this.width.toString());
        filter.setAttribute("height", this.height.toString());

        this.feImage = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "feImage"
        );
        this.feImage.setAttribute("id", `${this.id}_map`);
        this.feImage.setAttribute("width", this.width.toString());
        this.feImage.setAttribute("height", this.height.toString());

        this.feDisplacementMap = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "feDisplacementMap"
        );
        this.feDisplacementMap.setAttribute("in", "SourceGraphic");
        this.feDisplacementMap.setAttribute("in2", `${this.id}_map`);
        this.feDisplacementMap.setAttribute("xChannelSelector", "R");
        this.feDisplacementMap.setAttribute("yChannelSelector", "G");

        filter.appendChild(this.feImage);
        filter.appendChild(this.feDisplacementMap);
        defs.appendChild(filter);
        this.svg.appendChild(defs);

        this.canvas = document.createElement("canvas");
        this.canvas.width = this.width * this.canvasDPI;
        this.canvas.height = this.height * this.canvasDPI;
        this.canvas.style.display = "none";

        this.context = this.canvas.getContext("2d");
      }

      constrainPosition(x, y) {
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        const minX = this.offset;
        const maxX = viewportWidth - this.width - this.offset;
        const minY = this.offset;
        const maxY = viewportHeight - this.height - this.offset;
        return {
          x: Math.max(minX, Math.min(maxX, x)),
          y: Math.max(minY, Math.min(maxY, y)),
        };
      }

      setupEventListeners() {
        let isDragging = false;
        let startX, startY, initialX, initialY;

        this.container.addEventListener("mousedown", (e) => {
          isDragging = true;
          this.container.style.cursor = "grabbing";
          startX = e.clientX;
          startY = e.clientY;
          const rect = this.container.getBoundingClientRect();
          initialX = rect.left;
          initialY = rect.top;
          e.preventDefault();
        });

        document.addEventListener("mousemove", (e) => {
          if (isDragging) {
            const deltaX = e.clientX - startX;
            const deltaY = e.clientY - startY;
            const newX = initialX + deltaX;
            const newY = initialY + deltaY;
            const constrained = this.constrainPosition(newX, newY);
            this.container.style.left = constrained.x + "px";
            this.container.style.top = constrained.y + "px";
            this.container.style.transform = "none";
          }

          const rect = this.container.getBoundingClientRect();
          this.mouse.x = (e.clientX - rect.left) / rect.width;
          this.mouse.y = (e.clientY - rect.top) / rect.height;

          if (this.mouseUsed) {
            this.updateShader();
          }
        });

        document.addEventListener("mouseup", () => {
          isDragging = false;
          this.container.style.cursor = "grab";
        });

        window.addEventListener("resize", () => {
          const rect = this.container.getBoundingClientRect();
          const constrained = this.constrainPosition(rect.left, rect.top);
          if (rect.left !== constrained.x || rect.top !== constrained.y) {
            this.container.style.left = constrained.x + "px";
            this.container.style.top = constrained.y + "px";
            this.container.style.transform = "none";
          }
        });
      }

      updateShader() {
        const mouseProxy = new Proxy(this.mouse, {
          get: (target, prop) => {
            this.mouseUsed = true;
            return target[prop];
          },
        });

        this.mouseUsed = false;
        const w = this.width * this.canvasDPI;
        const h = this.height * this.canvasDPI;
        const data = new Uint8ClampedArray(w * h * 4);
        let maxScale = 0;
        const rawValues = [];

        for (let i = 0; i < data.length; i += 4) {
          const x = (i / 4) % w;
          const y = Math.floor(i / 4 / w);
          const pos = this.fragment({ x: x / w, y: y / h }, mouseProxy);
          const dx = pos.x * w - x;
          const dy = pos.y * h - y;
          maxScale = Math.max(maxScale, Math.abs(dx), Math.abs(dy));
          rawValues.push(dx, dy);
        }

        maxScale *= 0.5;
        let index = 0;
        for (let i = 0; i < data.length; i += 4) {
          const r = rawValues[index++] / maxScale + 0.5;
          const g = rawValues[index++] / maxScale + 0.5;
          data[i] = r * 255;
          data[i + 1] = g * 255;
          data[i + 2] = 0;
          data[i + 3] = 255;
        }

        this.context.putImageData(new ImageData(data, w, h), 0, 0);
        this.feImage.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "href",
          this.canvas.toDataURL()
        );
        this.feDisplacementMap.setAttribute(
          "scale",
          (maxScale / this.canvasDPI).toString()
        );
      }

      appendTo(parent) {
        parent.appendChild(this.svg);
        parent.appendChild(this.container);
      }

      destroy() {
        this.svg.remove();
        this.container.remove();
        this.canvas.remove();
      }
    }

    function createLiquidGlass() {
      const shader = new Shader({
        width: 200,
        height: 200,
        fragment: (uv, mouse) => {
          const ix = uv.x - 0.5;
          const iy = uv.y - 0.5;
          const distanceToEdge = Math.sqrt(ix * ix + iy * iy);
          // Stronger displacement for more visible refraction
          const displacement = smoothStep(1.0, 0, distanceToEdge - 0.1);
          const scaled = smoothStep(0, 1, displacement);
          return texture(ix * scaled + 0.5, iy * scaled + 0.5);
        },
      });
      shader.appendTo(document.body);
      window.liquidGlass = shader;
      console.log(
        "✨ Liquid Glass effect enabled! Right-click for options."
      );
    }

    createLiquidGlass();
  })();
};

export default LiquidGlass;
