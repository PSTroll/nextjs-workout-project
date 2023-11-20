/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    DB_KEY:
      "mongodb+srv://pstrollyt:vDsLnVyhxS1s0aUU@orders.2pnybem.mongodb.net/orders?retryWrites=true&w=majority",
    NEXT_PUBLIC_STRIPE_KEY:
      "pk_test_51OEUxDJLjyaymvhUCjwQdxrB0EoNl9FTt18b9JKTbXSn0ZbJzx8tzhLdd6OnMhTJOD9bshwRCG4cfB3bEw3l0EjB00iRbGCZaU",
  },
  reactStrictMode: false,
};

module.exports = nextConfig;
