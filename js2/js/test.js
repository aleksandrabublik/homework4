//Ожидаем загрузку страницы
$(document).ready(function(){
	$("input[name=Resoult]").bind("click", function(event)
	{
		var ResaultTaskOne = 0;                                 
		var ResaultTaskTwo = 0;                                 
		var	ResaultTaskThree = 0;                               
		var ResaultTaskFour = 0;                                
		var ResaultTaskFive = 0;                                
		var TotalResult = 0;                                    
		var PpercentageOfReadiness = 0;                         
		var i;         
		
		if ($("input[name=task1]").eq(3).prop("checked"))                          	
			ResaultTaskOne += 1;                                                            																									
		if ($("input[name=task2]").eq(2).prop("checked"))       
			ResaultTaskTwo += 1;                                                         	
																
		if ($("input[name=task3]").eq(3).prop("checked"))                                                          
			ResaultTaskThree += 1;
		for(i = 0; i < 4; i++)                                                                                                   	
			if ($("input[name=task4]").eq(i).prop("checked"))                                                                                                 	
				if (i == 1 || i == 3)
					ResaultTaskFour += 1;                                                                                                	
				else
					ResaultTaskFour -= 0.5;				
		if (ResaultTaskFour < 0)                                                                                                    	
			ResaultTaskFour = 0;
		for(i = 0; i < 4; i++)                                                                                                    	
			if ($("input[name=task5]").eq(i).prop("checked"))                                                                                                 	
				if (i == 0 || i == 1)
					ResaultTaskFive += 1;
				else
					ResaultTaskFive -= 0.5;                                                                                                    	
		if (ResaultTaskFive < 0)
			ResaultTaskFive = 0;
		TotalResult = ResaultTaskOne + ResaultTaskTwo + ResaultTaskThree + ResaultTaskFour + ResaultTaskFive;  	
		PpercentageOfReadiness = ((TotalResult * 100) / 7).toFixed(2);
		alert(	"Результат теста:" 			  +                                                                	
				"\n 1-й вопрос — " 			  + ResaultTaskOne 		   + " (1)" +                              	
				"\n 2-й вопрос — " 			  + ResaultTaskTwo 		   + " (1)" +                              	
				"\n 3-й вопрос — " 			  + ResaultTaskThree 	   + " (1)" +                              	
				"\n 4-й вопрос — " 			  + ResaultTaskFour 	   + " (2)" +                              	
				"\n 5-й вопрос — " 			  + ResaultTaskFive 	   + " (2)" +                              	
				"\n"						  +                                                                	
				"\n Общий результат — " 	  + TotalResult 		   + " (7)" +                              	
				"\n"						  +                                                                	
				"\n The ppercentage if readiness: " + PpercentageOfReadiness + "%");
	});
});