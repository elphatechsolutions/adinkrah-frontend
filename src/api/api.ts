const API_URL = import.meta.env.VITE_API_URL;

// Ensure we have a valid base URL and normalize it to end with a trailing slash
const getBaseUrl = () => {
    if (!API_URL || typeof API_URL !== "string") {
        throw new Error(
            "API base URL is not configured. Set VITE_API_URL in your environment (.env.local for local dev or project settings in your host)."
        );
    }
    return API_URL.endsWith("/") ? API_URL : `${API_URL}/`;
};

interface LoginUserProps {
    data: { email: string; password: string };
    setError: (field: 'email' | 'password' | 'root' | `root.${string}`, error: { type: string; message: string }) => void;
}

interface RegisterUserProps {
    data: { firstname: string; lastname: string; email: string; password: string; phone_number: string };
    setError: (field: 'email' | 'password' | 'root' | `root.${string}`, error: { type: string; message: string }) => void;
}

interface GetUserDataProps {
    data: { email: string; password: string };
    setError: (field: 'email' | 'password' | 'root' | `root.${string}`, error: { type: string; message: string }) => void;
}

export const LoginUser = async ({data, setError}: LoginUserProps) => {
    try{
    const res = await fetch(`${getBaseUrl()}auth/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        // credentials: "include",
        body: JSON.stringify(data),
    });

    if(res.ok){
        return res.json()
    }else{
        const error = await res.json()
        setError("root", { type: "server", message: error.message });
    }
    }catch(error){
        const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
        setError("root", { type: "server", message: errorMessage });
    }
};

export const GetUserData = async ({ setError }: GetUserDataProps) => {
    try {
        const res = await fetch(`${getBaseUrl()}auth/user`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include",
        });
        
        if (res.ok) {
            return await res.json();
        } else {
            const error = await res.json();
            setError("root", { type: "server", message: error.message });
            return null;
        }
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
        setError("root", { type: "server", message: errorMessage });
        return null;
    }
};

export const Logout = async () => {
    const res = await fetch(`${getBaseUrl()}auth/logout`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        credentials: "include",
    });
    if(res.ok){
        return res.json()
    }else{
        const error = await res.json()
        throw new Error(error.message)
    }
};

export const RegisterUser = async ({data, setError}: RegisterUserProps) => {
    try{
    // Only send the fields expected by the API
    const payload = {
        firstname: data.firstname,
        lastname: data.lastname,
        email: data.email,
        password: data.password,
        phone_number: data.phone_number,
    };
    const res = await fetch(`${getBaseUrl()}auth/register`, {
        method: "POST",
        headers:{
            "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(payload)
    })
    if(res.ok){
        return res.json()
    }else{
        const error = await res.json()
        setError("root", { type: "server", message: error.message });
    }
    }catch(error){
        const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
        setError("root", { type: "server", message: errorMessage });
    }
}