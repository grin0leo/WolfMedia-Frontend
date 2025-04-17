
import "@/styles/globals.css";
import { ReduxProvider } from '@/store/store-provider'



export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ReduxProvider >
            {children}
        </ReduxProvider >
    );
}
