import {CSSProperties, FC} from 'react';

// Next
import Link from 'next/link';
import { useRouter } from 'next/router';

const style: CSSProperties = {
  color: '#0070f3',
  textDecoration: 'underline',
};

interface IProps {
  text: string;
  href: string;
}

export const ActiveLink: FC<IProps> = ({ text, href }) => {
  const { asPath } = useRouter();

  return (
    <Link href={href} legacyBehavior>
      <a style={asPath === href ? style : undefined}>{text}</a>
    </Link>
  );
};
