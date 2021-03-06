import { domInjector } from "../decorators/dom-injector.js";
import { inspect } from "../decorators/inspect.js";
import { logarTempoDeExecucao } from "../decorators/logar-tempo-de-execucao.js";
import { DiasDaSemana } from "../enums/dias-da-semana.js";
import { ListaNegociacoes } from "../models/listaNegociacoes.js";
import { Negociacao } from "../models/negociacao.js";
import { NegociacoesService } from "../services/negociacoes-service.js";
import { imprimir } from "../utils/imprimir.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";

export class NegociacaoController {
    @domInjector("#data")
    private inputData: HTMLInputElement;
    @domInjector("#quantidade")
    private inputQuantidade: HTMLInputElement;
    @domInjector("#valor")
    private inputValor: HTMLInputElement;
    private listaNegociacoes = new ListaNegociacoes;
    private negociacoesView = new NegociacoesView("#negociacoesView");
    private mensagemView = new MensagemView("#mensagemView");
    private negociacoesService = new NegociacoesService;

    constructor() {
        /* this.inputData = document.querySelector("#data") as HTMLInputElement;
        this.inputQuantidade = document.querySelector("#quantidade") as HTMLInputElement;
        this.inputValor = document.querySelector("#valor") as HTMLInputElement; */
        this.negociacoesView.update(this.listaNegociacoes);
    }

    @inspect
    @logarTempoDeExecucao()
    public adicionaNegociacaoNaLista(): void {        
        const negociacao = Negociacao.criaNegociacao(
            this.inputData.value, 
            this.inputQuantidade.value, 
            this.inputValor.value
            );
        if (!this.confereSeDiaUtil(negociacao.data)) {
            this.mensagemView.update("Negociações só podem ser feitas em dias úteis (segunda-feira a sexta-feira");
            return;
        }
        this.listaNegociacoes.adiciona(negociacao);
        imprimir(negociacao, this.listaNegociacoes);
        this.atualizaView();
        this.limpaFormulario();
    }

    public importaDados(): void {   
        this.negociacoesService
        .obterNegociacoesDoDia()
        .then(negociacoesDeHoje => {
            return negociacoesDeHoje.filter(negociacaoDeHoje => {
                return !this.listaNegociacoes
                    .exibe()
                    .some(negociacao => negociacao.verificaSeEhIgual(negociacaoDeHoje))
            });
        })
        .then(negociacoesDeHoje => {
            for (let negociacao of negociacoesDeHoje) {
                this.listaNegociacoes.adiciona(negociacao);                    
            }
            this.negociacoesView.update(this.listaNegociacoes);
        });
    }

    private confereSeDiaUtil(data: Date) {
        return data.getDay() > DiasDaSemana.DOMINGO 
            && data.getDay() < DiasDaSemana.SABADO;
    }

    private atualizaView(): void {
        this.negociacoesView.update(this.listaNegociacoes);
        this.mensagemView.update("Negociação adicionada com sucesso!");
    }

    private limpaFormulario(): void {
        this.inputData.value = "";
        this.inputQuantidade.value = "";
        this.inputValor.value = "";
        this.inputData.focus();
    }
    
}