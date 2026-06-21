import { useMutation } from "@tanstack/react-query";
import { loginApi, logoutApi, signupApi } from "@/services/userService";
import { useAuthStore } from "@/store/authStore";

export const useSignup = () => {
    const { setToken, setUser } = useAuthStore();
    return useMutation({
        mutationFn: signupApi,
        onSuccess: (data) => {
            localStorage.setItem("token", data.token);
            setToken(data.token);
            setUser(data.user);
        },
    })
}

export const useLogin = () => {
    const { setToken, setUser } = useAuthStore();
    return useMutation({
        mutationFn: loginApi,
        onSuccess: (data) => {
            localStorage.setItem("token", data.token);
            setToken(data.token);
            setUser(data.user);
        },
    })
}

export const useLogout = () => {
    const { logout } = useAuthStore();
    return useMutation({
        mutationFn: logoutApi,
        onSuccess: () => {
            localStorage.removeItem("token");
            logout();
        },
    })
}