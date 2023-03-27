export default {
	myVar1: [],
	myVar2: {},
	myFun1: () => {
		//write code here
	},
	myFun2: async () => {
					try{
		        await	update_transaction_status.run()
		        showAlert("update transaction","info")
 						allTransactions.run().run()
    }catch(error){
			if(update_transaction_status.responseMeta.statusCode=="401 UNAUTHORIZED" || update_transaction_status.responseMeta.statusCode=="403 FORBIDDEN"){
				showModal("loginMod",{})
			}else if(update_transaction_status.responseMeta.statusCode=="200 OK"){
				showAlert("update operation done!","success")
			}else{
				showAlert("update doesn't work","error")
			}
     }
	}
}