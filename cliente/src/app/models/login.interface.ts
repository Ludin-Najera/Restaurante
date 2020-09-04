export type Roles = 'CAJERO' | 'ADMIN';

export interface usuarioi {
    alias: string;
    pass: string;
}

export interface usuarioiresp {
    message: string;
    token: string;
    userid: number;
    role: Roles;
}