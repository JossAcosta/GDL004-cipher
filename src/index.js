let userKey = document.getElementById("userOffset");
let text = document.getElementById("textArea1");
let text2 = document.getElementById("textArea2");
let btn = document.getElementById("submitButton");
let btn2 = document.getElementById("decipherButton");


btn.addEventListener("click", () => {
    let msg = text.value;
    let offset = (parseInt(userKey.value));
    window.cipher.encode(msg,offset);
    
    }  );  

btn2.addEventListener("click", () => {
        let msg = text2.value;
        let offset = (parseInt(userKey.value));
        window.cipher.decode(msg,offset);
        
        }  );   


