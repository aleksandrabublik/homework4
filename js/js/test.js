	
function result(){													
	var res1 = 0;													
	var res2 = 0;													
	var res3 = 0;													
	var res4 = 0;													
	var res5 = 0;													
	var total = 0;													
	
	if (testform.task1.value == "true")								
		res1 = 1;													
	if (testform.task2.value == "true")								
		res2 = 1;													
	if (testform.task3.value == "true")								
		res3 = 1;													
	for (var i = 0; i < 4; i++)										
		if (testform.task4[i].checked)								
			if (testform.task4[i].value == "true")					
				res4 = res4 + 1;											
	for (i = 0; i < 4; i++)											
		if (testform.task5[i].checked)								
			if (testform.task5[i].value == "true")					
				res5 = res5 + 1;									
			
	total = res1 + res2 + res3 + res4 + res5;						
																			
	alert(	"Результат теста:" +									
			"\n задание 1 — " + res1 + " б (из 1)" +				
			"\n задание 2 — " + res2 + " б (из 1);" +				
			"\n задание 3 — " + res3 + " б (из 1)" +				
			"\n задание 4 — " + res4 + " б (из 2)" +				
			"\n задание 5 — " + res5 + " б (из 2)" +		
			"\n" +														
			"\n Общий результат — " + total + " б (из 7)");			
}																
		

