import { Negociacao } from "./negociacao.js";

export class ListaNegociacoes {
    private negociacoes: Negociacao[] = []; //Negociacao[] significa o mesmo que Array<Negociacao>

    public adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);
    }

    public exibe(): readonly Negociacao[] { //readonly Negociacao[] signnifica o mesmo que ReadonlyArray<Negociacao>
        return this.negociacoes;
    }
}