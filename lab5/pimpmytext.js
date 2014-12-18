window.onload = function() {
	document.getElementById("bigger").onclick = Bigger;
	document.getElementById("snoopify").onclick = Change;
	document.getElementById("igpay").onclick = Igpay;
	document.getElementById("stop").onclick = stopbtn;
	document.getElementById("my").onclick = My;

	text = document.getElementById("t1");
	text.style.fontSize = "12pt";
	size = parseInt(text.style.fontSize);

	function Bigger() {
		var chk = document.getElementById("bling");

		play = function() {
			typesize = "";
			size += 2;
			typesize = size + "pt";
			text.style.fontSize = typesize;
			timer = setTimeout(play, 500);
		}
		play();

		if (chk.checked) {
			text.style.textDecoration = "underline";
			text.style.fontWeight = "bold";
			text.style.color = "green";
			document.body.style.background = "url('hundred-dollar-bill.jpg')";
		} else {
			text.style.textDecoration = "none";
			text.style.fontWeight = "normal";
			text.style.color = "black";
			document.body.style.background = "none";
		}
	}

	function stopbtn() {
		clearTimeout(timer);
	}

	function Change() {
		content = document.getElementById("t1").value;
		content = content.toUpperCase();
		arr = content.split(".")
		after = arr.join("-izzle.")
		document.getElementById("t1").value = after;
	}

	function Igpay() {
		content = document.getElementById("t1").value;
		arr = content.split(" ");
		for (var i = 0; i < arr.length; i++) {
			if(arr[i].search(/[aeiouAEIOU]/) == 0) {
				arr[i] = arr[i] + "-ay";
			}
		}
		document.getElementById("t1").value = arr.join(" ");
	}

	function My() {
		alert("这你都敢点啊？");
		confirm("如果现在给你机会，你想反悔不？");
		alert("可惜，已经迟了");
		alert("下面给你讲一个故事");
		for (var i = 0; i < 20; i++) {
			alert(" ");
		}
		alert("我讲完了，精彩的话，可以重复收听噢");
	}
}

