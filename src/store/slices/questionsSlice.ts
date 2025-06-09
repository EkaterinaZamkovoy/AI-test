import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type FormValues = {
  childName: string;
  birthDate: Date | undefined;
  gender: string;
  parentName: string;
  emotionalSphere_one: string;
  emotionalSphere_two: string;
  emotionalSphere_three: string;
  emotionalSphere_four: string;
  socialCommunication_one: string;
  socialCommunication_two: string;
  socialCommunication_three: string;
  socialCommunication_four: string;
  selfRegulation_one: string;
  selfRegulation_two: string;
  selfRegulation_three: string;
  selfRegulation_four: string;
  selfEsteem_one: string;
  selfEsteem_two: string;
  selfEsteem_three: string;
  selfEsteem_four: string;
  generalEmotionalState: string;
  developmentFeatures: string;
  talents: string;
  specialAttention: string;
  contactedSpecialists: string;
};

const initialState: FormValues = {
  childName: '',
  birthDate: undefined,
  gender: '',
  parentName: '',
  emotionalSphere_one: '',
  emotionalSphere_two: '',
  emotionalSphere_three: '',
  emotionalSphere_four: '',
  socialCommunication_one: '',
  socialCommunication_two: '',
  socialCommunication_three: '',
  socialCommunication_four: '',
  selfRegulation_one: '',
  selfRegulation_two: '',
  selfRegulation_three: '',
  selfRegulation_four: '',
  selfEsteem_one: '',
  selfEsteem_two: '',
  selfEsteem_three: '',
  selfEsteem_four: '',
  generalEmotionalState: '',
  developmentFeatures: '',
  talents: '',
  specialAttention: '',
  contactedSpecialists: '',
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
