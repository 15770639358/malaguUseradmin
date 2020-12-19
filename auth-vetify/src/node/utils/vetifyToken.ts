const jwt = require('jsonwebtoken')

export const vetifyToken = (token: string): Promise<boolean> => {
    return new Promise((resolve, reject) => {
        jwt.verify(token, 'jwt', async(err: any, decode: any) => {
            if(err){
                resolve(false)
            }else{
                resolve(true)
            }
        })
    })

}

