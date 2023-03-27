export default {
	myVar1: [],
	myVar2: {},
	myFun1:async () => {
	try{
		await	update_w_holder.run()
		 all_wh.run()
			 showAlert("Update operation done!","success")
    }catch(error){
			if(update_w_holder.responseMeta.statusCode=="401 UNAUTHORIZED" || update_w_holder.responseMeta.statusCode=="403 FORBIDDEN"){
				showModal("Modal3",{})
			}else if(update_w_holder.responseMeta.statusCode=="200 OK"){
				showAlert("update operation done!","success")
			}else{
				showAlert("update doesn't work","error")
			}
	 
    }
		 
	},
	myFun2: async () => {
		try{
		await	bulkCredit.run()
			closeModal('Modal1')
			 showAlert("Bulk operation done!","success")
    }catch(error){
			if(bulkCredit.responseMeta.statusCode=="401 UNAUTHORIZED" || bulkCredit.responseMeta.statusCode=="403 FORBIDDEN"){
				showModal("Modal3",{})
			}else if(bulkCredit.responseMeta.statusCode=="200 OK"){
				showAlert("Bulk operation done!","success")
			}else{
				showAlert("Bulk doesn't work","error")
			}
	 
    }
		
	//return bulkCredit.responseMeta.statusCode
	}
}