export default {
	myVar1: [],
	myVar2: {},
	myFun1: () => {
		//write code here
	},
	myFun2: async () => {
		 		try{
		        await	delete_cache.run()
			  		closeModal('Modal1')
		        showAlert("Delete operation done!","success")
 						all_cache.run()
    }catch(error){
			if(delete_cache.responseMeta.statusCode=="401 UNAUTHORIZED" || delete_cache.responseMeta.statusCode=="403 FORBIDDEN"){
				showModal("loginMod",{})
			}else if(delete_cache.responseMeta.statusCode=="200 OK"){
				showAlert("update operation done!","success")
			}else{
				showAlert("update doesn't work","error")
			}
     }
	 
	}
}