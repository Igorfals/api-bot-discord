import bcrypt from 'bcrypt'

export function compararSenha(senha: string, hash: string): any {
    return bcrypt.compare(senha, hash)
}

export function gerarSenha(senha: string): any {
    return bcrypt.hash(senha, 10)
}