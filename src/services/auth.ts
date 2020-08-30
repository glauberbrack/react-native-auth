interface AuthResponse {
    token: string;
    user: {
        name: string;
        email: string;
    }
}

export function authentication(): Promise<AuthResponse> {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                token: 'aeaieaieiaeuiaeaueuaeioa',
                user: {
                    name: 'Glauber',
                    email: 'glauber@brack.com.br'
                }
            })
        }, 2000)
    });
}