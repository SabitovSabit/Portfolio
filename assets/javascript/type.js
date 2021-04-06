document.addEventListener('DOMContentLoaded',()=>{
    let i = 0;
    let j=0
    let txt = 'I`m software developer';
    let name='My name is Sabit'
    setInterval(()=>
    {
      if (i < txt.length) {
        document.getElementById("demo").innerHTML += txt.charAt(i);

        i++;
      } 
      
    }, 110);
    setTimeout(()=>{
        setInterval(()=>
        {
          if (j < name.length) {
            document.getElementById("demo2").innerHTML += name.charAt(j);
            j++;
          } 
        },100);
    },3000)
    
    
});



$(document).ready(function(){
 
    $(".nameHome").fadeIn();
    $("#div2").fadeIn("slow");
    $("#div3").fadeIn(3000);

});



document.addEventListener("scroll",function(e){
     console.log("salam");
})








let glowInTexts = document.querySelectorAll(".glowIn");

// split all text content into letters
// for each letter, wrap it with a span
// then let each span executes animation in sequence.
glowInTexts.forEach(glowInText => {
  let letters = glowInText.textContent.split("");
  glowInText.textContent = "";
  letters.forEach((letter, i) => {
    let span = document.createElement("span");
    span.textContent = letter;
    span.style.animationDelay = `${i * 0.02}s`;
    glowInText.append(span);
  });
});