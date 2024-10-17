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
    document.getElementsByTagName("img")[2].setAttribute("src", "");
    document.getElementsByTagName("img")[1].setAttribute("src", "");

  } 
  
  else if (theme.getAttribute("href") === 'style2.css') {
    theme.setAttribute("href", "style3.css");
    audio.setAttribute("src", "Doki Doki Literature Club! OST - Doki Doki Literature Club! (Main Theme).mp3");
    img.setAttribute("src", "projects/bouncing-box/Doki_Doki_Literature_Club_Logo.webp");
    document.getElementsByTagName("img")[2].setAttribute("src", "projects/bouncing-box/Sayori_Sticker_Excited.webp");
    document.getElementsByTagName("img")[1].setAttribute("src", "N_sticker_2.webp");


  }

  else if (theme.getAttribute("href") === 'style3.css') {
    theme.setAttribute("href", "style4.css");
    audio.setAttribute("src", "");
    img.setAttribute("src", "https://p325k7wa.twic.pics/high/elden-ring/elden-ring/05-characters/elden-ring-character-samourai-full.png?twic=v1/resize=370/step=10/quality=80");
    document.getElementsByTagName("img")[2].setAttribute("src", "");
    document.getElementsByTagName("img")[1].setAttribute("src", "");


  }
  
  else{
    audio.setAttribute("src", " ");
    img.setAttribute("src","https://media.tenor.com/8JhcC4OtwC8AAAAM/hatsune-miku-dance.gif");
    theme.setAttribute("href", "style.css");
    document.getElementsByTagName("img")[2].setAttribute("src", "");
    document.getElementsByTagName("img")[1].setAttribute("src", "");

  }
}
