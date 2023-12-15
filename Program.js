const height = document.body.offsetHeight, width = document.body.offsetWidth;
const AllGames = ["Game1Name", "Game2Name", "Empty"];

for (let i = 0; i < AllGames.length; i++)
{
  var div = document.getElementById(`${AllGames[i]}`);
  div.style.left = `${height*0.03}px`;
  div.style.right = `${height*0.03}px`;
  div.style.width = `${height*0.2933}px`;
  div.style.height = `${height*0.35}px`;
  div.style.marginBottom = "20px";
}
