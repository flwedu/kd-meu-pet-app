export class ApiClient {
  private HOST: string = import.meta.env.VITE_API_URL;
  private PORT: string = import.meta.env.VITE_API_PORT;
  private baseUrl: string = `http://${this.HOST}:${this.PORT}`;

  async get(url: string) {
    const response = await fetch(`${this.baseUrl}${url}`);

    return await checkAndReturn(response);
  }

  async post(url: string, body: any) {
    const response = await fetch(`${this.baseUrl}${url}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    return await checkAndReturn(response);
  }

  async delete_(url: string) {
    const response = await fetch(`${this.baseUrl}${url}`, {
      method: "DELETE",
    });
    return await checkAndReturn(response);
  }

  async put(url: string, body: any) {
    const response = await fetch(`${this.baseUrl}${url}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    return await checkAndReturn(response);
  }
}

function checkAndReturn(response: Response) {
  if (checkFailure(response.status)) return Promise.reject(response);

  return response.json();
}

function checkFailure(code: number) {
  return code !== 200 && code !== 201 && code !== 204;
}
