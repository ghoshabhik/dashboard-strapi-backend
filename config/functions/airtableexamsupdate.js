const axios = require('axios');

module.exports = async (id, status) => {
    
    const AIRTABLE_API_TOKEN = process.env.AIRTABLE_API_TOKEN;
    console.log(AIRTABLE_API_TOKEN)
    const config = {
        headers: { Authorization: `Bearer ${AIRTABLE_API_TOKEN}`, 'Content-Type': 'application/json'}
    };
    
    const { data } = await axios.get(`https://api.airtable.com/v0/appnJyGDL7ilErfRQ/examtopics/${id}`, config);
    
    var updatedData = data;
    updatedData.fields.Status = status;
    delete updatedData.createdTime;
    delete updatedData.fields.ExamName;
    delete updatedData.fields.ExamPlannedDate;
    delete updatedData.fields.ExamRegistered;
    const patchData = {records: [updatedData]}

    // const config = {
    //     method: 'patch',
    //     url: 'https://api.airtable.com/v0/appnJyGDL7ilErfRQ/examtopics',
    //     headers: headers
    // }
    try{
        console.log(patchData.records[0].fields)
        
         await axios.patch('https://api.airtable.com/v0/appnJyGDL7ilErfRQ/examtopics', patchData , config  )
    } catch(e){
        console.log('An error occurred: ',e)
    }
    

    // console.log('===========',data);
    // console.log('===========',status);
    return data.records;
};