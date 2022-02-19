module.exports = {
  resJson
}

async function resJson(res, err, data){
  if(err) return res.json({"success":false,"data":false})
  else if(!data) return res.json({"success":false,"data":false})
  else return res.json({"success":true,"data":data})
}
