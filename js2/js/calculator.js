//Ожидаем загрузку страницы
$(document).ready(function (){
	
	//Объявление локальных переменных
	var Currents = 0;
	var FlagNewNum = false;										
	var PendingOp = "";
	//Вызов функций обработчиков нажатых клавиш
	$(":button").bind("click", function(event){
		
		switch($(this).attr("name"))
		{
			//Нажата цифровая клавиша
			case 'Number' :
				Number($(this).val());
				break;
			//Нажата коавиша операции
			case 'Operation'  :
				Operation($(this).val());
				break;
			//Нажата клавиша добавления точки
			case 'Dot'  :
				Dot();	
				break;
			//Нажата клавиша изменения знака выражения
			case 'Plusmn':
				Neg();
				break;
			//Нажата клавиша очищения поля вывода
			case 'Clear':
				Clear();	
				break;
		}
		
	});
	function Number(num)
	{
		if(FlagNewNum)											
		{														
			$("input[name=text_line]").val(num);			
			FlagNewNum = false;									
		}														
		else													
		{														
			if ($("input[name=text_line]").val() == "0")	
				$("input[name=text_line]").val(num);		
			else												
				$("input[name=text_line]").val($("input[name=text_line]").val()+num);	
		}
	}
	function Operation(operation)
	{
		var Readout = $("input[name=text_line]").val();
		if (FlagNewNum && PendingOp != "=")						
			$("input[name=text_line]").val() = Currents;				
		else												
		{													
			FlagNewNum = true;								
			if(PendingOp == '+')							
				Currents +=parseFloat(Readout);				
			else if(PendingOp == '-')						
				Currents -=parseFloat(Readout);				
			else if(PendingOp == '/')						
				if (Readout == "0")							
					alert("Деление на 0 невозможно!");		
				else										
					Currents /=parseFloat(Readout);			
			else if(PendingOp == '*')						
				Currents *=parseFloat(Readout);				
			else											
				Currents = parseFloat(Readout);				
			$("input[name=text_line]").val(Currents);
			PendingOp = operation;
		}
	}
	function Dot()
	{
		var Readout = $("input[name=text_line]").val();	
		if(FlagNewNum)											
		{														
			Readout = "0.";								
			FlagNewNum = false;									
		}														
		else													
			if(Readout.indexOf('.') == -1)						
				Readout += '.';							
		$("input[name=text_line]").val(Readout);
	}
	function Neg()
	{
		var str = $("input[name=text_line]").val();			
		if(str == "")
			alert("Изменение знака невозможно!");
		else
			str = parseFloat(str) * -1;
		$("input[name=text_line]").val(str);
	}
	function Clear()
	{
		Currents = 0;											
			PendingOp = "";											
			$("input[name=text_line]").val("");				
			FlagNewNum = true;
	}

});