import { escapar } from "../decorators/escapar.js";
import { ListaNegociacoes } from "../models/listaNegociacoes.js";
import { View } from "./view.js";

export class NegociacoesView extends View<ListaNegociacoes> {
        
    @escapar
    protected template(model: ListaNegociacoes): string {
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
                            <td>${this.formatarData(negociacao.data)}</td>
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

    private formatarData(data: Date): string {
        return new Intl.DateTimeFormat().format(data)
    }
}