window.onload = function() {
	var boundary = document.getElementsByClassName("boundary");
	var content = document.getElementById("status");
	var end = document.getElementById("end");
	var start = document.getElementById("start");
	var maze = document.getElementById("maze");

	function Dash() {
		if (content.innerHTML != "You Win!!!") {
			for (var i = 0; i < boundary.length; i++) {
				boundary[i].className = "youlose" + " " + "boundary";
			}
			content.innerHTML = "You Lose!!!"
		}
	};

	function Win() {
		if (content.innerHTML != "You Lose!!!") {
			content.innerHTML = "You Win!!!";
		}
	};

	function Restart() {
		for (var i = 0; i < boundary.length; i++) {
			boundary[i].className = "boundary";
		}
		content.innerHTML = "Begin Again";
	};

	function isTreat() {
		Dash();
	}

	//  事件处理

	//  每一个墙壁都要循环到
	for (var i = 0; i < boundary.length; i++) {
		boundary[i].onmouseover = Dash;
	};

	end.onmouseover = Win;
	start.onclick = Restart;
	maze.onmouseleave = isTreat;
};
