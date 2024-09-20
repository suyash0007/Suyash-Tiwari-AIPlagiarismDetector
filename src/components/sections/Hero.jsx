import React,{useCallback} from 'react'
import { Upload, Zap, FileText, Shield } from "lucide-react"
import { Button } from '../ui/button'
import { useNavigate } from 'react-router-dom'


function Hero() {
    const navigate=useNavigate()
    const handleNavigation = useCallback(() => {
        navigate('/detector');
    }, [navigate]);

    
    return (
        <div>
            <main className="flex-1 bg-[#f8f2f0]">
                <section className="w-full py-12 sm:py-24">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-6">
                            <div className="space-y-4">
                                <h1 className="text-3xl font-bold text-center sm:text-4xl md:text-5xl lg:text-6xl/none">
                                    Real-time AI-Powered Plagiarism Detection
                                </h1>
                                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400 text-center">
                                    Protect academic integrity with our cutting-edge AI technology. Fast, accurate, and comprehensive plagiarism detection for educational institutions.
                                </p>
                            </div>
                            <div className="max-w-sm">
                                
                                    <Button className="text-sm p-4 sm:py-7 sm:px-5 sm:text-base uppercase rounded-lg " type="submit" onClick={handleNavigation}>
                                        Upload Your Document
                                        <Upload className="ml-2 h-4 w-4" />
                                    </Button>
                                
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full py-12 md:py-18 lg:py-10 bg-gray-100 dark:bg-gray-800">
                    <div className="container px-4 md:px-6">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Key Features</h2>
                        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
                            <div className="flex flex-col items-center space-y-3 text-center">
                                <Zap className="w-12 h-12 text-primary" />
                                <h3 className="text-xl font-bold">Lightning Fast</h3>
                                <p className="text-gray-500 dark:text-gray-400">Get results in seconds, not minutes. Our AI processes documents at unprecedented speeds.</p>
                            </div>
                            <div className="flex flex-col items-center space-y-3 text-center">
                                <Shield className="w-12 h-12 text-primary" />
                                <h3 className="text-xl font-bold">Unmatched Accuracy</h3>
                                <p className="text-gray-500 dark:text-gray-400">Our advanced AI algorithms ensure the highest level of accuracy in plagiarism detection.</p>
                            </div>
                            <div className="flex flex-col items-center space-y-3 text-center">
                                <FileText className="w-12 h-12 text-primary" />
                                <h3 className="text-xl font-bold">Detailed Reports</h3>
                                <p className="text-gray-500 dark:text-gray-400">Receive comprehensive reports with source matching and similarity percentages.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default React.memo(Hero)