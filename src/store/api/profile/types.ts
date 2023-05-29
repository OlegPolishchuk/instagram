export interface Avatars {
  url: string;
  width: number;
  height: number;
  fileSize: number;
}

export interface Profile {
  id: number;
  userName: string;
  firstName: string;
  lastName: string;
  city: string;
  dateOfBirth: string;
  aboutMe: string;
  avatars: Avatars[];
}

export interface ProfileUpdateData {
  userName: string;
  firstName: string;
  lastName: string;
  city: string;
  dateOfBirth: string;
  aboutMe: string;
}

export interface FakePhotos {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}
