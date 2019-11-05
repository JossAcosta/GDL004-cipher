window.cipher ={  
       encode: (msg, offset) => {
        let secretMsg = '';
        for (var i = 0 ; i < msg.length ; i++){  
         let ind= msg.charCodeAt(i);
          if (ind >= 65 && ind <= 90) { 
          let resultEncode = ( ind - 65 + offset) % 26 + 65;
          let result =  String.fromCharCode(resultEncode); 
           secretMsg+=result; 
          }else if(ind === 32){ 
           secretMsg+= ' '; 
         }
         else if(ind === 209){ 
          secretMsg+= 'Ñ'; 
        }
         else {
           break; 
          }
        }
        return secretMsg;   
      },
      
  
  decode: (msg2, offset) => {
    let decodeMsg = '';
    for(let i=0; i<msg2.length; i++){
    let ind=msg2.charCodeAt(i);
    if (ind >= 65 & ind <=90){
    let resultDecode = ( ind- 90 - offset) % 26 + 90; 
    decodeMsg += String.fromCharCode(resultDecode); 
    }else if (ind===32){
      decodeMsg+=' ';
    }else if (ind===209){
      decodeMsg+= 'Ñ';
    }
    else {
      break; 
     }
    }
    return decodeMsg; 
  }
 
};