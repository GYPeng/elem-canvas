import { ratio } from "./config";
import Sprite from "./sprite";
import TWEEN, { Tween } from "@tweenjs/tween.js";

class ScrollBox extends Sprite {
  contentWidth: number;
  contentHeight: number;
  contentVes: Sprite;
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
      if (tmpX > 0 || _this.contentWidth < _this.width) {
        ves.x = 0;
      } else if (tmpX < _this.width - _this.contentWidth) {
        ves.x = _this.width - _this.contentWidth;
      } else {
        ves.x = tmpX;
      }

      if (tmpY > 0 || _this.contentHeight < _this.height) {
        ves.y = 0;
      } else if (tmpY < _this.height - _this.contentHeight) {
        ves.y = _this.height - _this.contentHeight;
      } else {
        ves.y = tmpY;
      }
      startms = Date.now();
      disX = lastX - moveX;
      disY = lastY - moveY;
      lastX = moveX;
      lastY = moveY;
    };
    const touchstart = function (ev) {
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

    this.on("wheel", function (ev) {
      const tmpX = ves.x - ev.deltaX;
      const tmpY = ves.y - ev.deltaY;

      _this.wheel(tmpX, tmpY);
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
  wheel(x, y) {
    const ves = this.contentVes;
    if (x > 0 || this.contentWidth < this.width) {
      ves.x = 0;
    } else if (x < this.width - this.contentWidth) {
      ves.x = this.width - this.contentWidth;
    } else {
      ves.x = x;
    }

    if (y > 0 || this.contentHeight < this.height) {
      ves.y = 0;
    } else if (y < this.height - this.contentHeight) {
      ves.y = this.height - this.contentHeight;
    } else {
      ves.y = y;
    }
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
