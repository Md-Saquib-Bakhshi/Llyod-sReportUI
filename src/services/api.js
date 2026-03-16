import axios from "axios"

/* REPORT 923 */

const report923API = axios.create({
  baseURL: "http://localhost:8001"
})

export const runReport923 = () =>
  report923API.post("/generate-report")

export const processReplies = () =>
  report923API.post("/process-replies")



/* REPORT 12 */

const report12API = axios.create({
  baseURL: "http://localhost:8002"
})

export const runReport12 = () =>
  report12API.post("/report12/process-latest")



/* FACTSHEET */

const factsheetAPI = axios.create({
  baseURL: "http://localhost:8003"
})

export const runFactsheetReport = () =>
  factsheetAPI.get("/run-validation")