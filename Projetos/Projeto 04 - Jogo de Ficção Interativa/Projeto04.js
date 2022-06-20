
// Monstro 1: Orc, Monstro 2: Troll, Monstro 3: Lizard, Monstro 4: Dementador
const prompt = require("prompt-sync")();
console.clear();

Monstros: Monstros = [
  {
    Nome: "Orc",
    PontosDeVida: 25,
    Exp: 50,
  },
  {
    Nome: "Troll",
    PontosDeVida: 35,
    Exp: 50,
  },
  (Lizard = {
    Nome: "Lizard",
    PontosDeVida: 40,
    Exp: 65,
  }),
  {
    Nome: "Dementador",
    PontosDeVida: 100,
    Exp: 100,
  },
];

Herói: Heroi = {
  Nome: "",
  PV: 200,
  PVMax: 200,
  Nível: 0,
  Experiencia: 0,
  CountMortes: 0,
  CountVitória: 0,
  Dias: 0,
  Horas: 0,
  HorasRestantes: 24,
  DiasRestantes: 9,

  NomeHeroi: function (nome) {
    this.Nome = nome;
  },

  TemporizadorGame: function (horas) {
    this.HorasRestantes -= horas;
    this.Horas += horas;
    if (this.Horas >= 24) {
      this.Dias++;
      this.DiasRestantes--;
      this.Horas -= 24;
    }
    if (this.HorasRestantes <= 0) {
      this.HorasRestantes += 24;
    }
  },

  ControlePV: function (HealthControl) {
    this.PV = HealthControl;
  },

  ControleExp: function (ExpControl) {
    this.Experiencia += ExpControl;
    while (this.Experiencia >= 100) {
      this.Nível++;
      this.Experiencia -= 100;
      this.PVMax += 75;
      if (this.Experiencia < 100) {
        break;
      }
    }
  },

  ControleDescanso: function () {
    this.PV += 300;
    if (this.PV > this.PVMax) this.PV = this.PVMax;
  },

  TreinoHabilidadeCombate: function () {
    this.PVMax += 50;
  },

  ControleMortes: function () {
    this.CountMortes += 1;
  },

  ControleVitoria: function () {
    this.CountVitória += 1;
  },

  Reinicio: function () {
    this.PV = 200;
    this.PVMax = 200;
    this.Nível = 0;
    this.Experiencia = 0;
    this.CountMortes = 0;
    this.CountVitória = 0;
    this.Dias = 0;
    this.Horas = 0;
    this.HorasRestantes = 24;
    this.DiasRestantes = 9;
  },
};

console.clear();
console.log(`
----------------------------------------------------------
----------------------------------------------------------
-----------          BEM VINDO A            --------------
-----------       DRAGON TOWER QUEST        --------------
----------------------------------------------------------
----------------------------------------------------------
----------------------------------------------------------
`);
prompt("\n\n\nDIGITE ENTER PARA CONTINUAR!");

