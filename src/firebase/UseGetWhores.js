import React, { useEffect, useState } from 'react'
import { getDocs } from 'firebase/firestore'
import { whoresDB } from '../fbconfig'

function UseGetWhores() {
    const [whores, setWhores] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        const getWhores = async () => {
            const snap = await getDocs(whoresDB)
            const docs = snap.docs.map(doc=>({id: doc.id, ...doc.data()}))
            setWhores(docs)
            setLoading(false)
        }
        getWhores()
    }, [])
    return {whores, loading, setWhores}
}

export default UseGetWhores