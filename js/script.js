$(function(){
 $('#userSearchForm').submit(function(e){
 	e.preventDefault();
 	let address = $('#address').val();
 	let city = $('#city').val();
 	let state = $('#state').val();
 	let zip = $('#zip').val();


 	//let encodeUrl = encodeURIComponent(city,state,zip);
 	//console.log(encodeUrl);

 	let c = encodeURIComponent(city);
 	let s = encodeURIComponent(state);
 	let z= encodeURIComponent(zip);
 	console.log(c,s,z);
 	let zwsId = "X1-ZWz18lrjlna2a3_5qhl2"; //X1-ZWz18lrjlna2a3_5qhl2

	let url ="http://www.zillow.com/webservice/GetSearchResults.htm?zws-id="+zwsId+"&address="+address+"&citystatezip="+c+','+s; 
 	//let url ="http://www.zillow.com/webservice/GetSearchResults.htm?zws-id=";

//This one works from zillow's website
//http://www.zillow.com/webservice/GetSearchResults.htm?zws-id=X1-ZWz18lrjlna2a3_5qhl2&address=2114+Bigelow+Ave&citystatezip=Seattle%2C+WA 	



 	$.ajax({
 		url:url,
 		/*data:{
 			"address":address,
 			//"citystatezip":city+state
 			"citystatezip":c+s
 		},*/

 		dataType:'xml',
 		type: 'GET',

 		success:function(data){
 			console.log(data);

 		}


 	});
 });
});
