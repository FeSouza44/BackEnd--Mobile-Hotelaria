import bcrypt from 'bcrypt';

const SALT = 10;

async function generatePassword(password:string){
    return bcrypt.hashSync(password,10);
}

async function validatePassword(password:string, hashSenha:string){
    const hash_normal = hashSenha.replace("$2y$", '$2b$');
    return bcrypt.compare(password, hash_normal);
}

export {generatePassword, validatePassword};