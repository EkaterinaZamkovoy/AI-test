import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const uploadApi = createApi({
  reducerPath: 'uploadApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://sirius-draw-test-94500a1b4a2f.herokuapp.com',
  }),
  endpoints: (builder) => ({
    uploadFiles: builder.mutation<{ task_id: string }, FormData>({
      query: (formData) => ({
        url: '/upload',
        method: 'POST',
        body: formData,
      }),
    }),
  }),
});

export const { useUploadFilesMutation } = uploadApi;
