import * as bcrypt from 'bcryptjs'

export async function hashPassword(password: string): Promise<string> {
    try{
        const hash = await bcrypt.hash(password,10)
        return hash
    }catch(error){
        console.log('Error al hashear la password',error)
        throw error
    }
}

export async function compararPassword(password: string,hash: string): Promise<Boolean>{
    try{
        return await bcrypt.compare(password,hash)
    }catch(error){
        console.log('Error al comparar la password',error)
        throw error
    }
}