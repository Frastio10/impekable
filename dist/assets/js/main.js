const currentTime = (e) =>{
	var date = new Date();
	var h = date.getHours();
	var m = date.getMinutes();
	if(m < 10){
		m = '0' + m;
	}
	return h+':'+m; 
}

var element = document.querySelectorAll('.time');
$('.time').each(function(index, element) {
  element.innerHTML = currentTime();
})

var textMessage = ["Hi","Glad to hear that.","Sure then.","Sorry?","Okay!","Sorry, I Can't","Sure, How can I help you?","Thanks","Nevermind.","Yes I do", "Yes","I hate you","I Really hate you","Kill yourself"];
var inputmessage = document.getElementById("inputmessage");
//var message = document.getElementById("inputmessage").val(inputmessage);
let temp = "";
let temp1 = "";
var chat = document.getElementById("chatsys").innerHTML;
var root = $(".message-all");
element.innerHTML = currentTime();	

 $('#inputmessage').keypress(function (e) {
    if (e.which == 13 && inputmessage.value	.length > 0) {
		root.scrollTop = root.scrollHeight;
		var textrand = textMessage[Math.floor(Math.random() * textMessage.length)];
        temp1 = temp + chat
        .replace("{messageme}",inputmessage.value)
        .replace("{message}",textrand)
        .replace(/{time}/g,currentTime())
        root.append(temp1);
        inputmessage.value="";
    }
});

 




