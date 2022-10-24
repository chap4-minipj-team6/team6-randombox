import React, { useCallback, useState } from 'react';

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const handler = useCallback((e) => {
    const blank = /\s/;
    if (blank.test(e.target.value) === true) {
      alert('공백은 사용할 수 없습니다.');
      return;
    }
    setValue(e.target.value);
  }, []);

  return [value, handler, setValue];
};
export default useInput;

// import React, { useCallback, useState } from 'react';

// const useInput = (initialForm) => {
//   const [form, setForm] = useState(initialForm);

//   const handler = useCallback((e) => {
//     const { name, value } = e.target;
//     setForm((form) => ({ ...form, [name]: value }));
//   }, []);
//   //useInput(초기값=initialForm)일 때 reset은 SetForm을 불러오는  콜백함수
//   const reset = useCallback(() => setForm(initialForm), [initialForm]);
//   return [form, handler, reset];
// };

// export default useInput;
