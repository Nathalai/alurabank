import { Negociacao } from "./negociacao.js";

export class ListaNegociacoes {
    private negociacoes: Negociacao[] = []; //Negociacao[] significa o mesmo que Array<Negociacao>

    adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);
    }

    exibe(): readonly Negociacao[] { //readonly Negociacao[] signnifica o mesmo que ReadonlyArray<Negociacao>
        return this.negociacoes;
    }
}