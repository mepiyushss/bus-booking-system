// import data from '../component/bus-data.json';
import axios from 'axios';


export default async function fetchBusDetails() {

    const data= await axios.get('https://raw.githubusercontent.com/Abhi3391/bus-data/main/bus-data.json')
      .then(response => {
        // console.log("data",response.data); // Process your JSON data here
        return response.data;
      })
      .catch(error => {
        console.error('There was a problem with your fetch operation:', error);
      });
      const  buses = data.buses;
      console.log("data",buses);


      return buses;
    
}


