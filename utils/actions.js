const axios = require('axios').default;

export const getDisneyCharactersData = async () => {
    try {
        const { data } = await axios.get('https://api.disneyapi.dev/characters');
        return data
    } catch (err) {
    }
};