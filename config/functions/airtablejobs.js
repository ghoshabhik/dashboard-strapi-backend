const axios = require('axios');

module.exports = async () => {
    const AIRTABLE_API_TOKEN = process.env.AIRTABLE_API_TOKEN;
    const config = {
        headers: { Authorization: `Bearer ${AIRTABLE_API_TOKEN}` }
    };
    const { data } = await axios.get('https://api.airtable.com/v0/appnJyGDL7ilErfRQ/jobs?view=Grid%20view', config);

    console.log(data.records);
    return data.records;
};