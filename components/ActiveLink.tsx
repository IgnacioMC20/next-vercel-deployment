import Link from "next/link"
import { useRouter } from "next/router"
import { CSSProperties, FC } from "react";

// afuera de la funcion para que no se renderize cada ver que el componente lo haga
const style: CSSProperties = {
    color: '#b103fc',
    textDecoration: 'underline'
}

interface props {
    text: string;
    href: string;
}

export const ActiveLink: FC<props> = ({ text, href }) => {

    const router = useRouter();

    return (
        <Link href={href}>
            <a style={ router.asPath === href ? style : undefined}>{text}</a>
        </Link>
    )
}
