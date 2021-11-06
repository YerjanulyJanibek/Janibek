

data = [
		   ["Instagram", "Facebook", "Gmail"],
		   ["adiina.y", "Adina Yerzhan", "erjankizi@gmail.com"],
		   ["images/Instagram.png","images/Facebook.png","images/Gmail.png"]
	   ]

for(var i = 0; i < 2; i++){
	parent_box = document.getElementById("third_info")
	card = document.getElementsByClassName("card")[0]
	card2 = card.cloneNode(true);
	parent_box.appendChild(card2)	
}
cards = document.getElementsByClassName("card")
for(var i = 0; i < cards.length; i++){
	cards[i].setAttribute("onmouseover", "change_style("+i+")")
	cards[i].setAttribute("onmouseleave", "change_style2("+i+")")

	header = cards[i].getElementsByClassName("card_header")[0]
	header.innerHTML = data[0][i]
	
	text = cards[i].getElementsByClassName("card_text")[0]
	text.innerHTML = data[1][i]

	card_img = cards[i].getElementsByClassName("card_img")[0]
	card_img.style.backgroundImage = "url("+data[2][i]+")"
}

function change_style(num) {
	card_img=cards[num].getElementsByClassName('card_img')[0]
	card_img.style.opacity=1;
	hidden_text=card_img.getElementsByClassName("card_hidden_text")[0]
	hidden_text.style.display = "block"
}
function change_style2(num) {
	card_img=cards[num].getElementsByClassName('card_img')[0]
	card_img.style.opacity=1;
	hidden_text=card_img.getElementsByClassName("card_hidden_text")[0]
	hidden_text.style.display = "none"
}

data2= [
           ["Adina","Erjan","Sakan"]
           ["18 mart" ,"1may", "3september"]
           ["Doctor","businesman","doctor"]

       ]
fill_data()
function fill_data(){
	js_block=document.getElementsByClassName("js_block")[0]
	for(var i=0;i<data2.length;j++){
		div=js_block.createElement("div")
		console.log(div)
	}
}