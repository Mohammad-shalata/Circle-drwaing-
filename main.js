function Draw() {
    const Radius = document.getElementById("input-radius").value;
    if (!isNaN(Radius) && Radius < 200 && Radius > 0) {
        let Volume =(4/3) * Math.PI * Math.pow(Radius,3);
        document.getElementById("output-volume").innerHTML = Volume;

      let MyCanvas = document.getElementById("Canvas");
      let ctx = MyCanvas.getContext("2d");
      let centerX = MyCanvas.width / 2;
      let centerY =MyCanvas.height /2 ;
      ctx.beginPath();
      ctx.arc(centerX,centerY, Radius, 0, 2 * Math.PI, false);
      ctx.lineWidth = 1;
      ctx.stroke();
    } else {
      alert("Your Radios not Correct");
    }
  }
  
function clearMyCanvas() {
    const canvasElement = document.getElementById("Canvas");
    const myCanvas = canvasElement.getContext("2d");
    myCanvas.clearRect(0, 0, canvasElement.width, canvasElement.height); // x1, y1, x2, y2
}
 
  