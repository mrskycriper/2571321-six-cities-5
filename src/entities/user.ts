export type UserStatus = 'Pro';

export type UserEntity = {
  avatarImageSrc: string,
  name: string,
  status?: UserStatus
}
