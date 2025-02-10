import apiClient from '@/apis/apiClients';

export async function fetchUserData() {
  try {
    const response = await apiClient.get('/users/fetch-user-data');
    return response.data;
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error;
  }
}

export async function updateUserData(data: object) {
  try {
    const response = await apiClient.post('/users/update-user-data', data);
    return response.data;
  } catch (error) {
    console.error('Error updating user data:', error);
    throw error;
  }
}
