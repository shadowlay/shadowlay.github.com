var tdList = document.querySelectorAll("td");

for(i=0; i<tdList.length; i++){
	var item = tdList[i]
	if(i===0)
		item.addEventListener('click',changebgc)
	else if(i===1)
		item.addEventListener('click',showdate)
	else if(i===2)
		item.addEventListener('click',addline)
	else if(i===3)
		item.addEventListener('click',deline)
	else if(i===4)
		item.addEventListener('click',showpo)
	else if(i===5)
		item.addEventListener('click',newwin)
}
function changebgc(e)
{
	var item = e.target;
	item.style.background = 'red';
}
function showdate(e)
{
	var item = e.target;
	var date = new Date();
	var month = date.getMonth() + 1;//月份返回的是0~11
	item.innerHTML = date.getFullYear() + '--' + month + '--' + date.getDate();
}
function addline(e)
{
	var item = e.target;
	var newtr = tb1.insertRow(2);
	var newtd1 = newtr.insertCell();
	var newtd2 = newtr.insertCell();
	newtd1.innerHTML = "newline";
	newtd2.innerHTML = "newline";

	item.appendChild();
}
function deline(e)
{
	var item = e.target;
	tb1.deleteRow(1);
	console.log(e);
}
function showpo(e)
{
	var item = e.target;
	var x = e.clientX;
	var y = e.clientY;
	item.innerHTML = "( " + x + " , " + y + " )";  
}
function newwin(e)
{
	window.open("http://www.taobao.com");
}