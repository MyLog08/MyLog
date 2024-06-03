import supabase from '../../supabase/supabase';

const validateCheckDuplicate = async (field, value) => {
  const { data, error } = await supabase.from('Users').select('count', { count: 'exact' }).eq(field, value);

  if (error) {
    throw new Error(error.message);
  }

  return data[0].count >= 1;
};

export default validateCheckDuplicate;
