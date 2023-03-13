import axios from "axios";

export interface keyboardComponent{
  id: string;
  image:string;
  by:string;
  source:string;
  download:string;
}

interface ComponentResponse{
  photos:keyboardComponent[];
}

export async function getKeyboardImages() {
  const options = {
    method: "GET",
    url: "https://free-images-api.p.rapidapi.com/images/custom%20keyboard",
    headers: {
      "X-RapidAPI-Key": "22b746a646msh6ff4b4ffec6e836p1c3708jsnd90a02a79a87",
      "X-RapidAPI-Host": "free-images-api.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
