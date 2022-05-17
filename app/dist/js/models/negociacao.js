export class Negociacao {
    constructor(_data, _quantidade, _valor) {
        this._data = _data;
        this._quantidade = _quantidade;
        this._valor = _valor;
    }
    static criaNegociacao(dataString, quantidadeString, valorString) {
        const exp = /-/g;
        const data = new Date(dataString.replace(exp, ","));
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString);
        return new Negociacao(data, quantidade, valor);
    }
    get data() {
        const copiaData = new Date(this._data.getTime());
        return copiaData;
    }
    get quantidade() {
        return this._quantidade;
    }
    get valor() {
        return this._valor;
    }
    get volume() {
        const volume = this._quantidade * this._valor;
        return volume;
    }
    paraTexto() {
        return `
            Data: ${this.data},
            Quantidade: ${this.quantidade},
            Valor: ${this.valor},
            Volume: ${this.volume}
        `;
    }
    verificaSeEhIgual(negociacao) {
        return this.data.getDate() === negociacao.data.getDate()
            && this.data.getMonth() === negociacao.data.getMonth()
            && this.data.getFullYear() === negociacao.data.getFullYear();
    }
}
//# sourceMappingURL=negociacao.js.map