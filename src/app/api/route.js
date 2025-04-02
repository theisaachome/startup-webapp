
export function GET(request) {
  console.log(request);
  return new Response("Hello, Next.js!", {
    status: 200,
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
// This is a POST request handler
// export default function POST(){}