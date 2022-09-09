import {updateDoc, doc, increment} from 'firebase/firestore'
import {whoresDB} from '../fbconfig'

async function handlePoints(id, isIncrease) {
  const docRef = doc(whoresDB, id)
  await updateDoc(docRef, {
    point: isIncrease? increment(100): increment(-100)
  })
}

export default handlePoints