import Sprite from "./sprite";
import LoadManage from "./loadManage";
import Label from "./label";
import { ratio } from "./config";
import { EventType } from "../types/el-canvas";
const mouseEvent = ["mousedown", "mouseup", "mousemove"];
import TWEEN, { Tween } from "@tweenjs/tween.js";

class Root extends Sprite {
  ctx: any;
  canvas: HTMLCanvasElement;
  target: HTMLElement;
  eventX: number | null;
  eventY: number | null;
  eventType: EventType;
  eventObj: MouseEvent | TouchEvent | null;
  eventConsed = true;
  ghostCanvas: HTMLCanvasElement;
  ghostCtx: any;
  eventColorMap: any = [];
  currentEventColor: String = "#000000";
  eventQueue = {
    touchmove: [],
    touchstart: [],
    wheel: [],
    mousedown: [],
    mousemove: [],
    mouseup: [],
    mouseout: [],
    mouseover: [],
  };

  viewArea: any;
  constructor(el) {
    super({
      width: el.offsetWidth,
      height: el.offsetHeight,
    });

    this.viewArea = {
      clipX: 0,
      clipY: 0,
      clipWidth: this.width,
      clipHeight: this.height,
    };

    this.target = el;
    this.createCanvas();
    this.frame.call(this);
  }
  createCanvas() {
    this.ghostCanvas = document.createElement("canvas");
    this.ghostCtx = this.ghostCanvas.getContext("2d");

    this.canvas = document.createElement("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.ghostCanvas.width = this.canvas.width = this.width;
    this.ghostCanvas.height = this.canvas.height = this.height;
    this.canvas.style.height = "100%";
    this.canvas.style.width = "100%";
    this.ghostCanvas.style.height = "100%";
    this.ghostCanvas.style.width = "100%";
    this.target.append(this.canvas);

    mouseEvent.forEach((eventname: EventType) => {
      this.canvas.addEventListener(
        eventname,
        (event: MouseEvent) => {
          if (!this.eventConsed) {
            return;
          }
          this.eventConsed = false;
          event.preventDefault();
          const input = document.getElementById(
            "input-dom"
          ) as HTMLInputElement;
          if (input) {
            input.blur();
          }
          const { pageX, pageY } = event;
          this.eventType = eventname;
          this.eventX = (pageX - this.target.getBoundingClientRect().x) * ratio;
          this.eventY = (pageY - this.target.getBoundingClientRect().y) * ratio;
          this.eventObj = event;
          this.eventObj["stopElemPropagation"] = () => {
            this.eventObj["elemStop"] = true;
          };

          const handlers = this._eventMap[eventname];
          if (this._eventMap[eventname]) {
            for (let j = 0; j < handlers.length; j++) {
              handlers[j].call(this, event);
            }
          }
        },
        false
      );
    });

    this.canvas.addEventListener(
      "touchstart",
      (event: TouchEvent) => {
        if (!this.eventConsed) {
          return;
        }
        this.eventConsed = false;
        event.preventDefault();
        const input = document.getElementById("input-dom") as HTMLInputElement;
        if (input) {
          input.blur();
        }
        const { targetTouches } = event;
        const { pageX, pageY } = targetTouches[0];
        this.eventType = "touchstart";
        this.eventX = (pageX - this.target.getBoundingClientRect().x) * ratio;
        this.eventY = (pageY - this.target.getBoundingClientRect().y) * ratio;
        this.eventObj = event;
        this.eventObj["stopElemPropagation"] = () => {
          this.eventObj["elemStop"] = true;
        };

        const handlers = this._eventMap["touchstart"];
        if (this._eventMap["touchstart"]) {
          for (let j = 0; j < handlers.length; j++) {
            handlers[j].call(this, event);
          }
        }
      },
      false
    );

    this.canvas.addEventListener(
      "wheel",
      (event: MouseEvent) => {
        event.preventDefault();
        if (!this.eventConsed) {
          return;
        }
        this.eventConsed = false;
        const { pageX, pageY } = event;
        this.eventType = "wheel";
        this.eventX = (pageX - this.target.getBoundingClientRect().x) * ratio;
        this.eventY = (pageY - this.target.getBoundingClientRect().y) * ratio;
        this.eventObj = event;
        this.eventObj["stopElemPropagation"] = () => {
          this.eventObj["elemStop"] = true;
        };

        const handlers = this._eventMap["wheel"];
        if (this._eventMap["wheel"]) {
          for (let j = 0; j < handlers.length; j++) {
            handlers[j].call(this, event);
          }
        }
      },
      false
    );

    this.canvas.addEventListener(
      "touchmove",
      (event: TouchEvent) => {
        if (!this.eventConsed) {
          return;
        }
        this.eventConsed = false;
        event.preventDefault();
        const { targetTouches } = event;
        const { pageX, pageY } = targetTouches[0];
        this.eventType = "touchmove";
        this.eventX = (pageX - this.target.getBoundingClientRect().x) * ratio;
        this.eventY = (pageY - this.target.getBoundingClientRect().y) * ratio;
        this.eventObj = event;
        this.eventObj["stopElemPropagation"] = () => {
          this.eventObj["elemStop"] = true;
        };

        const handlers = this._eventMap["touchmove"];
        if (this._eventMap["touchmove"]) {
          for (let j = 0; j < handlers.length; j++) {
            handlers[j].call(this, event);
          }
        }
      },
      false
    );

    this.canvas.addEventListener(
      "touchcancel",
      (event: TouchEvent) => {
        event["stopElemPropagation"] = () => {
          event["elemStop"] = true;
        };
        const handlers = this._eventMap["touchcancel"];
        if (this._eventMap["touchcancel"]) {
          for (let j = 0; j < handlers.length; j++) {
            handlers[j].call(this, event);
          }
        }
        this.eventColorMap.forEach((m, i) => {
          const handlers = m.trigger._eventMap["touchcancel"];
          if (m.trigger._eventMap["touchcancel"]) {
            for (let j = 0; j < handlers.length; j++) {
              handlers[j].call(m.trigger, event);
            }
          }
        });
      },
      false
    );

    this.canvas.addEventListener(
      "touchend",
      (event: TouchEvent) => {
        event["stopElemPropagation"] = () => {
          event["elemStop"] = true;
        };
        const handlers = this._eventMap["touchend"];
        if (this._eventMap["touchend"]) {
          for (let j = 0; j < handlers.length; j++) {
            handlers[j].call(this, event);
          }
        }
        this.eventColorMap.forEach((m, i) => {
          const handlers = m.trigger._eventMap["touchend"];
          if (m.trigger._eventMap["touchend"]) {
            for (let j = 0; j < handlers.length; j++) {
              handlers[j].call(m.trigger, event);
            }
          }
        });
      },
      false
    );
  }
  async frame(time) {
    TWEEN.update(time);
    this.ctx.clearRect(0, 0, this.width, this.height);
    this.currentEventColor = "#000001";
    this.eventColorMap = [];
    await this.deep(this.children);
    this.triggerEventQueue();
    this.eventConsed = true;
    this.eventObj = null;
    this.eventX = null;
    this.eventY = null;
    requestAnimationFrame(this.frame.bind(this));
  }

  triggerEventQueue() {
    for (let eventType in this.eventQueue) {
      const queue = this.eventQueue[eventType];
      let lastTrigger;
      for (let i = 0; i < queue.length; i++) {
        const { handlers, trigger, event } = queue[i];
        let isStop;

        /**
         * 确保事件冒泡链条为文档上的嵌套关系
         */
        let inAChain = !lastTrigger ? true : false; // 事件冒泡要求必须是文档上的嵌套关系 且不受定位属性影响
        let tmp = lastTrigger;
        while (tmp && tmp.parent) {
          if (tmp.parent === trigger) {
            inAChain = true;
          }
          tmp = tmp.parent;
        }
        if (!inAChain) {
          break;
        }
        /**
         * 确保事件冒泡链条为文档上的嵌套关系
         */

        lastTrigger = trigger;
        for (let j = 0; j < handlers?.length; j++) {
          handlers[j].call(trigger, event);
          if (event["elemStop"]) {
            isStop = true;
          }
        }
        if (isStop) {
          break;
        }
      }
      this.eventQueue[eventType] = [];
    }
  }

  async deep(children) {
    const queue = [...children];
    queue.sort((a, b) => a.zIndex - b.zIndex);
    for (let i = 0; i < queue.length; i++) {
      const item = queue[i];

      item.frame(Date.now());

      let { width, height, name, _eventMap, id, zIndex } = item;

      // 防止多次触发事件
      // 如果元素隐藏，跳过渲染(也跳过子节点的渲染)
      // 如果元素为label，跳过
      if (!item.visible || name === "label") {
        return;
      }
      if (Object.keys(item._eventMap).length) {
        item.eventColor = this.currentEventColor;
        this.eventColorMap.push({
          color: this.currentEventColor,
          trigger: item,
        });
        this.eventColorUp();
      }
      const x =
          item.position === "fixed"
            ? item.x
            : (item.parent?.pageX || 0) + (item.x || 0),
        y =
          item.position === "fixed"
            ? item.y
            : (item.parent?.pageY || 0) + (item.y || 0);
      item.pageX = x;
      item.pageY = y;

      // const { overflowX, overflowY, parent } = item;
      const { overflowX, overflowY, parent } = item;
      const parentOverflowX = parent.overflowX,
        parentOverflowY = parent.overflowY;
      let clipWidth, clipX, clipHeight, clipY;
      if (parentOverflowX === "hidden") {
        if (overflowX === "hidden") {
          if (
            x + width < parent.viewArea.clipX ||
            x > parent.viewArea.clipX + parent.viewArea.clipWidth
          ) {
            // clipWidth = parent.viewArea.clipWidth;
            // clipX = parent.viewArea.clipX || 0;
            clipX = 0;
            clipWidth = 0;
          } else {
            if (x > parent.viewArea.clipX) {
              clipX = x;
              if (
                parent.viewArea.clipWidth + parent.viewArea.clipX >
                x + width
              ) {
                clipWidth = width;
              } else {
                clipWidth =
                  //   parent.viewArea.clipWidth + parent.viewArea.clipX - clipX;
                  width -
                  (x +
                    width -
                    (parent.viewArea.clipWidth + parent.viewArea.clipX));
              }
            } else {
              clipX = parent.viewArea.clipX;
              if (
                parent.viewArea.clipWidth + parent.viewArea.clipX >
                x + width
              ) {
                // clipWidth = width;
                clipWidth = width - (clipX - x);
              } else {
                clipWidth = parent.viewArea.clipWidth;
              }
            }
          }
        }
        // overflowX === 'visible'
        else {
          clipWidth = parent.viewArea.clipWidth;
          clipX = parent.viewArea.clipX;
        }
      } else {
        if (overflowX === "hidden") {
          clipWidth = width;
          clipX = x;
        } else {
          clipX = Math.min(x, parent.viewArea.clipX);
          if (parent.viewArea.clipX + parent.viewArea.clipWidth > x + width) {
            clipWidth = parent.viewArea.clipWidth;
          } else {
            clipWidth = parent.viewArea.clipWidth + (x + width - clipX);
          }
        }
      }

      if (parentOverflowY === "hidden") {
        if (overflowY === "hidden") {
          /**
           * bottom 小于父级top
           * 或者
           * top 大于父级bottom
           */
          if (
            y + height < parent.viewArea.clipY ||
            y > parent.viewArea.clipY + parent.viewArea.clipHeight
          ) {
            // clipHeight = parent.viewArea.clipHeight;
            // clipY = parent.viewArea.clipY || 0;
            clipHeight = 0;
            clipY = 0;
          } else {
            /**
             * 完全在父级内部或者部分与父级重叠
             */
            // top 大于父级top
            if (y > parent.viewArea.clipY) {
              clipY = y;
              // bottom 小于父级bottom
              if (
                parent.viewArea.clipHeight + parent.viewArea.clipY >
                y + height
              ) {
                clipHeight = height;
              } else {
                // bottom 大于父级bottom
                clipHeight =
                  // parent.viewArea.clipHeight + parent.viewArea.clipY - clipY;
                  height -
                  (y +
                    height -
                    (parent.viewArea.clipHeight + parent.viewArea.clipY));
              }
            } else {
              // top 小于父级top
              clipY = parent.viewArea.clipY;

              // bottom 小于父级bottom
              if (
                parent.viewArea.clipHeight + parent.viewArea.clipY >
                y + height
              ) {
                clipHeight = height - (clipY - y);
                // bottom 大于父级bottom
              } else {
                clipHeight = parent.viewArea.clipHeight;
              }
            }
          }
        }
        // overflowY === 'visible'
        else {
          clipHeight = parent.viewArea.clipHeight;
          clipY = parent.viewArea.clipY;
        }
      } else {
        if (overflowY === "hidden") {
          clipHeight = height;
          clipY = y;
        } else {
          clipY = Math.min(y, parent.viewArea.clipY);
          if (parent.viewArea.clipY + parent.viewArea.clipHeight > y + height) {
            clipHeight = parent.viewArea.clipHeight;
          } else {
            clipHeight = parent.viewArea.clipHeight + (y + height - clipY);
          }
        }
      }

      item.viewArea = {
        clipX,
        clipY,
        clipWidth: Math.max(clipWidth, 0),
        clipHeight: Math.max(clipHeight, 0),
      };

      this.ghostCtx.save();
      this.ghostCtx.rect(clipX, clipY, clipWidth, clipHeight);
      // this.ghostCtx.closePath();
      // this.ghostCtx.clip();
      this.ghostCtx.fillStyle = item.eventColor || "#ffffff";
      this.ghostCtx.fillRect(x, y, width, height);
      this.ghostCtx.restore();
      // 防止多次触发事件
      if (this.eventObj) {
        this.eventResolve(item);
      }

      if (name === "sprite" || name === "scrollbar_ves" || name === "input") {
        // *********
        // 超出屏幕，跳过计算
        if (x > this.width || x + width < 0) {
          // 横向超出屏幕
        } else if (y > this.height || y + height < 0) {
          // 纵向超出屏幕
        } else {
          if (!item.canvas) {
            item.canvas = document.createElement("canvas");
            item.canvas.width = width;
            item.canvas.height = height;
            item.ctx = item.canvas.getContext("2d");

            await this.drawBg({ ...item, x: 0, y: 0 }, item.ctx);

            this.drawBorder({ ...item, x: 0, y: 0 }, item.ctx);

            const label = item.children.filter((v) => v.name === "label");
            if (label.length) {
              for (let j = 0; j < label.length; j++) {
                await this.drawLabel({ ...label[j], x: 0, y: 0 }, item.ctx);
              }
            }
          }
        }

        if (item.canvas) {
          this.ctx.save();
          this.ctx.beginPath();
          this.ctx.rect(
            parent.viewArea.clipX,
            parent.viewArea.clipY,
            parent.viewArea.clipWidth,
            parent.viewArea.clipHeight
          );
          this.ctx.closePath();
          this.ctx.clip();
          this.ctx.drawImage(item.canvas, x, y, width, height);
          this.ctx.restore();
        }

        if (item.children) {
          await this.deep(item.children);
        }
      }
    }
  }
  eventColorUp() {
    const str = this.currentEventColor.replace("#", "");
    let r = parseInt(str.substring(0, 2), 16),
      g = parseInt(str.substring(2, 4), 16),
      b = parseInt(str.substring(4, 6), 16);

    if (b < 255) {
      b++;
    } else {
      b = 0;
      if (g < 255) {
        g++;
      } else {
        g = 0;
        if (r < 255) {
          r++;
        }
      }
    }

    const xR = r.toString(16),
      xG = g.toString(16),
      xB = b.toString(16);
    const result = `#${r > 15 ? xR : "0" + xR}${g > 15 ? xG : "0" + xG}${
      b > 15 ? xB : "0" + xB
    }`;
    this.currentEventColor = result;
  }
  eventResolve(sprite): boolean {
    if (this.eventX && this.eventY) {
      const imageData = this.ghostCtx.getImageData(
        this.eventX,
        this.eventY,
        1,
        1
      ).data;
      const r = imageData[0],
        g = imageData[1],
        b = imageData[2];

      const xR = r.toString(16),
        xG = g.toString(16),
        xB = b.toString(16);

      const result = `#${r > 15 ? xR : "0" + xR}${g > 15 ? xG : "0" + xG}${
        b > 15 ? xB : "0" + xB
      }`;

      const { clipX, clipY, clipWidth, clipHeight } = sprite.parent.viewArea;

      if (
        sprite.eventColor === result &&
        this.eventX > clipX &&
        this.eventX < clipX + clipWidth &&
        this.eventY > clipY &&
        this.eventY < clipY + clipHeight
      ) {
        if (sprite._eventMap[this.eventType]) {
          const handlers = sprite._eventMap[this.eventType];

          this.eventQueue[this.eventType].unshift({
            handlers,
            event: this.eventObj,
            trigger: sprite,
          });
        }
        // 鼠标未在元素区域内
        if (!sprite.isEnter) {
          const handlers = sprite._eventMap["mouseover"];
          if (sprite._eventMap["mouseover"]) {
            this.eventQueue["mouseover"].unshift({
              handlers,
              event: this.eventObj,
              trigger: sprite,
            });
          }
          sprite.isEnter = true;
        }
        return true;
      } else {
        if (sprite.isEnter) {
          if (sprite._eventMap["mouseout"]) {
            const handlers = sprite._eventMap["mouseout"];
            this.eventQueue["mouseout"].unshift({
              handlers,
              event: this.eventObj,
              trigger: sprite,
            });
          }
          sprite.isEnter = false;
        }
      }
    }
    return false;
  }
  async drawLabel(argv: any, ctx: CanvasRenderingContext2D) {
    let {
      text,
      color,
      x,
      y,
      parent,
      textAlign,
      stroke,
      lineHeight,
      fontSize,
      fontFamily,
      underLine,
      bold,
    } = argv;
    let {
      width,
      height,
      borderLeftWidth,
      borderLeftColor,
      borderRightColor,
      borderRightWidth,
      borderTopColor,
      borderTopWidth,
      borderBottomColor,
      borderBottomWidth,
    } = parent;
    ctx.strokeStyle = color || "#000";
    ctx.textBaseline = "top";
    ctx.textAlign = "left";
    ctx.font = `${bold ? "bold" : ""} ${fontSize}px ${fontFamily}`;
    const textWidth = ctx.measureText(text).width;

    if (borderLeftColor && borderLeftWidth) {
      x += borderLeftWidth;
      width -= borderLeftWidth;
    }
    if (borderRightColor && borderRightWidth) {
      width -= borderRightWidth;
    }
    if (borderTopColor && borderTopWidth) {
      y += borderTopWidth;
      height -= borderTopWidth;
    }
    if (borderBottomColor && borderBottomWidth) {
      height -= borderBottomWidth;
    }

    ctx.fillStyle = color || "#000";
    // 单行文本不需要计算超出屏幕部分 并增加对换行符的判断
    if (!/\n/g.test(text) && textWidth <= width) {
      if (textAlign === "center") {
        x += (width - textWidth) / 2;
      } else if ((textAlign = "left")) {
        x = 0;
      } else {
        x += width - textWidth;
      }
      if (stroke) {
        ctx.strokeText(text, x, y + (lineHeight - fontSize) / 2, width);
      } else {
        ctx.fillText(text, x, y + (lineHeight - fontSize) / 2, width);
      }
      if (underLine) {
        const lineWidth = fontSize / 14;
        ctx.beginPath();
        ctx.moveTo(x, y + lineHeight - lineWidth);
        ctx.lineTo(x + textWidth, y + lineHeight - lineWidth);
        ctx.closePath();
        ctx.strokeStyle = underLine;
        ctx.stroke();
      }
    } else {
      let arr = text.split(""),
        tmp = "",
        totalY = 0;
      while (arr.length || tmp) {
        const letter = arr[0];
        const w = ctx.measureText(tmp + letter).width;
        if (letter === "\n" || w > width || !arr.length) {
          if (letter === "\n") {
            arr.shift();
          }
          const drawW = ctx.measureText(tmp).width;
          let drawX = x;
          if (textAlign === "center") {
            drawX += (width - drawW) / 2;
          } else if (textAlign === "right") {
            drawX += width - drawW;
          }

          if (stroke) {
            ctx.strokeText(
              tmp,
              drawX,
              y + totalY + (lineHeight - fontSize) / 2,
              width
            );
          } else {
            ctx.fillText(
              tmp,
              drawX,
              y + totalY + (lineHeight - fontSize) / 2,
              width
            );
          }
          if (underLine) {
            const lineWidth = fontSize / 14;
            ctx.beginPath();
            ctx.moveTo(
              drawX,
              y + totalY + (lineHeight - fontSize) / 2 + lineHeight - lineWidth
            );
            ctx.lineTo(
              drawX + w,
              y + totalY + (lineHeight - fontSize) / 2 + lineHeight - lineWidth
            );
            ctx.closePath();
            ctx.strokeStyle = underLine;
            ctx.stroke();
          }
          tmp = "";
          totalY += lineHeight;
        } else {
          tmp += arr.shift();
        }
      }
    }
    ctx.fillStyle = null;
  }
  async drawBg(argv: Sprite, ctx: CanvasRenderingContext2D) {
    let {
      bgImage,
      bgColor,
      width,
      height,
      x,
      y,
      borderLeftWidth,
      borderLeftColor,
      borderRightColor,
      borderRightWidth,
      borderTopColor,
      borderTopWidth,
      borderBottomColor,
      borderBottomWidth,
    } = argv;

    if (borderLeftWidth && borderLeftColor) {
      x += borderLeftWidth;
      width -= borderLeftWidth;
    }
    if (borderTopWidth && borderTopColor) {
      y += borderTopWidth;
      height -= borderTopWidth;
    }
    if (borderRightWidth && borderRightColor) {
      width -= borderRightWidth;
    }
    if (borderBottomColor && borderBottomWidth) {
      height -= borderBottomWidth;
    }

    if (bgImage) {
      const img: any = await LoadManage.use(bgImage);
      ctx.drawImage(img, x, y, width, height);
    } else if (bgColor) {
      ctx.fillStyle = bgColor;
      ctx.beginPath();
      ctx.fillRect(x, y, width, height);
      ctx.fillStyle = null;
      ctx.closePath();
    }
  }
  drawBorder(argv: Sprite, ctx: CanvasRenderingContext2D) {
    const {
      width,
      height,
      borderLeftWidth,
      borderLeftColor,
      borderRightColor,
      borderRightWidth,
      borderTopColor,
      borderTopWidth,
      borderBottomColor,
      borderBottomWidth,
      x,
      y,
    } = argv;
    if (borderLeftWidth && borderLeftColor) {
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(
        x + borderLeftWidth,
        borderTopWidth && borderTopColor ? y + borderTopWidth : y
      );
      ctx.lineTo(
        x + borderLeftWidth,
        borderBottomWidth && borderBottomColor
          ? y + (height - borderBottomWidth)
          : y + height
      );
      ctx.lineTo(x, y + height);
      ctx.closePath();
      ctx.fillStyle = borderLeftColor;
      ctx.fill();
      ctx.fillStyle = null;
    }

    if (borderTopWidth && borderTopColor) {
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(
        borderLeftColor && borderLeftWidth ? x + borderLeftWidth : x,
        y + borderTopWidth
      );
      ctx.lineTo(
        borderRightColor && borderRightWidth
          ? x + (width - borderRightWidth)
          : x + width,
        y + borderTopWidth
      );
      ctx.lineTo(x + width, y);
      ctx.closePath();
      ctx.fillStyle = borderTopColor;
      ctx.fill();
      ctx.fillStyle = null;
    }

    if (borderRightWidth && borderRightColor) {
      ctx.beginPath();
      ctx.moveTo(x + width, y);
      ctx.lineTo(
        x + (width - borderRightWidth),
        borderTopWidth && borderTopColor ? borderTopWidth + y : y
      );
      ctx.lineTo(
        x + (width - borderRightWidth),
        borderBottomColor && borderBottomWidth
          ? y + (height - borderBottomWidth)
          : y + height
      );
      ctx.lineTo(x + width, y + height);
      ctx.closePath();
      ctx.fillStyle = borderRightColor;
      ctx.fill();
      ctx.fillStyle = null;
    }

    if (borderBottomWidth && borderBottomColor) {
      ctx.beginPath();
      ctx.moveTo(x, y + height);
      ctx.lineTo(
        borderLeftColor && borderLeftWidth ? x + borderLeftWidth : x,
        y + (height - borderBottomWidth)
      );
      ctx.lineTo(
        borderRightColor && borderRightWidth
          ? x + (width - borderRightWidth)
          : x + width,
        y + (height - borderBottomWidth)
      );
      ctx.lineTo(x + width, y + height);
      ctx.closePath();
      ctx.fillStyle = borderBottomColor;
      ctx.fill();
      ctx.fillStyle = null;
    }
  }
}

export default Root;
