import type { MDXComponents } from 'mdx/types'
import Alert from '@/app/components/mdx/alert'
import { headingComponents } from '@/app/components/mdx/heading'

const components: Readonly<MDXComponents> = {
  Alert,
  ...headingComponents,
}

export default components
