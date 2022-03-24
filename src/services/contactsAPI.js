import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://623b382446a692bd84508319.mockapi.io',
  }),
  endpoints: builder => ({
    fetchContacts: builder.query({
      query: () => `/contacts`,
    }),
  }),
});

export const { useFetchContactsQuery } = contactsApi;
