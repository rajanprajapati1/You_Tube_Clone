import axios from 'axios';


const BASE_URL = 'https://youtube138.p.rapidapi.com';
const options = {
  params: { hl: 'en',    gl: 'US'  },
  headers: {
    'X-RapidAPI-Key': "e33429f4e0msh879b72e2371d660p1784f1jsn16a51ce5613e",
    'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
  }
};
 export const FetchDataFromApi = async(url)=>{
try {
const {data} = await axios.get(`${BASE_URL}/${url}`,options);
return data;
  
} catch (error) {
  console.log( error)
}
}

// a7c4e0ef98msh208f6c966d313cap17efb3jsn25b82dceed45
// 1st 3db86baab5msh4d0ab14c2e27d48p1709cajsne5420b727130
// 2nd e33429f4e0msh879b72e2371d660p1784f1jsn16a51ce5613e