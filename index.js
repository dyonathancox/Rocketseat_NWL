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
        dataCheckIn: new Date(2024, 3, 5, 15, 30)
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
        dataCheckIn: new Date(2024, 3, 7, 11, 20)
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
        dataCheckIn: new Date(2024, 3, 11, 18, 30)
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
        dataCheckIn: new Date(2024, 3, 13, 16, 40)
    }
]

const criarNovoParticipante = (participante) => {
    const dataIncricao = dayjs(Date.now()).to(participante.dataIncricao);

    const dataCheckIn = dayjs(Date.now()).to(participante.dataCheckIn)

    return `
    <tr>
        <td><strong>${participante.nome}</strong><br>
        <small>${participante.email}</small></td>
        <td>${dataIncricao}</td>
        <td>${dataCheckIn}</td>
    </tr>`
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