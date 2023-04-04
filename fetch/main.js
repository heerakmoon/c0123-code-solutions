
async function fetchData(url) {
  try {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`HTTP error, status${res.status}`);
    }

    const data = await res.json();
    console.log(data);

  } catch (error) {
    console.error('Error', error);
  }

}

fetchData('https://jsonplaceholder.typicode.com/users');
fetchData('https://pokeapi.co/api/v2/pokemon/1');
