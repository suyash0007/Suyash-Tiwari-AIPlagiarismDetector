import React, { useCallback, useContext } from 'react'
import { useDropzone } from 'react-dropzone'
import { Button } from "@/components/ui/button"
import { Upload, FileText } from 'lucide-react'
import PlagiarismContext from '@/context/PlagiarismContext'
import extractText from '@/utils/extractText'

function FileUpload() {

    const { setHighlightedText, setPlagiarismScore, isLoading, setIsLoading, file, setFile, text, setText } = useContext(PlagiarismContext)

    const onDrop = useCallback(async (acceptedFiles) => {//executes on file dropped
        const uploadedFile = acceptedFiles[0]
        setFile(uploadedFile)
        setIsLoading(true)

        try {
            // const { default: extractText } = await import('@/utils/extractText');
            const { default: checkForPlagiarism } = await import('@/utils/checkForPlagiarism');
            const extractedText = await extractText(uploadedFile)
            const response = await checkForPlagiarism(extractedText)
            setText(extractedText)

            if (response) {
                setPlagiarismScore(response.plagiarismScore);
                setHighlightedText(response.highlightedText);
            } else {
                alert('Error: Unable to retrieve plagiarism results. Please try again later.');
            }


        } catch (error) {
            console.error('Error processing file:', error)
            alert('Error processing file. Please try again.')
        }
        finally {
            setIsLoading(false)
        }
    }, [setHighlightedText, setPlagiarismScore, setFile, setText, setIsLoading])


    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: {
            'application/pdf': ['.pdf'],
            'application/msword': ['.doc'],
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx']
        },
        multiple: false
    })


    return (
        <div className="container md:w-1/2 mx-auto px-4 py-8 mt-4">
            <h1 className="sm:text-4xl text-2xl font-bold mb-8 text-center">AI Powered Plagiarism Detector</h1>
            <div
                {...getRootProps()}//gives necessary attributes as props
                className={`border-2 border-dashed rounded-lg p-8 mb-8 text-center ${isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
                    }`}
            >
                <input {...getInputProps()} />
                <Upload className="mx-auto h-12 w-12 text-gray-400" />
                <p className="mt-2 text-sm text-gray-600">Drag and drop your file here, or click to select</p>
                <p className="mt-1 text-xs text-gray-500">Supported formats: PDF and Word</p>
                <Button className="mt-4" disabled={isLoading}>
                    {isLoading ? 'Processing...' : 'Select File'}
                </Button>
            </div>

            {file && (
                <div className="bg-white shadow rounded-lg p-6 mb-8">
                    <h2 className="text-xl font-semibold mb-4">Uploaded Document</h2>
                    <div className="flex items-center">
                        <FileText className="h-6 w-6 text-blue-500 mr-2" />
                        <span>{file.name}</span>
                    </div>
                </div>

            )}




        </div>
    )

}

export default FileUpload