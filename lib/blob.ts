import { put, del, list } from '@vercel/blob'

export async function uploadImage(file: File) {
  const blob = await put(file.name, file, {
    access: 'public',
  })
  return blob
}

export async function deleteImage(url: string) {
  await del(url)
}

export async function listImages() {
  const { blobs } = await list()
  return blobs
}
