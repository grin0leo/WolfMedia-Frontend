import { useDispatch, useSelector } from "react-redux"
import { FavoritesState, selectFavCases, selectFavCasesCount } from "@/store/features/favoriteSlice";
import { RootState } from "@/store/store";
import { Case as CaseType } from "@/store/features/casesSlice";
import { Case } from "@/components/CasesPage/Case";

export function FavPage() {

    const favoriteSlugs = useSelector((state: RootState) => state.fav.slugs)
    const allCases = useSelector((state: RootState) => state.cases.items)

    const favCases: CaseType[] = allCases.filter((item) => favoriteSlugs.includes(item.id))

    const dispatch = useDispatch()

    return (
        <main>

            {favCases.map((el: CaseType, index) => (
                <Case id={el.id} title={el.title} tags={el.tags} imgSrc={el.poster.image.src} key={index} />
            ))}
        </main>
    )
}