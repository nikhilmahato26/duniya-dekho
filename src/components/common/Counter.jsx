import { useCountUp } from '@/hooks/useCountUp'
import { formatINR } from '@/lib/utils'

export function Counter({ value, suffix = '', className }) {
  const [ref, current] = useCountUp(value)
  return (
    <span ref={ref} className={className}>
      {formatINR(current)}
      {suffix}
    </span>
  )
}
