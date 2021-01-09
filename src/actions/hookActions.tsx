import axios from 'axios';
import React from 'react';

export const getSecretWord = async (setSecretWord: React.Dispatch<string>) => {
  const res = await axios.get(process.env.PUBLIC_URL + 'words.txt');
  setSecretWord(res.data[Math.floor(Math.random() * res.data.length)]);
};

export default {
  getSecretWord,
};
