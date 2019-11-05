let offsetUs = document.getElementById("userOffset");
let text = document.getElementById("textArea1");
let text2 = document.getElementById("textArea2");
let btn = document.getElementById("submitButton");
let btn2 = document.getElementById("decipherButton");
let msgToUser=  document.getElementById("resultado_encode").value;
let msgToUser2=  document.getElementById("resultado_decode").value;

btn.addEventListener("click", () => {
    let msgCap= text.value;
    let msg = msgCap.toUpperCase();
    let offset = (parseInt(offsetUs.value));
    window.cipher.encode(msg,offset);
    msgToUser = window.cipher.encode(msg, offset);
    console.log(msgToUser);
    document.getElementById("resultado_encode").innerHTML = msgToUser;
    }  );  
    
btn2.addEventListener("click", () => {
        let msg2Cap = text2.value;
        let offset = (parseInt(offsetUs.value));
        let msg2 = msg2Cap.toUpperCase();
       msgToUser2 = window.cipher.decode(msg2,offset);
    document.getElementById("resultado_decode").innerHTML = msgToUser2;
        }  );   


