import Sprite from "./sprite";
import { ratio } from "./config";

interface labelPropsTypes {
  text?: string | null;
  color?: string | null;
  fontFamily?: string;
  bold?: boolean;
  fontSize?: number;
  stroke?: boolean;
  lineHeight?: number;
  textAlign?: "left" | "center" | "right";
  underLine?: String | null | boolean; // 颜色
}

class Label extends Sprite {
  name = "label";
  text: string;
  color: string | null;
  parent: Sprite | null;
  fontFamily: string;
  fontSize: number;
  bold: boolean;
  stroke: boolean;
  lineHeight: number;
  textAlign: "left" | "center" | "right";
  static width = 0;
  static height = 0;
  underLine: String | null | boolean;
  constructor(argv: labelPropsTypes) {
    super({
      width: 0,
      height: 0,
    });
    this.text = argv.text || "";
    this.color = argv.color;
    this.stroke = argv.stroke === undefined ? false : argv.stroke;
    this.lineHeight = argv.lineHeight ? argv.lineHeight * ratio : 16 * ratio;
    this.fontFamily = argv.fontFamily || "Arial";
    this.fontSize = argv.fontSize ? argv.fontSize * ratio : 14 * ratio;
    this.bold = argv.bold === undefined ? false : argv.bold;
    this.textAlign = argv.textAlign || "center";
    this.underLine = argv.underLine === undefined ? null : argv.underLine;
  }
  attr(attrName: string, value: any) {
    this[attrName] = value;
    this.parent["canvas"] = undefined;
  }
}

export default Label;
