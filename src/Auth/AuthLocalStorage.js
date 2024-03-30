const tokenHeaderKey = import.meta.env.VITE_HEADER_KEY

const setUserToken = token => {
    localStorage.setItem(tokenHeaderKey, JSON.stringify(token))
}

const getUserToken = () => {
    try {
        const token = localStorage.getItem(tokenHeaderKey)
        return JSON.parse(token)
    } catch (error) {
        console.error('Error parsing user token: ', error)
    }
}

const removeUserToken = () => {
    localStorage.removeItem(tokenHeaderKey)
    return true
}

export {
    setUserToken,
    getUserToken,
    removeUserToken
}