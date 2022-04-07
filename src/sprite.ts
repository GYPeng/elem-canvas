import LoadManage from "./loadManage";
import Label from "./label";
import { ratio } from "./config";

interface EventMapTypes {
  touchstart: Function[];
  touchmove: Function[];
  touchend: Function[];
  touchcancel: Function[];
}

interface SpriteTypes {
  name: string;
  id: string | null;
  x: number;
  y: number;
  root: SpriteTypes | null;
  _eventMap: EventMapTypes;
  on: Function;
  pageX: number;
  pageY: number;
  parent: SpriteTypes | null;
  children: Sprite[] | Label[] | null;
  width: number;
  height: number;
  remove: Function;
  append: Function;
  position: "absolute" | "fixed";
  zIndex: number;
  bgColor: string;
  bgImage: string | null;
  overflowX: "hidden" | "scroll" | "visible";
  overflowY: "hidden" | "scroll" | "visible";
  borderLeftColor: string | null;
  borderLeftWidth: number;
  borderTopColor: string | null;
  borderTopWidth: number;
  borderRightColor: string | null;
  borderRightWidth: number;
  borderBottomColor: string | null;
  borderBottomWidth: number;
  className: string[];
  visible: boolean;
}
export interface SpriteInitTypes {
  id?: string;
  x?: number;
  y?: number;
  width: number;
  height: number;
  bgColor?: string;
  bgImage?: string;
  overflowY?: "hidden" | "scroll" | "visible";
  overflowX?: "hidden" | "scroll" | "visible";
  children?: Array<Sprite | Label | Function> | Sprite | Label;
  borderLeftColor?: string;
  borderLeftWidth?: number;
  borderTopColor?: string;
  borderTopWidth?: number;
  borderRightColor?: string;
  borderRightWidth?: number;
  className?: string | string[];
  borderBottomColor?: string;
  borderBottomWidth?: number;
  position?: "absolute" | "fixed";
  visible?: boolean;
  zIndex?: number;
}

class Sprite implements SpriteTypes {
  name = "sprite";
  id: string | null;
  className: string[];
  x: number;
  y: number;
  _eventMap: any = {};
  text: string | null;
  textColor: string | null;
  pageX = 0;
  pageY = 0;
  parent: SpriteTypes;
  children: Sprite[] | Label[] = [];
  width: number;
  height: number;
  position: "absolute" | "fixed";
  zIndex: number;
  bgColor: string;
  bgImage: string;
  overflowX: "hidden" | "scroll" | "visible";
  overflowY: "hidden" | "scroll" | "visible";
  borderLeftColor: string;
  borderLeftWidth: number;
  borderTopColor: string;
  borderTopWidth: number;
  borderRightColor: string;
  borderRightWidth: number;
  borderBottomColor: string;
  borderBottomWidth: number;
  visible: boolean;
  get root() {
    if (!this.parent) {
      return this;
    } else {
      return this.parent?.root;
    }
  }
  constructor(argv: SpriteInitTypes) {
    this.x = (argv.x || 0) * ratio;
    this.y = (argv.y || 0) * ratio;
    this.width = (argv.width || 0) * ratio;
    this.height = (argv.height || 0) * ratio;
    this.bgColor = argv.bgColor || "transparent";
    this.bgImage = argv.bgImage || null;
    this.overflowX = argv.overflowX || "hidden";
    this.overflowY = argv.overflowY || "hidden";
    this.borderLeftColor = argv.borderLeftColor || null;
    this.borderLeftWidth = (argv.borderLeftWidth || 0) * ratio;
    this.borderTopColor = argv.borderTopColor || null;
    this.id = argv.id || null;
    this.borderTopWidth = (argv.borderTopWidth || 0) * ratio;
    this.borderRightColor = argv.borderRightColor || null;
    this.borderRightWidth = (argv.borderRightWidth || 0) * ratio;
    this.borderBottomColor = argv.borderBottomColor || null;
    this.borderBottomWidth = (argv.borderBottomWidth || 0) * ratio;
    this.visible = argv.visible !== undefined ? argv.visible : true;
    this.zIndex = argv.zIndex || 0;
    this.position = argv.position || "absolute";
    const className = argv.className;
    if (className) {
      if (Array.isArray(className)) {
        this.className = [...className.map((v) => v.trim()).filter((v) => v)];
      } else {
        if (className.trim()) {
          this.className = [className.trim()];
        } else {
          this.className = [];
        }
      }
    } else {
      this.className = [];
    }
    if (this.bgImage) {
      LoadManage.use(this.bgImage);
    }

    const children = argv.children;
    const childrenType = Object.prototype.toString.call(children);
    if (Array.isArray(children)) {
      for (let i = 0; i < children.length; i++) {
        const child: any = children[i];
        const childType = Object.prototype.toString.call(child);
        if (childType === "[object Object]") {
          this.append(child);
        } else if (childType === "[object Function]") {
          const result = child();
          if (Array.isArray(result)) {
            result.forEach((v) => {
              this.append(v);
            });
          } else {
            this.append(result);
          }
        }
      }
    } else if (childrenType === "[object Object]") {
      this.append(children);
    }
  }
  append(child: any) {
    if (child.parent) {
      child.parent.remove(child);
    }
    child.parent = this;
    this.children.push(child);
  }
  remove(child: any) {
    this.children.splice(this.children.indexOf(child), 1);
  }
  on(eventName, fn) {
    if (!this._eventMap[eventName]) {
      this._eventMap[eventName] = [];
    }
    this._eventMap[eventName].push(fn);
  }
  off(eventName, fn) {
    const list = this._eventMap ? this._eventMap[eventName] : null;
    if (list) {
      list.includes(fn) ? list.splice(list.indexOf(fn)) : null;
    }
  }
  getElementById(id: string): null | Sprite {
    if (this.id === id) {
      return this;
    } else {
      for (let i = 0; i < this.children.length; i++) {
        if (this.children[i].getElementById(id)) {
          return this.children[i].getElementById(id);
        }
      }
    }
    return null;
  }
  getElementsByClassName(className: string) {
    className = className.trim();
    const arr = [];

    if (this.className.includes(className)) {
      arr.push(this);
    }
    for (let i = 0; i < this.children.length; i++) {
      if (this.children[i].getElementsByClassName(className)) {
        arr.push(...this.children[i].getElementsByClassName(className));
      }
    }
    // return arr;
    if (arr.length) {
      return arr;
    } else {
      return null;
    }
  }
  attr(attrName: string, value: any) {
    this[attrName] = value;
    this["canvas"] = undefined;
  }
}

export default Sprite;
