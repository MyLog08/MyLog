import supabase from '../supabase/supabase';

export const handleAuthSignUp = async (email, password) => {
  try {
    const { data, error } = await supabase.auth.signUp({
      email,
      password
    });

    if (error) {
      throw error;
    }

    return data;
  } catch (err) {
    console.error(err);
  }
};

export const handleAuthLogin = async (email, password) => {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    });

    if (error) {
      throw error;
    }

    return data;
  } catch (err) {
    console.error(err);
  }
};

export const handleUserRegisterInsert = async (object) => {
  const { data, error } = await supabase.from('Users').insert(object);

  if (error) {
    alert(error.message);
    return;
  }

  return data;
};

export const handleUserFindByEmailIsExist = async (email, social) => {
  const { data, error } = await supabase.from('Users').update({ social }).eq('email', email);

  if (error) {
    alert(error.message);
    return;
  }

  return data;
};

export const handleSignInOAuth = async (provider) => {
  const { error } = await supabase.auth.signInWithOAuth({
    provider,
    options: {
      redirectTo: `http://localhost:5173/auth/loading/${provider}`
    }
  });

  if (error) {
    console.error(error);
  }
};
