//homepage should have question + two buttons with options
//on button click, the buttons and the h2 disappear and the corresponding form (customer or employee) appears
//make sure that the user cannot press both buttons
//form validation:
//	check for empty inputs - DO NOT ACCEPT NEGATIVE NUMBERS OR WHITESPACE
//	email should be an email format
//  The SS should have the correct number of digits (9)
//	No actual restriction on Customer num besides it can't be empty
//sucessfull input leads to window alert with information
//Prompt that asks user if he/she want to continue
//on yes, refresh page
//on no, Say "Thank you for using the Person Tester Application!" and don't do anything.

$(document).ready(function(){

	$("button").click(function(){
		if($(this).attr("id") == "buttonC"){
			$("button").css("display", "none");
			$("#customer").css("visibility", "visible");
			$("#employee").css("display", "none");
			$("h2").text("Enter customer data");
		} else{
			$("button").css("display", "none");
			$("#employee").css("visibility", "visible");
			$("#customer").css("display", "none");
			$("h2").text("Enter employee data");
		}
	});

	$("form").submit(function(){
		//validate inputs
		//check names to make sure they are not whitespace
		var fcheck = true;
		var lcheck = true;
		var name = $("[name='firstname']",this).val();
		if (/\S/.test(name) && /^[-\sa-zA-Z]+$/.test(name)) {
   			 // string is not empty and not just whitespace
				}	
		else{
			fcheck = false;
			//stop the function and tell user to try again
			window.alert("Please enter more than spaces for the first name, or enter a valid name!");
			return false;
		}	

		var lname = $("[name='lastname']",this).val();
		if (/\S/.test(lname) && /^[-\sa-zA-Z]+$/.test(lname)) {
   			 // string is not empty and not just whitespace
				}	
		else{
			lcheck = false;
			//stop the function and tell user to try again
			window.alert("Please enter more than spaces for the last name, or enter a valid name!!");
			return false;
		}	

		//make object based on form choice
		if(fcheck && lcheck){
			if($(this).attr("id") == "customer"){
				var a1 = Object.create(customer);
				//set values
				a1.run("$first")(name);
				a1.run("$last")(lname);
				a1.run("$email")($("[name='email']",this).val());
				a1.run("$num")($("[name='cusNum']",this).val());
				var str = "You entered: \n"+"Name: "+name+ " "+ lname+"\n"+"Email: "+$("[name='email']",this).val()+"\n"+ "Customer number: "+ $("[name='cusNum']",this).val()+"\n";
				a1.run("$says")(str);
				//get values
				window.alert(a1.run("says"));
				//prompt user to continue
				var cont = confirm("Would you like to continue? Press OK to continue and cancel to stop.");
				//if continue, then refresh page
				if(cont ==true)
				{
					//refresh page
					location.reload();
					return false;
				}
				//else redirect to a thank you html
				else{
					window.alert("Thank you for using the Person Tester Application!");
					window.location.replace("thankyou.html");
					return false;
				}
			}
			else{
				var a1 = Object.create(employee);
				//set values
				a1.run("$first")(name);
				a1.run("$last")(lname);
				a1.run("$email")($("[name='email']",this).val());
				a1.run("$ss")($("[name='ssNum']",this).val());
				var str = "You entered: \n"+"Name: "+name+ " "+ lname+"\n"+"Email: "+$("[name='email']",this).val()+"\n"+ "Social security number: "+ $("[name='ssNum']",this).val()+"\n";
				a1.run("$says")(str);
				//get values
				window.alert(a1.run("says"));
				//prompt user to continue
				var cont = confirm("Would you like to continue? Press OK to continue and cancel to stop.");
				//if continue, then refresh page
				if(cont ==true)
				{
					//refresh page
					location.reload();
					return false;
				}
				//else redirect to a thank you html
				else{
					window.alert("Thank you for using the Person Tester Application!");
					window.location.replace("thankyou.html");
					return false;
				}
		}
	}
	});
});

var Person = function(){
	var data ={
		first:"",
		last:"",
		email:"",
		memo: 0,
		//setters
		$first : function(n){
			data.memo +=1;
			data.first = n;
		},
		$last : function(n){
			data.memo +=1;
			data.last = n;
		},
		$email : function(n){
			data.memo +=1;
			data.email = n;
		},
		says:"",
		$says: function(n){
			data.memo +=1;
			data.says = n;
		},
	};

	var F = function(){};
	f = new F();

	f.pname = "person";
	f.run = function(e){
		return data[e];
	};

	return f;
}();

var employee = function(p){
	var data = {
		//$functionname: function(n){};
		first:"",
		last:"",
		email:"",
		ss: "",
		memo: 0,
		//setters
		$first : function(n){
			data.memo +=1;
			data.first = n;
		},
		$last : function(n){
			data.memo +=1;
			data.last = n;
		},
		$email : function(n){
			data.memo +=1;
			data.email = n;
		},
		$ss: function(n){
			data.memo +=1;
			data.ss = n;
		},
		says:"",
		$says: function(n){
			data.memo +=1;
			data.says = n;
		},
	};

	var F = function(){};
	F.prototype = p;
	f = new F();

	f.ename = "employee";
	f.run = function(e){
		var r = data[e];
		if(r == undefined)
		{
			return F.prototype.run(e);
		}
		else{
			return r;
		}
	};
	return f;
}(Person);

var customer = function(p){
	var data = {
		first:"",
		last:"",
		email:"",
		num: "",
		memo: 0,
		//setters
		$first : function(n){
			data.memo +=1;
			data.first = n;
		},
		$last : function(n){
			data.memo +=1;
			data.last = n;
		},
		$email : function(n){
			data.memo +=1;
			data.email = n;
		},
		$num: function(n){
			data.memo +=1;
			data.num = n;
		},
		says:"",
		$says: function(n){
			data.memo +=1;
			data.says = n;
		},
	};

	var F = function(){};
	F.prototype = p;
	f = new F();

	f.cname = "customer";
	f.run = function(e){
		var r = data[e];
		if(r == undefined)
		{
			return F.prototype.run(e);
		}
		else{
			return r;
		}
	};
	return f;
}(Person);