import axios from "axios";

const api = axios.create({
  baseURL: "https://climacor-back.onrender.com",
});

//Verificar os dados da lâmpada
export const getStatus = async () => {
  try {
    const response = await api.get("/tuya/status");
    return response
  } catch (error) {
    console.error("Error fetching status:", error);
    throw error;
  }
};

//Ligar lâmpada
export const switchLamp = async (value) => {
  try {
    const response = await api.post(`/tuya/switch/${value}`);
    return response
  } catch (error) {
    console.error("Error switching lamp:", error);
    throw error;
  }
};

//Mudar cor da lâmpada
export const changeColor = async (value) => {
  //console.log(JSON.stringify(value))
  try {
    const response = await api.post(
      `/tuya/change_color/${JSON.stringify(value)}`
    );
    return response;
  } catch (error) {
    console.error("Error changing color:", error);
    throw error;
  }
};

export const getWeather = (city_name) => {
  try {
    return fetch(`https://climacor-back.onrender.com/weather/${city_name}`);
  } catch (error) {
    console.error("Error fetching status:", error);
    throw error;
  }
};

export default api;
