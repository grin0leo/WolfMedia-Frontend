'use client'
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import axios from 'axios';
import { useEffect, useState } from 'react';

type CaseItem = {
    id: string;
    title: string;
    tags: string;
    poster: {
        image: {
            src: string;
        };
    };
};

export function useCaseItem(slug: string) {
    const itemFromStore = useSelector((state: RootState) =>
        state.cases.items.find(item => item.id === slug)
    );

    const [item, setItem] = useState<CaseItem | null>(itemFromStore || null);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(!itemFromStore);

    // убрать не получится, тк без него отправляются бесконечные запросы, потому что itemFromStore изначально null
    useEffect(() => {
        if (!itemFromStore) {
            axios
                .get(`https://api.cms.chulakov.dev/page/work/${slug}`)
                .then(res => {
                    const data = res.data;
                    setItem({
                        id: slug,
                        title: data.title,
                        tags: '',
                        poster: data.banner.poster,
                    });
                })
                .catch(() => setError(true))
                .finally(() => setLoading(false));
        }
    }, [itemFromStore, slug]);

    return { item, error, loading };
}
