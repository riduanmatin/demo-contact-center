"use strict"

class Chat {
    constructor() {
        this.formChat()
        this.formEmail()
        $('.open-button').click(function () {
            document.getElementById("myForm").style.display = "block";
        })
    }

    // formChat() {
    //     var x = '<button class="open-button">Chat</button><div class="chat-popup" id="myForm"><form action="/action_page.php" class="form-container"><h1>eCentrix</h1><label for="msg"><b>Selamat datang, silahkan masukkan email dan nama Anda</b></label><h2>nama</h2><textarea placeholder="Type message.." name="msg" required></textarea><button type="submit" class="btn">kirim</button></form></div>'
    //     $('body').append(x);
    // }

}
new Chat();