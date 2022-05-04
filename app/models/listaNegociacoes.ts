import { Negociacao } from "./negociacao.js";

export class ListaNegociacoes {
    private negociacoes: Array<Negociacao> = [];

    adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);
    }

    exibe(): ReadonlyArray<Negociacao> {
        return this.negociacoes;
    }
}