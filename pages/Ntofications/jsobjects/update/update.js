export default {
	myVar1: [],
	myVar2: {},
	myFun2: () => {
	 
	},
	myFun1: async () => {
		
				try{
		        await	update_notif.run()
		        showAlert("Update operation done!","success")
 						all_notifs.run()
    }catch(error){
			if(update_notif.responseMeta.statusCode=="401 UNAUTHORIZED" || update_notif.responseMeta.statusCode=="403 FORBIDDEN"){
				showModal("loginMod",{})
			}else if(update_notif.responseMeta.statusCode=="200 OK"){
				showAlert("update operation done!","success")
			}else{
				showAlert("update doesn't work","error")
			}
     }
	 
	}
}