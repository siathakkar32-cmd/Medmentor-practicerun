import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const SUPABASE_URL = "https://xyuijponokewnavycdgr.supabase.co/rest/v1/";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh5dWlqcG9ub2tld25hdnljZGdyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODEyMjM4OTAsImV4cCI6MjA5Njc5OTg5MH0.A0KQlmB4FxfWeLjpILjsyJoQBuXtcBb9KiHYKAOxB8M";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);