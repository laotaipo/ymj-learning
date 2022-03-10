import React from 'react'
// Theme context，默认的 theme 是 “light” 值
const ThemeContext = React.createContext('light')

// 用户登录 context
const UserContext = React.createContext({
    name: 'Guest',
})

function App() {
    const rrr = { name: 'jj' }
    return (
        <ThemeContext.Provider value={'dark'}>
            <UserContext.Provider value={rrr}>
                <Layout />
            </UserContext.Provider>
        </ThemeContext.Provider>
    )
}

function Layout() {
    return (
        <div>
            <Content />
        </div>
    )
}

// 一个组件可能会消费多个 context
function Content() {
    return (
        <ThemeContext.Consumer>
            {theme => (
                <UserContext.Consumer>
                    {user => (
                        <div>
                            {theme}
                            {JSON.stringify(user)}
                        </div>
                    )}
                </UserContext.Consumer>
            )}
        </ThemeContext.Consumer>
    )
}

export default App
