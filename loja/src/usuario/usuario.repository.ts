import { Injectable } from "@nestjs/common";
import { UsuarioEntity } from "./usuario.entity";

@Injectable()
export class UsuarioRepository {

    private usuarios: UsuarioEntity[] = [];

    //Método para salva usuario
    salvar(usuario: UsuarioEntity) {
        this.usuarios.push(usuario);
    }

    //Método para consultar todos usuario
    async listar() {
        return this.usuarios;
    }


    //Método de buscar usuario por e-mail
    async existeEsseEmail(email: string) {
        const possivelUsuario = this.usuarios.find(
            usuario => usuario.email === email
        );

        return possivelUsuario !== undefined;
    }

}