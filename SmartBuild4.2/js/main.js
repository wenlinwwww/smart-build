$(document).ready(function(){
    console.log('jq loaded successed.');
	login();
	
});

function login(){
//      login button clicked TODO 登录接口
    $(".submit").click(function(){
        location.href = "./Student-Dashboard.html";
    });

//      lecturer login clicked 临时跳转至学生界面 TODO 老师登录接口
    $(".fb-btn").click(function(){
        location.href = "./Teacher-Dashboard.html";
    });
}

function popUpWindow(tag, courseNum){
	if(tag == "assignment"){
		//console.log("print: "+tag);
		$("#full-content").html(
			
			`<p>
			<b>Deco3801</b> assignment 1 will be due on next Monday!
			<br><br><b>Deco2800</b> assignment 1 will be due on the week after on Wednsday.
			<br><br><b>Deco3800</b> has assingment 1 due on 13 Oct.
			<br><br><b>Deco1800</b> has assignment 1 due on 14 Oct.
			<br><br><b>Good luck!</b>
			
			</p>`
			
		);
		$(".full-container").css('display', 'block');
		
	} else if (tag == "announce") {
		switch (courseNum) {
			case 3800: 
				console.log("3800");
				$("#full-content").html(
					
					`<p>
					<b>Some news from deco3800</b>
					<br><br>
					The lecture recording and lecture slides for week 1 has been uploaded.
					You can find it under learning folder.
					
					</p>`
				
				);
				$(".full-container").css('display', 'block');
				break;
			case 1800: 
				console.log("1800");
				$("#full-content").html(
				
					`<p>
					<b>Some news from deco1800</b>
					<br><br>
					We detected a few bugs when running the program in the earlier of this week.
					Now it has been fixed.
					
					</p>`
				);
				$(".full-container").css('display', 'block');
				break;
			case 2800: 
				console.log("2800");
				$("#full-content").html(
					
					`<p>
					<b>Some news from deco2800</b>
					<br><br>
					Hi, all.
					<br>
					The print 1 documentation is released on the Gitlab.
					Just use clone command on the git bash and it will go on.
					
					</p>`
				
				);
				$(".full-container").css('display', 'block');
				break;
			default: alert("Wrong param 2!");
		}
	} else if (tag == "learning") {
		$("#full-content").html(
			
			`<p>
			<b>Lecture Recording</b>
			is released. You guys can watch it on youtube as well.
			<br><br>
			<b>The Introduction to studio3 Build</b>
			You can go through the document and post your questions in the discussion board.
			</p>`
			
		);
		$(".full-container").css('display', 'block');
		
	} else if (tag == "grade") {
		$("#full-content").html(
			
			`<p>
			<b>A1:</b> 18 / 30
			<br><b>A2:</b> 14 / 30
			<br><b>A3:</b> 21 / 30
			<br><b>Mid-term:</b> 23 / 50
			<br><b>A4:</b> 24 / 40
			<br><b>Final:</b> 68 / 100
			</p>`
			
		);
		$(".full-container").css('display', 'block');
		
	} else if (tag == "events") {
		switch (courseNum) {
			case 1: 
				$("#full-content").html(
					
					`<p>
					<b>26 Aug 2020</b>
					<br><br>
					National Student Voultneering Day
					<br>
					Ateend it with your Notebook and pen.
					
					</p>`
				
				);
				$(".full-container").css('display', 'block');
				break;
			case 2:
				$("#full-content").html(
					
					`<p>
					<b>28 Aug 2020</b>
					<br><br>
					Sem 1 Supplymentary Exam Day
					Please be there on time.
					
					</p>`
				
				);
				$(".full-container").css('display', 'block');
				break;
			default: alert("Wrong param 2!");
		}
	} else {
		alert("Wrong param 1!");
	}
	
	
	$("#full-close").click(function(){
        $(".full-container").css('display', 'none');
    });
}
