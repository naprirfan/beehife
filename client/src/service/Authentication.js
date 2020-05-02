const callApi = async () => {
    const response = await fetch('/api/isLoggedIn');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);

    return body;
};

export default callApi;