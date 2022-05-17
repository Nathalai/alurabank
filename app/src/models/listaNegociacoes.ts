import { Modelo } from "../interfaces/modelo.js";
import { Negociacao } from "./negociacao.js";

export class ListaNegociacoes implements Modelo<ListaNegociacoes> {
    
    private negociacoes: Negociacao[] = []; //Negociacao[] significa o mesmo que Array<Negociacao>

    public adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);
    }

    public exibe(): readonly Negociacao[] { //readonly Negociacao[] signnifica o mesmo que ReadonlyArray<Negociacao>
        return this.negociacoes;
    }

    public paraTexto(): string {
        return JSON.stringify(this.negociacoes, null, 2);
    }

    public verificaSeEhIgual(listaNegociacoes: ListaNegociacoes): boolean {
        return JSON.stringify(this.negociacoes) === JSON.stringify(listaNegociacoes); 
    }
}