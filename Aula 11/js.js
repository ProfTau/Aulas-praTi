function agendar(){
	let nomePet = document.forms["agenda"]["nomePet"].value;
	let nomeTutor = document.forms["agenda"]["nomeTutor"].value;
	let dataConsulta = document.forms["agenda"]["dataConsulta"].value;

	let inserir = window.document.getElementById("insereAgenda");

	inserir.innerHTML = `<p>Nome Pet: ${nomePet}</p>`;
	inserir.innerHTML += `<p>Nome Tutor: ${nomeTutor}</p>`;
	inserir.innerHTML += `<p>Data Consulta: ${dataConsulta}</p>`;
}