console.log("");
LoopExterno: while (true) {
  console.clear();
  console.log(
    "Digite 'sim' para ler a lore e as informações a respeito de sua campanha."
  );
  console.log("Digite 'nao' para pular para o controle do personagem.");

  let LoreOuInfo = prompt("").toLowerCase().trim();

  //Filtro para sim ou não
  while (LoreOuInfo != "sim" && LoreOuInfo != "nao") {
    console.clear();
    console.log("Por favor, digite uma opção válida.");
    console.log(`Digite 'sim' para ler a lore e as informações do jogo 
ou 'nao' para ir direto para o controle do personagem.`);
    LoreOuInfo = prompt("").toLowerCase().trim();
  }

  if (LoreOuInfo == "sim") {
    // Lore do jogo
    console.clear();
    console.log(`Em um mundo distante, num reino governado por um rei chamado Tibianus, um dragão ancião repleto 
de malícia esperava pelo momento certo para sua vingança. Ao cair da noite, o dragão, cujo nome é Tiamat,
usou seus poderes para mudar sua forma, entrar no castelo e raptar a princesa. Para garantir que sua vingança 
seria concretizada, Tiamat amaldiçoou a princesa em um ritual antigo, onde a maldição drenaria suas forças vitais,
transferindo-as para o mesmo, tornando-o mais poderoso. O rei clama desesperadamente por ajuda de um herói
que possa salvar sua filha. 
    `);
    prompt("\nDigite Enter para continuar");
    // Informações do jogo
    console.clear();
    console.log("SOBRE A JOGABILIDADE:");
    console.log(`\n\nCada atividade realizada durante seu dia te consumirá determinadas quantidades de horas:
\n\n- Se aventurar para aumentar sua experiência e subir de nível te custarão 12h do seu dia.
- Treinar suas habilidades de combate para aumentar seus pontos de vida máximo te custarão 6h do seu dia.
- Descansar para recuperar seus pontos de vida te custarão 6h do seu dia.
\nVocê terá apenas 10 dias para salvar a princesa, caso contrário, a maldição estará completa e a princesa morrerá.`);
    prompt("\n\n\nDigite Enter para continuar");

    console.clear();
    console.log("SOBRE A JOGABILIDADE:");
    console.log(`\n\nA cada 100 pontos de experiência adquiridos, você aumenta 1 nível.
A Cada nível, seus pontos de vida máximos aumentam em 75.
A cada treino de habilidades de combate, seus pontos de vida máximos aumentam em 50.
Ao descansar, seus pontos de vida são recuperados em 300 pontos.
Ao batalhar, para conquistar a vitória, seus pontos de vida tem que ser superior a soma 
dos pontos de vida dos adversários.`);
    prompt("\nDigite Enter para continuar");

    console.clear();
    console.log("SOBRE A JOGABILIDADE:");
    console.log(`\n\nUma boa administração dos seus pontos de vida é de extrema importância pois suas batalhas serão baseadas neles.
\nHordas de monstros aleatórios te aguardam com dificuldades ajustadas de acordo com seu nível.
\nQuanto maior seu nível, maior a chance de hordas maiores de monstros te atacarem.
\nEntão, ATENÇÃO! Antes de ir à batalha, certifique-se de que possui capacidade suficiente para 
enfrentar os adversários, pois ao aceitar, só terá volta caso seja vitorioso em sua batalha!
\nAo ingressar em sua aventura em busca de experiência, você irá enfrentar desde pequenas hordas 
contendo Orcs magricelos como também possui uma pequena chance de encontrar poderosos Dementadores.
\nRumores pairam sobre as terras do reino a respeito da força de Tiamat. Não se sabe ao certo quão forte ele é,
mas, feiticeiros estudiosos de dragões estimam cerca de invencíveis 2000 pontos de vida para a cruel besta alada.
Apenas Heróis com um certo nível de experiência conseguirão resgatar a princesa antes da maldição se completar.`);
    prompt("\n\nDigite Enter para continuar");
  }
  console.clear();
  console.log("Como devo te chamar, bravo herói?");
  let NomedoHeroi = prompt("");

  // Filtro tamanho do nickname do Héroi
  while (NomedoHeroi.length < 3) {
    console.clear();
    console.log(
      "Formato de nome inválido. Por favor, digite um nome com no mínimo 3 caracteres."
    );
    NomedoHeroi = prompt("");
  }
  Heroi.NomeHeroi(NomedoHeroi);

  LoopInterno: while (true) {
    console.clear();
    let escolha;
    if (Heroi.DiasRestantes < 0 || Heroi.Dias >= 10) {
      break LoopInterno;
    }

    // Controle para mostrar apenas horas quando faltar apenas 24h
    if (Heroi.DiasRestantes > 0) {
      console.log(`Dia: ${Heroi.Dias}, ${Heroi.Horas} Hora(s).`);
      console.log(
        `\nTe restam ${Heroi.DiasRestantes} dia(s) e ${Heroi.HorasRestantes} hora(s).`
      );
    } else {
      console.log(`Dia: ${Heroi.Dias}, ${Heroi.Horas} Hora(s).`);
      console.log(`\nTe restam ${Heroi.HorasRestantes} hora(s).`);
    }

    // HUD Héroi
    console.log(`\nStatus do Herói:
Nome: ${Heroi.Nome}        
Nível: ${Heroi.Nível}
Pontos de vida: ${Heroi.PV}/${Heroi.PVMax}
Exp: ${Heroi.Experiencia}
`);

    console.log(`\n1 - Deseja buscar aventuras para aumentar seu nível? 
2 - Deseja treinar suas habilidades de combate?
3 - Deseja descansar para recuperar seus ferimentos?
4 - Deseja iniciar a jornada de resgate da princesa?`);

    // Verificando se a escolha é válida
    Verificação: while (true) {
      escolha = +prompt("");

      let verificaçãoentrada1 = verificaEntradaEscolha(escolha);
      if (verificaçãoentrada1 == true) {
        break Verificação;
      } else {
        console.log("\nPor favor, digite uma opção válida.");
        continue Verificação;
      }
    }
    console.clear();

    // Situações para cada escolha
    switch (true) {
      case escolha == 1:
        console.log("Interessante! Que a aventura comece!");
        console.log("\n\nVamos à floresta em busca de monstros.");
        prompt("\n\n\nDigite Enter para continuar");
        console.clear();

        //Controle dificuldade das hordas
        if (Heroi.Nível <= 3) dificuldade = 1;
        if (Heroi.Nível > 3 && Heroi.Nível <= 6) dificuldade = 2;
        if (Heroi.Nível > 6) dificuldade = 3;
        InformaçõesBatalha = Aventura(dificuldade, Heroi.PV);

        //Verificação de morte
        if (InformaçõesBatalha == "DEAD") {
          Heroi.ControleMortes();
          break LoopInterno;
        }

        // Vitória
        Heroi.ControlePV(InformaçõesBatalha[0]);
        Heroi.ControleExp(InformaçõesBatalha[1]);
        Heroi.TemporizadorGame(12);
        console.log(
          `\n\nSua aventura lhe rendeu ${InformaçõesBatalha[1]} de Exp`,
          `\nOs ferimentos da batalha reduziram seus pontos de vida para ${InformaçõesBatalha[0]}.`
        );
        prompt("\n\nDigite Enter para continuar");
        console.clear();
        break;

      case escolha == 2:
        Heroi.TreinoHabilidadeCombate();
        Heroi.TemporizadorGame(6);
        console.clear();
        console.log("Ótimo! Treinar suas habilidades te deixará mais forte!");
        console.log("");
        prompt("");
        console.log(`...`);
        prompt("");
        console.log(
          "\nTreino Finalizado! Suas habilidades melhoraram consideravelmente!"
        );
        console.log("\nTreino concluido.");
        prompt("\n\nDigite Enter para continuar");
        break;

      case escolha == 3:
        Heroi.ControleDescanso();
        Heroi.TemporizadorGame(6);
        console.clear();
        console.log(
          `O Descanso ideal irá regenerar suas feridas e te deixará pronto para uma próxima batalha.`
        );
        prompt("");
        console.log(`...`);
        prompt("");
        console.log(
          "\nPerfeito! Uma boa parcela dos seus pontos de vida foram recuperados!"
        );
        console.log("\nDescanso concluido.");
        prompt("\n\nDigite Enter para continuar");
        break;

      case escolha == 4:
        console.clear();
        if (Heroi.Nível < 10) {
          console.log("OH, NÃO!");
          prompt("");
          prompt("...");
          console.log(
            "\nVocê morreu antes mesmos de encontrar a torre em que a princesa está trancafiada."
          );
          Heroi.ControleMortes();
          break LoopInterno;
        }

        Lutafinal = batalhafinal(Heroi.PV);
        if (Lutafinal == true) {
          Heroi.ControleVitoria();
          break LoopInterno;
        }
        if (Lutafinal == false) {
          Heroi.ControleMortes();
          break LoopInterno;
        }
        break;
    }
  }

  // Switch para determinar vitória ou derrota
  switch (true) {
    case Heroi.CountMortes > 0:
      console.log("\n\nSUA JORNADA CHEGOU AO FIM. VOCÊ MORREU EM BATALHA!");
      prompt("\n\nDigite Enter para continuar");
      break;

    case Heroi.DiasRestantes < 0 || Heroi.Dias >= 10:
      console.log("\n\nSeu tempo esgotou e a princesa sucumbio à maldição.");
      console.log("\n\nFIM DE JOGO!");
      prompt("\n\nDigite Enter para continuar");
      break;
    case Heroi.CountVitória > 0:
      console.log("\n\nPARABÉNS! VOCÊ CONCLUIU SUA MISSÃO!");
      console.log("\n\nSEUS FEITOS SERÃO LEMBRADOS PARA SEMPRE!");
      prompt("\n\nDigite Enter para continuar");
      break;
  }

  // Reinicio do Jogo
  console.clear();
  console.log("Deseja iniciar o jogo novamente?");
  console.log("Digite sim ou nao.");

  let reinicio = prompt("").toLowerCase().trim();

  //Filtro para sim ou não - Reinicio do Jogo
  while (reinicio != "sim" && reinicio != "nao") {
    console.log("Por favor, digite uma opção válida.");
    console.log("Digite 'sim' para reiniciar o jogo ou 'não' para sair.");
    reinicio = prompt("").toLowerCase().trim();
  }

  if (reinicio == "sim") {
    Heroi.Reinicio();
    continue LoopExterno;
  }
  if (reinicio == "nao") break LoopExterno;
}
console.clear();
console.log(
  "Aguardarei anciosamente para uma nova campanha. Até Breve, bravo Héroi!"
);
console.log(`


`);

