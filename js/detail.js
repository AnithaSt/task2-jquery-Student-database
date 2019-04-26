
	var user=[];
	
			var data1 = JSON.parse(localStorage.getItem('studentdetail'));
			
	    if(!data1){
	    $(document).ready(function(){
		$("#butt").click(function(){
	    var username = $("#studentname").val();
		var email = $("#email").val();
		var gender = $("#gender").val();
		var age = $("#age").val();
		var aadhaar = $("#aadhaar").val();
		var data = {
				username:username,
				email:email,
				gender:gender,
				age:age,
				aadhaar:aadhaar,
		}
		

		if (username=='') {
			alert('Enter the name')
		}
		else if (email=='') {
			alert('Enter the Email')
		}
		else if (age=='') {
			alert('Enter the age')
		}
		else if (aadhaar=='') {
			alert('Enter the Aadhaar No')
		}
		else{
			console.log(data);
		user.push(data);
		localStorage.setItem('studentdetail',JSON.stringify(user));
		location.replace("index.html")
		} 
		});
		});	
		 }
		else{
			var i=0;
			for(let i=0;i<data1.length;i++){
					user.push(data1[i])
				}
			$(document).ready(function(){
			$("#butt").click(function(){
		    var username = $("#studentname").val();
			var email = $("#email").val();
			var gender = $("#gender").val();
			var age = $("#age").val();
			var aadhaar = $("#aadhaar").val();
			var data = {
					username:username,
					email:email,
					gender:gender,
					age:age,
					aadhaar:aadhaar,
					
			}
			
			if (username=='') {
				alert('Enter the name')
			}
			else if (email=='') {
				alert('Enter the Email')
			}
			else if (age=='') {
				alert('Enter the age')
			}
			else if (aadhaar=='') {
				alert('Enter the Aadhaar No')
			}
			else{
				console.log(data);
			user.push(data);
			localStorage.setItem('studentdetail',JSON.stringify(user));

			location.replace("index.html")
			}
			
		});
		  });	
		}
		 
