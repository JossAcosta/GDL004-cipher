window.cipher ={  
   encode: (msg, offset) => {
    let secretMsg = "";
        //console.log (msg.length);
        //msg="HOLA"; offset=3; console.log(msg,offset);
    const ABC="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      for(let i=0; i<msg.length; i++){
        let ind=msg.charAt(i);
        //console.log(ind);
        let pos= parseInt(ABC.indexOf(ind));
        //console.log(pos); 
          if(pos>=0){
          let sum = parseInt(pos+offset);
          //console.log(sum);
          secretMsg+=ABC.charAt(  ((sum)%26 ) ) 
          //console.log(secretMsg);
          }else{secretMsg+=ind}   
           //console.log(secretMsg);  
           document.getElementById("resultado_encode").innerHTML =secretMsg;
           //return secretMsg;
       }
   
   
  },
  decode: (msg, offset) => {
    let secretMsg1 = "";
        //console.log (msg.length);
        //msg="HOLA"; offset=3; console.log(msg,offset);
    const ABC="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      for(let i=0; i<msg.length; i++){
        let ind=msg.charAt(i);
        //console.log(ind);
        let pos= parseInt(ABC.indexOf(ind));
        //console.log(pos); 
          if(pos>=0){
          let dif = parseInt(pos-offset);
          //console.log(sum);
          secretMsg1+=ABC.charAt(  ((dif)%26 ) ) 
          //console.log(secretMsg);
          }else{secretMsg1+=ind}   
           //console.log(secretMsg1);  
           document.getElementById("resultado_decode").innerHTML =secretMsg1;
           //return secretMsg;
       }
   
   
  }
// Acá escribe tu código.
}