// Função para gerar monstros aleatórios
function oponente() {
  let oponente;
  let chanceoponente = Math.floor(Math.random() * 10 + 1);

  switch (true) {
    case chanceoponente == 10:
      return (oponente = Monstros[3]);
    case chanceoponente == 8 || chanceoponente == 9:
      return (oponente = Monstros[2]);
    case chanceoponente >= 5 && chanceoponente <= 7:
      return (oponente = Monstros[1]);
    case chanceoponente >= 1 && chanceoponente <= 4:
      return (oponente = Monstros[0]);
  }
}

// Função para gerar hordas de acordo com a dificuldade
function qntOponentes(dificuldade) {
  let QuantidadeOpontenes;

  switch (true) {
    case dificuldade == "facil":
      QuantidadeOpontenes = Math.floor(Math.random() * 3);
      break;
    case dificuldade == "medio":
      QuantidadeOpontenes = 3 + Math.floor(Math.random() * 3);
      break;
    case dificuldade == "dificil":
      QuantidadeOpontenes = 6 + Math.floor(Math.random() * 5);
      break;
  }

  let OponentesRodadas = [];
  for (i = 0; i <= QuantidadeOpontenes; i++) {
    OponenteEscolhido = oponente();
    OponentesRodadas.push(OponenteEscolhido);
  }
  return OponentesRodadas;
}

