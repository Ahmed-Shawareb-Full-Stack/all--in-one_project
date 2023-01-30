import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { faker } from "@faker-js/faker/locale/en";

const photosApi = createApi({
  reducerPath: "AlbumsPhotos",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3120",
  }),
  endpoints(builder) {
    return {
      fetchPhotos: builder.query({
        providesTags: (results, error, album) => {
          const tags = results.map((photo) => {
            return { type: "photo", id: photo.id };
          });
          tags.push({ type: "album", id: album.id });
          return tags;
        },
        query: (album) => {
          return {
            url: `photos`,
            params: {
              albumID: `${album.id}`,
            },
            method: "GET",
          };
        },
      }),
      addPhoto: builder.mutation({
        invalidatesTags: (result, error, album) => {
          return [{ type: "album", id: album.id }];
        },
        query: (album) => {
          return {
            url: "photos",
            method: "POST",
            body: {
              albumID: `${album.id}`,
              url: faker.image.nature(150, 150, true),
            },
          };
        },
      }),
      deletePhoto: builder.mutation({
        invalidatesTags: (result, error, photo) => {
          return [{ type: "photo", id: photo.id }];
        },
        query: (photo) => {
          return {
            url: `photos/${photo.id}`,
            method: "DELETE",
          };
        },
      }),
    };
  },
});

export { photosApi };

export const {
  useFetchPhotosQuery,
  useAddPhotoMutation,
  useDeletePhotoMutation,
} = photosApi;
