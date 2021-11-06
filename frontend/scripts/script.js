

// Тут через класс
here = document.getElementsByClassName("here")
here[1].innerHTML = "edednj"

// Тут через айди
first_here = document.getElementById("here1")
first_here.innerHTML = y

data = [
		["title1", "title2", "title3"],
		["Text 1", "Text 2", "text 3"],
		["images/bird.png", "images/dua_lipa.png", "images/brain.png"]
		]

for(var i = 0; i < 2; i++){
	parent_box = document.getElementById("third_info")
	card = document.getElementsByClassName("card")[0]
	card2 = card.cloneNode(true);
	parent_box.appendChild(card2)	
}
cards = document.getElementsByClassName("card")
for(var i = 0; i < cards.length; i++){
	header = cards[i].getElementsByClassName("card_header")[0]
	header.innerHTML = data[0][i]
	
	text = cards[i].getElementsByClassName("card_text")[0]
	text.innerHTML = data[1][i]

	card_img = cards[i].getElementsByClassName("card_img")[0]
	card_img.style.backgroundImage = "url("+data[2][i]+")"
}