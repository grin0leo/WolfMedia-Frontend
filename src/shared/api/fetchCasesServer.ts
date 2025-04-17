import axios from 'axios'

export async function fetchCasesServer(page: number) {
    const limit = 10
    const offset = (page - 1) * limit

    const res = await axios.get('https://api.cms.chulakov.dev/page/work', {
        params: {
            limit,
            offset
        }
    })

    if (res.status === 200) {
        return {
            items: res.data.items.map((item: any) => ({
                id: item.slug,
                title: item.title,
                tags: item.tagsDisplayed,
                poster: item.poster,
            })),
            total: res.data.total
        }
    } else {
        throw new Error(res.statusText)
    }
}
