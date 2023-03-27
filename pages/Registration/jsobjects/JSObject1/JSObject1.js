export default {
	myVar1: [],
	myVar2: {},
	myFun1: () => {
		//write code here
	},
	myFun2: async () => {
		try{
		await	register.run()
    }catch(error){
			showAlert(error,'error')
			return
    }
		showAlert("Registration done!","success")
		navigateTo('Users',{})
	}
}