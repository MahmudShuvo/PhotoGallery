import { User, onAuthStateChanged, getAuth } from 'firebase/auth';
import { FC, createContext, useState, useEffect, ReactNode } from 'react';

// Create context
interface AuthContextType {
    user: User | null;
    isLoading: boolean;
}

export const AuthContext = createContext<AuthContextType>({
    user: null,
    isLoading: false,
});

// Create provider
interface AuthProviderProps {
    children: ReactNode; // Allow any valid React node
}

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true); // Start with loading true

    useEffect(() => {
        const auth = getAuth(); // Initialize auth
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
            setIsLoading(false);
        });
        return unsubscribe;
    }, []);

    const value = {
        user,
        isLoading,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
