import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import { authentication } from '../services/auth';

interface AuthContextData {
    signed: boolean;
    user: object | null;
    loading: boolean;
    signIn(): Promise<void>;
    signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) =>  {
    const [user, setUser] = useState<object | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadStoragedData(){
            const storagedUser = await AsyncStorage.getItem('@RNAuth:user');
            const storagedToken = await AsyncStorage.getItem('@RNAuth:token');

            if(storagedUser && storagedToken) {
                setUser(JSON.parse(storagedUser));
                setLoading(false);
            }
        }
        loadStoragedData();
    }, []);

    async function signIn() {
        const response = await authentication();

        setUser(response.user)

        await AsyncStorage.setItem('@RNAuth:user', JSON.stringify(response.user))
        await AsyncStorage.setItem('@RNAuth:token', response.token)
    }

    function signOut() {
        AsyncStorage.clear().then(() => {
            setUser(null)
        });
    }

    return (
        <AuthContext.Provider value={{ signed: !!user,  user: user, loading, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;