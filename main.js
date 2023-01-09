/*=============== SHOW HIDDEN - PASSWORD ===============*/
const showHiddenPass = (inputPass,inputIcon)=>{
    const input = document.getElementById(inputPass),
        iconEye = document.getElementById(inputIcon)

        iconEye.addEventListener('click', () =>{
            //Change Password to text
            if(input.type === 'password'){
                //switch to text
                input.type = 'text'
                //add icon
                iconEye.classList.add('ri-eye-line')
                //remove icon
                iconEye.classList.remove('ri-eye-off-line')
            }else{
                //Change to password
                input.type = 'password'

                //Remove Icon

                iconEye.classList.remove('ri-eye-line')

                //Add Icon
                iconEye.classList.add('ri-eye-off-line')
            }
        })
}

showHiddenPass('input-pass','input-icon')