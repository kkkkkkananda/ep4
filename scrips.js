function inclui_nome() {
    var nome_variavel = prompt("Coloque seu nome:");
    if(nome_variavel){
        document.getElementById("marcacao_nome").innerHTML = nome_variavel;
    }
    else{
        alert("Nome não atribuido, preencha o nome.");
        inclui_nome();
    }
}

function funcao_resposta(){

    var resp1 = document.querySelector('input[name="quest_1"]:checked');
    var resp2 = document.querySelector('input[name="quest_2"]:checked');
    var resp3 = document.querySelector('input[name="quest_3"]:checked');
    var resp4 = document.querySelector('input[name="quest_4"]:checked');

    var contador = 0;


    if(resp1 && resp2 && resp3 && resp4){
        if(resp1.value == "correta"){
            document.getElementById("resp_correta_1").innerHTML = "Correta!"
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_1").innerHTML = "Errada! Alternativa correta: a) medidas de caráter populista, atraindo as massas trabalhadoras. A classe trabalhadora urbana foi a principal cooptada para o projeto varguistas, pois os direitos trabalhistas não contemplavam o camponês. Somado a isso, a propaganda eficiente que mostrava Getúlio Vargas como um pai, que cuidava do seu povo e que sabia o que ele necessitava."

        }
        if(resp2.value == "correta"){
            document.getElementById("resp_correta_2").innerHTML = "Correta!"
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_2").innerHTML = "Errada! Alternativa correta a) Estado Novo; Alternativa correta a) Estado Novo; O Estado Novo foi estabelecido em 10 de novembro de 1937 quando Getúlio Vargas denunciou uma suposta tentativa de golpe por parte dos comunistas, o chamado Plano Cohen."

        }
        if(resp3.value == "correta"){
            document.getElementById("resp_correta_3").innerHTML = "Correta!"
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_3").innerHTML = "Erradas! Alternativa correta: d) pela vinculação de direitos trabalhistas à tutela do Estado. Os sindicatos foram essenciais para a construção do direito dos trabalhadores na Era Vargas, pois estes passaram a ser um instrumento do governo para fazer a legislação trabalhista. As alternativas A e B estão erradas porque não existe democracia neste período. Também a C e a E não estão corretas porque o texto não faz menção ao que foi escrito nessas opções."

        }
        if(resp4.value == "correta"){
            document.getElementById("resp_correta_4").innerHTML = "Correta!"
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_4").innerHTML = "Errada!"

        }
        document.getElementById("quantos_acertos").innerHTML = "Você acertou " + contador + " questões!";
    }
    else{
        alert("não deixe questões em branco!")
    }

}