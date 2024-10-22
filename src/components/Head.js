import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import {toogleMenu} from "../utils/appSlice"
import { SEARCH_API } from '../utils/constants';

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();

  const togggleMenuHandler=()=>{
    dispatch(toogleMenu())
  }

  useEffect(() => {
    getSearchSuggestion();
  },[searchQuery])

  const getSearchSuggestion = async () => {
    const data = await fetch(SEARCH_API + searchQuery);
    const json = await data.json();
    console.log(json)

  }

  return (
    <div className='grid grid-flow-col shadow-lg p-5 bg-light-teal'>
        <div className='flex col-span-2 '>
            <img alt='menu' onClick={togggleMenuHandler} className='h-10 cursor-pointer' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAbFBMVEX///8AAABLS0vPz8+Wlpb29vZfX1+RkZHDw8M3Nzc0NDSCgoLU1NSkpKSFhYX8/Pzg4ODx8fF1dXUaGhqrq6vq6uq6uroXFxdmZmaxsbELCwtYWFgdHR2fn589PT3KyspxcXFEREQoKCh7e3tGlryJAAACdElEQVR4nO3d7VLCMBCF4QiUDxHLp4iIgN7/PWoHHfXPJm0ys7Pb97mCc6ZTStI0CQEAAAAAAAAAAAAAAAAA/Kunk/HAjvFkWrfqt/u4s+djl15woh22o0liv2qmnbSzWZVUcK+dM8M+peK9dsos9/GCc+2MmeaxgkvthNmWkYbP2gGzPcsFV9r5CliJDQ/a8Qo4iA3X2vEKWIsNbT8qbuQHxot2vAJexIba6YoQG2600xWwERseteMVcBQbWh03/SWPoR604xXwIDZ0cCO+ygXDQjtgtkWkofmLGLuE9u/EyF3Y2GpnzLKNFwzhpJ0ywymlYAhT7ZydTdMKhlDZHEStk+YSv+1Gb9p5W5qNWkx539TLoR3Ldm8tAAAAAAAAAACAKfV5MbJjcW7z3qnxNNB+l9Ta4KlFv+G7dtxO3s+pBR+1o3b2mFZwrJ0zwzil4EU7ZZZLvKD1ld7yKu8vlXbCbLHHht1fmR+RX5taO18B8qIFu4uFfsnLhqx/19WQv+26ascr4Co29PC9xV5sqJ2uiJ5fw6t2vALk+9DDb6n8yPf/PPT/n8b//9IejC38jw97MMbvwTyN5V+bxLm2HsyXBv9z3g3v7y0AAAAAAAAAAIAhzveJ8r7Xl9H92i7J75/sLhtK3HPP/b6J7ve+9L9/qfs9aP3vI2z9EkYv4lA7XwHyneh/T3b/++rbvw1jZyNopytCbOjhewv5jBL/58zYHDb9J58VZH2Vd0Ne6e3/zC7/56714Ow88992Rc8/tP7ASDjDsgfnkIbK2lTpr7SzZIPdMVTqecChB2c6h+ZzC9/ncgMAAAAAAAAAAAAAAACATZ8gAVacgh1jCwAAAABJRU5ErkJggg=='/>
            <img alt='logo' className='h-10 mx-4' src='/logo.png'/>
        </div>

        <div className='col-span-8'>
            <input type='text' value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)} className='w-3/5 p-2 border-gray-500 border-2 rounded-l-full'/>
            <button className='p-2 border-gray-400 border-2 rounded-r-full'>Search</button>
        </div>

        <div className='col-span-2'>
            <img alt='user-icon' src='/user-icon.png' className='h-10'/>

        </div>
    </div>
  )
}

export default Head