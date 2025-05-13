import { browse } from 'xe-utils'

export const isMobile = (): boolean => {
  return browse().isMobile
}
