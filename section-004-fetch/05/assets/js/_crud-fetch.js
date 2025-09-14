export class CrudFetch {
    constructor(apiUrl) {
        this.headers = {
            Accept: "application/json",
            "Content-Type": "application/json"
        }

        this.apiUrl = apiUrl;
    }


    #fetchOptionsFactory(method, bodyJSON){
        const fetchOptions = { method }
        fetchOptions.headers = this.headers;
        if(bodyJSON){
            fetchOptions.body = JSON.stringify(bodyJSON);
        }

        return fetchOptions
    }


    getCollection(callback) {
        fetch(this.apiUrl)
            .then((response) => response.json())
            .then((data) => callback(data));
    }


    addResource(bodyJSON, callback){
        fetch(this.apiUrl, this.#fetchOptionsFactory("POST", bodyJSON))
            .then(response => response.json())
            .then(data => callback(data));
    }
    

    editResource(id, bodyJSON, callback) {
        fetch(`${this.apiUrl}/${id}`, this.#fetchOptionsFactory("PUT", bodyJSON))
            .then(response => response.json())
            .then(data => callback(data));
    }


    deleteResource(id, callback) {  
        fetch(`${this.apiUrl}/${id}`, this.#fetchOptionsFactory("DELETE"))
            .then((response) => callback(response));
    }
}