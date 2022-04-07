interface imgTypes {
  src: string;
  img: CanvasImageSource;
}

class LoadManage {
  list: Array<imgTypes> = [];
  constructor() {}
  use(src) {
    return new Promise((resolve, reject) => {
      if (this.list.find((v) => v.src === src)) {
        resolve(this.list.find((v) => v.src === src).img);
      } else {
        const img = document.createElement("img");
        img.src = src;
        img.onload = () => {
          this.list.push({
            src,
            img,
          });
          resolve(this.list.find((v) => v.src === src).img);
        };
        img.onerror = (e) => {
          reject(e);
        };
        img.onabort = (e) => {
          reject(e);
        };
      }
    });
  }
}

export default new LoadManage();
