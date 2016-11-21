import * as keytar from 'keytar'

export function setItem(key: string, login: string, value: string) {
  keytar.replacePassword(key, login, value)
}

export function getItem(key: string, login: string): string {
  return keytar.getPassword(key, login)
}
