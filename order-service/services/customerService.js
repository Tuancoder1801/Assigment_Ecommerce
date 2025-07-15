const axios = require('axios');
const CUSTOMER_SERVICE_URL = process.env.CUSTOMER_SERVICE_URL;

exports.getCustomerByPhone = async (phone) => {
  const res = await axios.get(`${CUSTOMER_SERVICE_URL}/admin/customer-service/phone/${phone}`);
  return res.data;
};
