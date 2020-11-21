var problem = document.getElementById("login").innerText.split("\n")[3];
var words = problem.match(/\b(\w+)\b/g);

var ans = 0;

if (problem.includes("add")) {
	ans = parseInt(words[2]) + parseInt(words[3]);
}
else if (problem.includes("subtract")) {
	ans = parseInt(words[2]) - parseInt(words[3]);
}
else if (problem.includes("first")) {
	ans = parseInt(words[4]);
}
else if (problem.includes("second")) {
	ans = parseInt(words[5]);
}

document.getElementById("valuepkg3").value = ans;
