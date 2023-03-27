export default {
	myVar1: [],
	myVar2: {},
	
	 
 
myFun2: async () => {
    
    // Storing response
    const response = await fetch("https://api-dev.mynk.ma/api/mynk/v1/api/wallets");
    
    // Storing data in form of JSON
    var data = await response.json();
    console.log(data);
    if (response) {
         console.log(response)
    }
	 console.log("Noting ")
    
},
 
}