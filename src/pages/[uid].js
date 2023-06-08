import Head from "next/head";
import * as prismic from "@prismicio/client";
import { SliceZone } from "@prismicio/react";
import {useEffect, useLayoutEffect} from 'react';
import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { Layout } from "@/components/Layout";

const Page = ({ page, navigation, settings }) => {

  useEffect(() => {
    window.derPower();
    console.log("derpower")

    if(typeof window.derPower === 'function') {
      window.derPower();
      console.log("derpower")
    }
  }, [page]);

  useLayoutEffect(()=>{
    console.log("derpower2")
  },[])

  return (
    <Layout navigation={navigation} settings={settings}>
      <Head>
        <title>
          {prismic.asText(page.data.title)} |{" "}
          {prismic.asText(settings.data.siteTitle)}
        </title>
      </Head>
      <SliceZone slices={page.data.slices} components={components} />



    </Layout>
  );
};

export default Page;

export async function getStaticProps({ params, locale, previewData }) {
  const client = createClient({ previewData });

  const page = await client.getByUID("page", params.uid, { lang: locale });
  const navigation = await client.getSingle("navigation", { lang: locale });
  const settings = await client.getSingle("settings", { lang: locale });

  return {
    props: {
      page,
      navigation,
      settings,
    },
  };
}

export async function getStaticPaths() {
  const client = createClient();

  const pages = await client.getAllByType("page", { lang: "*" });
  return {
    paths: pages.map((page) => {
      return {
        params: { uid: page.uid },
        // locale:  'en-us',//page.lang,
      };
    }),
    fallback: false,
  };
}
