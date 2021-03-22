const axios = require('axios');

module.exports = async (id, status) => {
    
    const AIRTABLE_API_TOKEN = process.env.AIRTABLE_API_TOKEN;
    // console.log(AIRTABLE_API_TOKEN)
    const config = {
        headers: { Authorization: `Bearer ${AIRTABLE_API_TOKEN}`, 'Content-Type': 'application/json'}
    };
    
    const { data } = await axios.get(`https://api.airtable.com/v0/appnJyGDL7ilErfRQ/projects/${id}`, config);
    
    var updatedData = data;
    updatedData.fields.Status = status;
    delete updatedData.createdTime;
    delete updatedData.fields.PlannedNoOfDays;
    delete updatedData.fields.EndDate;
    delete updatedData.fields.StartDate;
    delete updatedData.fields.Name;
    delete updatedData.fields.GitHubUrl;
    const patchData = {records: [updatedData]}

    // const config = {
    //     method: 'patch',
    //     url: 'https://api.airtable.com/v0/appnJyGDL7ilErfRQ/examtopics',
    //     headers: headers
    // }
    try{
        console.log(patchData.records[0])
        
         const resp = await axios.patch('https://api.airtable.com/v0/appnJyGDL7ilErfRQ/projects', patchData , config  )

        // respdata = await resp.json()
        //console.log(resp)

    } catch(e){
        console.log('An error occurred: ')
    }
    

    // console.log('===========',data);
    console.log('===========',status);
    return data.records;
};