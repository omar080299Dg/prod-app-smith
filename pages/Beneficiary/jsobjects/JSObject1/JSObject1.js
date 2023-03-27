export default {
	myVar1: [],
	myVar2: {},
	myFun1: () => {
		//write code here
	},
	myFun2: async () => {
		
				try{
		        await	update.run()
		        showAlert("Update operation done!","success")
 						all_beneficiary.run()
    }catch(error){
			if(update.responseMeta.statusCode=="401 UNAUTHORIZED" || update.responseMeta.statusCode=="403 FORBIDDEN"){
				showModal("loginMod",{})
			}else if(update.responseMeta.statusCode=="200 OK"){
				showAlert("update operation done!","success")
			}else{
				showAlert("update doesn't work","error")
			}
     }
	}
}