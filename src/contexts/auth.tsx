import React, { createContext } from 'react';
import { authentication } from '../services/auth';

interface AuthContextData {
    signed: boolean;
    user: object;
    signIn(): Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) =>  {
    async function signIn() {
        const response = await authentication();

        console.log(response)
    }

    return (
        <AuthContext.Provider value={{ signed: false,  user: {}, signIn }}>
    
        </AuthContext.Provider>
    )
}

export default AuthContext;