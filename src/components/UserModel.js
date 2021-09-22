class UserModel {

    name;
    surname;
    email;
    address;
    phone;
    image;
  
    constructor () {}
  
    setName(name){
      this.name = name;
    }
    setSurname(surname){
      this.surname = surname;
    }
    setEmail(email){
      this.email = email;
    }
    setAddress(address){
      this.address = address;
    }
    setPhone(phone){
      this.phone = phone;

    }
    setImage(image){
      this.image = image;
    }
  }
  
  const globalModel = new UserModel();
  export default globalModel;
  