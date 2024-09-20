import React from 'react'
import { NavLink } from 'react-router-dom'
import { Shield } from 'lucide-react'

function Header() {
    return (
        <header className="px-4 lg:px-6 lg:py-8 h-14 flex justify-between items-center border-b border-gray-300">
            <NavLink className="flex items-center justify-center" to="/">
                <Shield className="h-6 w-6 text-primary" />
                <span className="ml-1 sm:ml-2 text-md sm:text-lg font-bold">PlagiarismShield</span>
            </NavLink>
            <nav className="flex gap-4 sm:gap-6">
                <NavLink className="text-sm font-medium hover:underline underline-offset-4" to="/">
                    Home
                </NavLink>
                <NavLink className="text-sm font-medium hover:underline underline-offset-4" to="#">
                    Features
                </NavLink>
                <NavLink className="text-sm font-medium hover:underline underline-offset-4" to="#">
                    Contact
                </NavLink>
            </nav>
        </header>
    )
}
export default React.memo(Header)