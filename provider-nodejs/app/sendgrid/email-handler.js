const sgMail = require("@sendgrid/mail")
const sgClient = require('@sendgrid/client');

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

function sendMsg(msg) {                                                                                                                                                                                                                                                        
    sgMail
      .send(msg)
      .then(() => {
          console.log('Email sent')
      })
      .catch((error) => {
          console.error(error)
      })
}                                                                                                                                                                                                                                                                              
                                                                                                                                                                                                                                                                               
module.exports = {                                                                                                                                                                                                                                                             
    sendMsg: sendMsg                                                                                                                                                                                                                                                           
} 