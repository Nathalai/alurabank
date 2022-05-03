export class Negociacao {
    private _data;
    private _quantidade;
    private _valor;

    constructor(data, quantidade, valor) {
        if (data instanceof Date) {
            this._data = data;
        } else {
            console.log("Imput de data inválido")
            return;
        }        
        this._quantidade = quantidade;
        this._valor = valor;
    }

    get data(){
        return this._data;
    }

    get quantidade(){
        return this._quantidade;
    }

    get valor(){
        return this._valor;
    }

    get volume(){
        const volume = this._quantidade * this._valor;
        return volume;
    }
}