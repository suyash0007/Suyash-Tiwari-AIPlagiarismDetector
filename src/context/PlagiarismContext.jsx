import React, { createContext, useState} from 'react';

const PlagiarismContext = createContext();

export function PlagiarismProvider({ children }) {
  const [plagiarismScore, setPlagiarismScore] = useState(null);
  const [highlightedText, setHighlightedText] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  const [file, setFile] = useState(null)
  const [text,setText]=useState(" ")

  return (
    <PlagiarismContext.Provider value={{ plagiarismScore, setPlagiarismScore, highlightedText, setHighlightedText, isLoading, setIsLoading, file, setFile, text, setText }}>
      {children}
    </PlagiarismContext.Provider>
  );
}
export default PlagiarismContext
