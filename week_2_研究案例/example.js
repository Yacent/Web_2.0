window.onload = function() {
	var t = document.getElementById("instance");
	var addBtn = document.getElementById("add");
	var removeBtn = document.getElementById("remove");
	var name = document.getElementById("name");
	var number = document.getElementById("number");
	var tr_num = t.getElementsByTagName("tr");
	var exchange = document.getElementById("replace");
	var change_num_1 = document.getElementById("change_num_1");
	var change_num_2 = document.getElementById("change_num_2");

	var new_td_text1 = "";
	var new_td_text2 = "";
	var new_td_text3 = "";
	var new_td_text4 = "";

	function if_input_name() {
		new_td_text1 = name.value;
	}

	function if_input_number() {
		new_td_text2 = number.value;
	}

	function if_input_line_1() {
		new_td_text3 = change_num_1.value;
	}

	function if_input_line_2() {
		new_td_text4 = change_num_2.value;
	}

	function add_user() {
		var new_tr = document.createElement("tr");
		var new_td_1 = document.createElement("td");
		var new_td_2 = document.createElement("td");
		new_td_1.appendChild(document.createTextNode(new_td_text1));
		new_td_2.appendChild(document.createTextNode(new_td_text2));
		new_tr.appendChild(new_td_1);
		new_tr.appendChild(new_td_2);
		t.appendChild(new_tr);
		name.value = "";
		number.value = "";
		new_td_1 = "";
		new_td_2 = "";
	}

	function remove_user() {
		t.removeChild(tr_num[tr_num.length-1]);
	}

	function change_line() {
		console.log("hey");
		t.replaceChild(tr_num[new_td_text4], tr_num[new_td_text3]);
	}

	addBtn.onclick = add_user;
	name.onchange = if_input_name;
	number.onchange = if_input_number;
	change_num_1.onchange = if_input_line_1;
	change_num_2.onchange = if_input_line_2;
	removeBtn.onclick = remove_user;
	exchange.onclick = change_line;
};
