export const getApiResource = async () => {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/todos');
        const data = await res.json();
        return data
    } catch (error) {
        console.log('Could not fetch : ', error.message);
        return false;
    }
  }