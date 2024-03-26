export default function authHeader(unAuth = null) {
    if (unAuth) {
        return {
            Accept: "application/json",
            "Content-Type": "application/json",
        };
    } else {
        const token = localStorage.getItem("userToken");
        return {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        };
    }
}