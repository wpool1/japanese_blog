import React from 'react'
import { Header } from './';

export const Layout = ({ children }) => {
    return (
        <div>
            <Header />
            {children}
        </div>
    )
}
