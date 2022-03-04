const Base_Url = 'https://api.openweathermap.org/data/2.5/'
const Api_key = 'ac27521ca6e58852c2ea5c76ef05d53d'
export const Current_Weather = (city) => `${Base_Url}weather?q=${city}&appid=${Api_key}&units=metric&lang=en`