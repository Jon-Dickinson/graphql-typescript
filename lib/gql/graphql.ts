/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type CmsComponentOptions = {
  __typename?: 'CmsComponentOptions';
  displayLabel: Scalars['Boolean'];
};

export type CmsHtmlField = {
  __typename?: 'CmsHtmlField';
  html: Scalars['String'];
  raw: Scalars['String'];
};

export type CmsImage = {
  __typename?: 'CmsImage';
  alt: Scalars['String'];
  sizes: Array<CmsImageVersion>;
};

export type CmsImageVersion = {
  __typename?: 'CmsImageVersion';
  height: Scalars['Int'];
  size: Scalars['String'];
  url: Scalars['String'];
  width: Scalars['Int'];
};

export type CmsLayoutBlock = {
  __typename?: 'CmsLayoutBlock';
  components: Array<CmsPageIntroComponent>;
  name: Scalars['String'];
  options: CmsLayoutBlockOptions;
};

export type CmsLayoutBlockOptions = {
  __typename?: 'CmsLayoutBlockOptions';
  width: Scalars['Int'];
};

export type CmsLayoutSection = {
  __typename?: 'CmsLayoutSection';
  blocks: Array<CmsLayoutBlock>;
  settings: Array<CmsSectionLayoutSettings>;
  type: Scalars['String'];
};

export type CmsPage = {
  __typename?: 'CmsPage';
  id: Scalars['ID'];
  locale: Scalars['String'];
  pageContent: CmsPageContent;
  type: Scalars['String'];
};

export type CmsPageContent = {
  __typename?: 'CmsPageContent';
  author: CmsUser;
  createdAt: Scalars['String'];
  fullWidthLayout: Scalars['Boolean'];
  id: Scalars['ID'];
  metaTags: Array<CmsPageMetaTag>;
  pageType: Scalars['String'];
  published: Scalars['Boolean'];
  secondaryBackground: Scalars['Boolean'];
  sections: Array<CmsLayoutSection>;
  title: Scalars['String'];
};

export type CmsPageIntroComponent = {
  __typename?: 'CmsPageIntroComponent';
  alignment: Scalars['String'];
  html: CmsHtmlField;
  label: Scalars['String'];
  options: CmsComponentOptions;
};

export type CmsPageMetaTag = {
  __typename?: 'CmsPageMetaTag';
  key: Scalars['String'];
  type: Scalars['String'];
  value: Scalars['String'];
};

export type CmsSectionLayoutSettings = {
  __typename?: 'CmsSectionLayoutSettings';
  key: Scalars['String'];
  value: Scalars['String'];
};

export type CmsTextCard = {
  __typename?: 'CmsTextCard';
  copy: Scalars['String'];
  image: CmsImage;
  title?: Maybe<Scalars['String']>;
};

export type CmsUser = {
  __typename?: 'CmsUser';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  routeByPath: Route;
};


export type QueryRouteByPathArgs = {
  path: Scalars['String'];
};

export type Route = {
  __typename?: 'Route';
  page: CmsPage;
  path: Scalars['String'];
};

export type GetRouteByPathQueryVariables = Exact<{
  path: Scalars['String'];
}>;


export type GetRouteByPathQuery = { __typename?: 'Query', routeByPath: { __typename?: 'Route', path: string, page: { __typename?: 'CmsPage', id: string, type: string, locale: string, pageContent: { __typename?: 'CmsPageContent', pageType: string, published: boolean, id: string, title: string, fullWidthLayout: boolean, secondaryBackground: boolean, createdAt: string, author: { __typename?: 'CmsUser', id: string, name: string }, metaTags: Array<{ __typename?: 'CmsPageMetaTag', key: string, value: string, type: string }>, sections: Array<{ __typename?: 'CmsLayoutSection', type: string, settings: Array<{ __typename?: 'CmsSectionLayoutSettings', key: string, value: string }>, blocks: Array<{ __typename?: 'CmsLayoutBlock', name: string, options: { __typename?: 'CmsLayoutBlockOptions', width: number }, components: Array<{ __typename?: 'CmsPageIntroComponent', label: string, alignment: string, html: { __typename?: 'CmsHtmlField', raw: string, html: string } }> }> }> } } } };


export const GetRouteByPathDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetRouteByPath"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"path"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"routeByPath"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"path"},"value":{"kind":"Variable","name":{"kind":"Name","value":"path"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"page"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"pageContent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageType"}},{"kind":"Field","name":{"kind":"Name","value":"published"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"fullWidthLayout"}},{"kind":"Field","name":{"kind":"Name","value":"secondaryBackground"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"metaTags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}},{"kind":"Field","name":{"kind":"Name","value":"sections"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"settings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"blocks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"options"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"width"}}]}},{"kind":"Field","name":{"kind":"Name","value":"components"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"html"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"raw"}},{"kind":"Field","name":{"kind":"Name","value":"html"}}]}},{"kind":"Field","name":{"kind":"Name","value":"alignment"}}]}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetRouteByPathQuery, GetRouteByPathQueryVariables>;