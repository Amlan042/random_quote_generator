
  //get random color
  export const getRandomColor = () => {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for(let i=0; i<6; i++){
      color += letters[Math.floor(Math.random()*12)]; //12 multiplier for getting rid of lighter colors
    }
    return color;
  };

  //fetch data 
  export const fetchData = async () => {
    let data, result;
    try{
      data = await fetch('https://api.quotable.io/random');
      result = await data.json();
    }catch(err){
      console.log(err);
    }
    return result;
  };