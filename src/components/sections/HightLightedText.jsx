import React from 'react';

const HighlightedText = ({ fullText, highlightedPhrases }) => {
  const highlightText = (text, phrases) => {
    let result = [];
    let lastIndex = 0;
    
    // Sort phrases by their first occurrence in the text
    const sortedPhrases = phrases
      .map(phrase => ({
        phrase,
        startIndex: text.toLowerCase().indexOf(phrase.toLowerCase())
      }))
      .filter(item => item.startIndex !== -1) // Filtering out phrases that are not found
      .sort((a, b) => a.startIndex - b.startIndex);

    sortedPhrases.forEach(({ phrase, startIndex }, index) => {

      // Add non-highlighted text before the phrase
      if (startIndex > lastIndex) {
        result.push(
          <span key={`text-${index}`}>{text.slice(lastIndex, startIndex)}</span>
        );
      }

      // Add the highlighted phrase
      result.push(
        <span key={`highlight-${index}`} className="bg-red-200">
          {text.slice(startIndex, startIndex + phrase.length)}
        </span>
      );

      // Update the lastIndex to continue searching after this phrase
      lastIndex = startIndex + phrase.length;
    });

    // Add any remaining non-highlighted text
    if (lastIndex < text.length) {
      result.push(<span key="text-end">{text.slice(lastIndex)}</span>);
    }

    return result;
  };

  return (
    <div className="bg-white shadow-md rounded p-5 my-10 w-full sm:w-3/4 md:w-2/3 lg:w-1/2">
      <h3 className="text-lg font-semibold mb-2">Document Content</h3>
      <div className="text-sm mb-4 pr-5 whitespace-pre-wrap overflow-y-scroll max-h-96">
        {highlightText(fullText, highlightedPhrases)}
      </div>
    </div>
  );
};

export default HighlightedText;
