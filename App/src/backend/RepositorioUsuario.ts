
import { PrismaClient } from "@prisma/client";
import { Usuario } from "@/core/model/Usuario";



export default class RepositorioUsuario {
    private static db: PrismaClient = new PrismaClient()

    static async listar() {
        return await this.db.user.findMany()
    }

    static async salvar(usuario: Usuario): Promise<Usuario> {
        return await this.db.user.upsert({
            where: { id: usuario.id},
            update: usuario,
            create: usuario
        })
    }
    static async obterTodos(): Promise<Usuario[]> {
        return await this.db.user.findMany()
    }
    static async obterPorId(id: string): Promise<Usuario> {
        const usuario = await this.db.user.findUnique({where: {id}})
        return usuario as Usuario
    }
}