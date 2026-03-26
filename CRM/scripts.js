
document.getElementById('cadastroCliente').addEventListener('submit', function (event) {
    event.preventDefault(); // Impede o recarregamento da página

    // Captura dos valores
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let telefone = document.getElementById('telefone').value;
    let endereco = document.getElementById('endereco').value;
    let cidade = document.getElementById('cidade').value;
    let dataNascimento = document.getElementById('data-nascimento').value;
    let texto = document.getElementById('texto').value;

    // 2. Criar a linha da tabela

    let table = document.getElementById('listaCliente').getElementsByTagName('tbody')[0];
    let newRow = table.insertRow(table.rows.length);
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2);
    let cell4 = newRow.insertCell(3);
    let cell5 = newRow.insertCell(4);
    let cell6 = newRow.insertCell(5);
    let cell7 = newRow.insertCell(6);

    // 3. Adicionar valores às células
    cell1.innerHTML = nome;
    cell2.innerHTML = email;
    cell3.innerHTML = telefone;
    cell4.innerHTML = endereco;
    cell5.innerHTML = cidade;
    cell6.innerHTML = dataNascimento;
    cell7.innerHTML = texto;

    console.log('Cliente cadastrado:', listaCliente);
    alert('Cliente ' + cell1.innerHTML + ' cadastrado com sucesso!');



});