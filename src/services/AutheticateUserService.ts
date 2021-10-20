import axios from "axios";


/*
 Receber o código via string
 Recuperar o access token no github
 Verificar se o usuário existe
 ---> SIM = Gera um token
 ---> NÃO = criar no db e gerar um token

 Retornar o token com as infos do usuário logado
*/

class AuthenticateUserService {

    async execute(code: string){
        const url = "https://github.com/login/oauth/access_token";

        const response = await axios.post(url,null, {
            params: {
                client_id: process.env.GITHUB_CLIENT_ID,
                client_secret: process.env.GITHUB_CLIENT_SECRET,
                code,
            },
            headers:{
                "Accept": "application/json"
            }            
        })
        return response.data;
    }

}

export { AuthenticateUserService }