export class ListaNegociacoes {
    constructor() {
        this.negociacoes = []; //Negociacao[] significa o mesmo que Array<Negociacao>
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    exibe() {
        return this.negociacoes;
    }
}
