'use client'
import { Provider } from 'react-redux'
import { createStore } from './store'

type Props = {
    children: React.ReactNode
}

export const ReduxProvider = ({ children }: Props) => {
    const store = createStore()

    return <Provider store={store}>{children}</Provider>
}
