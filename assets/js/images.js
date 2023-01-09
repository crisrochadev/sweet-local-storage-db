const images = document.querySelectorAll("[data-image]");
images.forEach((image) => {
  const imageType = image.getAttribute("data-image");
  let width = image.getAttribute("data-width").includes("px")
    ? image.getAttribute("data-width").split('px')[0]
    : image.getAttribute("data-width");
    let height =(parseInt(width) / 2.5)

  let newImage = createImage(imageType, width, height);
  image.appendChild(newImage);
});
function createImage(type,width,height) {
  switch (type) {
    case "logo":
      let style = `
            width:${width ? width : 100}px;
            height:${height ? height : 40}px;
            display:block;
            background:red;
            border-radius:5px;
            margin:2px 0;
            box-shadow:0 4px 4px 0 rgba(0,0,0,.25);
        `;
      const logo = document.createElement("div");
      logo.style.position = "relative";

      const item1 = document.createElement("span");
      item1.style = style + "background:#278b6f;";
      logo.appendChild(item1);

      const item2 = document.createElement("span");
      item2.style = style + "background:#009f98;";
      logo.appendChild(item2);

      const item3 = document.createElement("span");
      item3.style = style + "background:#0e7490;";
      logo.appendChild(item3);

      let top = Math.round(height);
      let left = Math.round(width/4);
      const item4 = document.createElement("span");
      item4.innerText = "JS";
      item4.style = `
        position:absolute;
        top:${top ? top : 10}px;
        left:${left ? left : 7}px;
        z-index:100;
        font-size:${width/2}px;
        font-weight:900;
        color:white;
      `;
      logo.appendChild(item4);
      return logo;
  }
}
