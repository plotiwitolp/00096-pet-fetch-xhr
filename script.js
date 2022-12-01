const requestURL = 'https://jsonplaceholder.typicode.com/users';

function sendRequest(request) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', request);

    xhr.responseType = 'json'; // or JSON.parse(xhr.response)

    xhr.onload = () => {
      // console.log(JSON.parse(xhr.response)); or ---> xhr.responseType = 'json';
      if (xhr.status >= 400) {
        // error
        console.error(xhr.response);
      } else {
        console.log(xhr.response);
      }
    };

    xhr.onerror = () => {
      console.log(xhr.response);
    };

    xhr.send();
  });
}
sendRequest(requestURL);
