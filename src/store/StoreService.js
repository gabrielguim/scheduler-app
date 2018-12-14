const saveTokenAndUID = (token, uid, _id) => {
    localStorage.setItem("I", uid)
    localStorage.setItem("T", token);
    localStorage.setItem("_I", _id)
}

const clearTokenAndUID = () => {
    localStorage.clear();
}

const getTokenAndUID = () => {
    const uid = localStorage.getItem("I");
    const token = localStorage.getItem("T");
    const _id = localStorage.getItem("_I");

    return {
        uid,
        token,
        _id
    }
}

const StoreService = {
    saveTokenAndUID,
    getTokenAndUID,
    clearTokenAndUID
}

export default StoreService;