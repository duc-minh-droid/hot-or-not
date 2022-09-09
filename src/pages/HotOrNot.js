import { useEffect, useState } from "react";
import randomInteger from 'random-int';
import UseGetWhores from "../firebase/UseGetWhores";
import handlePoints from "../firebase/handlePoints";
import BodyContainer from "../components/bodyContainer";
import {randomColor} from 'randomcolor'

function isEmpty(obj) {
  for (var prop in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, prop)) {
      return false;
    }
  }
  return JSON.stringify(obj) === JSON.stringify({});
}


function HotOrNot() {
  const { whores, loading } = UseGetWhores() // async
  const [data, setData] = useState([])
  const [first, setFirst] = useState({});
  const [excludedData, setExcludedData] = useState([])
  const [second, setSecond] = useState({});
  const [hotter, setHotter] = useState({})
  const [color, setColor] = useState(randomColor({luminosity: 'dark'}))

  useEffect(() => {
    setData(whores)
  }, [whores.length])

  useEffect(() => {
    setFirst(data[randomInteger(0, data.length - 1)])
  }, [data.length])

  useEffect(() => {
    setExcludedData(data.filter(dat => dat.index !== first.index))
  }, [first])

  useEffect(() => {
    if (isEmpty(hotter)) {
      setSecond(excludedData[randomInteger(0, excludedData.length - 1)])
    }
  }, [excludedData])

  const handleFirstClick = (chick) => {
    setColor(randomColor({luminosity: 'dark'}))
    setHotter(chick)
    const prevSecond = { ...second }
    const excluded = data.filter(e => e.index !== prevSecond.index && e.index !== chick.index)
    setSecond(excluded[randomInteger(1, excluded.length - 1)])
    setData(prevData => {
      const currentChick = prevData.find(prevChick => prevChick.index === chick.index)
      handlePoints(currentChick.id, true)
      const currentSecondChick = prevData.find(prevChick => prevChick.index === prevSecond.index)
      handlePoints(currentSecondChick.id, false)
      return prevData
    })
  }

  const handleSecondClick = (chick) => {
    setColor(randomColor({luminosity: 'dark'}))
    setHotter(chick)
    const prevFirst = { ...first }
    const excluded = data.filter(e => e.index !== prevFirst.index && e.index !== chick.index)
    setFirst(excluded[randomInteger(1, excluded.length - 1)])

    setData(prevData => {
      const currentChick = prevData.find(prevChick => prevChick.index === chick.index)
      handlePoints(currentChick.id, true)
      const currentFirstChick = prevData.find(prevChick => prevChick.index === prevFirst.index)
      handlePoints(currentFirstChick.id, false)
      return prevData
    })
  }
  
  if (loading || !first || !second) return 'loading'
  return (
    <BodyContainer>
      <div className="pt-6 w-full h-full transition-colors duration-200" style={{backgroundColor: color}}>
        <div className="relative md:hidden">
          <div
          onClick={() => handleFirstClick(first)}>
            <div className="absolute p-1 bg-white border-8 border-red-500 left-1/2 -translate-x-1/2 rounded-b-xl">{first.name}</div>
            <img src={first.imageUrl} alt=""
              className="block mx-auto border-8 border-red-500 rounded-t-xl w-72 h-72 transition-colors" />
          </div>
          <div className="absolute bg-white text-3xl rounded-full p-4 -translate-y-1/2 left-1/2 -translate-x-1/2 border-8 border-red-500">OR</div>
          <div
          onClick={() => handleSecondClick(second)}>
            <div className="absolute p-1 bottom-0 bg-white border-8 border-blue-500 left-1/2 -translate-x-1/2 rounded-t-xl">{second.name}</div>
            <img src={second.imageUrl} alt=""
              className="block mx-auto border-8 border-blue-500 rounded-b-xl w-72 h-72 transition-colors" />
          </div>
        </div>

        <div className="hidden md:flex w-full justify-evenly items-center">
          <div onClick={() => handleFirstClick(first)}
          className="flex flex-col items-center gap-4 text-2xl">
            <p>{first.name}</p>
            <img src={first.imageUrl} alt=""
              className="border-8 border-red-500 rounded-xl w-80 h-auto transition-colors" />
          </div>
          <div className="bg-white text-3xl rounded-full p-4 border-8 border-red-500">OR</div>
          <div onClick={() => handleSecondClick(second)}
          className="flex flex-col items-center gap-4 text-2xl">
            <p>{second.name}</p>
            <img src={second.imageUrl} alt=""
              className="border-8 border-blue-500 rounded-xl w-80 h-auto transition-colors" />
          </div>
        </div>
      </div>
    </BodyContainer>
  );
}

export default HotOrNot;
