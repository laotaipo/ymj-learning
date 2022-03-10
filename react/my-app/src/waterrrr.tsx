import { useState } from 'react'

function Water() {
    const clk = (e: any) => {
        console.log('~~~~', e)
    }
    return (
        <>
            333
            <Inp ee="333prop" onClick={(e: any) => clk(e)}></Inp>
        </>
    )
}

function Inp(props: any) {
    const [tmp, setTmp] = useState(0)
    const clickBtn = () => {
        props.onClick(tmp)
    }
    return (
        <>
            <input type="number" value={tmp} onChange={e => setTmp(+e.target.value)} />
            <div>{props.ee}</div>
            <button onClick={clickBtn}>点我</button>
        </>
    )
}

export default Water
