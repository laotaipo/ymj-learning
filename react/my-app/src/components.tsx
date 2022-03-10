import React, { useEffect, useState } from 'react'

const name = 'yangmj'

function fn(e: any) {
    e.preventDefault()
    console.log('fn====', e)
}
const count = 0

function Welcome(props: any) {
    return <h1>Hello, {props.name}</h1>
}

function App() {
    return (
        <div>
            <Welcome name="Sara" />
            <Welcome name="Cahal" />
            <Welcome name="Edite" />
        </div>
    )
}

function Components() {
    const [inputVal, setInputVal] = useState('')
    const [selectVal, setSelectVal] = useState('')
    const submit = (e: any) => {
        console.log('!~~~', inputVal, selectVal)
        e.preventDefault()
    }
    return (
        <>
            <div>{!!count && <h1>Messages: {count}</h1>}</div>
            <div className="components" onClick={fn}>
                {2 + 2}
                {true && 44999}
            </div>
            <ul>
                {[1, 2, 3].map(i => {
                    return <li key={i}>{i}</li>
                })}
            </ul>
            <form onSubmit={submit}>
                <input type="text" value={inputVal} onChange={e => setInputVal(e.target.value)} />
                <select onChange={e => setSelectVal(e.target.value)}>
                    <option value="o1">o1</option>
                    <option value="o2">o2</option>
                    <option value="o3">o3</option>
                </select>
                <input type="submit" />
            </form>
            <App></App>
        </>
    )
}
export default Components