// Função para verificação da escolha
function verificaEntradaEscolha(escolha) {
  if (escolha <= 4) {
    return true;
  } else {
    return false;
  }
}

// Função para o desenrolar da aventura
function Aventura(modo, HP) {
  if (modo == 1) {
    console.log(
      "Observe que há poucos rastros pelo caminho.\nIndica que há poucos monstros por perto."
    );
    prompt();
    prompt("...");
    MonstrosNvFacil = qntOponentes("facil");
    console.log("\nUm pequeno grupo de monstros te encontrou");
    console.log("");

    // for para exibir nome dos montros
    for (a = 0; a < MonstrosNvFacil.length; a++) {
      console.log(
        `${MonstrosNvFacil[a].Nome} - HP: ${MonstrosNvFacil[a].PontosDeVida} - Exp: ${MonstrosNvFacil[a].Exp}`
      );
    }

    //for para somar hp total dos montros
    HPMonstros = 0;
    ExpTotal = 0;
    for (b = 0; b < MonstrosNvFacil.length; b++) {
      HPMonstros += MonstrosNvFacil[b].PontosDeVida;
    }

    ControleHPBatalha = HP - HPMonstros;
    StatusBatalha = [];

    if (ControleHPBatalha > 0) {
      for (c = 0; c < MonstrosNvFacil.length; c++) {
        ExpTotal += MonstrosNvFacil[c].Exp;
      }
      console.log(`\nTotal de Exp adquirida com a vitória: ${ExpTotal}`);
      StatusBatalha.push(ControleHPBatalha);
      StatusBatalha.push(ExpTotal);
      return StatusBatalha;
    }
    if (ControleHPBatalha <= 0) {
      return "DEAD";
    }
  }

  if (modo == 2) {
    console.log("O mal cheiro está impregnado no ar, fique alerta!");
    console.log(
      "\nCuidado! Uma quantia considerável de monstros está por perto."
    );
    prompt();
    prompt("...");
    MonstrosNvMedio = qntOponentes("medio");
    console.log("\nUma horda de monstros te encontrou");
    console.log("");

    // for para exibir nome dos montros
    for (a = 0; a < MonstrosNvMedio.length; a++) {
      console.log(
        `${MonstrosNvMedio[a].Nome} - HP: ${MonstrosNvMedio[a].PontosDeVida} - Exp: ${MonstrosNvMedio[a].Exp}`
      );
    }

    //for para somar hp total dos montros
    HPMonstros = 0;
    ExpTotal = 0;
    for (b = 0; b < MonstrosNvMedio.length; b++) {
      HPMonstros += MonstrosNvMedio[b].PontosDeVida;
    }

    ControleHPBatalha = HP - HPMonstros;
    StatusBatalha = [];
    if (ControleHPBatalha > 0) {
      for (c = 0; c < MonstrosNvMedio.length; c++) {
        ExpTotal += MonstrosNvMedio[c].Exp;
      }
      console.log(`Total de Exp adquirida com a vitória: ${ExpTotal}`);
      StatusBatalha.push(ControleHPBatalha);
      StatusBatalha.push(ExpTotal);
      return StatusBatalha;
    }
    if (ControleHPBatalha <= 0) {
      return "DEAD";
    }
  }

  if (modo == 3) {
    console.log(
      "Observe a destruição pelo caminho.\nFique atento! Muitos monstros à espreita."
    );
    console.log("\nVocê corre perigo! Muitos monstros prontos para atacar.");
    prompt();
    prompt("...");
    MonstrosNvDificil = qntOponentes("dificil");
    console.log("\nUma horda massiva de monstros te encontrou");
    console.log("");

    // for para exibir nome dos montros
    for (a = 0; a < MonstrosNvDificil.length; a++) {
      console.log(
        `${MonstrosNvDificil[a].Nome} - HP: ${MonstrosNvDificil[a].PontosDeVida} - Exp: ${MonstrosNvDificil[a].Exp}`
      );
    }

    //for para somar hp total dos montros
    HPMonstros = 0;
    ExpTotal = 0;
    for (b = 0; b < MonstrosNvDificil.length; b++) {
      HPMonstros += MonstrosNvDificil[b].PontosDeVida;
    }

    ControleHPBatalha = HP - HPMonstros;
    StatusBatalha = [];
    if (ControleHPBatalha > 0) {
      for (c = 0; c < MonstrosNvDificil.length; c++) {
        ExpTotal += MonstrosNvDificil[c].Exp;
      }
      console.log(`Total de Exp adquirida com a vitória: ${ExpTotal}`);
      StatusBatalha.push(ControleHPBatalha);
      StatusBatalha.push(ExpTotal);
      return StatusBatalha;
    }
    if (ControleHPBatalha <= 0) {
      return "DEAD";
    }
  }
}

