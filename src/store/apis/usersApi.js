import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { faker } from "@faker-js/faker/locale/en";

const usersApi = createApi({
  reducerPath: "users",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3120",
  }),
  endpoints(builder) {
    return {
      fetchUsers: builder.query({
        providesTags: (result, error, data) => {
          return [{ type: "users" }];
        },
        query: () => {
          return {
            url: "/users",
            method: "GET",
          };
        },
      }),
      addUser: builder.mutation({
        invalidatesTags: (result, error, data) => {
          return [{ type: "users" }];
        },
        query: () => {
          return {
            url: "/users",
            method: "POST",
            body: {
              name: faker.name.fullName(),
            },
          };
        },
      }),

      deleteUser: builder.mutation({
        invalidatesTags: (result, error, data) => {
          return [{ type: "users" }];
        },
        query: (user) => {
          return {
            url: `users/${user.id}`,
            method: "DELETE",
          };
        },
      }),
    };
  },
});

export { usersApi };

export const { useFetchUsersQuery, useAddUserMutation, useDeleteUserMutation } =
  usersApi;
