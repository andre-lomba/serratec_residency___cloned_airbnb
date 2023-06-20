import { createContext, useState, ReactNode } from "react";

interface ClickableContextProps {
    clickable: boolean;
    setClickable: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ClickableContext = createContext<ClickableContextProps>(
    {} as ClickableContextProps
);

interface ClickableProviderProps {
    children: ReactNode;
}

export const ClickableProvider: React.FC<ClickableProviderProps> = ({ children }) => {
    const [clickable, setClickable] = useState(false);
    return (
        <ClickableContext.Provider value={{ clickable, setClickable }}>
            {children}
        </ClickableContext.Provider>
    );
};