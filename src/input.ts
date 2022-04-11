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
  placeholder: string = "";
  label: Label;
  bgColor: string = "white";
  static children = null;
  constructor(argv: any) {
    super(argv);
    this.value = argv.value;
    this.placeholder = argv.placeholder;

    this.label = new Label({
      text: this.value || this.placeholder,
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
          _this.value = this.value || "";
          _this.label.attr("text", this.value || "");
        });
        document.body.append(input);
      }
      this.label.attr("text", "");
      input.value = this.value || "";
      input.style.left =
        this.pageX / 2 + this.root.target.getBoundingClientRect().x + "px";
      input.style.top =
        this.pageY / 2 + this.root.target.getBoundingClientRect().y + "px";
      input.style.display = "block";
      input.style.width = `${this.width / 2}px`;
      input.style.height = `${this.height / 2}px`;
      input.style.background = "transparent";
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
  append(child: any): void {}
  remove(child: any): void {}
}

export default Input;
