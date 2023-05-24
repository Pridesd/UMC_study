import { dust } from "../axios";

const date = new Date();

const key = process.env.REACT_APP_DUST_KEY;

const getDustForecast = () => 
    dust.get(`/getMinuDustFrcstDspth?serviceKey=${key}&returnType=json&numOfRows=1&pageNo=1&searchDate=${date.getFullYear()}-0${date.getMonth() + 1}-${date.getDate()}`)


export { getDustForecast }