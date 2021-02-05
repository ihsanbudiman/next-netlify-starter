import { Fragment } from 'react';
import Link from 'next/link';
import ButtonHeader from './ButtonHeader';

const Header = (props) => {
  return (
    <Fragment>
      <div className="mt-4 d-flex justify-content-center headerList">
        <ButtonHeader>
          <Link href="/" className="text-dark">
            <span>Home</span>
          </Link>
        </ButtonHeader>

        <ButtonHeader>
          <Link href="/about">
            <span>About</span>
          </Link>
        </ButtonHeader>

        <ButtonHeader>Skill</ButtonHeader>
        <ButtonHeader>Projects</ButtonHeader>
      </div>
    </Fragment>
  );
};

export default Header;
