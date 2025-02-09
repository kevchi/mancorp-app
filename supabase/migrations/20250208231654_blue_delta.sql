/*
  # Initial Schema Setup

  1. New Tables
    - users
    - cleaning_requests
    - cleaning_jobs
    - teams
    
  2. Security
    - Enable RLS on all tables
    - Add policies for each role
*/

-- Users table
CREATE TABLE IF NOT EXISTS users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  role TEXT NOT NULL CHECK (role IN ('customer', 'employee', 'supervisor')),
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Enable RLS
ALTER TABLE users ENABLE ROW LEVEL SECURITY;

-- Policies
CREATE POLICY "Users can read own data"
  ON users
  FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

-- Cleaning Requests table
CREATE TABLE IF NOT EXISTS cleaning_requests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  client_id UUID REFERENCES users(id),
  service_type TEXT NOT NULL CHECK (service_type IN ('regular', 'deep', 'specialized')),
  property_size INTEGER NOT NULL,
  preferred_date DATE NOT NULL,
  preferred_time TEXT NOT NULL,
  special_instructions TEXT,
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'scheduled', 'rejected')),
  created_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE cleaning_requests ENABLE ROW LEVEL SECURITY;

-- Policies for cleaning_requests
CREATE POLICY "Customers can create requests"
  ON cleaning_requests
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = client_id AND role() = 'customer');

CREATE POLICY "Customers can view own requests"
  ON cleaning_requests
  FOR SELECT
  TO authenticated
  USING (
    (auth.uid() = client_id AND role() = 'customer') OR
    (role() IN ('employee', 'supervisor'))
  );

-- Teams table
CREATE TABLE IF NOT EXISTS teams (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  supervisor_id UUID REFERENCES users(id),
  created_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE teams ENABLE ROW LEVEL SECURITY;

-- Policies for teams
CREATE POLICY "Supervisors can manage teams"
  ON teams
  FOR ALL
  TO authenticated
  USING (role() = 'supervisor');

CREATE POLICY "Employees can view teams"
  ON teams
  FOR SELECT
  TO authenticated
  USING (role() = 'employee');

-- Cleaning Jobs table
CREATE TABLE IF NOT EXISTS cleaning_jobs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  request_id UUID REFERENCES cleaning_requests(id),
  assigned_team_id UUID REFERENCES teams(id),
  scheduled_date DATE NOT NULL,
  start_time TIME NOT NULL,
  end_time TIME NOT NULL,
  status TEXT NOT NULL DEFAULT 'scheduled' CHECK (status IN ('scheduled', 'in-progress', 'completed', 'cancelled')),
  priority TEXT NOT NULL DEFAULT 'medium' CHECK (priority IN ('low', 'medium', 'high')),
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE cleaning_jobs ENABLE ROW LEVEL SECURITY;

-- Policies for cleaning_jobs
CREATE POLICY "Supervisors can manage jobs"
  ON cleaning_jobs
  FOR ALL
  TO authenticated
  USING (role() = 'supervisor');

CREATE POLICY "Employees can view and update assigned jobs"
  ON cleaning_jobs
  FOR SELECT
  TO authenticated
  USING (
    role() = 'employee' AND 
    EXISTS (
      SELECT 1 FROM teams 
      WHERE teams.id = cleaning_jobs.assigned_team_id
    )
  );

CREATE POLICY "Customers can view own jobs"
  ON cleaning_jobs
  FOR SELECT
  TO authenticated
  USING (
    role() = 'customer' AND
    EXISTS (
      SELECT 1 FROM cleaning_requests
      WHERE cleaning_requests.id = cleaning_jobs.request_id
      AND cleaning_requests.client_id = auth.uid()
    )
  );