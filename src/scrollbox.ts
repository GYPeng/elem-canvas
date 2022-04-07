import { ratio } from "./config";
import Sprite from "./sprite";

class ScrollBox extends Sprite {
  // scrollX = 0;
  // scrollY = 0;
  // overflow: "scroll";
  // name = "scrollbox";
  contentWidth: number;
  contentHeight: number;
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
    };
    const touchstart = function (ev) {
      const touch = ev.targetTouches[0];
      startX = touch.clientX * ratio;
      startY = touch.clientY * ratio;
      this.root.on("touchmove", touchmove);
      beginX = ves.x;
      beginY = ves.y;
    };
    this.on("touchstart", touchstart);
    this.on("touchend", function () {
      this.root.off("touchmove", touchmove);
    });
  }
}

export default ScrollBox;
