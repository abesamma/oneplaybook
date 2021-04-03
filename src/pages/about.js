import React from 'react';
import Layout from '../components/layout/Layout';
import CtaButton from '../components/CtaButton';
import MetaImg from '../assets/meta_image.png';
import Seo from '../components/Seo';

export default () => (
  <>
    <Seo
      href="https://oneplaybook.app"
      title="Profit with Wikis | Oneplaybook"
      metaImg={MetaImg}
      description="Oneplaybook: manage your knowledge and work better with TiddlyWiki."
    />
    <Layout>
      <section className="pt-12">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl lg:text-5xl font-header">About Oneplaybook</h1>
        </div>
        <div className="container mx-auto px-8 mt-4 text-center lg:text-justify">
          <p className="my-2">
            <span className="primary-text-bg font-bold">Oneplaybook</span> is a web app that allows
            you to quickly get started with TiddlyWiki, the open source non-linear note taking app,
            for personal as well as for teams. Unlink other software services,{' '}
            <span className="primary-text-bg font-bold">Oneplaybook</span> offers you ways to keep
            data on servers/cloud services you trust instead of forcing you into our own solution.
            In fact, we don&apos;t have any servers to begin with for you to worry about!
          </p>
          <p className="my-2">
            Instead, this web app acts as an offline-ready go-between for you and your self hosted
            data, giving you a managed app service experience while keeping your data firmly in your
            hands.
          </p>
          <p className="my-2">
            We at <span className="primary-text-bg font-bold">Oneplaybook</span> are also constantly
            creating new ways to organize and collaborate on knowledge between individuals and
            teams. We welcome you to use our projects for free, and we also welcome you to the wider
            TiddlyWiki community!
          </p>
          <div className="mt-6 flex justify-center">
            <CtaButton className="primary font-body font-bold" size="lg">
              Join Waitlist
            </CtaButton>
          </div>
        </div>
      </section>
    </Layout>
  </>
);
