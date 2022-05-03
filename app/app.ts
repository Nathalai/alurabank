import { Negociacao } from "./models/negociacao.js";

const negociacao1 = new Negociacao(new Date(), 10, 100);
console.log(negociacao1);
console.log(negociacao1.volume);