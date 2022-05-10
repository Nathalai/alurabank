import { ListaNegociacoes } from "../models/listaNegociacoes.js";
import { Negociacao } from "../models/negociacao.js";
import { NegociacoesView } from "../views/negociacoes-view.js";

export class NegociacaoController {
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private listaNegociacoes = new ListaNegociacoes;
    private negociacoesView = new NegociacoesView("#negociacoesView");

    constructor() {
        this.inputData = document.querySelector("#data");
        this.inputQuantidade = document.querySelector("#quantidade");
        this.inputValor = document.querySelector("#valor");
        this.negociacoesView.update(this.listaNegociacoes);
    }

    adicionaNegociacaoNaLista(): void {
        const negociacao = this.criaNegociacao();
        this.listaNegociacoes.adiciona(negociacao);        
        this.negociacoesView.update(this.listaNegociacoes);
        this.limpaFormulario();
    }

    criaNegociacao(): Negociacao {
        const exp = /-/g;
        const data = new Date(this.inputData.value.replace(exp, ","));
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);
        return new Negociacao(data, quantidade, valor);
    }

    limpaFormulario(): void {
        this.inputData.value = "";
        this.inputQuantidade.value = "";
        this.inputValor.value = "";
        this.inputData.focus();
    }
}