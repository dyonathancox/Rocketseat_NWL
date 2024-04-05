let participantes = [
    {
        nome: 'Dyonahtan Cox',
        email: 'cox@gmail.com',
        dataIncricao: new Date(2024, 2, 19, 20),
        dataCheckIn: new Date(2024, 2, 25, 22, 15)
    },
    {
        nome: 'Ana Silva',
        email: 'ana.silva@example.com',
        dataIncricao: new Date(2024, 3, 1, 10),
        dataCheckIn: null
    },
    {
        nome: 'Carlos Oliveira',
        email: 'carlos.oliveira@example.com',
        dataIncricao: new Date(2024, 3, 2, 12),
        dataCheckIn: new Date(2024, 3, 6, 9, 45)
    },
    {
        nome: 'Mariana Santos',
        email: 'mariana.santos@example.com',
        dataIncricao: new Date(2024, 3, 3, 14),
        dataCheckIn: null
    },
    {
        nome: 'Rafael Lima',
        email: 'rafael.lima@example.com',
        dataIncricao: new Date(2024, 3, 4, 16),
        dataCheckIn: new Date(2024, 3, 8, 17, 10)
    },
    {
        nome: 'Juliana Pereira',
        email: 'juliana.pereira@example.com',
        dataIncricao: new Date(2024, 3, 5, 18),
        dataCheckIn: new Date(2024, 3, 9, 20, 45)
    },
    {
        nome: 'Fernando Costa',
        email: 'fernando.costa@example.com',
        dataIncricao: new Date(2024, 3, 6, 8),
        dataCheckIn: new Date(2024, 3, 10, 14, 15)
    },
    {
        nome: 'Amanda Souza',
        email: 'amanda.souza@example.com',
        dataIncricao: new Date(2024, 3, 7, 11),
        dataCheckIn: null
    },
    {
        nome: 'Pedro Almeida',
        email: 'pedro.almeida@example.com',
        dataIncricao: new Date(2024, 3, 8, 13),
        dataCheckIn: new Date(2024, 3, 12, 10, 20)
    },
    {
        nome: 'Camila Ferreira',
        email: 'camila.ferreira@example.com',
        dataIncricao: new Date(2024, 3, 9, 15),
        dataCheckIn: null
    }
]

const criarNovoParticipante = (participante) => {
    const dataInscricao = dayjs(Date.now())
    .to(participante.dataInscricao)
  
    let dataCheckIn = dayjs(Date.now())
    .to(participante.dataCheckIn)
    
    if(participante.dataCheckIn == null) {
      dataCheckIn = `
        <button
          data-email="${participante.email}"
          onclick="fazerCheckIn(event)"
        >
          Confirmar check-in
        </button>
      `
    }
  
    return `
    <tr>
      <td>
        <strong>
          ${participante.nome}
        </strong>
        <br>
        <small>
          ${participante.email}
        </small>
      </td>
      <td>${dataInscricao}</td>
      <td>${dataCheckIn}</td>
    </tr>
    `
  }


const atualizarLista = (participantes) => {
    // Pegar info do html
    let output = "";
    // Estrutura de repetição - loop
    for (let participante of participantes) {
        output = output + criarNovoParticipante(participante);
    }

    // Substituir info do html
    document.querySelector('tbody').innerHTML = output;
} // Arrow function

atualizarLista(participantes);

const adicionarParticipante = (event) => {
    event.preventDefault()
  
    const dadosDoFormulario = new FormData(event.target)
  
    const participante = {
      nome: dadosDoFormulario.get('nome'),
      email: dadosDoFormulario.get('email'),
      dataInscricao: new Date(),
      dataCheckIn: null  
    }

    //verificar existência do participante

    const  participanteExiste = participantes.find(
        (p) => p.email == participante.email
    )

    if(participanteExiste){
        alert('Email já cadastrado!')
        return
    }
      participantes = [participante, ...participantes]
      atualizarLista(participantes)

      //limpar o form
      event.target.querySelector('[name="nome"]').value = ""
      event.target.querySelector('[email="email"]').value = ""
}

const fazerCheckIn = (event) => {
    // confirmar se realmente quer o check-in
    const mensagemConfirmacao = 'Tem certeza que deseja fazer o check-in?' 
  
    if(confirm(mensagemConfirmacao) == false) {
      return
    }
  
    // encontrar o participante dentro da lista
    const participante = participantes.find(
      (p) => p.email == event.target.dataset.email  
    )
    
    // atualizar o check-in do participante
    participante.dataCheckIn = new Date()
  
    // atualizar a lista de participantes
    atualizarLista(participantes)
  }