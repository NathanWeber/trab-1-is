import axios from "axios";
var soap = require('soap');

const url = 'http://webservices.oorsprong.org/websamples.countryinfo/CountryInfoService.wso?WSDL';

async function listContinentsByCode(JSON: boolean, callback) {
  await soap.createClient(url, async function(err, client) {
    if(err) return console.log(err);
    return client.ListOfContinentsByCode(async function(err, { ListOfContinentsByCodeResult: { tContinent } }, rawResponse) {
        if(err) return err;
        callback(JSON ? tContinent : rawResponse)
    });
  });
}

async function listContrysByCode(JSON: boolean, callback) {
  await soap.createClient(url, async function(err, client) {
    if(err) return console.log(err);
    return client.ListOfCountryNamesByCode(async function(err, {ListOfCountryNamesByCodeResult: {tCountryCodeAndName}}, rawResponse) {
      if(err) return err;
        callback(JSON ? tCountryCodeAndName : rawResponse)
    });
  });
}


export default {
  listContinentsByCode,
  listContrysByCode,
};
