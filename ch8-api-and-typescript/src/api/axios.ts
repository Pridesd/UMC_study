import axios from "axios";

const baseURL = "https://apis.data.go.kr/B552584/ArpltnInforInqireSvc"

export const dust = axios.create({
    baseURL
})