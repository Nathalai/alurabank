export class ListaNegociacoes {
    constructor() {
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    exibe() {
        return this.negociacoes;
    }
    paraTexto() {
        return JSON.stringify(this.negociacoes, null, 2);
    }
    verificaSeEhIgual(listaNegociacoes) {
        return JSON.stringify(this.negociacoes) === JSON.stringify(listaNegociacoes);
    }
}
//# sourceMappingURL=listaNegociacoes.js.map