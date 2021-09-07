/* eslint-disable jsx-a11y/anchor-has-content */
import { forwardRef } from 'react'
import { useRouter } from 'next/router'
import clsx from 'clsx'
import MuiLink from '@material-ui/core/Link'
import NextLink from 'next/link'

const NextComposed = forwardRef(function NextComposed(props, ref) {
    const { as, href, ...other } = props

    return (
        <NextLink href={href} as={as}>
            <a ref={ref} {...other} />
        </NextLink>
    )
})

// A styled version of the Next.js Link component:
// https://nextjs.org/docs/#with-link
const StyledLink = (props) => {
    const {
        href,
        activeClassName = 'active',
        className: classNameProps,
        innerRef,
        naked,
        ...other
    } = props

    const router = useRouter()
    const pathname = typeof href === 'string' ? href : href.pathname
    const className = clsx(classNameProps, {
        [activeClassName]: router.pathname === pathname && activeClassName,
    })

    if (naked) {
        return (
            <NextComposed
                className={className}
                ref={innerRef}
                href={href}
                {...other}
            />
        )
    }

    return (
        <MuiLink
            component={NextComposed}
            className={className}
            ref={innerRef}
            href={href}
            {...other}
        />
    )
}

const Link = forwardRef((props, ref) => <StyledLink {...props} innerRef={ref} />);

Link.displayName = 'Link';

export default Link;
