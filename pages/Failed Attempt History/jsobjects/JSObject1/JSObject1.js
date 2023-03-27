export default {
	myVar1: [],
	myVar2: {},
	myFun1: () => {
		//write code here
	},
	myFun2: async () => {
				try{
		        await	unlock.run()
		        showAlert("User unlocked!","success")
 						all_fah.run()
    }catch(error){
			if(unlock.responseMeta.statusCode=="401 UNAUTHORIZED" || unlock.responseMeta.statusCode=="403 FORBIDDEN"){
				showModal("loginMod",{})
			}else if(unlock.responseMeta.statusCode=="200 OK"){
				showAlert("Unlock operation done!","success")
			}else{
				showAlert("Unlock doesn't work","error")
			}
     }
	 
	}
}