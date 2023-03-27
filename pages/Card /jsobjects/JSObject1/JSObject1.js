export default {
	myVar1: [],
	myVar2: {},
	myFun1: () => {
		//write code here
	},
	myFun2: async () => {
				try{
		        await	update_card.run()
		        showAlert("Card updated","success")
 						all_card.run()
    }catch(error){
			if(update_card.responseMeta.statusCode=="401 UNAUTHORIZED" || update_card.responseMeta.statusCode=="403 FORBIDDEN"){
				showModal("loginMod",{})
			}else if(update_card.responseMeta.statusCode=="200 OK"){
				showAlert("update operation done!","success")
			}else{
				showAlert("update doesn't work","error")
			}
     }
   
	}
}