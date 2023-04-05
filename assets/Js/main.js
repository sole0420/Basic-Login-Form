const showHidden = (loginPass , loginEye) => {
    const input = document.getElementById(loginPass),
          iconEye = document.getElementById(loginEye)

    iconEye.addEventListener('click' , () => {
        if(input.type === 'password'){
            input.type = 'text'

            iconEye.classList.add('ri-eye-line')
            iconEye.classList.remove('ri-eye-close-line')
        }else{
            input.type = 'password'
            
            iconEye.classList.remove('ri-eye-line')
            iconEye.classList.add('ri-eye-close-line')
        }
    })
}

showHidden ('login-pass' , 'login-eye')
