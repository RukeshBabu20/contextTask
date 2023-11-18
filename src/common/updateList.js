export const selectArea = (CityName) => {
    if(CityName=='Hyderabad'){
      return ['h1','h2','h3','h4','h5','h6','h7','h8'];
    }
    else if(CityName=='Chennai'){
      return ['c1','c2','c3','c4','c5','c6','c7','c8'];
    }
    else if(CityName=='Delhi'){
      return ['d1','d2','d3','d4','d5','d6','d7','d8'];
    }
    else{
      return []
    }
}