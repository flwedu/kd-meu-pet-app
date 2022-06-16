export class ApiClient {
  private HOST: string = import.meta.env.VITE_API_URL;
  private PORT: string = import.meta.env.VITE_API_PORT;
  private baseUrl: string = `http://${this.HOST}:${this.PORT}`;

  async get(url: string) {
    const response = await fetch(`${this.baseUrl}${url}`);
    if (response.status !== 200) {
      return Promise.reject(response);
    }
    return await response.json();
  }

  async post(url: string, body: any) {
    const response = await fetch(`${this.baseUrl}${url}`, {
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
  }

  async delete_(url: string) {
    const response = await fetch(`${this.baseUrl}${url}`, {
      method: "DELETE",
    });
    if (response.status !== 204) {
      return Promise.reject(response);
    }
    return await response.json();
  }

  async put(url: string, body: any) {
    const response = await fetch(`${this.baseUrl}${url}`, {
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
  }
}
