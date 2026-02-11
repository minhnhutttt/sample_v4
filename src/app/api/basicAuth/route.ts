export const GET = async () => {
  return new Response(`Auth Required.`, {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Secure Area"',
    },
  });
};
