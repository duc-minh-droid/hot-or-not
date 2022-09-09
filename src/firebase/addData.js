import React from 'react'
import {addDoc} from 'firebase/firestore'
import {whoresDB} from '../fbconfig'

async function addData(data) {
  await addDoc(whoresDB, data)
}

export default addData