import React from 'react'
import { Link } from 'react-router-dom'
import { Mail, Phone } from 'lucide-react'
import Facebook from '../../icons/Facebook.jsx'
import Twitter from '../../icons/Twitter.jsx'
import Git from '../../icons/Git.jsx'

function Footer() {
    const linkClasses = "text-sm text-gray-500 hover:text-gray-700"
    return (
            <footer className="w-full py-6 px-4 md:px-6 border-t mt-16">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:justify-items-center">
                        <div className="flex flex-col space-y-2">
                            <h3 className="text-lg font-semibold">Contact Us</h3>
                            <div className="flex items-center space-x-2">
                                <Mail className="w-5 h-5 text-gray-500" />
                                <a href="mailto:info@plagiarismshield.com" className="text-sm text-gray-500 hover:text-gray-700">info@plagiarismshield.com</a>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Phone className="w-5 h-5 text-gray-500" />
                                <a href="tel:+1234567890" className="text-sm text-gray-500 hover:text-gray-700">+1 (234) 567-890</a>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-2">
                            <h3 className="text-lg font-semibold">Legal</h3>
                            <Link className={linkClasses} to="#">
                                Terms of Service
                            </Link>
                            <Link className={linkClasses} to="#">
                                Privacy Policy
                            </Link>
                        </div>
                        <div className="flex flex-col space-y-2">
                            <h3 className="text-lg font-semibold">Follow Us</h3>
                            <div className="flex space-x-4">
                                <Link to="#" className={linkClasses}>
                                    <Facebook />
                                </Link>
                                <Link to="#" className={linkClasses}>
                                    <Twitter />
                                </Link>
                                <Link to="#" className={linkClasses}>
                                    <Git />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 text-center">
                        <p className="text-xs text-gray-500">© 2023 PlagiarismShield. All rights reserved.</p>
                    </div>
                </div>
            </footer>
    )
}

export default React.memo(Footer)