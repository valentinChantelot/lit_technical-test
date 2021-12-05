export type Maybe<T> = T | null;
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

export type Category = {
  __typename?: 'Category';
  id: Scalars['ID'];
  title: Scalars['String'];
  description: Scalars['String'];
  Posts?: Maybe<Array<Maybe<Post>>>;
};

export type CategoryFilter = {
  q?: Maybe<Scalars['String']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id_neq?: Maybe<Scalars['ID']>;
  title_neq?: Maybe<Scalars['String']>;
  description_neq?: Maybe<Scalars['String']>;
};

export type CategoryInput = {
  id: Scalars['ID'];
  title: Scalars['String'];
  description: Scalars['String'];
};

export type ListMetadata = {
  __typename?: 'ListMetadata';
  count?: Maybe<Scalars['Int']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createPost?: Maybe<Post>;
  createManyPost?: Maybe<Array<Maybe<Post>>>;
  updatePost?: Maybe<Post>;
  removePost?: Maybe<Post>;
  createCategory?: Maybe<Category>;
  createManyCategory?: Maybe<Array<Maybe<Category>>>;
  updateCategory?: Maybe<Category>;
  removeCategory?: Maybe<Category>;
};


export type MutationCreatePostArgs = {
  title: Scalars['String'];
  category_id: Scalars['ID'];
  content: Scalars['String'];
  cover: Scalars['String'];
};


export type MutationCreateManyPostArgs = {
  data?: Maybe<Array<Maybe<PostInput>>>;
};


export type MutationUpdatePostArgs = {
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  category_id?: Maybe<Scalars['ID']>;
  content?: Maybe<Scalars['String']>;
  cover?: Maybe<Scalars['String']>;
};


export type MutationRemovePostArgs = {
  id: Scalars['ID'];
};


export type MutationCreateCategoryArgs = {
  title: Scalars['String'];
  description: Scalars['String'];
};


export type MutationCreateManyCategoryArgs = {
  data?: Maybe<Array<Maybe<CategoryInput>>>;
};


export type MutationUpdateCategoryArgs = {
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};


export type MutationRemoveCategoryArgs = {
  id: Scalars['ID'];
};

export type Post = {
  __typename?: 'Post';
  id: Scalars['ID'];
  title: Scalars['String'];
  category_id: Scalars['ID'];
  content: Scalars['String'];
  cover: Scalars['String'];
  Category?: Maybe<Category>;
};

export type PostFilter = {
  q?: Maybe<Scalars['String']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  category_id?: Maybe<Scalars['ID']>;
  content?: Maybe<Scalars['String']>;
  cover?: Maybe<Scalars['String']>;
  id_neq?: Maybe<Scalars['ID']>;
  title_neq?: Maybe<Scalars['String']>;
  category_id_neq?: Maybe<Scalars['ID']>;
  content_neq?: Maybe<Scalars['String']>;
  cover_neq?: Maybe<Scalars['String']>;
};

export type PostInput = {
  id: Scalars['ID'];
  title: Scalars['String'];
  category_id: Scalars['ID'];
  content: Scalars['String'];
  cover: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  Post?: Maybe<Post>;
  allPosts?: Maybe<Array<Maybe<Post>>>;
  _allPostsMeta?: Maybe<ListMetadata>;
  Category?: Maybe<Category>;
  allCategories?: Maybe<Array<Maybe<Category>>>;
  _allCategoriesMeta?: Maybe<ListMetadata>;
};


export type QueryPostArgs = {
  id: Scalars['ID'];
};


export type QueryAllPostsArgs = {
  page?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
  sortField?: Maybe<Scalars['String']>;
  sortOrder?: Maybe<Scalars['String']>;
  filter?: Maybe<PostFilter>;
};


export type Query_AllPostsMetaArgs = {
  page?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
  filter?: Maybe<PostFilter>;
};


export type QueryCategoryArgs = {
  id: Scalars['ID'];
};


export type QueryAllCategoriesArgs = {
  page?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
  sortField?: Maybe<Scalars['String']>;
  sortOrder?: Maybe<Scalars['String']>;
  filter?: Maybe<CategoryFilter>;
};


export type Query_AllCategoriesMetaArgs = {
  page?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
  filter?: Maybe<CategoryFilter>;
};
