export default {
	myVar1: [],
	myVar2: {},
	myFun1: () => {
		//write code here
	},
	upg: async () => {
		if(Wallets.selectedRow.level==RadioGroup1.selectedOptionValue){
			showAlert( "PLEASE CHOOSE THE RIGHT LEVEL","error")
 			return
		}
		if(Wallets.selectedRow.level=="THREE"){
			if(RadioGroup1.selectedOptionValue=="ONE" ||RadioGroup1.selectedOptionValue=="TWO" ){
 					try{
		        await	downgrade_wallet.run()
		        showAlert("wallet level downgraded","info")
						closeModal('Modal1')
						SelectAllWalltes.run()
    }catch(error){
			if(downgrade_wallet.responseMeta.statusCode=="401 UNAUTHORIZED" || downgrade_wallet.responseMeta.statusCode=="403 FORBIDDEN"){
				showModal("loginMod",{})
			}else if(downgrade_wallet.responseMeta.statusCode=="200 OK"){
				showAlert("update operation done!","success")
			}else{
				showAlert("Downgrade doesn't work","error")
			}
	 
    }
			}
			return
		}else if(Wallets.selectedRow.level=="TWO"){
			if(RadioGroup1.selectedOptionValue=="ONE"){
					try{
		        await	downgrade_wallet.run()
		        showAlert("wallet level downgraded","info")
						closeModal('Modal1')
						SelectAllWalltes.run()
    }catch(error){
			if(downgrade_wallet.responseMeta.statusCode=="401 UNAUTHORIZED" || downgrade_wallet.responseMeta.statusCode=="403 FORBIDDEN"){
				showModal("loginMod",{})
			}else if(downgrade_wallet.responseMeta.statusCode=="200 OK"){
				showAlert("update operation done!","success")
			}else{
				showAlert("Downgrade doesn't work","error")
			}
	 
    }
			}
			return
		}
		
				try{
		        await	startUpgrade.run()
		     showModal('Modal2')
						showAlert("Upgrade works","sucess")
    }catch(error){
			if(startUpgrade.responseMeta.statusCode=="401 UNAUTHORIZED" || startUpgrade.responseMeta.statusCode=="403 FORBIDDEN"){
				showModal("loginMod",{})
			}else if(startUpgrade.responseMeta.statusCode=="200 OK"){
				showAlert("Upgrade operation done!","success")
			}else{
				showAlert("Upgrade doesn't work","error")
			}
	 
    }
	
	}
}