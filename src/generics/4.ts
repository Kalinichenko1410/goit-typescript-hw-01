type User = {
  name: string;
  surname: string;
  email: string;
    password: string;
  
}


function createOrUpdateUser(initialValues: Partial<User>) {

  console.log(initialValues);
}


createOrUpdateUser({ 
  email: 'userMikola@mail.com', 
  password: 'paswrd123321' 
});
