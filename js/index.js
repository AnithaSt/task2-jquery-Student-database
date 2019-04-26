$(document).ready(function(){
	$("#addDetails").click(function(){
		location.replace("details.html")
	});
});
	var data = JSON.parse(localStorage.getItem('studentdetail'));
    console.log(data)
    for(let i=0; i<data.length; i++){
    	document.getElementById('tabbody').innerHTML +="<td>"+ data[i].username +"</td>"+ "<td>"+data[i].email+"</td>"+"<td>"+data[i].gender+"</td>"+"<td>"+data[i].age+"</td>"+"<td>"+data[i].aadhaar+"</td>";	
    }
