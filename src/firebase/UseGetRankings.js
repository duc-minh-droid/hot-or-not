import React, { useEffect, useState } from 'react'
import { getDocs, query, limit, orderBy } from 'firebase/firestore'
import { whoresDB } from '../fbconfig'

export function UseGetTop() {
    const [data, setData] = useState()
    useEffect(() => {
        const getTop = async () => {
            const topQuery = query(whoresDB, orderBy('point', 'desc'), limit(5))
            const topSnap = await getDocs(topQuery)
            const topData = topSnap.docs.map(doc => ({ id: doc.id, ...doc.data() }))
            setData(topData)
        }
        getTop()
    }, [])

    return data
}

export function UseGetLast() {
    const [data, setData] = useState()
    useEffect(() => {
        const getLast = async () => {
            const lastQuery = query(whoresDB, orderBy('point', 'asc'), limit(5))
            const lastSnap = await getDocs(lastQuery)
            const lastData = lastSnap.docs.map(doc => ({ id: doc.id, ...doc.data() }))
            setData(lastData)
        }
        getLast()
    }, [])

    return data
}