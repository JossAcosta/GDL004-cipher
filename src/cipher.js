window.cipher ={  
       encode:(offset, string) => {
        let secretMsg="";
        for (var i = 0 ; i < string.length ; i++){  
         let ind= string.charCodeAt(i);
          if (ind >= 65 & ind <= 90) { 
           let resultEncode = ( ind - 65 + offset) % 26 + 65;
           secretMsg +=  String.fromCharCode(resultEncode); 
           
          } if (ind >= 97 && ind <= 122){
            let resultEncode = ( ind - 97 + offset) % 26 + 97;
            secretMsg+=  String.fromCharCode(resultEncode); 
           
          }if (ind >= 32 && ind <= 64){
            let resultEncode = ind;
            secretMsg+=  String.fromCharCode(resultEncode); 
           
          }/*if(ind === 32){ 
           secretMsg+= ' '; 
         }if(ind === 209){ 
          secretMsg+= 'Ñ'; 
          } */
         
        }
        return secretMsg;   
      },
    decode: (offset, string) => {
    let decodeMsg="";
    for(let i=0; i<string.length; i++){
    let ind=string.charCodeAt(i);
    if (ind >= 65 & ind <=90){
    let resultDecode = ( ind- 90 - offset) % 26 + 90; 
    decodeMsg += String.fromCharCode(resultDecode); 
    } if (ind >= 97 & ind <=122){
      let resultDecode = ( ind- 122 - offset) % 26 + 122; 
      decodeMsg += String.fromCharCode(resultDecode); 
    } if(ind >= 32 & ind <=64){
      let resultDecode = ind; 
      decodeMsg += String.fromCharCode(resultDecode); 
    }/*else if (ind===32){
      decodeMsg+=' ';
    }else if (ind===209){
      decodeMsg+= 'Ñ';
     }*/
    }
    return decodeMsg; 
  }

 };