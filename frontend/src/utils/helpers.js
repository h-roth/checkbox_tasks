// Centralised error handling
export async function safeFetch(url, payload) {
  let res;
  let data;
  try {
    res = await fetch(url, payload);
    data = await res.json();
  } catch (e) {
    // API is unreachable or payload is corrupted
    throw Error("Something went wrong :(");
  }

  // Show error
  if (res.ok) return data;
  else {
    throw Error(data.message);
  }
}

// Date formatting helper
export function formatDate(date) {
  return new Date(date)
    .toISOString()
    .slice(0, 19)
    .replace(/-/g, "/")
    .replace("T", " ");
}
