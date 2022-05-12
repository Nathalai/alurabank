export class Negociacao {
    /* Poderia escrever o código da seguinte maneira, declarando as propriedades e depois chamando no construtor:
    private _data: Date;
    private _quantidade: number;
    private _valor: number;

    constructor(data: Date, quantidade: number, valor: number) {
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
    }
    Mas, para escrever menos código, é possível declarar as propriedades da classe diretamente no construtor:*/
    constructor(
    //caso estas propriedades (data, valor, quantidade) fossem definidas como "public readonly", 
    //seria possível acessá-las somente para leitura,
    //e não precisaria dos getters para elas (que estão abaixo do construtor)
    _data, _quantidade, _valor) {
        this._data = _data;
        this._quantidade = _quantidade;
        this._valor = _valor;
    }
    get data() {
        const copiaData = new Date(this._data.getTime());
        // criamos cópia da propriedade _data (para criar nova referência) porque, apesar de ser um getter (ou se _data fosse "public readonly")
        // isso somente impediria atribuição de novos valores (usando "="), porém, ao usar, "setDate()", por exemplo,
        // a propriedade _data seria modificada (o que não deve ser permitido)
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
    static criaNegociacao(dataString, quantidadeString, valorString) {
        const exp = /-/g;
        const data = new Date(dataString.replace(exp, ","));
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString);
        return new Negociacao(data, quantidade, valor);
    }
}
