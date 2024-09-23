function toggleTheme() {
  // Obtains a list of all <link>
  // elements.
  // Select your element using indexing.
  var theme = document.getElementsByTagName("link")[0];
  var audio = document.getElementsByTagName("audio")[0];
  var img = document.getElementsByTagName("img")[0];

  // Change the value of href attribute
  // to change the css sheet.
  if (theme.getAttribute("href") === 'style.css') {
    theme.setAttribute("href", "style2.css");
    audio.setAttribute("src", "Elfen Lied - Lilium Full - High Quality.mp3");
    img.setAttribute("src", "eye.gif");
  } 
  else {
    audio.setAttribute("src", " ");
    img.setAttribute("src","https://media.tenor.com/8JhcC4OtwC8AAAAM/hatsune-miku-dance.gif");
    theme.setAttribute("href", "style.css");
  }
}
