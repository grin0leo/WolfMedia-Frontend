import '@/app/globals.css'
import type { Metadata } from 'next'
import { StoreProvider } from '@/store/store-provider'


export const metadata: Metadata = {
    title: 'WolfMedia',
    description: '...',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (

        <body>
            <StoreProvider>{children}</StoreProvider>
        </body>
    )
}
