import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://hlqaebklfarouvzlwmsg.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhscWFlYmtsZmFyb3V2emx3bXNnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTUxNzcyMzIsImV4cCI6MjA3MDc1MzIzMn0.hYCxai84lxeFn1pY3duaH19R4Adv0ZeDLLsYi39In2s';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
