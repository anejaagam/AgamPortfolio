import React from 'react';
import { useNavigate } from 'react-router-dom';
const missingFile: string = require("../assets/macOS/underConstruction.svg").default;
const power:string = require('../assets/windows/powerButton.svg').default;

const AndroidSimulation: React.FC = () => {
    const navigate = useNavigate();
    return (
        <div className="h-screen bg-cover bg-center flex flex-col items-center justify-center bg-black overflow-hidden overscroll-contain">
            <img src={missingFile} alt="Under Construction" className="w-12 fill-white " />
            <p className="text-center text-white text-sm font-extralight mt-9">This page should be viewed on a bigger screen</p>
            <img src={power} alt="Power" className="w-6 fill-white bg-zinc-200 rounded-[50%] p-1 mt-10 justify-end"  onClick={()=>{navigate('/')}}/>
        </div>
    );
};

export default AndroidSimulation;
