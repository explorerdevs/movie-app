export async function request(
  ...args: Parameters<typeof fetch>
): Promise<unknown> {
  const response = await fetch(...args);

  if (!response.ok) {
    return Promise.reject(new Error("Network response was not ok"));
  }

  const type = response.headers.get("content-type");
  if (type !== "application/json") {
    return Promise.reject(
      new TypeError(`Malformed data. Expected 'JSON', got '${type}'`)
    );
  }
  return response.json();
}
