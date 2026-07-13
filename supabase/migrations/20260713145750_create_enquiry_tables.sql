/*
# Create enquiry tables for Sri Sharada School website

1. Purpose
   Stores public form submissions from the school website — contact messages,
   admission enquiries, and fee enquiries. The site has no sign-in, so all
   inserts come from the anon-key frontend.

2. New Tables
   - `contact_messages`: general contact form submissions
     - id, name, email, phone, subject, message, created_at
   - `admission_enquiries`: online admission form submissions
     - id, student_name, parent_name, email, phone, grade_applying, dob,
       current_school, message, created_at
   - `fee_enquiries`: fee enquiry form submissions
     - id, parent_name, email, phone, grade_interested, message, created_at

3. Security
   - RLS enabled on all three tables.
   - INSERT allowed for anon + authenticated (public forms).
   - SELECT/UPDATE/DELETE restricted to authenticated (school admin only);
     anon cannot read back submitted data.
*/

CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  subject text,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_contact" ON contact_messages;
CREATE POLICY "anon_insert_contact" ON contact_messages FOR INSERT
  TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "auth_select_contact" ON contact_messages;
CREATE POLICY "auth_select_contact" ON contact_messages FOR SELECT
  TO authenticated USING (true);

DROP POLICY IF EXISTS "auth_update_contact" ON contact_messages;
CREATE POLICY "auth_update_contact" ON contact_messages FOR UPDATE
  TO authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "auth_delete_contact" ON contact_messages;
CREATE POLICY "auth_delete_contact" ON contact_messages FOR DELETE
  TO authenticated USING (true);

CREATE TABLE IF NOT EXISTS admission_enquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  student_name text NOT NULL,
  parent_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  grade_applying text NOT NULL,
  dob date,
  current_school text,
  message text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE admission_enquiries ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_admission" ON admission_enquiries;
CREATE POLICY "anon_insert_admission" ON admission_enquiries FOR INSERT
  TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "auth_select_admission" ON admission_enquiries;
CREATE POLICY "auth_select_admission" ON admission_enquiries FOR SELECT
  TO authenticated USING (true);

DROP POLICY IF EXISTS "auth_update_admission" ON admission_enquiries;
CREATE POLICY "auth_update_admission" ON admission_enquiries FOR UPDATE
  TO authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "auth_delete_admission" ON admission_enquiries;
CREATE POLICY "auth_delete_admission" ON admission_enquiries FOR DELETE
  TO authenticated USING (true);

CREATE TABLE IF NOT EXISTS fee_enquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  parent_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  grade_interested text NOT NULL,
  message text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE fee_enquiries ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_fee" ON fee_enquiries;
CREATE POLICY "anon_insert_fee" ON fee_enquiries FOR INSERT
  TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "auth_select_fee" ON fee_enquiries;
CREATE POLICY "auth_select_fee" ON fee_enquiries FOR SELECT
  TO authenticated USING (true);

DROP POLICY IF EXISTS "auth_update_fee" ON fee_enquiries;
CREATE POLICY "auth_update_fee" ON fee_enquiries FOR UPDATE
  TO authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "auth_delete_fee" ON fee_enquiries;
CREATE POLICY "auth_delete_fee" ON fee_enquiries FOR DELETE
  TO authenticated USING (true);
