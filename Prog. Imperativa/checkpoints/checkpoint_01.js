/* 
  Brenno Pereira Machado
  DATA 11/11/2021
  */
/* CHECKPOINT 01 - Programação Funcional
  - Precisamos desenvolver um menu para um microondas super veloz, onde teremos 5 opções de comida com seus respectivos tempos pré-definidos. 

        1 - Pipoca – 10 segundos (padrão);
        2 - Macarrão – 8 segundos (padrão);
        3 - Carne – 15 segundos (padrão);
        4 - Feijão – 12 segundos (padrão);
        5 - Brigadeiro – 8 segundos (padrão); 

  - O usuário poderá alterar o tempo padrão, aumentando ou diminuindo de acordo com sua vontade. Se o tempo informado for maior que 2x o necessário, exibir mensagem que a comida queimou.
  - Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente"; 
  - Opções não listadas no menu, devem exibir uma mensagem de erro: "Prato inexistente";
  - Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem: “kabumm”;
  - No final de cada tarefa, o microondas deverá exibir a mensagem: "Prato pronto, bom apetite!!!". 
*/

/*   Inserir tempo com nome do prato ou número do prato
      exemplo: microondas(10, pipoca) ou microondas(10, 1)*/
microondas(15, "Pipoca");

function microondas(tempo, opcao) {
  if (typeof opcao == "string") {
    opcao = opcao.toLowerCase();
  }
  switch (opcao) {
    case "pipoca":
    case 1:
      pipoca(tempo);
      break;

    case "macarrão":
    case 2:
      macarrao(tempo);
      break;

    case "carne":
    case 3:
      carne(tempo);
      break;
    case "feijão":
    case 4:
      feijao(tempo);
      break;
    case "brigadeiro":
    case 5:
      brigadeiro(tempo);
      break;
    default:
      console.log("Prato inexistente");
  }
}

function pipoca(tempo_inserido = 10) {
  const tempo_ideal = 10;
  const ajuda = tempo_inserido == "?" ? true : false;

  cozinha(tempo_inserido, tempo_ideal, "pipoca", ajuda);
}

function macarrao(tempo_inserido = 8) {
  const tempo_ideal = 8;
  const ajuda = tempo_inserido == "?" ? true : false;
  cozinha(tempo_inserido, tempo_ideal, "macarrão", ajuda);
}

function carne(tempo_inserido = 15) {
  const tempo_ideal = 15;
  const ajuda = tempo_inserido == "?" ? true : false;
  cozinha(tempo_inserido, tempo_ideal, "carne", ajuda);
}

function feijao(tempo_inserido = 12) {
  const tempo_ideal = 12;
  const ajuda = tempo_inserido == "?" ? true : false;
  cozinha(tempo_inserido, tempo_ideal, "feijão", ajuda);
}

function brigadeiro(tempo_inserido = 8) {
  const tempo_ideal = 8;
  const ajuda = tempo_inserido == "?" ? true : false;
  cozinha(tempo_inserido, tempo_ideal, "brigadeiro", ajuda);
}

function cozinha(tempo_inserido, tempo_minimo, prato, ajuda) {
  if (ajuda == true) {
    console.log(`\nO tempo mínimo para preparo de ${prato} é ${tempo_minimo}s`);
    console.log(
      `\n    ATENÇÃO!      - Se você inserir o dobro desse tempo (${
        2 * tempo_minimo
      }s), você irá queimar seu prato de ${prato}.`
    );
    console.log(
      `    ATENÇÃO!!!!!! - NUNCA INSIRA O TRIPLO DO TEMPO MÍNIMO (${
        3 * tempo_minimo
      }s), PERIGO DE EXPLOSÃO!\n`
    );
  } else if (tempo_inserido < tempo_minimo) {
    console.log(`ERRO: Tempo insuficiente`);
    console.log(
      `Insira um tempo de pelo menos ${tempo_minimo}s para preparar ${prato}`
    );
    // Caso a comida queime com o dobro do tempo mínimo
  } else if (
    tempo_inserido > 2 * tempo_minimo &&
    tempo_inserido < 3 * tempo_minimo
  ) {
    console.log(`\nERRO: A sua comida queimou!`);
    console.log(
      `O tempo mínimo para preparo de ${prato} é de ${tempo_minimo}s. `
    );
    console.log(
      `\nCUIDADO! Não insira tempo de ${tempo_minimo * 2}s ou maior.\n`
    );
    // Caso de exploda com o triplo de tempo minimo
  } else if (tempo_inserido >= 3 * tempo_minimo) {
    console.log(`\nKABUMM!!!!!!!!!!!!\n`);
    // condição de preparo ideal entre tempo mínimo até menor que o dobro
  } else {
    console.log(`\nPrato de ${prato} pronto, bom apetite!!!`);
    if (tempo_inserido == 2 * tempo_minimo) {
      console.log(
        `   CUIDADO, o tempo inserido foi muito próximo do limite. Use com "?" para mais informações\n`
      );
    }
  }
}