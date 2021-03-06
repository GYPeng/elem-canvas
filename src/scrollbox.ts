import { ratio, getPlatform, isMac } from "./config";
import Sprite from "./sprite";
import TWEEN, { Tween } from "@tweenjs/tween.js";

class ScrollBox extends Sprite {
  contentWidth: number;
  contentHeight: number;
  contentVes: Sprite;
  scrollbarXWidth = getPlatform() === "pc" ? 10 : 0;
  scrollbarX: Sprite;
  scrollbarXSlide: Sprite;
  scrollbarY: Sprite;
  scrollbarYSlide: Sprite;
  _append: Function;
  constructor(argv: any) {
    super(argv);
    const _this = this;
    this.contentWidth =
      argv.contentWidth === undefined ? this.width : argv.contentWidth * ratio;
    this.contentHeight =
      argv.contentHeight === undefined
        ? this.height
        : argv.contentHeight * ratio;
    const ves = new Sprite({
      width: this.contentWidth,
      height: this.contentHeight,
    });

    this.contentVes = ves;
    ves.name = "scrollbar_ves";
    if (this.children) {
      const list = this.children.reverse();
      const length = list.length;
      for (let i = 0; i < length; i++) {
        ves.append(this.children[0]);
      }
    }
    this.append(ves);

    this._append = this.append;
    /**
     * 滚动条
     */
    this.addScrollbarY();
    /**
     * 滚动条
     */
    this.append = ves.append;
    let startX, startY, moveX, moveY;
    let beginX, beginY;
    let startms;
    let disX, disY, lastX, lastY;
    const touchmove = function (ev) {
      const touch = ev.targetTouches[0];
      moveX = touch.clientX * ratio;
      moveY = touch.clientY * ratio;
      const tmpX = beginX + moveX - startX,
        tmpY = beginY + moveY - startY;

      _this.wheel(tmpX, tmpY, ev);

      startms = Date.now();
      disX = lastX - moveX;
      disY = lastY - moveY;
      lastX = moveX;
      lastY = moveY;
    };
    const touchstart = function (ev) {
      ev.stopElemPropagation();
      const touch = ev.targetTouches[0];
      startX = touch.clientX * ratio;
      startY = touch.clientY * ratio;
      lastX = startX;
      lastY = startY;
      this.root.on("touchmove", touchmove);
      beginX = ves.x;
      beginY = ves.y;

      this.stopInertia();
    };
    this.on("touchstart", touchstart);
    this.on("touchend", function () {
      this.root.off("touchmove", touchmove);

      if (Date.now() - startms < 500) {
        const to = { x: ves.x, y: ves.y };
        if (Math.abs(disY) > 30) {
          to.y = ves.y - disY * 10;
        }
        if (Math.abs(disX) > 30) {
          to.x = ves.x - disX * 10;
        }

        this.stopInertia();

        this._tween.push({
          name: "inertia",
          coords: {
            x: ves.x,
            y: ves.y,
          },
          interval: 500,
          to,
          callback: (coords) => {
            this.wheel(coords.x, coords.y);
          },
        });
      }
    });

    let wheelDisX, wheelDisY, wheelLastX, wheelLastY;

    this.on("wheel", function (ev) {
      const tmpX = ves.x - ev.deltaX * (isMac() ? 1 : 2);
      const tmpY = ves.y - ev.deltaY * (isMac() ? 1 : 2);

      wheelDisX = wheelLastX - tmpX;
      wheelDisY = wheelLastY - tmpY;
      wheelLastX = tmpX;
      wheelLastY = tmpY;

      if (!isMac() && Date.now() - startms < 500) {
        const to = { x: ves.x, y: ves.y };
        if (Math.abs(disY) > 30) {
          to.y = ves.y - disY * 10;
        }
        if (Math.abs(disX) > 30) {
          to.x = ves.x - disX * 10;
        }

        this.stopInertia();

        this._tween.push({
          name: "inertia",
          coords: {
            x: ves.x,
            y: ves.y,
          },
          interval: 500,
          to,
          callback: (coords) => {
            this.wheel(coords.x, coords.y);
          },
        });
      }

      _this.wheel(tmpX, tmpY, ev);
    });
  }
  stopInertia() {
    for (let i = this._tween.length - 1; i >= 0; i--) {
      const cur = this._tween[i];
      if (cur.name === "inertia") {
        if (cur.tween) {
          cur.tween.stop();
        }
        this._tween.pop();
      }
    }
  }
  addScrollbarY() {
    const _this = this;
    if (getPlatform() === "pc") {
      const scrollbarY = new Sprite({
        width: 10,
        height: this.height,
        bgColor: "rgba(0,0,0,0.1)",
        x: this.width / ratio - 10,
      });
      const scrollbarYSlide = new Sprite({
        width: 10,
        height: Math.max(
          ((this.height / this.contentHeight) * this.height) / ratio,
          100
        ),
        bgColor: "rgba(0,0,0,0.4)",
      });

      let beginY, downY, moveY;
      const mousemove = function (ev) {
        moveY = ev.clientY * ratio;
        const tmpY = beginY + moveY - downY;

        _this.wheel(
          _this.contentVes.x,

          -(tmpY / (scrollbarY.height - scrollbarYSlide.height)) *
            (_this.contentVes.height - _this.height)
        );
      };

      const mousedown = function (ev) {
        ev.stopElemPropagation();
        downY = ev.clientY * ratio;
        beginY = scrollbarYSlide.y;
        document.addEventListener("mousemove", mousemove, false);

        _this.stopInertia();
      };

      document.addEventListener(
        "mouseup",
        () => {
          document.removeEventListener("mousemove", mousemove);
        },
        false
      );

      scrollbarYSlide.on("mousedown", mousedown);

      scrollbarY.append(scrollbarYSlide);
      this._append(scrollbarY);

      this.scrollbarY = scrollbarY;
      this.scrollbarYSlide = scrollbarYSlide;
    }
  }
  wheel(x, y, ev?: any) {
    const ves = this.contentVes;
    if (x > 0 || this.contentWidth < this.width) {
      ves.x = 0;
    } else if (x < this.width - this.contentWidth) {
      ves.x = this.width - this.contentWidth;
    } else {
      ves.x = x;
      isMac() && ev?.stopElemPropagation();
    }

    if (y > 0 || this.contentHeight < this.height) {
      ves.y = 0;
    } else if (y < this.height - this.contentHeight) {
      ves.y = this.height - this.contentHeight;
    } else {
      ves.y = y;
      ev?.stopElemPropagation();
    }

    this.scrollbarYSlide.y =
      -(this.height - this.scrollbarYSlide.height) *
      (ves.y / (this.contentHeight - this.height));
  }
  frame(now: any): void {
    if (this._tween.length) {
      for (let i = this._tween.length - 1; i >= 0; i--) {
        const cur = this._tween[i];
        if (!cur.tween) {
          cur.tween = new TWEEN.Tween(cur.coords)
            .to(cur.to, cur.interval)
            .easing(TWEEN.Easing.Quadratic.Out)
            .onUpdate(() => {
              cur.callback(cur.coords);
            })
            .start();
          cur.beginMs = now;
        } else {
          if (now > cur.beginMs + cur.interval) {
            cur.tween.stop();
            this._tween.pop();
          }
        }
      }
    }
  }
}

export default ScrollBox;
