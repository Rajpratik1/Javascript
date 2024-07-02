class User{
    name(email,password){
        this.email=email;
        this.password=password;
    }

    get password(){
        return this.password.toUppercase();
    }

    set password(value){
        this.password=value.toUppercase();
    }
}

const hitesh = new User("h@Pratik.ai","123")
console.log(hitesh.password)