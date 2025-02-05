import type { MDXComponents } from 'mdx/types'
import Alert from '@/app/components/md/alert'

const components: Readonly<MDXComponents> = {
  Alert,
  h1: ({ children }) => (
    <h1 className="text-4xl my-8">
      #
      {children}
    </h1>
  ),
}

export default components
