export const checkValidSignupData = (name,email,password) => {
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email)
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)
    const isNameValid = /^[a-zA-Z0-9-]{2,}\b$/.test(name)
    if(!isNameValid) return "Enter valid Name"
    if(!isEmailValid) return "Enter valid Email"
    if(!isPasswordValid) return "Enter valid Password"
}