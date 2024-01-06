const height = document.body.offsetHeight, width = document.body.offsetWidth;

var i = 1;
while (true)
{
  try {var div = document.getElementById(`Div${i}`);}
  catch {break;}

  var div = document.getElementById(`Div${i}`);
  div.style.left = `${width*0.03}px`;
  div.style.right = `${width*0.03}px`;
  div.style.width = `${width*0.205}px`;
  div.style.height = `${height*0.45}px`;
  div.style.marginBottom = "20px";
  i++;
}
