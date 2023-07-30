import { BaseDTO } from "./base/baseDTO";

export interface ContatoDTO extends BaseDTO {
    contatoTipoId: number;
    valor: string;
    pessoaId: number;
}