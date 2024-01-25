import React, { useState, useEffect } from "react";

const QuoteGenerator = () => {
  const [quote, setQuote] = useState(null);
  const [author, setAuthor] = useState(null);
  const [quoteVisible, setQuoteVisible] = useState(false);

  const fetchQuote = async () => {
    try {
      const response = await fetch("https://api.quotable.io/random");
      const data = await response.json();

      if (data.hasOwnProperty("content") && data.content.trim() !== "") {
        setQuote(data.content);
        setAuthor(data.author);
        setQuoteVisible(true); // Set visibility to true after fetching a quote
      } else {
        console.error("Empty or invalid quote received from the API.");
      }
    } catch (error) {
      console.error("Error fetching quote:", error);
    }
  };

  const handleGenerateQuote = () => {
    fetchQuote();
  };

  useEffect(() => {
    // Do nothing on page load
  }, []);

  return (
    <div className={`quote-container ${quoteVisible ? "quote-visible" : ""}`}>
      {quoteVisible && (
        <>
          <blockquote className="quote-text">{quote}</blockquote>
          <p className="author-text">- {author}</p>
        </>
      )}
      <button className="generate-button" onClick={handleGenerateQuote}>
        Generate Quote
      </button>
    </div>
  );
};

export default QuoteGenerator;
