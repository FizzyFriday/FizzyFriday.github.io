console.log("Working");
const height = document.body.offsetHeight, width = document.body.offsetWidth;

for (let i = 0; i < 3; i++)
{
  console.log(`${Div${i]}');
  var div = document.getElementById(`Div${i}`);
  div.style.left = `${height*0.03}px`;
  div.style.right = `${height*0.03}px`;
  div.style.width = `${height*0.2933}px`;
  div.style.height = `${height*0.35}px`;
  div.style.marginBottom = "20px";
}
console.log(height);
console.log(width);
