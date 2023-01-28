import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { faker } from "@faker-js/faker/locale/en";

const albumsApi = createApi({
  reducerPath: "albums",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3120",
  }),
  endpoints(builder) {
    return {
      fetchAlbums: builder.query({
        providesTags: (result, error, user) => {
          const tags = result.map((album) => {
            return { type: "album", id: album.id };
          });
          tags.push({ type: "user", id: user.id });
          return tags;
        },
        query: (user) => {
          return {
            url: "albums",
            params: {
              userID: user.id,
            },
            method: "GET",
          };
        },
      }),
      addAlbum: builder.mutation({
        invalidatesTags: (result, error, user) => {
          return [{ type: "user", id: user.id }];
        },
        query: (user) => {
          return {
            url: "albums",
            body: {
              userID: user.id,
              name: faker.commerce.productName(),
            },
            method: "POST",
          };
        },
      }),
      removeAlbum: builder.mutation({
        invalidatesTags: (result, error, album) => {
          return [{ type: "album", id: album.id }];
        },
        query: (album) => {
          return {
            url: `albums/${album.id}`,
            method: "DELETE",
          };
        },
      }),
    };
  },
});

export { albumsApi };
export const {
  useFetchAlbumsQuery,
  useAddAlbumMutation,
  useRemoveAlbumMutation,
} = albumsApi;
