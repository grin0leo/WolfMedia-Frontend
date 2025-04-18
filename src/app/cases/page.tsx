import styles from './page.module.css'

import { fetchCasesServer } from '@/shared/api/fetchCasesServer'
import { LoadMoreCases } from '../../components/CasesPage/LoadMore/LoadMore'
import { BackToTopButton } from '@/components/Section/HomePage/Workflow/ui/BackToTopButton'


export const revalidate = 60

export default async function CasesPage() {
    const initialPage = 1
    const { items, total } = await fetchCasesServer(initialPage)

    return (
        <main className={styles.page}>

            <h1>Кейсы</h1>

            {items.length < total && (
                <LoadMoreCases initialItems={items} initialPage={initialPage + 1} total={total} />
            )}
            <BackToTopButton />
        </main>
    )
}
