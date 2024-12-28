const BASE_URL = "https://<sua-url-do-replit>";

export const register = async (userData) => {
    const response = await fetch(`${BASE_URL}/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
    });
    return response.json();
};

export const login = async (userData) => {
    const response = await fetch(`${BASE_URL}/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
    });
    return response.json();
};

export const fetchUsers = async () => {
    const response = await fetch(`${BASE_URL}/home`);
    return response.json();
};