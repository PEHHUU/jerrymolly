window.addEventListener("wheel", function(e){
	e.preventDefault();
},{passive : false});

let $html = $("html");
 
let page = 1;
 
let lastPage = $(".scrollvh").length;
 
$html.animate({scrollTop:0},10);


$(window).on("wheel", function(e){
 
	if($html.is(":animated")) return;
 
	if(e.originalEvent.deltaY > 0){
		if(page== lastPage) return;
 
		page++;
	}else if(e.originalEvent.deltaY < 0){
		if(page == 1) return;
 
		page--;
	}
	let posTop = (page-1) * $(window).height();
 
	$html.animate({scrollTop : posTop});
 
});