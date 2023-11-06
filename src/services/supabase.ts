// Initialize the client with your Supabase project details
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Function to fetch data from a table
const fetchCards = async (tableName: string) => {
  const { data, error } = await supabase.from(tableName).select();

  if (error) {
    console.error('Error fetching data:', error);
    return null; // or handle the error as you see fit
  }

  return data;
};

export default fetchCards;
