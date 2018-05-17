$(function(){
 $('#userSearchForm').submit(function(e){
 	e.preventDefault();
 	let address = $('#address').val();
 	let city = $('#city').val();
 	let state = $('#state').val();
 	let zip = $('#zip').val();
 	let  formattedAddress = address.replace(/ /g, '+'); 

 	let c = encodeURIComponent(city);
 	let s = encodeURIComponent(state);
 	let z= encodeURIComponent(zip);
 	console.log(c,s,z);


  	let zwsId = "X1-ZWz18lrjlna2a3_5qhl2"; //X1-ZWz18lrjlna2a3_5qhl2
  	//let url ='http://crossorigin.me/' + 'http://www.zillow.com/webservice/GetSearchResults.htm?zws-id=X1-ZWz18lrjlna2a3_5qhl2&address=2114+Bigelow+Ave&citystatezip=Seattle%2C+WA';
 	//let url = 'http://crossorigin.me/' + 'http://www.zillow.com/webservice/GetSearchResults.htm?zws-id='+zwsId+"&address="+address+"&citystatezip="+c+','+s ;
	

//let url = 'http://crossorigin.me/' + 'http://www.zillow.com/webservice/GetSearchResults.htm?zws-id='
//		   +zwsId+"&address="+formattedAddress+"&citystatezip="+c+','+s+z ;


let url = 'http://crossorigin.me/' + 'http://www.zillow.com/webservice/GetDeepSearchResults.htm?zws-id='+zwsId+"&address="+formattedAddress+"&citystatezip="+c+','+s+z ;

 	$.ajax({
 		url: url,
 		dataType:'xml',
 		type: 'GET',

 		success:function(data){
 			//console.log(data);
 			let jsonData = xmlToJson(data);
 			//console.log(jsonData);
 		    fetchLatLong(jsonData);

 		},
 		error:function(){
 			console.log('error');
 		}

 	});
 });
});


function fetchLatLong(data){

	console.log("function starts",data);
	$.each(data,function(i,item){
		console.log("inside each");
		console.log("i",i,"item--->",item);
		//console.log("mmmm",item.response);
		let results11 = item.response;
		console.log("results",results11.results);
		let a = results11.results;
		let address = a.result.address;
		console.log("latitude",address.latitude);
		console.log("longitude",address.longitude);
	});
	
}
//code taken from https://davidwalsh.name/convert-xml-json
function xmlToJson(xml) {
  // Create the return object
  var obj = {};
  if (xml.nodeType == 1) { // element
    // do attributes
    if (xml.attributes.length > 0) {
      obj['@attributes'] = {};
      for (var j = 0; j < xml.attributes.length; j++) {
        var attribute = xml.attributes.item(j);
        obj['@attributes'][attribute.nodeName] = attribute.nodeValue;
      }
    }
  } else if (xml.nodeType == 3) { // text
    obj = xml.nodeValue;
  }
  // do children
  if (xml.hasChildNodes()) {
    for(var i = 0; i < xml.childNodes.length; i++) {
      var item = xml.childNodes.item(i);
      var nodeName = item.nodeName;
      if (typeof(obj[nodeName]) == 'undefined') {
        obj[nodeName] = xmlToJson(item);
      } else {
        if (typeof(obj[nodeName].push) == 'undefined') {
          var old = obj[nodeName];
          obj[nodeName] = [];
          obj[nodeName].push(old);
        }
        obj[nodeName].push(xmlToJson(item));
      }
    }
  }
  return obj;
}



//https://github.com/gregmagdsick/checkMyRent
//http://wern-ancheta.com/blog/2014/03/20/getting-started-with-zillow-api/

function myFunction() {
    var uri = "http://www.zillow.com/webservice/GetSearchResults.htm?zws-id=X1-ZWz18lrjlna2a3_5qhl2&address=2114+Bigelow+Ave&citystatezip=Seattle%2C+WA";
    var res = encodeURIComponent(uri);
    console.log(res);
}