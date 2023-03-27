export default {
	myVar1: [],
	myVar2: {},
	myFun1: () => {
		//write code here
	},
	myFun2: async () => {
		
				try{
		        await	update_otp.run()
		        showAlert("Update operation done!","success")
 						all_otp.run()
    }catch(error){
			if(update_otp.responseMeta.statusCode=="401 UNAUTHORIZED" || update_otp.responseMeta.statusCode=="403 FORBIDDEN"){
				showModal("loginMod",{})
			}else if(update_otp.responseMeta.statusCode=="200 OK"){
				showAlert("update operation done!","success")
			}else{
				showAlert("update doesn't work","error")
			}
     }
 
	}
}