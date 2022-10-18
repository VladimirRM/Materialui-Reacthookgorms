export const loginValidation = {
    required:'Обязательно для заполнения',
    validate:(value:string)=>{
        if(value.match(/[а-я А-Я]/)){
            return "Логин не может содержать русские буквы"
        }

        return true
    }
}