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



