/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./configs/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://neondb_owner:npg_Fz62RKHGJOBV@ep-royal-dream-a830bpxg-pooler.eastus2.azure.neon.tech/VeloDrive?sslmode=require',
    }
  };