import { Modelo } from "../interfaces/modelo.js";

export class Negociacao implements Modelo<Negociacao>{
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
        private _data: Date,
        private _quantidade: number,
        private _valor: number
    ) {}

    public static criaNegociacao(dataString: string, quantidadeString: string, valorString: string): Negociacao {
        const exp = /-/g;
        const data = new Date(dataString.replace(exp, ","));
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString);
        return new Negociacao(data, quantidade, valor);
    }

    get data(): Date{
        const copiaData = new Date(this._data.getTime()); 
        // criamos cópia da propriedade _data (para criar nova referência) porque, apesar de ser um getter (ou se _data fosse "public readonly")
        // isso somente impediria atribuição de novos valores (usando "="), porém, ao usar, "setDate()", por exemplo,
        // a propriedade _data seria modificada (o que não deve ser permitido)
        return copiaData;
    }

    get quantidade(): number{
        return this._quantidade;
    }

    get valor(): number{
        return this._valor;
    }

    get volume(): number{
        const volume = this._quantidade * this._valor;
        return volume;
    }

    public paraTexto(): string {
        return `
            Data: ${this.data},
            Quantidade: ${this.quantidade},
            Valor: ${this.valor},
            Volume: ${this.volume}
        `;
    }

    public verificaSeEhIgual(negociacao: Negociacao): boolean {
        return this.data.getDate() === negociacao.data.getDate()
            && this.data.getMonth() === negociacao.data.getMonth()
            && this.data.getFullYear() === negociacao.data.getFullYear();
    }
}