import { api } from '@/store/api/api';
import { FakePhotos, Profile, ProfileUpdateData } from '@/store/api/profile/types';

const URL = 'users/profile';

export const profileAPI = api.injectEndpoints({
  endpoints: build => ({
    getProfile: build.query<Profile, void>({
      query: () => ({
        url: URL,
      }),
    }),

    updateProfile: build.mutation({
      query: (data: ProfileUpdateData) => ({
        url: URL,
        method: 'PUT',
        body: { data },
      }),
    }),

    uploadAvatar: build.mutation({
      query: (file: FormData) => ({
        url: `${URL}/avatar`,
        method: 'POST',
        body: { file },
      }),
    }),

    deleteAvatar: build.mutation({
      query: () => ({
        url: `${URL}/avatar`,
        method: 'DELETE',
      }),
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
