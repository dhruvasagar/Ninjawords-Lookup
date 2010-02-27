$(document).ready(function() {
  $("#searchBox").focus();
  $("#searchBox").bind("keyup", _keyUp);
  
  var as = new O(document.getElementById("searchBox"));
  
  $("#searchButton").click(_search);
  
  $("a").live("click", function() { $("#searchBox").val($(this).text()); _search(); });
});

function _keyUp(e) {
  if (e.keyCode==13) {
    _search();
  }
}

function _search() {
  var url = "http://ninjawords.com/";
  var query = $("#searchBox").val();
  $("#loading").remove();
  $("#result").before("<img id='loading' src='img/indicator.gif'/>")
              .load(url+query + ' #results', function() { $("#loading").remove(); });
  return false;
}

function O(g){var c=this;var A=null;var o="";c.d=null;var f= -1;var j=0;var C=false;c.G=function(){g.addEventListener("keydown",c.L,false);g.addEventListener("keyup",c.K,false);g.addEventListener("blur",c.H,false);},c.getData=function(m){var URL="http://suggestqueries.google.com/complete/search?%20hl=en&ds=yt&json=t&jsonp=callbackfunction&q="+m;var l;l=new XMLHttpRequest();l.open("GET",URL,true);l.onreadystatechange=function(){if(l.readyState==4){if(l.status==200){var response;if(o==m){if(c.d==null){c.d=document.createElement("div");document.body.appendChild(c.d);c.d.style.display='none';}c.d.setAttribute("class","fd");c.d.style.width=(g.clientWidth)+"px";c.F();c.d.innerHTML="";var D=l.responseText;var v=D.substring(new String("callbackfunction").length+1);var v=v.substring(0,v.length-1);var M=JSON.parse(v);c.d.style.display='block';var list=M[1];j=list.length;if(j>10)j=10;for(var i=0;i<j;i++){var r=list[i];var row=document.createElement("div");var pos=r.indexOf(m);if(pos!= -1){row.innerHTML=r.substr(0,pos+m.length)+"<b>"+r.substr(pos+m.length)+"</b>";}else{row.textContent=r;}row.setAttribute("id","gffg"+i);row.setAttribute("class","gffg");row.index=i;row.J=true;row.addEventListener("mouseover",function(e){var row=e.currentTarget;if(f!= -1)document.getElementById("gffg"+f).setAttribute("class","gffg");row.setAttribute("class","gffg selected");f=row.index;},false);row.addEventListener("mousedown",function(e){var row=e.currentTarget;g.value=row.textContent;c.B(row.textContent);},false);c.d.appendChild(row);}f= -1;if(j==0){c.d.style.display='none';C=false;}else{c.d.style.display='block';C=true;}I=27+j*17;document.getElementById("container").style.height=I+"px";}}}};l.send("");};c.K=function(e){var keyCode=e.keyCode;if(keyCode!=13){if((keyCode!=38)&&(keyCode!=40)&&(keyCode!=116)){if(A!=null){window.clearInterval(A);A=null;}o=g.value;A=setTimeout(c.getData,10,g.value)}else{}}else{}},c.L=function(e){var keyCode=e.keyCode;if(keyCode==13){if(f!= -1){g.value=document.getElementById("gffg"+f).textContent}c.B(g.value);return;}if((keyCode!=38)&&(keyCode!=40)){}else{if(keyCode==38){if(f!= -1)document.getElementById("gffg"+f).setAttribute("class","gffg");f--;if(f<0)f=j-1;}else{if(f!= -1)document.getElementById("gffg"+f).setAttribute("class","gffg");f++;if(f>=j)f=0;}var row=document.getElementById("gffg"+f);row.setAttribute("class","gffg selected");g.value=row.textContent;}};c.H=function(e){if((e.explicitOriginalTarget!=c.d)&&(e.explicitOriginalTarget.J==null)){o="--";if(c.d!=null){c.d.style.display='none';document.getElementById("container").style.height="3px";}}},c.F=function(){var k=g;var x=0;var y=g.offsetHeight-1;while((k.offsetParent)&&(k.tagName.toLowerCase()!='body')){x+=k.offsetLeft;y+=k.offsetTop;k=k.offsetParent;}x+=k.offsetLeft;y+=k.offsetTop;if(c.d!=null){c.d.style.left=x+"px";c.d.style.top=y+"px";}},c.B=function(m){o="--";if(c.d!=null){c.d.style.display='none';document.getElementById("container").style.height="29px";_search();}};c.G();}
