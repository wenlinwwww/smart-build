$(document).ready(function(){
	
	postNewClicked();
	
    slideUpDown();
	
	
});

function postNewClicked(){
	$("#newSub").click(function(){
		if($("#pTitle").val() == "" || $("#pContent").val() == ""){
			alert("Please input the title & content.");
		} else {
			$(".quesBoard").html(
				$(".quesBoard").html()
				+
				`
					<div class="MenuPanel">
						<div class="MenuTitle">
							
								<figure>
									<img class="person" src="./images/profile.png" width="80px"height="80px">
									<p><a href="#" target="_self">` + $("#pTitle").val() + `</a>
									<br>` + $("#pContent").val() + `
									</p>

									<img class="side-image" src="./images/comment.png" width="20px" height="20px">
										
								</figure>
							
						</div>
						<div class="MenuContent">
								<div class="resBox">
									
								</div>
								
								<div class="formBox"></div>

						</div>
					</div>
				`
			
			);
			slideUpDown();
		}
	});
}

function slideUpDown(){
	$(".MenuPanel").each(function(){
		$(this).children(".MenuContent").hide();
	});
	
	$(".MenuTitle").each(function(){
		$(this).click(function(){

			if($(this).parents(".MenuPanel").children(".MenuContent").css("display") != "none"){
				$(this).parents(".MenuPanel").children(".MenuContent").slideUp();
			}else{
				
				// 创建form的submit表格，如果存在就跳过
				if($(this).parents(".MenuPanel").children(".MenuContent").children(".formBox").html() == ''){
					$(this).parents(".MenuPanel").children(".MenuContent").children(".formBox").html(
						`
						<form class="resSubmit" method="get" target="iframe">
							<textarea rows="3" placeholder="type your response here..." wrap="hard" required="required"></textarea>
							<input type="submit" value="Submit"/>
						</form>
						<iframe id="iframe" name="iframe" style="display:none;"></iframe>
						`
					);
					$(".resSubmit").submit(function(e){
						var $textArea = $('textarea'),
						textArea = $textArea.val();
						console.log($(this));
						$(this).parents(".MenuPanel").children(".MenuContent").children(".resBox").html(
							$(this).parents(".MenuPanel").children(".MenuContent").children(".resBox").html()
							+
							`
							<div class="response">
								<img src="./images/profile.png" />
								<p>`+textArea+`</p>
							</div>
							`
						);
						
						alert("Submitted!");
					});
				}
				$(this).parents(".MenuPanel").children(".MenuContent").slideDown();
				
			}
		});

	});
	
}
