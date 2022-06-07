import React, { createContext } from 'react'
import classNames from 'classnames'

type MenuMode = 'horizontal' | 'vertical'
type selectCallback = (selectedIndex: number) => void

export interface MenuProps {
    defaultIndex?: number
    className?: string
    mode?: MenuMode
    style?: React.CSSProperties
    onSelect?: selectCallback
    children?: React.ReactNode
}

interface IMenuContext {
    index: number
    onSelected?: selectCallback
}

export const MenuContext = createContext<IMenuContext>({ index: 0 })

const Menu: React.FC<MenuProps> = props => {
    // defaultIndex
    const { className, mode, style, children } = props
    const classes = classNames('viking-menu', className, {
        'menu-vertical': mode === 'vertical',
    })
    return (
        <ul className={classes} style={style}>
            {children}
        </ul>
    )
}

Menu.defaultProps = {
    defaultIndex: 0,
    mode: 'horizontal',
}

export default Menu
