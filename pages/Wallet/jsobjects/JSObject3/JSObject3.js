export default {
	myVar1: [],
	myVar2: {},
	myFun1:async () => {
				try{
		        await	updateWallet.run()
		        showAlert("wallet updated","info")
 						SelectAllWalltes.run() 
    }catch(error){
			if(updateWallet.responseMeta.statusCode=="401 UNAUTHORIZED" || updateWallet.responseMeta.statusCode=="403 FORBIDDEN"){
				showModal("loginMod",{})
			}else if(updateWallet.responseMeta.statusCode=="200 OK"){
				showAlert("update operation done!","success")
			}else{
				showAlert("update doesn't work","error")
			}
     }
		
		
		
	 
	},
	myFun2: async () => {
					try{
		        await	finisshUpgrade.run()
		        showAlert("wallet upgraded","info")
						closeModal('Modal2')
 						SelectAllWalltes.run()
    }catch(error){
			if(finisshUpgrade.responseMeta.statusCode=="401 UNAUTHORIZED" || finisshUpgrade.responseMeta.statusCode=="403 FORBIDDEN"){
				showModal("loginMod",{})
			}else if(finisshUpgrade.responseMeta.statusCode=="200 OK"){
				showAlert("update operation done!","success")
			}else{
				showAlert("update doesn't work","error")
			}
     }
		 
	}
}