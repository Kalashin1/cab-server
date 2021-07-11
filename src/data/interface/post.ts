/**
 * @typedef Post represents a post
 * @property id which is a sting
 * @property media which is an array of media items
 * @meta Meta property of the post
 * @property text which is the body of the text
 */
export type Post = {
  id?: string,
  media?: Media<_music | _video | _picture>[]
  date: string,
  uid: string,
  tags: string[],
  text: string
}


export type _music = 'mp3'
export type _video = 'mp4' | 'mkv'
export type _picture = 'jpeg' | 'jpg' | 'png' | 'gif' | 'svg'

export type Media<Type extends string> = {
  type: Type,
  src: string,
}

