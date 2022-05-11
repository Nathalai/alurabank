import { DiasDaSemana } from "../enums/dias-da-semana.js";
import { ListaNegociacoes } from "../models/listaNegociacoes.js";
import { Negociacao } from "../models/negociacao.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";
export class NegociacaoController {
    constructor() {
        this.listaNegociacoes = new ListaNegociacoes;
        this.negociacoesView = new NegociacoesView("#negociacoesView");
        this.mensagemView = new MensagemView("#mensagemView");
        this.inputData = document.querySelector("#data");
        this.inputQuantidade = document.querySelector("#quantidade");
        this.inputValor = document.querySelector("#valor");
        this.negociacoesView.update(this.listaNegociacoes);
    }
    adicionaNegociacaoNaLista() {
        const negociacao = this.criaNegociacao();
        if (!this.confereSeDiaUtil(negociacao.data)) {
            this.mensagemView.update("Negociações só podem ser feitas em dias úteis (segunda-feira a sexta-feira");
            return;
        }
        this.listaNegociacoes.adiciona(negociacao);
        this.atualizaView();
        this.limpaFormulario();
    }
    confereSeDiaUtil(data) {
        return data.getDay() > DiasDaSemana.DOMINGO
            && data.getDay() < DiasDaSemana.SABADO;
    }
    criaNegociacao() {
        const exp = /-/g;
        const data = new Date(this.inputData.value.replace(exp, ","));
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);
        return new Negociacao(data, quantidade, valor);
    }
    atualizaView() {
        this.negociacoesView.update(this.listaNegociacoes);
        this.mensagemView.update("Negociação adicionada com sucesso!");
    }
    limpaFormulario() {
        this.inputData.value = "";
        this.inputQuantidade.value = "";
        this.inputValor.value = "";
        this.inputData.focus();
    }
}
