
import { ElementProps } from 'react-html-props';
// import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';

export type PageLayoutProps = ElementProps;
export const PageLayout = ({children, ...props}: PageLayoutProps) => {
	return (<>
		<Header />
		{children}
		{/* <Footer /> */}
	</>);
}
