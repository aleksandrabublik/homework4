
var Currents = 0;											
var FlagNewNum = false;										
var PendingOp = "";											
															
	
$(":button").click(alert("Click"));		
function clear()							
{															
	Currents = 0;											
	PendingOp = "";											
	document.fcalculator.text_line.value = "";				
	FlagNewNum = true;										
}															

															
function num_click(num)										
{																
	if(FlagNewNum)											
	{														
		document.fcalculator.text_line.value = num;			
		FlagNewNum = false;									
	}															
	else													
	{																
		if (document.fcalculator.text_line.value == "0")	
			document.fcalculator.text_line.value = num;		
		else												
			document.fcalculator.text_line.value += num;	
	}															
}															

																
function op_click(operation)								
{															
	var readout = document.fcalculator.text_line.value;		
																
	if (FlagNewNum && PendingOp != "=")						
	{																
		document.fcalculator.text_line.value = Currents;	
	}																
	else													
	{																
		FlagNewNum = true;									
		if(PendingOp == '+')								
			Currents +=parseFloat(readout);					
		else if(PendingOp == '-')							
			Currents -=parseFloat(readout);					
		else if(PendingOp == '/')							
			Currents /=parseFloat(readout);					
		else if(PendingOp == '*')							
			Currents *=parseFloat(readout);					
		else												
			Currents = parseFloat(readout);					
		document.fcalculator.text_line.value = Currents;	
		PendingOp = operation;								
	}															
}																
	
function Decimal()										
{															
	var _readout = document.fcalculator.text_line.value;	
	if(FlagNewNum)											
	{																
		_readout = "0.";									
		FlagNewNum = false;									
	}															
	else													
		if(_readout.indexOf('.') == -1)						
			_readout += '.';								
	document.fcalculator.text_line.value = _readout;		
}															
															

function Neg()												
{															
	var str = document.fcalculator.text_line.value;			
	str = parseFloat(str) * -1;								
	document.fcalculator.text_line.value = str;				
}															
															






























