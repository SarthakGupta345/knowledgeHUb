import api from "@/lib/axios";


export const signupApi = async (data: any) => {
  const response = await api.post("/signup", data);
  return response.data;
}   

export const loginApi = async (data: any) => {
  const response = await api.post("/login", data);
  return response.data;
}   

export const logoutApi = async () => {
  const response = await api.get("/logout");
  return response.data;
}   