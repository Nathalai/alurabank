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
}
