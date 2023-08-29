export const checkResponse = (xhr: XMLHttpRequest) => {
  if (xhr.status !== 200) {
    throw new Error(
      `Server answered with code ${xhr.status}${
        xhr.response.reason ? `, ${JSON.parse(xhr.response.reason)}` : ''
      }.`,
    );
  }
  return xhr.response;
};
