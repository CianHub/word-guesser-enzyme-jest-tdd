import axios from 'axios';
import React from 'react';

export const getSecretWord = async (setSecretWord: React.Dispatch<string>) => {
  const res = await axios.get('../../public/words.txt');
  setSecretWord(res.data);
};

export default {
  getSecretWord,
};
