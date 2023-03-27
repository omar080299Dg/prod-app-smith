export default {
	myVar1: [],
	myVar2: {},
	myFun1: () => {
		//write code here
	},
	myFun2: async () => {
				try{
		        await	update_recipient.run()
		        showAlert("Recipient updated","info")
 						all_recipient.run()
    }catch(error){
			if(update_recipient.responseMeta.statusCode=="401 UNAUTHORIZED" || update_recipient.responseMeta.statusCode=="403 FORBIDDEN"){
				showModal("loginMod",{})
			}else if(update_recipient.responseMeta.statusCode=="200 OK"){
				showAlert("update operation done!","success")
			}else{
				showAlert("update doesn't work","error")
			}
     }
 
	}
}