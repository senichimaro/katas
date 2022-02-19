module.exports = function(res,err,data,template){
  if(err) res.render(template,{"success":false,"message":err})
  else if(!data) res.render(template,{"success":false,"message":"Not Found"})
  else res.render(template,{"success":true,"data":data})
}
