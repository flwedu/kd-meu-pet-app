export const createApiClient = () => {
  const HOST: string = import.meta.env.VITE_API_URL;
  const PORT: string = import.meta.env.VITE_API_PORT;
  const baseUrl: string = `http://${HOST}:${PORT}`;

  const get = async (url: string) => {
    const response = await fetch(`${baseUrl}${url}`);
    if (response.status !== 200) {
      return Promise.reject(response);
    }
    return await response.json();
  };

  const post = async (url: string, body: any) => {
    const response = await fetch(`${baseUrl}${url}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    if (response.status !== 201) {
      return Promise.reject(response);
    }
    return await response.json();
  };

  const delete_ = async (url: string) => {
    const response = await fetch(`${baseUrl}${url}`, {
      method: "DELETE",
    });
    if (response.status !== 204) {
      return Promise.reject(response);
    }
    return await response.json();
  };

  const put = async (url: string, body: any) => {
    const response = await fetch(`${baseUrl}${url}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    if (response.status !== 200) {
      return Promise.reject(response);
    }
    return await response.json();
  };

  return { get, post, delete_, put };
};
