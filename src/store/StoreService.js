export const saveTokenAndUID = (token, uid) => {
    localStorage.setItem("I", uid)
    localStorage.setItem("T", token);
}

export const getTokenAndUID = () => {
    const uid = localStorage.getItem("I");
    const token = localStorage.getItem("T");
    
    return {
        uid,
        token
    }
}