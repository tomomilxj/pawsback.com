-- Create profiles table for user management
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT NOT NULL,
  display_name TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create pets table to store virtual pet information
CREATE TABLE IF NOT EXISTS public.pets (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  personality TEXT NOT NULL CHECK (personality IN ('warm', 'playful', 'calm')),
  species TEXT NOT NULL CHECK (species IN ('dog', 'cat')),
  image_url TEXT,
  model_data JSONB, -- Store AI-generated model data
  voice_data JSONB, -- Store voice clone data with emotion variants
  status TEXT DEFAULT 'processing' CHECK (status IN ('processing', 'ready', 'error')),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create interactions table to track user-pet interactions
CREATE TABLE IF NOT EXISTS public.interactions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  pet_id UUID NOT NULL REFERENCES public.pets(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  interaction_type TEXT NOT NULL CHECK (interaction_type IN ('feed', 'pet_head', 'pet_belly', 'talk')),
  response_text TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create memories table for custom user memories
CREATE TABLE IF NOT EXISTS public.memories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  pet_id UUID NOT NULL REFERENCES public.pets(id) ON DELETE CASCADE,
  memory_type TEXT NOT NULL CHECK (memory_type IN ('favorite_food', 'special_moment', 'custom')),
  title TEXT NOT NULL,
  description TEXT,
  image_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create subscriptions table for payment tracking
CREATE TABLE IF NOT EXISTS public.subscriptions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  stripe_customer_id TEXT,
  stripe_subscription_id TEXT,
  plan_type TEXT NOT NULL CHECK (plan_type IN ('free', 'basic', 'premium')),
  status TEXT NOT NULL CHECK (status IN ('active', 'canceled', 'expired')),
  current_period_end TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.pets ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.interactions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.memories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.subscriptions ENABLE ROW LEVEL SECURITY;

-- RLS Policies for profiles
CREATE POLICY "Users can view their own profile" ON public.profiles
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can insert their own profile" ON public.profiles
  FOR INSERT WITH CHECK (auth.uid() = id);

CREATE POLICY "Users can update their own profile" ON public.profiles
  FOR UPDATE USING (auth.uid() = id);

-- RLS Policies for pets
CREATE POLICY "Users can view their own pets" ON public.pets
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own pets" ON public.pets
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own pets" ON public.pets
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own pets" ON public.pets
  FOR DELETE USING (auth.uid() = user_id);

-- RLS Policies for interactions
CREATE POLICY "Users can view their own interactions" ON public.interactions
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own interactions" ON public.interactions
  FOR INSERT WITH CHECK (auth.uid() = user_id);

-- RLS Policies for memories
CREATE POLICY "Users can view memories for their pets" ON public.memories
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM public.pets 
      WHERE pets.id = memories.pet_id 
      AND pets.user_id = auth.uid()
    )
  );

CREATE POLICY "Users can insert memories for their pets" ON public.memories
  FOR INSERT WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.pets 
      WHERE pets.id = memories.pet_id 
      AND pets.user_id = auth.uid()
    )
  );

CREATE POLICY "Users can update memories for their pets" ON public.memories
  FOR UPDATE USING (
    EXISTS (
      SELECT 1 FROM public.pets 
      WHERE pets.id = memories.pet_id 
      AND pets.user_id = auth.uid()
    )
  );

CREATE POLICY "Users can delete memories for their pets" ON public.memories
  FOR DELETE USING (
    EXISTS (
      SELECT 1 FROM public.pets 
      WHERE pets.id = memories.pet_id 
      AND pets.user_id = auth.uid()
    )
  );

-- RLS Policies for subscriptions
CREATE POLICY "Users can view their own subscription" ON public.subscriptions
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own subscription" ON public.subscriptions
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own subscription" ON public.subscriptions
  FOR UPDATE USING (auth.uid() = user_id);
