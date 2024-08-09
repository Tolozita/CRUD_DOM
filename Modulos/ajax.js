const solicitud = async (url) => {
    let solicitud = await fetch(`http://localhost:3000/${url}`);
    let data = await solicitud.json();
    return data
};

export default solicitud;
