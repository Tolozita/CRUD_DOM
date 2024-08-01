const solicitud = async (url) => {
    const response = await fetch(`http://localhost:3000/${url}`);
    if (!response.ok) {
        return Promise.reject(new Error(`HTTP error! status: ${response.status}`));
    }
    const json = await response.json();
    return json;
}

export default solicitud;