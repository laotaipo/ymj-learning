import React from 'react'
import Button, { ButtonSize, ButtonType } from './components/Button/button'
import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem'

function App() {
    const handelClick = (e: React.MouseEvent) => {
        console.log(44, e)
    }
    return (
        <>
            <Menu defaultIndex={0} onSelect={() => {}}>
                <MenuItem>cool link</MenuItem>
            </Menu>
            <div>
                <Button disabled className="custom">
                    按钮
                </Button>
                <Button btnType={ButtonType.Primary} size={ButtonSize.Large} onClick={e => handelClick(e)}>
                    按钮大
                </Button>
                <Button btnType={ButtonType.Link} href="http:www.baidu.com" size={ButtonSize.Large}>
                    百度
                </Button>
            </div>
        </>
    )
}

export default App
