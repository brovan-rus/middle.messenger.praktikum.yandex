export const checkResponse = (xhr: XMLHttpRequest) => {
  return xhr.status === 200
    ? xhr.response
    : new Error(
        `Server answered with code ${xhr.status}, ${JSON.parse(
          xhr.response.reason,
        )}`,
      );
};
