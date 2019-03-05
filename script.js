//Start of document

//Arrays
var headers = ["Phasellus imperdiet dolor egestas dictum vehicula.", "Maecenas tempus sollicitudin libero ut posuere.", "Pellentesque sed lorem diam.", "Vivamus porta tempus augue quis rutrum."];
var copy = ["Suspendisse rutrum in purus vitae lacinia. Praesent facilisis vestibulum vulputate. Vivamus lobortis vel dolor fringilla porta. Mauris eleifend placerat justo in maximus. Phasellus et ipsum sed dolor luctus ultrices eu et ligula. Nulla facilisi. Vestibulum lacinia nibh sed interdum feugiat. Nunc varius condimentum vestibulum. In a sagittis lorem, vel tincidunt nisl. Curabitur quis feugiat est. Fusce sit amet lorem ac arcu efficitur sodales vitae blandit lorem.",
            "Vestibulum dolor nisl, blandit vitae eleifend sit amet, consequat at leo. Nam vulputate placerat nisi, vel hendrerit sapien condimentum ut. Integer malesuada a ipsum vitae commodo. Mauris quis odio ullamcorper, euismod quam id, dictum sem. Nullam nec diam diam. Ut sagittis libero non purus vestibulum, eu rhoncus mauris condimentum. Nullam odio orci, suscipit nec tristique eget, venenatis ac ex. Nulla venenatis, libero a tempor sollicitudin, diam odio gravida neque, in feugiat libero est sit amet massa.",
            "Etiam a felis arcu. Mauris feugiat, orci commodo sollicitudin accumsan, diam ex vestibulum metus, quis ullamcorper nibh dui et felis. Maecenas eu nisl nec nulla suscipit bibendum ut ultrices odio. Praesent rutrum semper risus, vitae egestas enim porta vel. Phasellus vel elit placerat urna tincidunt egestas et id urna. Duis tempus, purus in rhoncus consectetur, eros dui euismod sapien, vel iaculis justo justo a tellus. Pellentesque bibendum, urna eu eleifend vulputate, leo est tincidunt mauris, ac ultricies nunc libero quis velit.",
            "Vivamus risus tortor, laoreet a libero pulvinar, dignissim gravida risus. Aliquam vel efficitur velit. Sed pretium nunc in lorem varius porta. Nulla facilisi. Sed ultrices tellus nibh, et laoreet massa bibendum quis. Proin ultrices venenatis eleifend. Maecenas mauris nunc, auctor at posuere a, tincidunt non risus. Maecenas sit amet eros at turpis auctor lacinia ut et elit. Donec in sagittis erat. Morbi a mi tortor. Nunc venenatis enim purus, eget dignissim urna rhoncus id. Nulla diam dolor, laoreet ut dui non, pellentesque consectetur erat."];
var image = ["images/photo01.jpg", "images/photo02.jpg", "images/photo03.jpg", "images/photo04.jpg"];
var position = ["left", "right", "left", "right"];
var randomizer = [0,1,2,3];


//shuffle function
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

//Shuffling the order of arrays
randomizer = shuffle(randomizer);

//My Function
function myF(h, c, i, p, x) {
  //Variable Creation Section
  var y = 0;
  console.log(x[y]);
  var headerContent;
  var copyContent;
  var imgAttribute;
  var imgAttribute = document.createAttribute("src");
  var layoutPosition;
  var positionClass = document.createAttribute("class");

  //Variable changing content section
  //layoutPosition = p[x];
  //console.log(layoutPosition);
  //positionClass.value = layoutPosition;



  while (y<4){
    //document.write("1");
    var n = x[y];
    var header = document.createElement("h1");
    var copy = document.createElement("p");
    var img = document.createElement("img");
    var div = document.createElement("div");
    headerContent = document.createTextNode(h[n]);
    copyContent = document.createTextNode(c[n]);
    header.appendChild(headerContent);
    copy.appendChild(copyContent);
    document.body.appendChild(div);
    div.setAttribute("id", y);
    div.setAttribute("class", "text" + " " + p[n]);
    document.getElementById(y).appendChild(header);
    document.getElementById(y).appendChild(copy);
    document.body.appendChild(img);
    img.setAttribute("class", p[n]);
    img.setAttribute("src", i[n]);
    y++;
    console.log(y);
  };
}
