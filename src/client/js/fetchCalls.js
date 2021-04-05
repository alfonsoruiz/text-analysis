const postData = async (url, data) => {
  const postOptions = {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({data: data})
  };
  
  try {
    const res = await fetch(url, postOptions);
    const resData = await res.json();
    return resData;
  } catch(e) {
    console.error(e);
  }
};

export {
  postData
}