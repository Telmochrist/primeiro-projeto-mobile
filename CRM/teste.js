document.getElementById('clienteForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do form

    // 1. Capturar valores
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let cidade = document.getElementById('cidade').value;

    // 2. Criar a linha da tabela
    let table = document.getElementById('listaClientes').getElementsByTagName('tbody')[0];
    let newRow = table.insertRow(table.rows.length);
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2);

    // 3. Adicionar valores às células
    cell1.innerHTML = nome;
    cell2.innerHTML = email;
    cell3.innerHTML = cidade;

    // 4. Limpar o formulário
    document.getElementById('clienteForm').reset();
});