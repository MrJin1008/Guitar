function start_run(n)
		{
		    if(n==0){
				setTimeout("javascript:location.href='首页.html'", 500);
			}
		    var progress1=document.getElementById("progress1")
		    n=n-1
		    A=50-n
		    progress1.value=A
		    setTimeout("start_run("+n+")",50)
		}