  
  
  function quote()
  {
  	xhr = new XMLHttpRequest();

	$.ajax({
       type: "GET",
       url: "https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous",
       dataType: "json",
       success: function(response) {
           						$("#title").html(response.quote);
           						$("#title").append("-");
           						$("#title").append(response.author);


           						var tweetQuote ="";
           						tweetQuote=response.quote + " - " + response.author;
  
        						tweetQuote = "https://twitter.com/intent/tweet?text=" + tweetQuote;
                                $('#twitter-share-button').attr('href', tweetQuote);

      						},
	   error:function()
    						{
								alert("failed ");
							},
       beforeSend: setHeader
  		 });
    
    function setHeader(xhr) 
    {
       xhr.setRequestHeader("X-Mashape-Key", "xG8gyPQ0OGmshzx9lVG4LbDefiH1p1Zme1yjsnuUmz41FcenjH");
	}


	};

	function displaydate()
	{
var d = new Date();
var days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

document.getElementById('daydisp').innerHTML=days[d.getDay()]+"|"+d.getDate()+"/"+[d.getMonth()+1]+"/"+[d.getFullYear()];

	}


function displaytime()
{
var today = new Date();
var m=today.getMinutes();
m=checkTime(m);
var s=today.getSeconds();
s=checkTime(s);

document.getElementById('timedisp').innerHTML=today.getHours()+":"+m+":"+s;
var t = setTimeout(function(){displaytime()},1000);

function checkTime(i)
 	{
    if (i<10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
	}
	
}