import Sprite from "./sprite";
import Label from "./label";
import { ratio } from "./config";

class Input extends Sprite {
  name = "input";
  borderBottomColor: string = "#333";
  borderBottomWidth: number = 2;
  borderLeftColor: string = "#333";
  borderLeftWidth: number = 2;
  borderRightColor: string = "#333";
  borderRightWidth: number = 2;
  borderTopColor: string = "#333";
  borderTopWidth: number = 2;
  value: string = "";
  label: Label;
  constructor(argv: any) {
    super(argv);
    // this.text = argv.text;
    // this.color = argv.color;
    // this.stroke = argv.stroke === undefined ? false : argv.stroke;
    // this.lineHeight = argv.lineHeight ? argv.lineHeight * ratio : 16 * ratio;
    // this.fontFamily = argv.fontFamily || "Arial";
    // this.fontSize = argv.fontSize ? argv.fontSize * ratio : 14 * ratio;
    // this.bold = argv.bold === undefined ? false : argv.bold;
    // this.textAlign = argv.textAlign || "center";
    // this.underLine = argv.underLine === undefined ? null : argv.underLine;

    this.label = new Label({
      text: "",
      lineHeight: argv.height,
      textAlign: "right",
    });
    this.append(this.label);

    this.on("touchstart", function () {
      const _this = this;
      let input: HTMLInputElement;
      if (document.getElementById("input-dom")) {
        input = document.getElementById("input-dom") as HTMLInputElement;
      } else {
        input = document.createElement("input");
        input.id = "input-dom";
        input.style.position = "fixed";
        input.style.zIndex = "2";
        input.style.boxSizing = "border-box";
        input.addEventListener("blur", function () {
          this.style.display = "none";
          _this.value = this.value;
          _this.label.attr("text", this.value);
        });
        document.body.append(input);
      }

      input.value = this.value;
      input.style.left = this.pageX / 2 + "px";
      input.style.top = this.pageY / 2 + "px";
      input.style.display = "block";
      input.style.width = `${this.width / 2}px`;
      input.style.height = `${this.height / 2}px`;
      input.style.borderLeftColor = this.borderLeftColor;
      input.style.borderRightColor = this.borderRightColor;
      input.style.borderTopColor = this.borderTopColor;
      input.style.borderBottomColor = this.borderBottomColor;
      input.style.borderLeftWidth = `${this.borderLeftWidth / 2}px`;
      input.style.borderRightWidth = `${this.borderRightWidth / 2}px`;
      input.style.borderTopWidth = `${this.borderTopWidth / 2}px`;
      input.style.borderTopWidth = `${this.borderTopWidth / 2}px`;
      input.style.outline = "none";
      input.focus();
    });
  }
}

export default Input;
