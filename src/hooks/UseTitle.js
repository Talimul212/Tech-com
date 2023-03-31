import { useEffect } from "react"

const UseTitle=title=>{
    useEffect(()=>{
        document.title=`${title}-Traveller`;
    },[title])
};
export default UseTitle;
