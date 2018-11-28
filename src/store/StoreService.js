const saveTokenAndUID = (token, uid) => {
    localStorage.setItem("I", uid)
    localStorage.setItem("T", token);
}

const getTokenAndUID = () => {
    const uid = localStorage.getItem("I");
    const token = localStorage.getItem("T");
    
    return {
        uid,
        token
    }
}

const StoreService = {
    saveTokenAndUID,
    getTokenAndUID
}

export default StoreService;