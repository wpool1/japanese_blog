import React from 'react'
import { Header } from './';

export const Layout = ({ children }: {children: any} ) => {
    return (
        <div>
            <Header />
            {children}
        </div>
    )
}
