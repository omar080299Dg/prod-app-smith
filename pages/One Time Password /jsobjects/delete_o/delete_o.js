export default {
	myVar1: [],
	myVar2: {},
	myFun1: () => {
		//write code here
	},
	myFun2: async () => {
				try{
		        await	delete_otp.run()
					  closeModal('Modal1')
		        showAlert("Delete operation done!","success")
 						all_otp.run()
    }catch(error){
			if(delete_otp.responseMeta.statusCode=="401 UNAUTHORIZED" || delete_otp.responseMeta.statusCode=="403 FORBIDDEN"){
				showModal("loginMod",{})
			}else if(delete_otp.responseMeta.statusCode=="200 OK"){
				showAlert("Delete operation done!","success")
			}else{
				showAlert("Delete doesn't work","error")
			}
     }
		
		
		 
	}
}