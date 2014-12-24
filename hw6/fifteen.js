//增加了更换图片、结束游戏以图片提醒、时间、步数 和动画四种额外功能

window.onload = function() {
    var overall = document.getElementById("overall");
    var c = 0;
    var clicktimes = 0;
    var stepC = 1;

	var puzzlearea = document.getElementById("puzzlearea");
	var piece = puzzlearea.children;
	var blank = document.createElement("div");
	var shuffleBtn = document.getElementById("shufflebutton");
    var win_jpg = document.createElement("div");

    var controls = document.getElementById("controls");
    var showtime = document.createElement("button");
    var exchange = document.createElement("button");
    var step = document.createElement("button");
    var whole_img = document.createElement("div");
    var best_step_time = document.createElement("div");

    var isclick = false;  //为了防止作弊，一定要按了乱序才会显示成功
    exchange.innerHTML = "change_img";
    controls.appendChild(exchange);
    showtime.innerHTML = "Time";
    controls.appendChild(showtime);
    step.innerHTML = "Steps";
    controls.appendChild(step);


    //  最好能够直接把这个空白用像素位置确定，不要加进去
	function add_blank() {
		blank.classList.add("puzzlepiece");
		blank.style.visibility = "hidden";
		puzzlearea.appendChild(blank);
	}

    //设置每一块的位置
	function setPosition() {
		for (var index = 0; index < piece.length; index++) {
			//  原本没有class这个属性，所以给他加进去
			piece[index].classList.add("puzzlepiece");
			piece[index].style.top = Math.floor(index/4)*100 + "px";
			piece[index].style.left = Math.floor(index%4)*100 + "px";
		};
	};

    //设置每一块显示的背景
	function setbackground() {
        for (var index = 0; index < piece.length; index++) {
            piece[index].style.backgroundPositionX = -Math.floor(index%4)*100 + "px";
            piece[index].style.backgroundPositionY = -Math.floor(index/4)*100 + "px";
        };
    };

    //判断是否可移动
    function isMove(item) {
    	if ((blank.style.top == item.style.top && 
    		Math.abs(parseInt(blank.style.left) - parseInt(item.style.left)) == 100) ||
    		(blank.style.left == item.style.left &&
    		Math.abs(parseInt(blank.style.top) - parseInt(item.style.top)) == 100)) {
    			return true;
    	} else {
    		return false;
    	}
    };

    //可移动则点亮它并增添一个监听器
    function highLightMove() {
    	for (var index = 0; index < piece.length; index++) {
    		if (isMove(piece[index])) {
    			piece[index].classList.add("movablepiece");
    			piece[index].addEventListener("click", Move);
    		} else {
    			piece[index].classList.remove("movablepiece");
    			piece[index].removeEventListener("click", Move);
    		}
    	}
    };

    //将目标块与空白块交换
    function Move() {
    	var tmp_top = blank.style.top;
    	var tmp_left = blank.style.left;
    	blank.style.top = this.style.top;
    	blank.style.left = this.style.left;
    	this.style.top = tmp_top;
    	this.style.left = tmp_left;
        //加入移动动画，延时
        this.style.transition = "all 0.6s";
        //每一次移动都要判断其下一次可不可以移动了
    	highLightMove();
        happyEnd();
        if (isclick == true) {
            stepCount();
        }
    };

    //洗牌
    function shuffle() {
    	var counter = 500;
    	while(counter) {
    		var test = Math.floor(Math.random() * (piece.length-1));
    		piece[test].click();
    		counter--;
    	}
        isclick = true;
        if (clicktimes == 0) {
            timedCount();
            clicktimes += 1;
        }
    };

    //判断是否完成拼图了，即判断每一块的位置是否等于最开始
    function isFinished() {
    	for (var index = 0; index < piece.length; index++) {
    		if (piece[index].style.top != (Math.floor(index/4)*100+"px") || 
    			piece[index].style.left != (Math.floor(index%4)*100+"px")) {
    			return false;
    			break;
    		}
    	}
    	return true;
    };

    //执行胜利的表现
    function happyEnd() {
    	if (isclick && isFinished()) {
            stopCount();
            ResetSetCount();
            Win();
            isclick = false;
    	}
    };

    //赢了之后的表现
    function Win() {
        win_jpg.classList.add("puzzlepiece");
        win_jpg.style.zIndex = "100";
        win_jpg.style.top = "0px";
        win_jpg.style.left = "0px";
        win_jpg.style.width = "400px";
        win_jpg.style.height = "400px";
        win_jpg.style.backgroundImage = "url('win.jpg')";
        puzzlearea.appendChild(win_jpg);
        setTimeout(function(){puzzlearea.removeChild(win_jpg)}, 5000);
    };

    //更换图片
    function changeImg() {
        var num = Math.floor(Math.random() * 4);
        switch(num) {
            case 0:
                for (var index = 0; index < piece.length; index++) {
                    piece[index].style.backgroundImage = "url('background.jpg')";
                };
                whole_img.style.backgroundImage = "url('background.jpg')";
                break;
            case 1:
                for (var index = 0; index < piece.length; index++) {
                    piece[index].style.backgroundImage = "url('background1.jpg')";
                };
                whole_img.style.backgroundImage = "url('background1.jpg')";
                break;
            case 2:
                for (var index = 0; index < piece.length; index++) {
                    piece[index].style.backgroundImage = "url('background2.jpg')";
                };
                whole_img.style.backgroundImage = "url('background2.jpg')";
                break;
            case 3:
                for (var index = 0; index < piece.length; index++) {
                    piece[index].style.backgroundImage = "url('background3.jpg')";
                };
                whole_img.style.backgroundImage = "url('background3.jpg')";
                break;
        };      
        setbackground();
    };

    //显示全图,以便于玩家拼图
    function whole() {
        whole_img.style.postion = "absolute";
        whole_img.style.top = "250px";
        whole_img.style.left = "50px";
        whole_img.classList.add("puzzlepiece");
        whole_img.style.width = "150px";
        whole_img.style.height = "150px";
        whole_img.style.backgroundSize = "100% 100%";
        overall.appendChild(whole_img);
    };

    //计时
    function timedCount() {
        showtime.innerHTML = "Time: " + c;
        c = c + 1;
        timer = setTimeout(timedCount, 1000);
    };

    //停止计时
    function stopCount() {
        clearTimeout(timer);
        showtime.innerHTML = "Time";
        clicktimes = 0;
    };

    //计算步数
    function stepCount() {
        step.innerHTML = "steps: " + stepC;
        stepC += 1;
    };

    function ResetSetCount() {
        step.innerHTML = "steps";
        stepC = 0;
    };


    add_blank();
    setPosition();
    setbackground();
    highLightMove();
    whole();
    shuffleBtn.onclick = shuffle;
    exchange.onclick = changeImg;
};