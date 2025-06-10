import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type FormValues = {
  childName: string;
  childDOB: string | null;
  childGender: string;
  parentName: string;

  q1_1: string;
  q1_2: string;
  q1_3: string;
  q1_4: string;
  q1_5: string;
  q1_6: string;
  q1_7: string;
  q1_8: string;
  q1_9: string;
  q1_10: string;

  q2_1: string;
  q2_2: string;
  q2_3: string;
  q2_4: string;
  q2_5: string;
  q2_6: string;
  q2_7: string;
  q2_8: string;
  q2_9: string;
  q2_10: string;

  q3_1: string;
  q3_2: string;
  q3_3: string;
  q3_4: string;
  q3_5: string;
  q3_6: string;
  q3_7: string;
  q3_8: string;
  q3_9: string;
  q3_10: string;
  q4_1: string;
  q4_2: string;
  q4_3: string;
  q4_4: string;
  q4_5: string;
  q4_6: string;
  q4_7: string;
  q4_8: string;
  q4_9: string;
  q4_10: string;
  emotionalState: string;
};

const initialState: FormValues = {
  childName: '',
  childDOB: null,
  childGender: '',
  parentName: '',

  q1_1: '',
  q1_2: '',
  q1_3: '',
  q1_4: '',
  q1_5: '',
  q1_6: '',
  q1_7: '',
  q1_8: '',
  q1_9: '',
  q1_10: '',

  q2_1: '',
  q2_2: '',
  q2_3: '',
  q2_4: '',
  q2_5: '',
  q2_6: '',
  q2_7: '',
  q2_8: '',
  q2_9: '',
  q2_10: '',

  q3_1: '',
  q3_2: '',
  q3_3: '',
  q3_4: '',
  q3_5: '',
  q3_6: '',
  q3_7: '',
  q3_8: '',
  q3_9: '',
  q3_10: '',
  q4_1: '',
  q4_2: '',
  q4_3: '',
  q4_4: '',
  q4_5: '',
  q4_6: '',
  q4_7: '',
  q4_8: '',
  q4_9: '',
  q4_10: '',
  emotionalState: '',
};

const questionsSlice = createSlice({
  name: 'questions',
  initialState,
  reducers: {
    saveAnswers(state, action: PayloadAction<FormValues>) {
      return { ...action.payload };
    },
    resetAnswers() {
      return initialState;
    },
  },
});

export const { saveAnswers, resetAnswers } = questionsSlice.actions;
export default questionsSlice.reducer;
