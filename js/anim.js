$(document).ready(function(){

	var texts = ['Hi!', 'I love technology.','And pop-culture.','And physics.',"And history.","I love a lot of stuff.","And I'm also doing a lot of stuff.","Want to know more?"]
	var count = 0;
	var endReached = false
	$("#progress-arrow").click(function(){
		if(endReached==true){
			window.location.href = 'home.html'

		}
		console.log("arrow-clicked")
		count+=1
		$("#updater").fadeOut(100,function(){
			$("#updater").text(texts[count%texts.length])
			$("#updater").fadeIn(100)
		})
		if((count)==texts.length-1){
			endReached = true
		}
	})
})
