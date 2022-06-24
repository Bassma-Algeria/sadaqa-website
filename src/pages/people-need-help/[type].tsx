import React from 'react';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { PostType } from '../../@types/Posts';
import { Post } from '../../core/CoreGateways/PostsGateway/PostsGateway.types';

import { postsGateway } from '../../core/CoreGateways';

import { PEOPLE_NEED_HELP_CATEGORIES } from '../../utils/constants/PeopleNeedHelpCategories';

import { PeopleNeedHelpType as PeopleNeedHelpTypePage } from '../../containers/Posts/PeopleNeedHelp/PeopleNeedHelpType/PeopleNeedHelpType';

interface Props {
  type: PostType;
  posts: Post[];
  totalNumberOfPosts: number;
}

const PeopleNeedHelpType: NextPage<Props> = ({ type, posts, totalNumberOfPosts }) => {
  return (
    <PeopleNeedHelpTypePage type={type} posts={posts} totalNumberOfPosts={totalNumberOfPosts} />
  );
};

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  const paths: { params: any; locale: string }[] = [];

  for (const { nameKey } of PEOPLE_NEED_HELP_CATEGORIES) {
    locales?.forEach(locale => paths.push({ params: { type: nameKey }, locale }));
  }

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ locale, params: { type } }: any) => {
  if (!locale) return { props: { type } };

  const translation = await serverSideTranslations(locale, ['common', 'people-need-help']);
  const { posts, totalNumberOfPosts } = await postsGateway.getPosts({
    postType: type,
    shouldBeActive: true,
    numOfChunk: 1,
    numOfPostsPerChunk: 20,
  });

  return { props: { ...translation, type, posts, totalNumberOfPosts } };
};

export default PeopleNeedHelpType;
