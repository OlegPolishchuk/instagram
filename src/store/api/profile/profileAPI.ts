import { api, TAGS } from '@/store/api/api';
import {
  Avatar,
  FakePhotos,
  Profile,
  ProfileUpdateData,
} from '@/store/api/profile/types';

const URL = 'users/profile';

export const profileAPI = api.injectEndpoints({
  endpoints: build => ({
    getProfile: build.query<Profile, void>({
      query: () => ({
        url: URL,
      }),
      providesTags: () => [TAGS.profile],
    }),

    updateProfile: build.mutation({
      query: (data: ProfileUpdateData) => ({
        url: URL,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: [TAGS.profile],
    }),

    uploadAvatar: build.mutation<Avatar[], FormData>({
      query: (file: FormData) => ({
        url: `${URL}/avatar`,
        method: 'POST',
        body: file,
      }),
      invalidatesTags: [TAGS.profile],
    }),

    deleteAvatar: build.mutation({
      query: () => ({
        url: `${URL}/avatar`,
        method: 'DELETE',
      }),
      invalidatesTags: [TAGS.profile],
    }),

    getFakePhotos: build.query<FakePhotos[], void>({
      query: () => ({
        url: 'https://jsonplaceholder.typicode.com/photos?_limit=9',
      }),
    }),
  }),
});

export const {
  useGetProfileQuery,
  useUpdateProfileMutation,
  useUploadAvatarMutation,
  useDeleteAvatarMutation,
  useGetFakePhotosQuery,
} = profileAPI;

export const { deleteAvatar, uploadAvatar, updateProfile, getProfile } =
  profileAPI.endpoints;
