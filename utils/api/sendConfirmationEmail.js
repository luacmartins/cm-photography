import axios from 'axios'
import moment from 'moment'

const sendConfirmationEmail = ({ email, orderID, address: { recipientName }, items }) => {
   const name = recipientName.split(' ')[0].charAt(0).toUpperCase() + recipientName.split(' ')[0].slice(1)
   const total = items.reduce((acc, item) => acc += item.price * item.cartQuantity, 0)
   const date = moment().format('MMM D, YY')
   const data = {
      "personalizations":
         [{
            "to": [{
               "email": email,
               "name": name
            }],
            "dynamic_template_data": {
               "orderID": orderID,
               "name": name,
               "total": total,
               "date": date,
               "items": items
            }
         }],
      "template_id": "d-b73e5bfdefce4c45b9fffea532201110",
      "from": {
         "email": "luacmartins@gmail.com",
         "name": "CM Photography"
      },
      "reply_to": {
         "email": "luacmartins@gmail.com",
         "name": "CM Photography"
      }
   }

   axios.post('https://api.sendgrid.com/v3/mail/send', data, {
      headers: {
         'authorization': `Bearer ${process.env.SENDGRID_API_KEY}`,
         'content-type': 'application/json'
      }
   })
}

export default sendConfirmationEmail