export default {
	myVar1: [],
	myVar2: {},
	myFun1: () => {
		//write code here
	},
	myFun2: async () => {
					try{
		        await	update_referal.run()
		        showAlert("Referal updated","success")
 					all_referals.run()
    }catch(error){
			if(update_referal.responseMeta.statusCode=="401 UNAUTHORIZED" || update_referal.responseMeta.statusCode=="403 FORBIDDEN"){
				showModal("loginMod",{})
			}else if(update_referal.responseMeta.statusCode=="200 OK"){
				showAlert("update operation done!","success")
			}else{
				showAlert("update doesn't work","error")
			}
     }
	}
}