window.cipher ={  
   encode: (msg, offset) => {
    let secretMsg = "";
        for(let i=0; i<msg.length; i++){
        let result = (msg.charCodeAt(i) - 65 + offset) % 26 + 65; 
        secretMsg += String.fromCharCode(result);
    }
      return secretMsg;   
  },
  decode: (msg2, offset) => {
    let decodeMessage = "";
    for(let i=0; i<msg2.length; i++){
    let resultDecode = (msg2.charCodeAt(i) - 90 - offset) % 26 + 90; 
    decodeMessage += String.fromCharCode(resultDecode); 
  }
    return decodeMessage; 
};