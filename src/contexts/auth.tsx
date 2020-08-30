import React, { createContext } from 'react';

const AuthContext = createContext({ signed: true});

export const AuthProvider: React.FC = ({ children }) => (
    <AuthContext.Provider value={{ signed: true }}>
    
    </AuthContext.Provider>
)

export default AuthContext;