// Função batalha contra Tiamat
function batalhafinal(PV) {
  switch (true) {
    case PV > 2000:
      console.log(
        "\nOk, sua decisão parece sábia! Não perca tempo e salve a princesa!"
      );

    case PV <= 2000:
      console.log(
        "\nCuidado com suas decisões! A vida da princesa depende de você!"
      );
  }
  console.clear();
  console.log(
    `Adentraremos neste bosque para cortar caminho até a torre em que a princesa está tancafiada.`
  );
  console.log(`\nSeja cauteloso, não sabemos a localização de Tiamat.`);
  prompt("\n\nDigite Enter para continuar");
  console.clear();
  console.log(
    "Há rumores que a torre está localizada logo após este bosque. Siga adiante, estamos quase no fim!"
  );
  prompt("");
  console.log("\n...");
  prompt("");
  console.log(
    `\nA torre está adiante, mas nenhum sinal de Tiamat... A HORA DE ADENTRARMOS NA TORRE É AGORA!`
  );
  prompt("\n\nDigite Enter para continuar");

  console.clear();
  console.log("\nTiamat está escondido em algum lugar, fique atento!");
  prompt("\n\nDigite Enter para continuar");
  console.clear();
  console.log("\nCUIDADO! Tiamat está voando em sua direção");
  prompt("\n\nDigite Enter para continuar");

  if (PV >= 2000) {
    console.clear();
    console.log(`\nApesar da investida de Tiamat, você conseguiu sua vitória.
Suba a torre, salve a princesa e a leve de volta ao reino.
\n\nA MALDIÇÃO FOI QUEBRADA!`);
    prompt("");
    return true;
  } else {
    console.clear();
    console.log(`\nProcure se proteger, Tiamat te encurralou!`);
    prompt("\n\nDigite Enter para continuar");
    console.log(`\n\nTiamat ao te encurralar, conseguiu deferir um golpe mortal!
Você foi derrotado. Sua jornada termina aqui.
\n\nA PRINCESA SUCUMBIO À MALDIÇÃO!`);
    prompt("");
    return false;
  }
}
