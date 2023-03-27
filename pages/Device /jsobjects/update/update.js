export default {
	myVar1: [],
	myVar2: {},
	myFun1: () => {
		 
	},
	myFun2: async () => {
			try{
		        await	update_device.run()
		        showAlert("Update operation done!","success")
 						all_devices.run()
    }catch(error){
			if(update_device.responseMeta.statusCode=="401 UNAUTHORIZED" || update_device.responseMeta.statusCode=="403 FORBIDDEN"){
				showModal("loginMod",{})
			}else if(update_device.responseMeta.statusCode=="200 OK"){
				showAlert("update operation done!","success")
			}else{
				showAlert("update doesn't work","error")
			}
     }
	}
}