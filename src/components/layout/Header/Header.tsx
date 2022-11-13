import Link from 'next/link';
import styles from './Header.module.css';
import { useUser } from '@auth0/nextjs-auth0';
import { ProfileCircled } from 'iconoir-react';

export const Header = () => {
	const { user, error, isLoading } = useUser()

	if (isLoading) {
		return <div>Loading...</div>
	} else if (error) {
		return <div>{error.message}</div>
	}

	return (<header className={styles.header}>
		<nav>
			<ul>
				<Link href="/">Home</Link>
				<Link href="/about">About</Link>
				{user && <Link href="/profile"><ProfileCircled /></Link>}
				{user ? <a href="/api/auth/logout">Logout</a> : <a href="/api/auth/login">Login</a>}
			</ul>
		</nav>
	</header>);
}
