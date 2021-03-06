var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
    constructor() {
        this.listaNegociacoes = new ListaNegociacoes;
        this.negociacoesView = new NegociacoesView("#negociacoesView");
        this.mensagemView = new MensagemView("#mensagemView");
        this.negociacoesService = new NegociacoesService;
        this.negociacoesView.update(this.listaNegociacoes);
    }
    adicionaNegociacaoNaLista() {
        const negociacao = Negociacao.criaNegociacao(this.inputData.value, this.inputQuantidade.value, this.inputValor.value);
        if (!this.confereSeDiaUtil(negociacao.data)) {
            this.mensagemView.update("Negociações só podem ser feitas em dias úteis (segunda-feira a sexta-feira");
            return;
        }
        this.listaNegociacoes.adiciona(negociacao);
        imprimir(negociacao, this.listaNegociacoes);
        this.atualizaView();
        this.limpaFormulario();
    }
    importaDados() {
        this.negociacoesService
            .obterNegociacoesDoDia()
            .then(negociacoesDeHoje => {
            return negociacoesDeHoje.filter(negociacaoDeHoje => {
                return !this.listaNegociacoes
                    .exibe()
                    .some(negociacao => negociacao.verificaSeEhIgual(negociacaoDeHoje));
            });
        })
            .then(negociacoesDeHoje => {
            for (let negociacao of negociacoesDeHoje) {
                this.listaNegociacoes.adiciona(negociacao);
            }
            this.negociacoesView.update(this.listaNegociacoes);
        });
    }
    confereSeDiaUtil(data) {
        return data.getDay() > DiasDaSemana.DOMINGO
            && data.getDay() < DiasDaSemana.SABADO;
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
__decorate([
    domInjector("#data")
], NegociacaoController.prototype, "inputData", void 0);
__decorate([
    domInjector("#quantidade")
], NegociacaoController.prototype, "inputQuantidade", void 0);
__decorate([
    domInjector("#valor")
], NegociacaoController.prototype, "inputValor", void 0);
__decorate([
    inspect,
    logarTempoDeExecucao()
], NegociacaoController.prototype, "adicionaNegociacaoNaLista", null);
//# sourceMappingURL=negociacao-controller.js.map