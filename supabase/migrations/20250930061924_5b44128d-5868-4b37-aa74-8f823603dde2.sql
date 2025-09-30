-- Create early access signup table
CREATE TABLE public.early_access_signups (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  source TEXT DEFAULT 'landing_page'
);

-- Enable Row Level Security
ALTER TABLE public.early_access_signups ENABLE ROW LEVEL SECURITY;

-- Create policy for public insertions (anyone can sign up)
CREATE POLICY "Anyone can sign up for early access" 
ON public.early_access_signups 
FOR INSERT 
WITH CHECK (true);

-- Create policy for reading signups (only authenticated users or admin)
CREATE POLICY "Admin can view early access signups" 
ON public.early_access_signups 
FOR SELECT 
USING (false); -- Will be updated when admin access is needed

-- Create index for email lookups
CREATE INDEX idx_early_access_email ON public.early_access_signups(email);

-- Create index for created_at for analytics
CREATE INDEX idx_early_access_created_at ON public.early_access_signups(created_at);