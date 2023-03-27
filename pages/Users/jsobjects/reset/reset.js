export default {
	myVar1: [],
	myVar2: {},
	myFun1:async () => {
		
				try{
		        await	reset_password.run()
				  	navigateTo('Login')
		        
    }catch(error){
			if(reset_password.responseMeta.statusCode=="401 UNAUTHORIZED" || reset_password.responseMeta.statusCode=="403 FORBIDDEN"){
				showModal("loginMod",{})
			}else if(reset_password.responseMeta.statusCode=="200 OK"){
				showAlert("reset operation done!","success")
			}else{
				showAlert("reset doesn't work","error")
			}
     }
 
	} 
}