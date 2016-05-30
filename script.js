
	 setInterval(function(){getPos()},1000);
	 function getPos(){
		var e1=document.getElementById("sTop");
		var e2=document.getElementById("services");
		var e3=document.getElementById("portfolio");
		var e4=document.getElementById("our-team");
		var e5=document.getElementById("connect");
		var e6=document.getElementById("contact");
		var viewportOffset1 = e1.getBoundingClientRect();
		var viewportOffset2 = e2.getBoundingClientRect();
		var viewportOffset3 = e3.getBoundingClientRect();
		var viewportOffset4 = e4.getBoundingClientRect();
		// var viewportOffset5 = e5.getBoundingClientRect();
		var viewportOffset6 = e6.getBoundingClientRect();
		// these are relative to the viewport, i.e. the window
		var top1 = viewportOffset1.top;
		var top2 = viewportOffset2.top;
		var top3 = viewportOffset3.top;
		var top4 = viewportOffset4.top;
		// var top5 = viewportOffset5.top;
		var top6 = viewportOffset6.top;
		if(top1==0)
		{
		
			   
			document.getElementById("1").classList.remove("active");
			document.getElementById("2").classList.remove("active");
			document.getElementById("3").classList.remove("active");
			document.getElementById("4").classList.remove("active");
			// //document.getElementById("5").classList.remove("active");
			document.getElementById("6").classList.remove("active");
			document.getElementById("1").className = " active";
			
	 }
	 else if(top2>50&&top2<400)
		{
			
			   
			document.getElementById("2").classList.remove("active");
			document.getElementById("1").classList.remove("active");
			document.getElementById("3").classList.remove("active");
			document.getElementById("4").classList.remove("active");
			//document.getElementById("5").classList.remove("active");
			document.getElementById("6").classList.remove("active");
			document.getElementById("2").className = " active";
			
	 }
	 else if(top3>50&&top3<400)
		{
			
			   
			document.getElementById("3").classList.remove("active");
			document.getElementById("1").classList.remove("active");
			document.getElementById("2").classList.remove("active");
			document.getElementById("4").classList.remove("active");
			//document.getElementById("5").classList.remove("active");
			document.getElementById("6").classList.remove("active");
			document.getElementById("3").className = " active";
			
	 }
	 else if(top4>50&&top4<400)
		{
			
			   
			document.getElementById("4").classList.remove("active");
			document.getElementById("1").classList.remove("active");
			document.getElementById("3").classList.remove("active");
			document.getElementById("2").classList.remove("active");
			//document.getElementById("5").classList.remove("active");
			document.getElementById("6").classList.remove("active");
			document.getElementById("4").className = " active";
			
	 }
	 // else if(top5==122&&top5>0)
		// {
			
			   
		// 	document.getElementById("5").className = " active";
		// 	document.getElementById("1").classList.remove("active");
		// 	document.getElementById("3").classList.remove("active");
		// 	document.getElementById("4").classList.remove("active");
		// 	document.getElementById("2").classList.remove("active");
		// 	document.getElementById("6").classList.remove("active");
			
	 // }
	 else if(top6>50&&top6<400)
		{
			
			   
			document.getElementById("6").classList.remove("active");
			document.getElementById("1").classList.remove("active");
			document.getElementById("3").classList.remove("active");
			document.getElementById("4").classList.remove("active");
			//document.getElementById("5").classList.remove("active");
			document.getElementById("2").classList.remove("active");
			document.getElementById("6").className = " active";
			
	 }

}
	 
  $(document).ready(function () {
    $('.menu-first li').on("click", function () {
	ref=this;
        	document.getElementById("1").classList.remove("active");
			document.getElementById("2").classList.remove("active");
			document.getElementById("3").classList.remove("active");
			document.getElementById("4").classList.remove("active");
			// //document.getElementById("5").classList.remove("active");
			document.getElementById("6").classList.remove("active");
        $(this).addClass('active');
    });
});
