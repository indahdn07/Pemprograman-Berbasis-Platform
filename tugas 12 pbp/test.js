const axios = require('axios');

// Uji coba POST /user menggunakan express-validator
const testExpressValidator = async () => {
  try {
    const response = await axios.post('http://localhost:3000/user', {
      username: 'indah',
      email: 'invalidemail.com', // Email tidak valid
    });
    console.log('Respons dari /user (express-validator):', response.data);
  } catch (error) {
    if (error && error.response && error.response.data) {
      console.log('Kesalahan dari /user (express-validator):', error.response.data);
    } else {
      console.log('Kesalahan saat menghubungi /user (express-validator):', error.message || error);
    }
  }
};

// Uji coba POST /user-joi menggunakan Joi
const testJoiValidator = async () => {
  try {
    const response = await axios.post('http://localhost:3000/user-joi', {
      username: 'john',
      email: 'invalidemail.com', // Email tidak valid
    });
    console.log('Respons dari /user-joi (Joi):', response.data);
  } catch (error) {
    if (error && error.response && error.response.data) {
      console.log('Kesalahan dari /user-joi (Joi):', error.response.data);
    } else {
      console.log('Kesalahan saat menghubungi /user-joi (Joi):', error.message || error);
    }
  }
};

// Menjalankan uji coba
const runTests = async () => {
  console.log('Menguji rute /user dengan express-validator...');
  await testExpressValidator();

  console.log('\nMenguji rute /user-joi dengan Joi...');
  await testJoiValidator();
};

runTests();