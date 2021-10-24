import axios from "axios";

const API_URL = "http://127.0.0.1:5000";

class Yodlr {

    static async request(endpoint, data = {}, method = "get", token = "") {

        //there are multiple ways to pass an authorization token, this is how you pass it in the header.
        // this has been provided to show you another way to pass the token. you are only expected to read 
        // this code for this project.
        const url = `${API_URL}/${endpoint}`;

        // Handle the headers by including an Authorization header when a token was passed as an argument.

        const headers = (token)
            ? { Authorization: `${token}` }
            : {};

        // console.debug("API Call (Yodlr):", endpoint, data, method, headers);

        const params = (method === "get")
            ? data
            : {};

        try {
            return (await axios({ url, method, data, params, headers })).data;
        } catch (err) {
            console.debug("Yodlr API Error: err:", err);

            throw err.response;

        }
    }


    static async apiRegister(data) {

        // console.log("Yodlr API - apiRegister: data=", data);

        try {
            const result = await this.request("users", data, "post");
            console.log("Yodlr API - apiRegister: result =", result);
            return result;

        } catch (error) {
            throw error
        }

    }

}

export {
    Yodlr
};
