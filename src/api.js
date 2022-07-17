import axios from "axios";

export const todaysPicture = async () => {
  const { data } = await axios.get(
    ` https://api.nasa.gov/planetary/apod?api_key=Sb6ZKRPOT4c1a4aL3i2VPiRYDQQI1Nq3ZU2cTw4o`
  );
  return data;
};
