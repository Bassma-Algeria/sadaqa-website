const connectionErrorHandler = error => {
  if (error.message === 'invalid user_id') {
    console.log('connot connect the socket, invalid userId');
  }
  console.log(error);
};

export { connectionErrorHandler };
