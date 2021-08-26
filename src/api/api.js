import axios from "axios";

export const getPlacesData = async (type, sw, ne) => {
  const URL = `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`;

  try {
    const {
      data: { data },
    } = await axios.get(URL, {
      method: "GET",
      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
      },
      headers: {
        "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
        "x-rapidapi-key": "d36e84a91fmshaa6a873e42fd6f6p1722bejsncd3bfda366fa",
      },
    });
    return data;
  } catch (error) {
    console.log("finde erroe");
  }
};
