
const arLetters = [
    "ة","ج","ح","خ","ه","ع","غ","ف","ق","ث","ص","ض","ش","س","ي","ب","ل","ا",
    "ت","ن","م","ك","و","ر","ز","د","ذ","ط","ظ","ء","أ","إ","ؤ","ئ","ى",    
    ]

const oldEmails = ["a@saweyyan.com","b@saweyyan.com","c@saweyyan.com"]

const email = "email"
const name = "name"
const password = "psw"
const age = "age"

function formIsValid(name,email,oldEmails,password,age){
    let isValid = true 
    if(email > 1 && email < 9){
        if(email == '@saweyyan.com'){
            formIsValid = true;
        }
        email = "Email is invalid"
        formIsValid = false;
    }
    if(name == ''){
        alert("Arabic only and filled")
        formIsValid = false;
    }
    if(age > 60 && age < 18){
        age = "You cant register"
        formIsValid = false;

    }
    if(password < 6 && password == '!,@,#,$,%,^,&,*'){
        password = "Not correct"
        formIsValid = false;
    }


    return isValid
}

formIsValid("حاتم","a@saweyyan.com",['a@saweyyan.com1'],"123456")