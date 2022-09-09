import React, { useEffect, useState } from 'react'
import {getDocs} from 'firebase/firestore'
import {whoresDB} from '../fbconfig'

function UseGetCount() {
    const [count, setCount] = useState(0)
    useEffect(()=>{
        const getCount = async () => {
            const snap = await getDocs(whoresDB)
            setCount(snap.docs.length)
        }
        getCount()
    },[])

    return count
}

export default UseGetCount