
var lis = document.getElementById("head").getElementsByTagName("li");
var div1 = document.getElementById("div1");
var div2 = document.getElementById("div2");
var div3 = document.getElementById("div3");

lis[0].onclick = function() {

	this.style.backgroundColor = "#618CB7";
	div2.className = div3.className = "hidden";
	div1.className = "onclick0_div1";
	set_height("400px",place1);
	set_width("1000px",place1);
	load();
	bg(0);

}
lis[1].onclick = function() {

	this.style.backgroundColor = "#618CB7";
    
	/*  document.getElementById("head").style.position="absolute";
	 document.getElementById("head").style.left=parseInt((document.body.clientWidth-1000)/2)+"px"; */
    set_height("300px",place1);
    set_width("1000px",place1);
    set_height("300px",place2);
    set_width("1000px",place2);
    load();
	div3.className = "hidden";
	div2.className = "onclick1_div2";
	div1.className = "onclick1_div1";
	bg(1);

}
lis[2].onclick = function() {

	this.style.backgroundColor = "#618CB7";
	div3.className = "onclick2_div3";
	div2.className = "onclick2_div2";
	div1.className = "onclick2_div1";
    set_width("500px",place1);
    set_height("300px",place1);
	set_width("500px",place2);
	set_height("300px",place2);
	set_width("500px",place3);
	set_height("300px",place3);
	load();
	bg(2);

}
lis[3].onclick = function() {

	this.style.backgroundColor = "#618CB7";
	div3.className = "onclick3_div3";
	div2.className = "onclick3_div2";
	div1.className = "onclick3_div1";
    set_width("500px",place1);
    set_height("300px",place1);
	set_width("500px",place2);
	set_height("300px",place2);
	set_width("500px",place3);
	set_height("300px",place3);
	load();
	bg(3);

}
lis[4].onclick = function() {

	this.style.backgroundColor = "#618CB7";
	div3.className = "hidden";
	div2.className = "onclick4_div2";
	div1.className = "onclick3_div1";
	set_width("500px",place1);
    set_height("300px",place1);
	set_width("500px",place2);
	set_height("300px",place2);
	load();
	bg(4);

}
lis[5].onclick = function() {

	this.style.backgroundColor = "#618CB7";
	div3.className = "onclick5_div3";
	div2.className = "onclick5_div2";
	div1.className = "onclick5_div1";
    set_width("1000px",place1);
    set_height("300px",place1);
	set_width("500px",place2);
	set_height("300px",place2);
	set_width("500px",place3);
	set_height("300px",place3);
	load();
	bg(5);

}

function bg(x) {
	for (var i = 0; i < lis.length; i++) {
		if (i != x) {
			lis[i].removeAttribute('style');
			/* document.getElementById("head").removeAttribute('style'); */
		}
	}

}

/*点击图标*/
function getElementsByClassName(node,className){
	if(node.getElementsByClassName){
		return node.getElementsByClassName(className);
	}
	else{
		var results=new Array();
		var elems=node.getElementsByTagName("*");
		for(var i=0;i<elems.length;i++)
		{
			if(elems[i].className.indexOf(className)!=-1){
				results[length.length]=elems[i];
			}
		}
		return results;
	}
}
function remove_boder_bottom(x,param){
	for(var j=0;j<param.length;j++)
	{
		param[j].style.borderBottom="3px solid #5FD5F3";
	}
	for(var i=0;i<param.length;i++)
	{   
		if(i!=x){
            param[i].style.borderBottom="0px";
		}
	}
}
function set_none(x,param){
	param[x].style.display="block";
	for(var i=0;i<param.length;i++)
	{
		if(i!=x){
		 param[i].style.display="none";
		}
	}

}
function set_width(x,param){
	for(var i=0;i<param.length;i++)
	{
		param[i].style.width=x;
	}
}
function set_height(x,param){
	for(var i=0;i<param.length;i++)
	{
		param[i].style.height=x;
	}
}
var icon=document.getElementsByClassName("icon");
var li=icon[0].getElementsByTagName("li");
var place1=document.getElementsByClassName("container1");
function onclick_icon(li,place1){
	for(var i=0;i<li.length;i++)
	{
		li[i].id=i;
		li[i].onclick=function(){
			set_none(this.id,place1);
		    remove_boder_bottom(this.id,li);
	    }
	}
}
onclick_icon(li,place1);
var li2=icon[1].getElementsByTagName("li");
var place2=document.getElementsByClassName("container2");
onclick_icon(li2,place2);
var li3=icon[2].getElementsByTagName("li");
var place3=document.getElementsByClassName("container3");
onclick_icon(li3,place3);
/*点击图标结束*/
