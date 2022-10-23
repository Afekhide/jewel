import Head from "next/head";
import Logo from "../components/Logo";
import { Fragment } from "react";

const about = () => {
  return (
    <Fragment>
        <Head>
            <title>About George & Jewel Real Estate</title>
        </Head>

        <section>
            About Page
            <section>
              <Logo/>
            </section>
        </section>
    </Fragment>
  )
}

export default about;