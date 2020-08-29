export interface JwtResponseI {
    dataUser:{
        id: number,
        alias: string,
        pass: string,
        accessToken: string,
        expiresIn: string

    }
}
