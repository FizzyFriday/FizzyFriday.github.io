const height = document.body.offsetHeight, width = document.body.offsetWidth;
console.log(height);
console.log(width);


var div = document.getElementById('hi');
var divs = div.getElementsByTagName('div');
var divArray = [];
for (var i = 0; i < divs.length; i += 1) {
  divArray.push(divs[i].innerHTML);
  divArray[i].style.width = `${width*0.2933}px`;
  divArray[i].style.height = `${height*0.4}px`;
  divArray[i].style.left = `${width*0.03}px`;
  divArray[i].style.right = `${width*0.03}px`;
}
