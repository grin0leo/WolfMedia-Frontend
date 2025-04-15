'use client'

import { Provider } from 'react-redux'
import { store } from '@/store/store'


// создаю компонент провайде, который потом подключаю в нужный мне layout
export function StoreProvider({ children }: { children: React.ReactNode }) {
    return <Provider store={store}>{children}</Provider>
}
