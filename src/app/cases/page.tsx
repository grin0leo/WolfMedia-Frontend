
import styles from './page.module.css'

import { fetchCasesServer } from '@/shared/api/fetchCasesServer'
import { LoadMoreCases } from '../../components/CasesPage/LoadMore/LoadMore'
import { BackToTopButton } from '@/components/Section/HomePage/Workflow/ui/BackToTopButton'
import { TabsBlock } from '@/components/CasesPage/Tabs'

export const revalidate = 60

type Props = {
    searchParams: {
        category?: string
    }
}

export default async function CasesPage({ searchParams }: Props) {
    const category = searchParams.category || ''
    const initialPage = 1
    const { items, total } = await fetchCasesServer(initialPage)


    return (
        <main className={styles.page}>

            <h1>Кейсы</h1>
            <TabsBlock actualTab={category} />
            {items.length < total && (
                <LoadMoreCases initialItems={items} initialPage={initialPage + 1} total={total} />
            )}
            <BackToTopButton />

        </main>
    )
}
