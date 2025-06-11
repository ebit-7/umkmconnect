const BASE_URL = 'http://localhost:8080/api'; // Ganti dengan URL API kamu

export async function getData() {
  const response = await fetch(`${BASE_URL}/data`);
  if (!response.ok) throw new Error('Gagal mengambil data');
  return response.json();
}
