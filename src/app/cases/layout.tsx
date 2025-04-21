import "@/styles/globals.css";
import { ReduxProvider } from '@/store/store-provider'
import { FavoritesProvider } from "../providers/favProvider";



export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ReduxProvider >
            <FavoritesProvider>
                {children}
            </FavoritesProvider>
        </ReduxProvider >
    );
}
