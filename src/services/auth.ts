export function authentication() {
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