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