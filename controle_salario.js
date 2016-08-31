function calcular_salario(salario_base,percentual)
{
	var novo_salario = salario_base + ((salario_base * percentual) / 100);
	return novo_salario;
}

function mostrar_salario(form)
{
	var novo_salario = calcular_salario	
		(parseFloat(form.salario_base.value),
		parseFloat(form.percentual.value)); 
		
			alert("Novo Salário R$ " + novo_salario.toFixed(2) + "\n" + "Data Atual: " + Date())
			
}