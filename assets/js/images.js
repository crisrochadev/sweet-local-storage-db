const images = document.querySelectorAll("[data-image]");
images.forEach((image) => {
  const imageType = image.getAttribute("data-image");
  let newImage = createImage(imageType);
  image.appendChild(newImage);
});
function createImage(type) {
  switch (type) {
    case "logo":
      let style = `
            width:60px;
            height:20px;
            display:block;
            background:red;
            border-radius:5px;
            margin:2px 0;
            box-shadow:0 4px 4px 0 rgba(0,0,0,.25);
        `;
      const logo = document.createElement("div");
      logo.style.position = 'relative';

      const item1 = document.createElement("span");
      item1.style = style + 'background:#278b6f;'
      logo.appendChild(item1);

      const item2 = document.createElement("span");
      item2.style = style + 'background:#009f98;'
      logo.appendChild(item2);

      const item3 = document.createElement("span");
      item3.style = style + 'background:#0e7490;'
      logo.appendChild(item3);

      const item4 = document.createElement("span");
      item4.innerText = 'JS'
      item4.style = `
        position:absolute;
        top:10%;
        left:10%;
        trasnform:translate(-50%,-50%);
        z-index:100;
        font-size:42px;
        font-weight:900;
        color:white;
      `
      logo.appendChild(item4);
      return logo;
  }
}
