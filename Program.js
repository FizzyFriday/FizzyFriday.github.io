const height = document.body.offsetHeight, width = document.body.offsetWidth;

for (let i = 1; i < 4; i++)
{
  var div = document.getElementById(`Div${i}`);
  div.style.left = `${width*0.03}px`;
  div.style.right = `${width*0.03}px`;
  div.style.width = `${height*0.2933}px`;
  div.style.height = `${height*0.45}px`;
  div.style.marginBottom = "20px";
}
