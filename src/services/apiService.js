export class ApiService {
  constructor() {}

  async gptTextRequest(message) {
    return await fetch("http://localhost:3000/gpt-voice", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Authorization: "Bearer ",
      },
      crossorigin: false,
      mode: "cors",
      body: JSON.stringify({
        text: message,
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        return data;
      })
      .catch((error) => {
        throw Error(error.message);
      });
    // const result = "só bora " + message;
  }
}
