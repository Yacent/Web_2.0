// copyright by Linyx
// 额外特征全部完成
// 自我增加了 reset功能，玩玩，挺好的
window.onload = function() {
	index = 0;
	startbtn = document.getElementById("start");
	stopbtn = document.getElementById("stop");
	displayArea = document.getElementById("displayarea");
	select = document.getElementsByTagName("select")[0];
	reset = document.getElementById("reset");

	stopbtn.disabled = true;

	getSize = function() {
		sizeName = document.getElementsByName("size");
		num = 0;
		size = "";
		for (var i = 0; i < sizeName.length; i++) {
			if (sizeName[i].checked) {
				num = i;
				break;
			}
		}
		switch(num) {
			case 0:
				size = "7pt";
				break;
			case 1:
				size = "12pt";
				break;
			case 2:
				size = "24pt";
				break;
		}
		return size;
	}

	isTurbo = function() {
		turbo = document.getElementsByName("speed")[0];
		return turbo.checked;
	}

	startbtn.onclick = function() {
		animation = select.value;
		animationList = ANIMATIONS[animation].split("=====\n");
		content = displayArea.value;

		play = function() {
			displayArea.value = animationList[index];
			index = (index+1)%animationList.length;
			displayArea.style.fontSize = getSize();
			if (isTurbo()) {
				timer = setTimeout(play, 50);
			} else {
				timer = setTimeout(play, 200);
			}
		}
		play();
		startbtn.disabled = true;
		select.disabled = true;
		stopbtn.disabled = false;
	}

	stopbtn.onclick = function() {
		clearTimeout(timer);
		displayArea.value = content;
		startbtn.disabled = false;
	}

	reset.onclick = function() {
		clearTimeout(timer);
		displayArea.value = "";
		index = 0;
		startbtn.disabled = false;
		select.disabled = false;
		stopbtn.disabled = true;
	}
}
