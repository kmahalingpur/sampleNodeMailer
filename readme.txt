Steps to run:
 
1] Run command 'npm install' in command prompt.
2] Change email authentication details in '/routees/api.js' file
3] Run command 'npm run start' server will start in http://localhost:4000 port
4] Can request for reset password throuch by making post to 'http://localhost:4000/resetPassword' 
    with body containing 
    {
        "email":"Email id to send mail",
        "url":"http://localhost:4000/reset/tokennnnn",// for link in mail -here tokennnnn is the param to validate 
        "name":"User name to disp in mail"
    }
5] Enter the new password and submit will hit the '/change' there u can perform db store.