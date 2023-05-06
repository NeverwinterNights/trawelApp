import axios from 'axios';
import {RootObject} from '../src/types/dataTypes';

const options = {
  method: 'GET',
  url: 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary',
  params: {
    bl_latitude: '25.15543993776612',
    tr_latitude: '25.41257834546226',
    bl_longitude: '51.39587210719369',
    tr_longitude: '51.62812119686502',
    limit: '30',
    currency: 'USD',
    lunit: 'km',
    lang: 'en_US',
  },
  headers: {
    'X-RapidAPI-Key': '3f1ed84654msh98642200337c5a3p1e1847jsna36cac13508c',
    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
  },
};

export const getPlacesData: () => Promise<RootObject | null> = async () => {
  try {
    const {
      data: {data},
    } = await axios.request(options);
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
//второй вариант запроса
// export const getPlacesData = async () => {
//   try {
//     const {data} = await axios.get(
//       'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary',
//       {
//         params: {
//           bl_latitude: '25.15543993776612',
//           tr_latitude: '25.41257834546226',
//           bl_longitude: '51.39587210719369',
//           tr_longitude: '51.62812119686502',
//           limit: '30',
//           currency: 'USD',
//           lunit: 'km',
//           lang: 'en_US',
//         },
//         headers: {
//           'X-RapidAPI-Key':
//             '3f1ed84654msh98642200337c5a3p1e1847jsna36cac13508c',
//           'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
//         },
//       },
//     );
//     return data;
//   } catch (error) {
//     console.error(error);
//     return null;
//   }
// };
