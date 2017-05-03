var api1 = {
  Name : "Carma",
  Master : 'http://carma.org/api/1.1/searchLocations',
  Country : '?name=Denmark&region_type=2&format=json',
  Hack : 'https://crossorigin.me/'
} //CarbonEmissions / Energy

var api2 = {
  Name : "Humanitarian",
  Master : 'https://www.humanitarianresponse.info/api/v1.0/disasters?filter[status]=current',
} //Natural Disasters

var api3 = {
  Name : "Torture",
  Master: 'https://raw.githubusercontent.com/pdfliberation/amnestydata/master/parsed-data/2008%20torture%20extract.json'
} //Torture

var api4 = {
  Name : "Drone",
  Master : 'http://api.dronestre.am/data',
  Hack: 'https://crossorigin.me/',
} //Drone Strikes

var api5 = {
  Name : "Air Pollution",
  Master : 'http://aqicn.org/api/ ',
  Key : ''
} //Air Pollution

var api6 = {
  Name : "Crime",
  Master : 'https://data.police.uk/api/crimes-no-location?category=all-crime&force=warwickshire',
  Date : '&date=2013-10' 
} //Crime Rates / Types UK (Evt. brug antallet af crime cases som statement point)

var url1 = api1.Hack + api1.Master + api1.Country;
var url2 = api2.Master;
var url3 = api3.Master;
var url4 = api4.Hack + api4.Master;
var url5 = api5.Master + api5.Key;
var url6 = api6.Master + api6.Date;

var apiMaster = [api1.Name, api2.Name, api3.Name, api4.Name, api5.Name, api6.Name];

function apiSwitch(){
  j++
 // i = floor(random(6));
  
  switch(apiMaster[i]){
    case "Carma":
      loadJSON(url1, gotData);
      break;
      
    case "Humanitarian":
        loadJSON(url2, gotData2);
      break;
      
    case "Torture":
        loadJSON(url3, gotData3)
      break;
      
    case "Drone":
        loadJSON(url4, gotData4, 'jsonp')
      break;
      
    case "Air Pollution":
      break;
      
    case "Crime":
        loadJSON(url6, gotData6)
      break;
  }
}
