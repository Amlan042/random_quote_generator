import React, {use, useEffect, useState} from 'react'
import { getRandomColor, fetchData } from './utils';
import { Container, Quotebox, Button } from './Components';


function App() {
  const [quote, setQuote] = useState(null);
  const [author, setAuthor] = useState(null);
  const [color, setColor] = useState(null);
  const [loading, setLoading] = useState(false);

  // populate the result data to quote and author on the screen
  const populateData = async () => {
    setLoading(true);
    const result = await fetchData();
    const randomColor = getRandomColor();
    setColor(randomColor);
    setQuote(result.content);
    setAuthor(result.author);
    setLoading(false);
  };

  useEffect(()=>{
    populateData();
  }, []);

  return (
    <Container color = {color}>
      <h1>Stay Motivated</h1>
      <Quotebox>
        {loading ? (
          <div className="spinner"></div>
        ) : (
          <>
            <p id="quote" >{quote}</p>
            <p id="author" >{`- ${author || 'Anonymous'}`}</p>
          </>
        )}
        <Button onClick={populateData} color={color} text='Get Random Quote' ></Button>
      </Quotebox>
    </Container>
  )
}

export default App
