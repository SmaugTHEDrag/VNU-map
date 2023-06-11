var images = ["1.jpg", "2.jpg", "3.jpg","4.jpg.png","5.jpg","https://cdn.discordapp.com/attachments/984481824065617952/1100315740420198410/339301656_3309074886010779_5177668617428147388_n.jpg"];
  var currentIndex = 0;
  var image = document.getElementById("myImage");

  function changeImage(event) {
    event.preventDefault(); // Prevent the default click behavior

    currentIndex++;
    if (currentIndex >= images.length) {
      currentIndex = 0;
    }
    image.src = images[currentIndex];
  }
