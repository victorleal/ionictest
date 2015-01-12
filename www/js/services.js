angular.module('starter.services', [])

.service('questoes', function Questoes(){
    var questoes = this;
    questoes.lista = [
        {id: 1, texto: 'Questão 1', nota: 0},
        {id: 2, texto: 'Questão 2', nota: 0},
        {id: 3, texto: 'Questão 3', nota: 0},
        {id: 4, texto: 'Questão 4', nota: 0},
        {id: 5, texto: 'Questão 5', nota: 0},
        {id: 6, texto: 'Questão 6', nota: 0},
        {id: 7, texto: 'Questão 7', nota: 0},
        {id: 8, texto: 'Questão 8', nota: 0},
        {id: 9, texto: 'Questão 9', nota: 0}
    ];
    
    questoes.getQuestao = function(id) {
        var i;
        for (i = 0; i < questoes.lista.length; i++) {
            if (questoes.lista[i].id == id) {
                return questoes.lista[i];
            }
        }
    };
    
    questoes.existeQuestao = function(id) {
        var i;
        for (i = 0; i < questoes.lista.length; i++) {
            if (questoes.lista[i].id == id) {
                return true
            }
        }
        return false;
    };
});