import axios from 'axios';


async function fetchData<T>(url: string): Promise<T> {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching from ${url}: ${error}`);
  }
}


interface User {
  id: number;
  name: string;
}

const fetchUserData = async () => {
  const userData = await fetchData<User>('https://api.example.com/user');
  console.log(userData.id, userData.name); 
};

fetchUserData();
