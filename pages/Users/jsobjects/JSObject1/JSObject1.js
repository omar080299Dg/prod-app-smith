export default {
	myVar1: [],
	myVar2: {},
	myFun1: () => {
		//write code here
	},
	myFun2: async () => {
		
		
				try{
		        await	update_status.run()
		        showAlert("Update operation done!","success")
 						all_jh_user.run()
    }catch(error){
			if(update_status.responseMeta.statusCode=="401 UNAUTHORIZED" || update_status.responseMeta.statusCode=="403 FORBIDDEN"){
				showModal("loginMod",{})
			}else if(update_status.responseMeta.statusCode=="200 OK"){
				showAlert("update operation done!","success")
			}else{
				showAlert("update doesn't work","error")
			}
     }
	 
	}
}