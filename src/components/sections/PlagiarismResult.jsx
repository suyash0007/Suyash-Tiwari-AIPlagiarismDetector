import React, { useContext} from 'react'
import PlagiarismContext from '@/context/PlagiarismContext'
import { Progress } from "@/components/ui/progress"
import { Button } from '../ui/button'
import { Loader2 } from 'lucide-react'
import HighlightedText from './HightLightedText'
import jsPDF from 'jspdf';



function PlagiarismResult() {
    const { plagiarismScore, highlightedText, isLoading, text } = useContext(PlagiarismContext)
    //function to generate pdf
    const downloadPDF = () => {
        const doc = new jsPDF();
        doc.setFontSize(16);

        
        doc.text("Plagiarism Result", 10, 10);
        doc.text(`Plagiarism Score: ${plagiarismScore}`, 10, 30);
        
        
        if (highlightedText.length > 0) {
            doc.text("Plagiarized Content:", 10, 40);
            highlightedText.forEach((phrase, index) => {
                doc.text(phrase, 10, 50 + (index * 10));
            });
        }
        else{
            doc.text("Plagiarized Content: No plagiarism found, document is authentic", 10, 40);

        }

        
        doc.save("plagiarism_result.pdf");
    };

    
    return (
        <div>
            {/* only renders if plagiarosmScore is not null */}
            {plagiarismScore !== null && (
                <div className={`bg-white p-6 mb-6 sm:mb-10 relative ${isLoading ? 'opacity-50' : ''}`}>
                    {isLoading && (
                        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 bg-opacity-50 rounded-lg">
                            <Loader2 className="h-8 w-8 animate-spin text-primary" />
                        </div>
                    )}
                    <h2 className="text-xl sm:text-3xl font-semibold mb-4 sm:mb-6 text-center">Plagiarism Detection Results</h2>
                    <div className='flex flex-col justify-center items-center gap-6 sm:gap-6'>
                        <div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 shadow rounded-lg p-6">
                            <p className="text-base sm:text-lg font-medium mb-2">Plagiarism Score: {plagiarismScore}%</p>
                            <Progress value={plagiarismScore} className="w-full" />
                        </div>
                        
                        <HighlightedText fullText={text} highlightedPhrases={highlightedText} />
                        <Button className="text-lg" onClick={downloadPDF}>Download Report</Button>
                        
                    </div>
                </div>
            )}

        </div>
    )
}

export default PlagiarismResult