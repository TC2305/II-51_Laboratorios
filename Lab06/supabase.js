import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const supabaseUrl = "https://dnlqfaqmaolvqkzekntk.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRubHFmYXFtYW9sdnFremVrbnRrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE0Njc5NjQsImV4cCI6MjA4NzA0Mzk2NH0.p-9uIM3sHOpKGDZJ27sJAz2pbmFtp7TJxsBW5EX1K6Y";

export const supabase = createClient(supabaseUrl, supabaseKey);