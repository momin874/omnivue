require('dotenv').config();
const { Sequelize } = require('sequelize');
const { createClient } = require('@supabase/supabase-js');

const { DB_NAME, SUPABASE_URL, SUPABASE_KEY } = process.env;

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

(async () => {
  try {
    // Step 1: Connect to the default PostgreSQL database (often 'postgres' or any default DB)
    const { data, error } = await supabase.rpc('check_database', {
      db_name: DB_NAME, // You may create a stored procedure in Supabase to check the DB existence
    });

    if (error) {
      console.log('Error checking database:', error.message);
    } else {
      if (data) {
        console.log(`Database "${DB_NAME}" exists.`);
      } else {
        console.log(`Database "${DB_NAME}" does not exist. Please create it via Supabase dashboard.`);
      }
    }
    module.exports = supabase;

  } catch (error) {
    console.error('Error during database check/creation:', error);
  }
})();
