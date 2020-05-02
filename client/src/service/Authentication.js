export default class Authentication {
    async callApi() {
        const response = await fetch('/api/isLoggedIn');
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);

        return body;
    };
    
}