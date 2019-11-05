window.cipher ={  
       encode: (msg, offset) => {
        let secretMsg = '';
        for (var i = 0 ; i < msg.length ; i++){  
         let ind= msg.charCodeAt(i);
          if (ind >= 65 && ind <= 90) { 
           let resultEncode = ( ind - 65 + offset) % 26 + 65;
           let result =  String.fromCharCode(resultEncode); 
           secretMsg+=result; 
          }else if (ind >= 97 && ind <= 122){
            let resultEncode = ( ind - 97 + offset) % 26 + 97;
            let result =  String.fromCharCode(resultEncode); 
           secretMsg+=result; 
          }if(ind >= 33 && ind <= 64){
            let resultEncode = ( ind - 32 + offset) % 33 + 32;
            let result =  String.fromCharCode(resultEncode); 
           secretMsg+=result; 
          }else if(ind === 32){ 
           secretMsg+= ' '; 
         }else if(ind === 209){ 
          secretMsg+= 'Ñ'; 
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
    }else if (ind >= 97 & ind <=122){
      let resultDecode = ( ind- 122 - offset) % 26 + 122; 
      decodeMsg += String.fromCharCode(resultDecode); 
    }else if(ind >= 33 & ind <=64){
      let resultDecode = ( ind- 64 - offset) % 33 + 64; 
      decodeMsg += String.fromCharCode(resultDecode); 
    }else if (ind===32){
      decodeMsg+=' ';
    }else if (ind===209){
      decodeMsg+= 'Ñ';
     }
    
    }
    return decodeMsg; 
  }
 
};