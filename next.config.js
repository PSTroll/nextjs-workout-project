/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    pageUrl: "http://localhost:3000",
    db_key:
      "mongodb+srv://pstrollyt:vDsLnVyhxS1s0aUU@orders.2pnybem.mongodb.net/orders?retryWrites=true&w=majority",
  },
  reactStrictMode: false,
};

module.exports = nextConfig;
