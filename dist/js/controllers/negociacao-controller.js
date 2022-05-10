import { ListaNegociacoes } from "../models/listaNegociacoes.js";
import { Negociacao } from "../models/negociacao.js";
import { NegociacoesView } from "../views/negociacoes-view.js";
export class NegociacaoController {
    constructor() {
        this.listaNegociacoes = new ListaNegociacoes;
        this.negociacoesView = new NegociacoesView("#negociacoesView");
        this.inputData = document.querySelector("#data");
        this.inputQuantidade = document.querySelector("#quantidade");
        this.inputValor = document.querySelector("#valor");
        this.negociacoesView.update(this.listaNegociacoes);
    }
    adicionaNegociacaoNaLista() {
        const negociacao = this.criaNegociacao();
        this.listaNegociacoes.adiciona(negociacao);
        this.negociacoesView.update(this.listaNegociacoes);
        this.limpaFormulario();
    }
    criaNegociacao() {
        const exp = /-/g;
        const data = new Date(this.inputData.value.replace(exp, ","));
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);
        return new Negociacao(data, quantidade, valor);
    }
    limpaFormulario() {
        this.inputData.value = "";
        this.inputQuantidade.value = "";
        this.inputValor.value = "";
        this.inputData.focus();
    }
}
