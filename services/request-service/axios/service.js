const axios = require('axios');

exports.sendRequest = async (config) => {
    try {
        const response = await axios(config);
        return response;
    } catch (err) {
        throw new Error(err);
    }
}