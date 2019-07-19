import { User } from 'src/app/models/User';
export class Boletim{
    id: number;
    inscricao: string;
    proprietario: string;
    cpf?: string;
    aforamento?: string;
    areaterreno: number;
    testadaprincipal: number;
    areaunidade: number;
    frente: number;
    fundo: number;
    esquerdo: number;
    direito: number;
    norte: string;
    sul: string;
    leste: string;
    oeste: string;
    latitude?: number;
    longitude?: number
    user: User;
}