import { NextPage } from 'next';
import Link from 'next/link';
import React from 'react';
import { PageDiv } from '../../components/divs';
import { ArrowIcon } from '../../components/icons/arrow';
import { Exec } from '../../components/layouts/exec';
import { Footer } from '../../components/navs/footer';
import { Header } from '../../components/navs/header';
import { BackButtonAnchor } from '../../components/texts';
import { ROUTES } from '../../constants/routes';

const IndexPage: NextPage = () => {
  return (
    <PageDiv>
      <Header />
      <Link passHref href={ROUTES.DOCS.INDEX}>
        <BackButtonAnchor>
          <ArrowIcon />
          &nbsp;&nbsp;VIEW DOCS HOME
        </BackButtonAnchor>
      </Link>
      <br />
      <br />
      <Exec />
      <Footer />
    </PageDiv>
  );
};
export default React.memo(IndexPage);
