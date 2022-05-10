import { ListaNegociacoes } from "../models/listaNegociacoes.js";

export class NegociacoesView {
    private elemento: HTMLElement;

    constructor(seletor: string) {
        this.elemento = document.querySelector(seletor);
    }
    
    template(model: ListaNegociacoes): string {
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                </tr>
            </thead>
            <tbody>
                ${model.exibe().map(negociacao => {
                    return `
                        <tr>
                            <td>${new Intl.DateTimeFormat().format(negociacao.data)}</td>
                            <td>${negociacao.quantidade}</td>
                            <td>${negociacao.valor}</td>
                            <td>${negociacao.volume}</td>
                        </tr>
                    `
                }).join("")}
            </tbody>
        </table>
        `
    }

    update(model: ListaNegociacoes): void {
        const template = this.template(model);
        //console.log(template);
        this.elemento.innerHTML = template;
    }
}