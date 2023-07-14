const length = 5012;
const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZzbcdefghijklmnopqrstuvwxyz0123456789!*_+"

function generatePassword() {
    let pass = "";
    for (let i = 0; i <= length; i++) {
        let rand = Math.floor(Math.random() * chars.length)
        pass += chars.substring(rand, rand +1)
    }
    console.log(pass)
}

generatePassword()
