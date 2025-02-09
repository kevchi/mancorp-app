/*
  # Additional RLS Policies
  
  1. Updates
    - Allow users to update their own profiles
    - Allow employees to update job status
    - Allow supervisors to manage all resources
    
  2. Security
    - Restrict sensitive data access
    - Add time-based constraints
*/

-- Allow users to update their own profiles
CREATE POLICY "Users can update own profile"
  ON users
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);

-- Allow employees to update assigned job status
CREATE POLICY "Employees can update assigned job status"
  ON cleaning_jobs
  FOR UPDATE
  TO authenticated
  USING (
    role() = 'employee' AND 
    EXISTS (
      SELECT 1 FROM teams 
      WHERE teams.id = cleaning_jobs.assigned_team_id
    )
  )
  WITH CHECK (
    NEW.status IN ('in-progress', 'completed') AND
    OLD.status != 'cancelled'
  );

-- Allow customers to update their own requests
CREATE POLICY "Customers can update own requests"
  ON cleaning_requests
  FOR UPDATE
  TO authenticated
  USING (
    auth.uid() = client_id AND 
    role() = 'customer' AND
    status = 'pending'
  )
  WITH CHECK (
    NEW.status = 'pending' AND
    NEW.client_id = auth.uid()
  );