import axios from 'axios';

export async function getPublicIP() {
  try {
    const response = await axios.get('https://api.ipify.org?format=json');
    return response.data.ip; 
  } catch (error) {
    console.error('Error fetching IP:', error);
    return null;
  }
}
