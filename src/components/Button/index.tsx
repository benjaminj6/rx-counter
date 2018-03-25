import * as React from 'react'
import * as cx from 'classnames'

type Props = React.HTMLProps<HTMLButtonElement> & {
  bg?: string
}

const Button = (props: Props) => {
  return (
    <button
      {...props}
      className={cx(
        'py-4',
        'px-8',
        'rounded-sm',
        props.bg && `bg-${props.bg}`,
        props.className
      )}
    >
      {props.children}
    </button>
  )
}

export default Button
