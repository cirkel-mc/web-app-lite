import { usePathname } from 'next/navigation'
import {
  EXCLUDE_TOPNAV_ROUTES,
  EXCLUDE_BOTTOMNAV_ROUTES,
  INCLUDE_MUTATION_ROUTES
} from '../../constants/navigation'

export default function useNavigation() {
  const path = usePathname()
  const isHome = path === '/'
  const isExclude = EXCLUDE_TOPNAV_ROUTES.some((item) => item === path)
  const isExcludeBottom = EXCLUDE_BOTTOMNAV_ROUTES.some(
    (item) => item === path || path.startsWith(item),
  )
  const isMutation = INCLUDE_MUTATION_ROUTES.some((item) => item === path)

  const generateTitle = () => {
    const paths = path.split('/').slice(1)
    if (paths.length > 1) {
      return paths[paths.length - 1]
        .split('-')
        .map((item) => {
          const first = item.charAt(0).toLocaleUpperCase()

          return first.concat(item.slice(1))
        })
        .join(' ')
    }

    const pathname = path.slice(1).split('-')

    return pathname
      .map((item) => {
        const first = item.charAt(0).toLocaleUpperCase()

        return first.concat(item.slice(1))
      })
      .join(' ')
  }

  return {
    isHome,
    isExclude,
    isExcludeBottom,
    isMutation,
    generateTitle,
  }
}
