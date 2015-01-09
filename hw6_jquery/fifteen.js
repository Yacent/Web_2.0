$(document).ready(function() {
    var puzzlearea = $("#puzzlearea");
    var piece = puzzlearea.children("div");
    //var blank = document.createElement("div");
    var shuffleBtn = $("#shufflebutton");
    var win_jpg = document.createElement("div");
    var blank = $("<div></div>").css({
        "top":"300px",
        "left":"300px",
        "background-image":"",
        "visibility":"hidden"
    });
    var isclick = false;
    //设置每一块的位置
    function setPosition() {
        piece.each(function (index, domEle) {
            $(domEle).addClass("puzzlepiece");
            $(domEle).css({
                "top" : Math.floor(index/4)*100 + "px",
                "left" : Math.floor(index%4)*100 + "px"
            });
        });
    };
    //设置每一块显示的背景
    function setbackground() {
        piece.each(function (index, domEle) {
            $(domEle).css({
                "background-image" : "url('background1.jpg')",
                "background-position" : (-Math.floor(index%4)*100) + "px " + 
                (-Math.floor(index/4)*100) + "px"
            });
        });
    };
    //判断是否可移动
    function isMove(item) {
        if ((blank.css("top") == item.css("top") && 
            Math.abs(parseInt(blank.css("left")) - parseInt(item.css("left"))) == 100) ||
            (blank.css("left") == item.css("left") &&
            Math.abs(parseInt(blank.css("top")) - parseInt(item.css("top"))) == 100)) {
                return true;
        } else {
            return false;
        }
    };
    //可移动则点亮他并增添一个监听器
    function highLightMove() {
        piece.each(function (index, domEle) {
            $(domEle).off("click", Move).removeClass("movablepiece");
            if (isMove($(domEle))) {
                $(domEle).on("click", Move).addClass("movablepiece");
            }
        });
    };
    //将目标块与空白快交换
    function Move(event) {
        var para = $(event.target);
        var tmp_top = blank.css("top");
        var tmp_left = blank.css("left");
        blank.css({
            "top" : para.css("top"),
            "left": para.css("left")
        });
        para.css({
            "top" : tmp_top,
            "left" : tmp_left
        })
        highLightMove();
        happyEnd();
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
    };
    //判断是否完成拼图了，即判断每一块的位置是否等于最开始
    function isFinished() {
        var result = true;
        piece.each(function (index, domEle) {
            if ($(domEle).css("top") != (Math.floor(index/4)*100+"px") ||
                $(domEle).css("left") != (Math.floor(index%4)*100+"px")) {
                result = false;
            }
        });
        return result;
    }
    //执行胜利的表现
    function happyEnd() {
        if (isclick && isFinished()) {
            Win();
            isclick = false;
        }
    };
    //赢了之后的表现
    function Win() {
        alert("Congratulation!!!!!You Win!That is amazing!!!");
    }
    setPosition();
    setbackground();
    highLightMove();
    shuffleBtn.on("click", shuffle);
})