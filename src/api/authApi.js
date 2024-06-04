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
