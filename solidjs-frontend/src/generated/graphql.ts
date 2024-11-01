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
  DateTime: any;
};

export type AccountingCategory = {
  __typename?: 'AccountingCategory';
  ID: Scalars['ID'];
  activities: Array<Activity>;
  activitiesAggregate?: Maybe<AccountingCategoryActivityActivitiesAggregationSelection>;
  activitiesConnection: AccountingCategoryActivitiesConnection;
  children: Array<AccountingCategory>;
  childrenAggregate?: Maybe<AccountingCategoryAccountingCategoryChildrenAggregationSelection>;
  childrenConnection: AccountingCategoryChildrenConnection;
  name: Scalars['String'];
  parent?: Maybe<AccountingCategory>;
  parentAggregate?: Maybe<AccountingCategoryAccountingCategoryParentAggregationSelection>;
  parentConnection: AccountingCategoryParentConnection;
};


export type AccountingCategoryActivitiesArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<ActivityOptions>;
  where?: InputMaybe<ActivityWhere>;
};


export type AccountingCategoryActivitiesAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<ActivityWhere>;
};


export type AccountingCategoryActivitiesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<AccountingCategoryActivitiesConnectionSort>>;
  where?: InputMaybe<AccountingCategoryActivitiesConnectionWhere>;
};


export type AccountingCategoryChildrenArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<AccountingCategoryOptions>;
  where?: InputMaybe<AccountingCategoryWhere>;
};


export type AccountingCategoryChildrenAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<AccountingCategoryWhere>;
};


export type AccountingCategoryChildrenConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<AccountingCategoryChildrenConnectionSort>>;
  where?: InputMaybe<AccountingCategoryChildrenConnectionWhere>;
};


export type AccountingCategoryParentArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<AccountingCategoryOptions>;
  where?: InputMaybe<AccountingCategoryWhere>;
};


export type AccountingCategoryParentAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<AccountingCategoryWhere>;
};


export type AccountingCategoryParentConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<AccountingCategoryParentConnectionSort>>;
  where?: InputMaybe<AccountingCategoryParentConnectionWhere>;
};

export type AccountingCategoryAccountingCategoryChildrenAggregationSelection = {
  __typename?: 'AccountingCategoryAccountingCategoryChildrenAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<AccountingCategoryAccountingCategoryChildrenNodeAggregateSelection>;
};

export type AccountingCategoryAccountingCategoryChildrenNodeAggregateSelection = {
  __typename?: 'AccountingCategoryAccountingCategoryChildrenNodeAggregateSelection';
  ID: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
};

export type AccountingCategoryAccountingCategoryParentAggregationSelection = {
  __typename?: 'AccountingCategoryAccountingCategoryParentAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<AccountingCategoryAccountingCategoryParentNodeAggregateSelection>;
};

export type AccountingCategoryAccountingCategoryParentNodeAggregateSelection = {
  __typename?: 'AccountingCategoryAccountingCategoryParentNodeAggregateSelection';
  ID: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
};

export type AccountingCategoryActivitiesAggregateInput = {
  AND?: InputMaybe<Array<AccountingCategoryActivitiesAggregateInput>>;
  OR?: InputMaybe<Array<AccountingCategoryActivitiesAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<AccountingCategoryActivitiesNodeAggregationWhereInput>;
};

export type AccountingCategoryActivitiesConnectFieldInput = {
  connect?: InputMaybe<Array<ActivityConnectInput>>;
  where?: InputMaybe<ActivityConnectWhere>;
};

export type AccountingCategoryActivitiesConnectOrCreateFieldInput = {
  onCreate: AccountingCategoryActivitiesConnectOrCreateFieldInputOnCreate;
  where: ActivityConnectOrCreateWhere;
};

export type AccountingCategoryActivitiesConnectOrCreateFieldInputOnCreate = {
  node: ActivityOnCreateInput;
};

export type AccountingCategoryActivitiesConnection = {
  __typename?: 'AccountingCategoryActivitiesConnection';
  edges: Array<AccountingCategoryActivitiesRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type AccountingCategoryActivitiesConnectionSort = {
  node?: InputMaybe<ActivitySort>;
};

export type AccountingCategoryActivitiesConnectionWhere = {
  AND?: InputMaybe<Array<AccountingCategoryActivitiesConnectionWhere>>;
  OR?: InputMaybe<Array<AccountingCategoryActivitiesConnectionWhere>>;
  node?: InputMaybe<ActivityWhere>;
  node_NOT?: InputMaybe<ActivityWhere>;
};

export type AccountingCategoryActivitiesCreateFieldInput = {
  node: ActivityCreateInput;
};

export type AccountingCategoryActivitiesDeleteFieldInput = {
  delete?: InputMaybe<ActivityDeleteInput>;
  where?: InputMaybe<AccountingCategoryActivitiesConnectionWhere>;
};

export type AccountingCategoryActivitiesDisconnectFieldInput = {
  disconnect?: InputMaybe<ActivityDisconnectInput>;
  where?: InputMaybe<AccountingCategoryActivitiesConnectionWhere>;
};

export type AccountingCategoryActivitiesFieldInput = {
  connect?: InputMaybe<Array<AccountingCategoryActivitiesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<AccountingCategoryActivitiesConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<AccountingCategoryActivitiesCreateFieldInput>>;
};

export type AccountingCategoryActivitiesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<AccountingCategoryActivitiesNodeAggregationWhereInput>>;
  ID_EQUAL?: InputMaybe<Scalars['ID']>;
  OR?: InputMaybe<Array<AccountingCategoryActivitiesNodeAggregationWhereInput>>;
  description_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  description_EQUAL?: InputMaybe<Scalars['String']>;
  description_GT?: InputMaybe<Scalars['Int']>;
  description_GTE?: InputMaybe<Scalars['Int']>;
  description_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  description_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  description_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  description_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  description_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  description_LT?: InputMaybe<Scalars['Int']>;
  description_LTE?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
};

export type AccountingCategoryActivitiesRelationship = {
  __typename?: 'AccountingCategoryActivitiesRelationship';
  cursor: Scalars['String'];
  node: Activity;
};

export type AccountingCategoryActivitiesUpdateConnectionInput = {
  node?: InputMaybe<ActivityUpdateInput>;
};

export type AccountingCategoryActivitiesUpdateFieldInput = {
  connect?: InputMaybe<Array<AccountingCategoryActivitiesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<AccountingCategoryActivitiesConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<AccountingCategoryActivitiesCreateFieldInput>>;
  delete?: InputMaybe<Array<AccountingCategoryActivitiesDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<AccountingCategoryActivitiesDisconnectFieldInput>>;
  update?: InputMaybe<AccountingCategoryActivitiesUpdateConnectionInput>;
  where?: InputMaybe<AccountingCategoryActivitiesConnectionWhere>;
};

export type AccountingCategoryActivityActivitiesAggregationSelection = {
  __typename?: 'AccountingCategoryActivityActivitiesAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<AccountingCategoryActivityActivitiesNodeAggregateSelection>;
};

export type AccountingCategoryActivityActivitiesNodeAggregateSelection = {
  __typename?: 'AccountingCategoryActivityActivitiesNodeAggregateSelection';
  ID: IdAggregateSelectionNonNullable;
  description: StringAggregateSelectionNullable;
};

export type AccountingCategoryChildrenAggregateInput = {
  AND?: InputMaybe<Array<AccountingCategoryChildrenAggregateInput>>;
  OR?: InputMaybe<Array<AccountingCategoryChildrenAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<AccountingCategoryChildrenNodeAggregationWhereInput>;
};

export type AccountingCategoryChildrenConnectFieldInput = {
  connect?: InputMaybe<Array<AccountingCategoryConnectInput>>;
  where?: InputMaybe<AccountingCategoryConnectWhere>;
};

export type AccountingCategoryChildrenConnectOrCreateFieldInput = {
  onCreate: AccountingCategoryChildrenConnectOrCreateFieldInputOnCreate;
  where: AccountingCategoryConnectOrCreateWhere;
};

export type AccountingCategoryChildrenConnectOrCreateFieldInputOnCreate = {
  node: AccountingCategoryOnCreateInput;
};

export type AccountingCategoryChildrenConnection = {
  __typename?: 'AccountingCategoryChildrenConnection';
  edges: Array<AccountingCategoryChildrenRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type AccountingCategoryChildrenConnectionSort = {
  node?: InputMaybe<AccountingCategorySort>;
};

export type AccountingCategoryChildrenConnectionWhere = {
  AND?: InputMaybe<Array<AccountingCategoryChildrenConnectionWhere>>;
  OR?: InputMaybe<Array<AccountingCategoryChildrenConnectionWhere>>;
  node?: InputMaybe<AccountingCategoryWhere>;
  node_NOT?: InputMaybe<AccountingCategoryWhere>;
};

export type AccountingCategoryChildrenCreateFieldInput = {
  node: AccountingCategoryCreateInput;
};

export type AccountingCategoryChildrenDeleteFieldInput = {
  delete?: InputMaybe<AccountingCategoryDeleteInput>;
  where?: InputMaybe<AccountingCategoryChildrenConnectionWhere>;
};

export type AccountingCategoryChildrenDisconnectFieldInput = {
  disconnect?: InputMaybe<AccountingCategoryDisconnectInput>;
  where?: InputMaybe<AccountingCategoryChildrenConnectionWhere>;
};

export type AccountingCategoryChildrenFieldInput = {
  connect?: InputMaybe<Array<AccountingCategoryChildrenConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<AccountingCategoryChildrenConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<AccountingCategoryChildrenCreateFieldInput>>;
};

export type AccountingCategoryChildrenNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<AccountingCategoryChildrenNodeAggregationWhereInput>>;
  ID_EQUAL?: InputMaybe<Scalars['ID']>;
  OR?: InputMaybe<Array<AccountingCategoryChildrenNodeAggregationWhereInput>>;
  name_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  name_EQUAL?: InputMaybe<Scalars['String']>;
  name_GT?: InputMaybe<Scalars['Int']>;
  name_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  name_LT?: InputMaybe<Scalars['Int']>;
  name_LTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
};

export type AccountingCategoryChildrenRelationship = {
  __typename?: 'AccountingCategoryChildrenRelationship';
  cursor: Scalars['String'];
  node: AccountingCategory;
};

export type AccountingCategoryChildrenUpdateConnectionInput = {
  node?: InputMaybe<AccountingCategoryUpdateInput>;
};

export type AccountingCategoryChildrenUpdateFieldInput = {
  connect?: InputMaybe<Array<AccountingCategoryChildrenConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<AccountingCategoryChildrenConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<AccountingCategoryChildrenCreateFieldInput>>;
  delete?: InputMaybe<Array<AccountingCategoryChildrenDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<AccountingCategoryChildrenDisconnectFieldInput>>;
  update?: InputMaybe<AccountingCategoryChildrenUpdateConnectionInput>;
  where?: InputMaybe<AccountingCategoryChildrenConnectionWhere>;
};

export type AccountingCategoryConnectInput = {
  activities?: InputMaybe<Array<AccountingCategoryActivitiesConnectFieldInput>>;
  children?: InputMaybe<Array<AccountingCategoryChildrenConnectFieldInput>>;
  parent?: InputMaybe<AccountingCategoryParentConnectFieldInput>;
};

export type AccountingCategoryConnectOrCreateWhere = {
  node: AccountingCategoryUniqueWhere;
};

export type AccountingCategoryConnectWhere = {
  node: AccountingCategoryWhere;
};

export type AccountingCategoryCreateInput = {
  activities?: InputMaybe<AccountingCategoryActivitiesFieldInput>;
  children?: InputMaybe<AccountingCategoryChildrenFieldInput>;
  name: Scalars['String'];
  parent?: InputMaybe<AccountingCategoryParentFieldInput>;
};

export type AccountingCategoryDeleteInput = {
  activities?: InputMaybe<Array<AccountingCategoryActivitiesDeleteFieldInput>>;
  children?: InputMaybe<Array<AccountingCategoryChildrenDeleteFieldInput>>;
  parent?: InputMaybe<AccountingCategoryParentDeleteFieldInput>;
};

export type AccountingCategoryDisconnectInput = {
  activities?: InputMaybe<Array<AccountingCategoryActivitiesDisconnectFieldInput>>;
  children?: InputMaybe<Array<AccountingCategoryChildrenDisconnectFieldInput>>;
  parent?: InputMaybe<AccountingCategoryParentDisconnectFieldInput>;
};

export type AccountingCategoryOnCreateInput = {
  name: Scalars['String'];
};

export type AccountingCategoryOptions = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  /** Specify one or more AccountingCategorySort objects to sort AccountingCategories by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<AccountingCategorySort>>;
};

export type AccountingCategoryParentAggregateInput = {
  AND?: InputMaybe<Array<AccountingCategoryParentAggregateInput>>;
  OR?: InputMaybe<Array<AccountingCategoryParentAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<AccountingCategoryParentNodeAggregationWhereInput>;
};

export type AccountingCategoryParentConnectFieldInput = {
  connect?: InputMaybe<AccountingCategoryConnectInput>;
  where?: InputMaybe<AccountingCategoryConnectWhere>;
};

export type AccountingCategoryParentConnectOrCreateFieldInput = {
  onCreate: AccountingCategoryParentConnectOrCreateFieldInputOnCreate;
  where: AccountingCategoryConnectOrCreateWhere;
};

export type AccountingCategoryParentConnectOrCreateFieldInputOnCreate = {
  node: AccountingCategoryOnCreateInput;
};

export type AccountingCategoryParentConnection = {
  __typename?: 'AccountingCategoryParentConnection';
  edges: Array<AccountingCategoryParentRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type AccountingCategoryParentConnectionSort = {
  node?: InputMaybe<AccountingCategorySort>;
};

export type AccountingCategoryParentConnectionWhere = {
  AND?: InputMaybe<Array<AccountingCategoryParentConnectionWhere>>;
  OR?: InputMaybe<Array<AccountingCategoryParentConnectionWhere>>;
  node?: InputMaybe<AccountingCategoryWhere>;
  node_NOT?: InputMaybe<AccountingCategoryWhere>;
};

export type AccountingCategoryParentCreateFieldInput = {
  node: AccountingCategoryCreateInput;
};

export type AccountingCategoryParentDeleteFieldInput = {
  delete?: InputMaybe<AccountingCategoryDeleteInput>;
  where?: InputMaybe<AccountingCategoryParentConnectionWhere>;
};

export type AccountingCategoryParentDisconnectFieldInput = {
  disconnect?: InputMaybe<AccountingCategoryDisconnectInput>;
  where?: InputMaybe<AccountingCategoryParentConnectionWhere>;
};

export type AccountingCategoryParentFieldInput = {
  connect?: InputMaybe<AccountingCategoryParentConnectFieldInput>;
  connectOrCreate?: InputMaybe<AccountingCategoryParentConnectOrCreateFieldInput>;
  create?: InputMaybe<AccountingCategoryParentCreateFieldInput>;
};

export type AccountingCategoryParentNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<AccountingCategoryParentNodeAggregationWhereInput>>;
  ID_EQUAL?: InputMaybe<Scalars['ID']>;
  OR?: InputMaybe<Array<AccountingCategoryParentNodeAggregationWhereInput>>;
  name_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  name_EQUAL?: InputMaybe<Scalars['String']>;
  name_GT?: InputMaybe<Scalars['Int']>;
  name_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  name_LT?: InputMaybe<Scalars['Int']>;
  name_LTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
};

export type AccountingCategoryParentRelationship = {
  __typename?: 'AccountingCategoryParentRelationship';
  cursor: Scalars['String'];
  node: AccountingCategory;
};

export type AccountingCategoryParentUpdateConnectionInput = {
  node?: InputMaybe<AccountingCategoryUpdateInput>;
};

export type AccountingCategoryParentUpdateFieldInput = {
  connect?: InputMaybe<AccountingCategoryParentConnectFieldInput>;
  connectOrCreate?: InputMaybe<AccountingCategoryParentConnectOrCreateFieldInput>;
  create?: InputMaybe<AccountingCategoryParentCreateFieldInput>;
  delete?: InputMaybe<AccountingCategoryParentDeleteFieldInput>;
  disconnect?: InputMaybe<AccountingCategoryParentDisconnectFieldInput>;
  update?: InputMaybe<AccountingCategoryParentUpdateConnectionInput>;
  where?: InputMaybe<AccountingCategoryParentConnectionWhere>;
};

/** Fields to sort AccountingCategories by. The order in which sorts are applied is not guaranteed when specifying many fields in one AccountingCategorySort object. */
export type AccountingCategorySort = {
  ID?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
};

export type AccountingCategoryUniqueWhere = {
  ID?: InputMaybe<Scalars['ID']>;
};

export type AccountingCategoryUpdateInput = {
  activities?: InputMaybe<Array<AccountingCategoryActivitiesUpdateFieldInput>>;
  children?: InputMaybe<Array<AccountingCategoryChildrenUpdateFieldInput>>;
  name?: InputMaybe<Scalars['String']>;
  parent?: InputMaybe<AccountingCategoryParentUpdateFieldInput>;
};

export type AccountingCategoryWhere = {
  AND?: InputMaybe<Array<AccountingCategoryWhere>>;
  ID?: InputMaybe<Scalars['ID']>;
  ID_CONTAINS?: InputMaybe<Scalars['ID']>;
  ID_ENDS_WITH?: InputMaybe<Scalars['ID']>;
  ID_IN?: InputMaybe<Array<Scalars['ID']>>;
  ID_NOT?: InputMaybe<Scalars['ID']>;
  ID_NOT_CONTAINS?: InputMaybe<Scalars['ID']>;
  ID_NOT_ENDS_WITH?: InputMaybe<Scalars['ID']>;
  ID_NOT_IN?: InputMaybe<Array<Scalars['ID']>>;
  ID_NOT_STARTS_WITH?: InputMaybe<Scalars['ID']>;
  ID_STARTS_WITH?: InputMaybe<Scalars['ID']>;
  OR?: InputMaybe<Array<AccountingCategoryWhere>>;
  activitiesAggregate?: InputMaybe<AccountingCategoryActivitiesAggregateInput>;
  activitiesConnection_ALL?: InputMaybe<AccountingCategoryActivitiesConnectionWhere>;
  activitiesConnection_NONE?: InputMaybe<AccountingCategoryActivitiesConnectionWhere>;
  activitiesConnection_SINGLE?: InputMaybe<AccountingCategoryActivitiesConnectionWhere>;
  activitiesConnection_SOME?: InputMaybe<AccountingCategoryActivitiesConnectionWhere>;
  /** Return AccountingCategories where all of the related Activities match this filter */
  activities_ALL?: InputMaybe<ActivityWhere>;
  /** Return AccountingCategories where none of the related Activities match this filter */
  activities_NONE?: InputMaybe<ActivityWhere>;
  /** Return AccountingCategories where one of the related Activities match this filter */
  activities_SINGLE?: InputMaybe<ActivityWhere>;
  /** Return AccountingCategories where some of the related Activities match this filter */
  activities_SOME?: InputMaybe<ActivityWhere>;
  childrenAggregate?: InputMaybe<AccountingCategoryChildrenAggregateInput>;
  childrenConnection_ALL?: InputMaybe<AccountingCategoryChildrenConnectionWhere>;
  childrenConnection_NONE?: InputMaybe<AccountingCategoryChildrenConnectionWhere>;
  childrenConnection_SINGLE?: InputMaybe<AccountingCategoryChildrenConnectionWhere>;
  childrenConnection_SOME?: InputMaybe<AccountingCategoryChildrenConnectionWhere>;
  /** Return AccountingCategories where all of the related AccountingCategories match this filter */
  children_ALL?: InputMaybe<AccountingCategoryWhere>;
  /** Return AccountingCategories where none of the related AccountingCategories match this filter */
  children_NONE?: InputMaybe<AccountingCategoryWhere>;
  /** Return AccountingCategories where one of the related AccountingCategories match this filter */
  children_SINGLE?: InputMaybe<AccountingCategoryWhere>;
  /** Return AccountingCategories where some of the related AccountingCategories match this filter */
  children_SOME?: InputMaybe<AccountingCategoryWhere>;
  name?: InputMaybe<Scalars['String']>;
  name_CONTAINS?: InputMaybe<Scalars['String']>;
  name_ENDS_WITH?: InputMaybe<Scalars['String']>;
  name_IN?: InputMaybe<Array<Scalars['String']>>;
  name_NOT?: InputMaybe<Scalars['String']>;
  name_NOT_CONTAINS?: InputMaybe<Scalars['String']>;
  name_NOT_ENDS_WITH?: InputMaybe<Scalars['String']>;
  name_NOT_IN?: InputMaybe<Array<Scalars['String']>>;
  name_NOT_STARTS_WITH?: InputMaybe<Scalars['String']>;
  name_STARTS_WITH?: InputMaybe<Scalars['String']>;
  parent?: InputMaybe<AccountingCategoryWhere>;
  parentAggregate?: InputMaybe<AccountingCategoryParentAggregateInput>;
  parentConnection?: InputMaybe<AccountingCategoryParentConnectionWhere>;
  parentConnection_NOT?: InputMaybe<AccountingCategoryParentConnectionWhere>;
  parent_NOT?: InputMaybe<AccountingCategoryWhere>;
};

export type Activity = {
  __typename?: 'Activity';
  ID: Scalars['ID'];
  category: AccountingCategory;
  categoryAggregate?: Maybe<ActivityAccountingCategoryCategoryAggregationSelection>;
  categoryConnection: ActivityCategoryConnection;
  description?: Maybe<Scalars['String']>;
  location: Location;
  locationAggregate?: Maybe<ActivityLocationLocationAggregationSelection>;
  locationConnection: ActivityLocationConnection;
  measurements: Array<Measurement>;
  measurementsAggregate?: Maybe<ActivityMeasurementMeasurementsAggregationSelection>;
  measurementsConnection: ActivityMeasurementsConnection;
};


export type ActivityCategoryArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<AccountingCategoryOptions>;
  where?: InputMaybe<AccountingCategoryWhere>;
};


export type ActivityCategoryAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<AccountingCategoryWhere>;
};


export type ActivityCategoryConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<ActivityCategoryConnectionSort>>;
  where?: InputMaybe<ActivityCategoryConnectionWhere>;
};


export type ActivityLocationArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<LocationOptions>;
  where?: InputMaybe<LocationWhere>;
};


export type ActivityLocationAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<LocationWhere>;
};


export type ActivityLocationConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<ActivityLocationConnectionSort>>;
  where?: InputMaybe<ActivityLocationConnectionWhere>;
};


export type ActivityMeasurementsArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<MeasurementOptions>;
  where?: InputMaybe<MeasurementWhere>;
};


export type ActivityMeasurementsAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<MeasurementWhere>;
};


export type ActivityMeasurementsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<ActivityMeasurementsConnectionSort>>;
  where?: InputMaybe<ActivityMeasurementsConnectionWhere>;
};

export type ActivityAccountingCategoryCategoryAggregationSelection = {
  __typename?: 'ActivityAccountingCategoryCategoryAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<ActivityAccountingCategoryCategoryNodeAggregateSelection>;
};

export type ActivityAccountingCategoryCategoryNodeAggregateSelection = {
  __typename?: 'ActivityAccountingCategoryCategoryNodeAggregateSelection';
  ID: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
};

export type ActivityCategoryAggregateInput = {
  AND?: InputMaybe<Array<ActivityCategoryAggregateInput>>;
  OR?: InputMaybe<Array<ActivityCategoryAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<ActivityCategoryNodeAggregationWhereInput>;
};

export type ActivityCategoryConnectFieldInput = {
  connect?: InputMaybe<AccountingCategoryConnectInput>;
  where?: InputMaybe<AccountingCategoryConnectWhere>;
};

export type ActivityCategoryConnectOrCreateFieldInput = {
  onCreate: ActivityCategoryConnectOrCreateFieldInputOnCreate;
  where: AccountingCategoryConnectOrCreateWhere;
};

export type ActivityCategoryConnectOrCreateFieldInputOnCreate = {
  node: AccountingCategoryOnCreateInput;
};

export type ActivityCategoryConnection = {
  __typename?: 'ActivityCategoryConnection';
  edges: Array<ActivityCategoryRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ActivityCategoryConnectionSort = {
  node?: InputMaybe<AccountingCategorySort>;
};

export type ActivityCategoryConnectionWhere = {
  AND?: InputMaybe<Array<ActivityCategoryConnectionWhere>>;
  OR?: InputMaybe<Array<ActivityCategoryConnectionWhere>>;
  node?: InputMaybe<AccountingCategoryWhere>;
  node_NOT?: InputMaybe<AccountingCategoryWhere>;
};

export type ActivityCategoryCreateFieldInput = {
  node: AccountingCategoryCreateInput;
};

export type ActivityCategoryDeleteFieldInput = {
  delete?: InputMaybe<AccountingCategoryDeleteInput>;
  where?: InputMaybe<ActivityCategoryConnectionWhere>;
};

export type ActivityCategoryDisconnectFieldInput = {
  disconnect?: InputMaybe<AccountingCategoryDisconnectInput>;
  where?: InputMaybe<ActivityCategoryConnectionWhere>;
};

export type ActivityCategoryFieldInput = {
  connect?: InputMaybe<ActivityCategoryConnectFieldInput>;
  connectOrCreate?: InputMaybe<ActivityCategoryConnectOrCreateFieldInput>;
  create?: InputMaybe<ActivityCategoryCreateFieldInput>;
};

export type ActivityCategoryNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<ActivityCategoryNodeAggregationWhereInput>>;
  ID_EQUAL?: InputMaybe<Scalars['ID']>;
  OR?: InputMaybe<Array<ActivityCategoryNodeAggregationWhereInput>>;
  name_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  name_EQUAL?: InputMaybe<Scalars['String']>;
  name_GT?: InputMaybe<Scalars['Int']>;
  name_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  name_LT?: InputMaybe<Scalars['Int']>;
  name_LTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
};

export type ActivityCategoryRelationship = {
  __typename?: 'ActivityCategoryRelationship';
  cursor: Scalars['String'];
  node: AccountingCategory;
};

export type ActivityCategoryUpdateConnectionInput = {
  node?: InputMaybe<AccountingCategoryUpdateInput>;
};

export type ActivityCategoryUpdateFieldInput = {
  connect?: InputMaybe<ActivityCategoryConnectFieldInput>;
  connectOrCreate?: InputMaybe<ActivityCategoryConnectOrCreateFieldInput>;
  create?: InputMaybe<ActivityCategoryCreateFieldInput>;
  delete?: InputMaybe<ActivityCategoryDeleteFieldInput>;
  disconnect?: InputMaybe<ActivityCategoryDisconnectFieldInput>;
  update?: InputMaybe<ActivityCategoryUpdateConnectionInput>;
  where?: InputMaybe<ActivityCategoryConnectionWhere>;
};

export type ActivityConnectInput = {
  category?: InputMaybe<ActivityCategoryConnectFieldInput>;
  location?: InputMaybe<ActivityLocationConnectFieldInput>;
  measurements?: InputMaybe<Array<ActivityMeasurementsConnectFieldInput>>;
};

export type ActivityConnectOrCreateWhere = {
  node: ActivityUniqueWhere;
};

export type ActivityConnectWhere = {
  node: ActivityWhere;
};

export type ActivityCreateInput = {
  category?: InputMaybe<ActivityCategoryFieldInput>;
  description?: InputMaybe<Scalars['String']>;
  location?: InputMaybe<ActivityLocationFieldInput>;
  measurements?: InputMaybe<ActivityMeasurementsFieldInput>;
};

export type ActivityDeleteInput = {
  category?: InputMaybe<ActivityCategoryDeleteFieldInput>;
  location?: InputMaybe<ActivityLocationDeleteFieldInput>;
  measurements?: InputMaybe<Array<ActivityMeasurementsDeleteFieldInput>>;
};

export type ActivityDisconnectInput = {
  category?: InputMaybe<ActivityCategoryDisconnectFieldInput>;
  location?: InputMaybe<ActivityLocationDisconnectFieldInput>;
  measurements?: InputMaybe<Array<ActivityMeasurementsDisconnectFieldInput>>;
};

export type ActivityLocationAggregateInput = {
  AND?: InputMaybe<Array<ActivityLocationAggregateInput>>;
  OR?: InputMaybe<Array<ActivityLocationAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<ActivityLocationNodeAggregationWhereInput>;
};

export type ActivityLocationConnectFieldInput = {
  connect?: InputMaybe<LocationConnectInput>;
  where?: InputMaybe<LocationConnectWhere>;
};

export type ActivityLocationConnectOrCreateFieldInput = {
  onCreate: ActivityLocationConnectOrCreateFieldInputOnCreate;
  where: LocationConnectOrCreateWhere;
};

export type ActivityLocationConnectOrCreateFieldInputOnCreate = {
  node: LocationOnCreateInput;
};

export type ActivityLocationConnection = {
  __typename?: 'ActivityLocationConnection';
  edges: Array<ActivityLocationRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ActivityLocationConnectionSort = {
  node?: InputMaybe<LocationSort>;
};

export type ActivityLocationConnectionWhere = {
  AND?: InputMaybe<Array<ActivityLocationConnectionWhere>>;
  OR?: InputMaybe<Array<ActivityLocationConnectionWhere>>;
  node?: InputMaybe<LocationWhere>;
  node_NOT?: InputMaybe<LocationWhere>;
};

export type ActivityLocationCreateFieldInput = {
  node: LocationCreateInput;
};

export type ActivityLocationDeleteFieldInput = {
  delete?: InputMaybe<LocationDeleteInput>;
  where?: InputMaybe<ActivityLocationConnectionWhere>;
};

export type ActivityLocationDisconnectFieldInput = {
  disconnect?: InputMaybe<LocationDisconnectInput>;
  where?: InputMaybe<ActivityLocationConnectionWhere>;
};

export type ActivityLocationFieldInput = {
  connect?: InputMaybe<ActivityLocationConnectFieldInput>;
  connectOrCreate?: InputMaybe<ActivityLocationConnectOrCreateFieldInput>;
  create?: InputMaybe<ActivityLocationCreateFieldInput>;
};

export type ActivityLocationLocationAggregationSelection = {
  __typename?: 'ActivityLocationLocationAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<ActivityLocationLocationNodeAggregateSelection>;
};

export type ActivityLocationLocationNodeAggregateSelection = {
  __typename?: 'ActivityLocationLocationNodeAggregateSelection';
  ID: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
};

export type ActivityLocationNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<ActivityLocationNodeAggregationWhereInput>>;
  ID_EQUAL?: InputMaybe<Scalars['ID']>;
  OR?: InputMaybe<Array<ActivityLocationNodeAggregationWhereInput>>;
  name_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  name_EQUAL?: InputMaybe<Scalars['String']>;
  name_GT?: InputMaybe<Scalars['Int']>;
  name_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  name_LT?: InputMaybe<Scalars['Int']>;
  name_LTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
};

export type ActivityLocationRelationship = {
  __typename?: 'ActivityLocationRelationship';
  cursor: Scalars['String'];
  node: Location;
};

export type ActivityLocationUpdateConnectionInput = {
  node?: InputMaybe<LocationUpdateInput>;
};

export type ActivityLocationUpdateFieldInput = {
  connect?: InputMaybe<ActivityLocationConnectFieldInput>;
  connectOrCreate?: InputMaybe<ActivityLocationConnectOrCreateFieldInput>;
  create?: InputMaybe<ActivityLocationCreateFieldInput>;
  delete?: InputMaybe<ActivityLocationDeleteFieldInput>;
  disconnect?: InputMaybe<ActivityLocationDisconnectFieldInput>;
  update?: InputMaybe<ActivityLocationUpdateConnectionInput>;
  where?: InputMaybe<ActivityLocationConnectionWhere>;
};

export type ActivityMeasurementMeasurementsAggregationSelection = {
  __typename?: 'ActivityMeasurementMeasurementsAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<ActivityMeasurementMeasurementsNodeAggregateSelection>;
};

export type ActivityMeasurementMeasurementsNodeAggregateSelection = {
  __typename?: 'ActivityMeasurementMeasurementsNodeAggregateSelection';
  ID: IdAggregateSelectionNonNullable;
  amount: FloatAggregateSelectionNonNullable;
  end: DateTimeAggregateSelectionNonNullable;
  start: DateTimeAggregateSelectionNonNullable;
};

export type ActivityMeasurementsAggregateInput = {
  AND?: InputMaybe<Array<ActivityMeasurementsAggregateInput>>;
  OR?: InputMaybe<Array<ActivityMeasurementsAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<ActivityMeasurementsNodeAggregationWhereInput>;
};

export type ActivityMeasurementsConnectFieldInput = {
  connect?: InputMaybe<Array<MeasurementConnectInput>>;
  where?: InputMaybe<MeasurementConnectWhere>;
};

export type ActivityMeasurementsConnectOrCreateFieldInput = {
  onCreate: ActivityMeasurementsConnectOrCreateFieldInputOnCreate;
  where: MeasurementConnectOrCreateWhere;
};

export type ActivityMeasurementsConnectOrCreateFieldInputOnCreate = {
  node: MeasurementOnCreateInput;
};

export type ActivityMeasurementsConnection = {
  __typename?: 'ActivityMeasurementsConnection';
  edges: Array<ActivityMeasurementsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ActivityMeasurementsConnectionSort = {
  node?: InputMaybe<MeasurementSort>;
};

export type ActivityMeasurementsConnectionWhere = {
  AND?: InputMaybe<Array<ActivityMeasurementsConnectionWhere>>;
  OR?: InputMaybe<Array<ActivityMeasurementsConnectionWhere>>;
  node?: InputMaybe<MeasurementWhere>;
  node_NOT?: InputMaybe<MeasurementWhere>;
};

export type ActivityMeasurementsCreateFieldInput = {
  node: MeasurementCreateInput;
};

export type ActivityMeasurementsDeleteFieldInput = {
  delete?: InputMaybe<MeasurementDeleteInput>;
  where?: InputMaybe<ActivityMeasurementsConnectionWhere>;
};

export type ActivityMeasurementsDisconnectFieldInput = {
  disconnect?: InputMaybe<MeasurementDisconnectInput>;
  where?: InputMaybe<ActivityMeasurementsConnectionWhere>;
};

export type ActivityMeasurementsFieldInput = {
  connect?: InputMaybe<Array<ActivityMeasurementsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<ActivityMeasurementsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<ActivityMeasurementsCreateFieldInput>>;
};

export type ActivityMeasurementsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<ActivityMeasurementsNodeAggregationWhereInput>>;
  ID_EQUAL?: InputMaybe<Scalars['ID']>;
  OR?: InputMaybe<Array<ActivityMeasurementsNodeAggregationWhereInput>>;
  amount_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  amount_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  amount_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  amount_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  amount_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  amount_EQUAL?: InputMaybe<Scalars['Float']>;
  amount_GT?: InputMaybe<Scalars['Float']>;
  amount_GTE?: InputMaybe<Scalars['Float']>;
  amount_LT?: InputMaybe<Scalars['Float']>;
  amount_LTE?: InputMaybe<Scalars['Float']>;
  amount_MAX_EQUAL?: InputMaybe<Scalars['Float']>;
  amount_MAX_GT?: InputMaybe<Scalars['Float']>;
  amount_MAX_GTE?: InputMaybe<Scalars['Float']>;
  amount_MAX_LT?: InputMaybe<Scalars['Float']>;
  amount_MAX_LTE?: InputMaybe<Scalars['Float']>;
  amount_MIN_EQUAL?: InputMaybe<Scalars['Float']>;
  amount_MIN_GT?: InputMaybe<Scalars['Float']>;
  amount_MIN_GTE?: InputMaybe<Scalars['Float']>;
  amount_MIN_LT?: InputMaybe<Scalars['Float']>;
  amount_MIN_LTE?: InputMaybe<Scalars['Float']>;
  amount_SUM_EQUAL?: InputMaybe<Scalars['Float']>;
  amount_SUM_GT?: InputMaybe<Scalars['Float']>;
  amount_SUM_GTE?: InputMaybe<Scalars['Float']>;
  amount_SUM_LT?: InputMaybe<Scalars['Float']>;
  amount_SUM_LTE?: InputMaybe<Scalars['Float']>;
  end_EQUAL?: InputMaybe<Scalars['DateTime']>;
  end_GT?: InputMaybe<Scalars['DateTime']>;
  end_GTE?: InputMaybe<Scalars['DateTime']>;
  end_LT?: InputMaybe<Scalars['DateTime']>;
  end_LTE?: InputMaybe<Scalars['DateTime']>;
  end_MAX_EQUAL?: InputMaybe<Scalars['DateTime']>;
  end_MAX_GT?: InputMaybe<Scalars['DateTime']>;
  end_MAX_GTE?: InputMaybe<Scalars['DateTime']>;
  end_MAX_LT?: InputMaybe<Scalars['DateTime']>;
  end_MAX_LTE?: InputMaybe<Scalars['DateTime']>;
  end_MIN_EQUAL?: InputMaybe<Scalars['DateTime']>;
  end_MIN_GT?: InputMaybe<Scalars['DateTime']>;
  end_MIN_GTE?: InputMaybe<Scalars['DateTime']>;
  end_MIN_LT?: InputMaybe<Scalars['DateTime']>;
  end_MIN_LTE?: InputMaybe<Scalars['DateTime']>;
  start_EQUAL?: InputMaybe<Scalars['DateTime']>;
  start_GT?: InputMaybe<Scalars['DateTime']>;
  start_GTE?: InputMaybe<Scalars['DateTime']>;
  start_LT?: InputMaybe<Scalars['DateTime']>;
  start_LTE?: InputMaybe<Scalars['DateTime']>;
  start_MAX_EQUAL?: InputMaybe<Scalars['DateTime']>;
  start_MAX_GT?: InputMaybe<Scalars['DateTime']>;
  start_MAX_GTE?: InputMaybe<Scalars['DateTime']>;
  start_MAX_LT?: InputMaybe<Scalars['DateTime']>;
  start_MAX_LTE?: InputMaybe<Scalars['DateTime']>;
  start_MIN_EQUAL?: InputMaybe<Scalars['DateTime']>;
  start_MIN_GT?: InputMaybe<Scalars['DateTime']>;
  start_MIN_GTE?: InputMaybe<Scalars['DateTime']>;
  start_MIN_LT?: InputMaybe<Scalars['DateTime']>;
  start_MIN_LTE?: InputMaybe<Scalars['DateTime']>;
};

export type ActivityMeasurementsRelationship = {
  __typename?: 'ActivityMeasurementsRelationship';
  cursor: Scalars['String'];
  node: Measurement;
};

export type ActivityMeasurementsUpdateConnectionInput = {
  node?: InputMaybe<MeasurementUpdateInput>;
};

export type ActivityMeasurementsUpdateFieldInput = {
  connect?: InputMaybe<Array<ActivityMeasurementsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<ActivityMeasurementsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<ActivityMeasurementsCreateFieldInput>>;
  delete?: InputMaybe<Array<ActivityMeasurementsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<ActivityMeasurementsDisconnectFieldInput>>;
  update?: InputMaybe<ActivityMeasurementsUpdateConnectionInput>;
  where?: InputMaybe<ActivityMeasurementsConnectionWhere>;
};

export type ActivityOnCreateInput = {
  description?: InputMaybe<Scalars['String']>;
};

export type ActivityOptions = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  /** Specify one or more ActivitySort objects to sort Activities by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<ActivitySort>>;
};

/** Fields to sort Activities by. The order in which sorts are applied is not guaranteed when specifying many fields in one ActivitySort object. */
export type ActivitySort = {
  ID?: InputMaybe<SortDirection>;
  description?: InputMaybe<SortDirection>;
};

export type ActivityUniqueWhere = {
  ID?: InputMaybe<Scalars['ID']>;
};

export type ActivityUpdateInput = {
  category?: InputMaybe<ActivityCategoryUpdateFieldInput>;
  description?: InputMaybe<Scalars['String']>;
  location?: InputMaybe<ActivityLocationUpdateFieldInput>;
  measurements?: InputMaybe<Array<ActivityMeasurementsUpdateFieldInput>>;
};

export type ActivityWhere = {
  AND?: InputMaybe<Array<ActivityWhere>>;
  ID?: InputMaybe<Scalars['ID']>;
  ID_CONTAINS?: InputMaybe<Scalars['ID']>;
  ID_ENDS_WITH?: InputMaybe<Scalars['ID']>;
  ID_IN?: InputMaybe<Array<Scalars['ID']>>;
  ID_NOT?: InputMaybe<Scalars['ID']>;
  ID_NOT_CONTAINS?: InputMaybe<Scalars['ID']>;
  ID_NOT_ENDS_WITH?: InputMaybe<Scalars['ID']>;
  ID_NOT_IN?: InputMaybe<Array<Scalars['ID']>>;
  ID_NOT_STARTS_WITH?: InputMaybe<Scalars['ID']>;
  ID_STARTS_WITH?: InputMaybe<Scalars['ID']>;
  OR?: InputMaybe<Array<ActivityWhere>>;
  category?: InputMaybe<AccountingCategoryWhere>;
  categoryAggregate?: InputMaybe<ActivityCategoryAggregateInput>;
  categoryConnection?: InputMaybe<ActivityCategoryConnectionWhere>;
  categoryConnection_NOT?: InputMaybe<ActivityCategoryConnectionWhere>;
  category_NOT?: InputMaybe<AccountingCategoryWhere>;
  description?: InputMaybe<Scalars['String']>;
  description_CONTAINS?: InputMaybe<Scalars['String']>;
  description_ENDS_WITH?: InputMaybe<Scalars['String']>;
  description_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_NOT?: InputMaybe<Scalars['String']>;
  description_NOT_CONTAINS?: InputMaybe<Scalars['String']>;
  description_NOT_ENDS_WITH?: InputMaybe<Scalars['String']>;
  description_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_NOT_STARTS_WITH?: InputMaybe<Scalars['String']>;
  description_STARTS_WITH?: InputMaybe<Scalars['String']>;
  location?: InputMaybe<LocationWhere>;
  locationAggregate?: InputMaybe<ActivityLocationAggregateInput>;
  locationConnection?: InputMaybe<ActivityLocationConnectionWhere>;
  locationConnection_NOT?: InputMaybe<ActivityLocationConnectionWhere>;
  location_NOT?: InputMaybe<LocationWhere>;
  measurementsAggregate?: InputMaybe<ActivityMeasurementsAggregateInput>;
  measurementsConnection_ALL?: InputMaybe<ActivityMeasurementsConnectionWhere>;
  measurementsConnection_NONE?: InputMaybe<ActivityMeasurementsConnectionWhere>;
  measurementsConnection_SINGLE?: InputMaybe<ActivityMeasurementsConnectionWhere>;
  measurementsConnection_SOME?: InputMaybe<ActivityMeasurementsConnectionWhere>;
  /** Return Activities where all of the related Measurements match this filter */
  measurements_ALL?: InputMaybe<MeasurementWhere>;
  /** Return Activities where none of the related Measurements match this filter */
  measurements_NONE?: InputMaybe<MeasurementWhere>;
  /** Return Activities where one of the related Measurements match this filter */
  measurements_SINGLE?: InputMaybe<MeasurementWhere>;
  /** Return Activities where some of the related Measurements match this filter */
  measurements_SOME?: InputMaybe<MeasurementWhere>;
};

export type CompaniesConnection = {
  __typename?: 'CompaniesConnection';
  edges: Array<CompanyEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type Company = {
  __typename?: 'Company';
  ID: Scalars['ID'];
  description?: Maybe<Scalars['String']>;
  holdings: Array<Company>;
  holdingsAggregate?: Maybe<CompanyCompanyHoldingsAggregationSelection>;
  holdingsConnection: CompanyHoldingsConnection;
  locations: Array<Location>;
  locationsAggregate?: Maybe<CompanyLocationLocationsAggregationSelection>;
  locationsConnection: CompanyLocationsConnection;
  name: Scalars['String'];
  subsidiaries: Array<Company>;
  subsidiariesAggregate?: Maybe<CompanyCompanySubsidiariesAggregationSelection>;
  subsidiariesConnection: CompanySubsidiariesConnection;
  users: Array<User>;
  usersAggregate?: Maybe<CompanyUserUsersAggregationSelection>;
  usersConnection: CompanyUsersConnection;
};


export type CompanyHoldingsArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<CompanyOptions>;
  where?: InputMaybe<CompanyWhere>;
};


export type CompanyHoldingsAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<CompanyWhere>;
};


export type CompanyHoldingsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<CompanyHoldingsConnectionSort>>;
  where?: InputMaybe<CompanyHoldingsConnectionWhere>;
};


export type CompanyLocationsArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<LocationOptions>;
  where?: InputMaybe<LocationWhere>;
};


export type CompanyLocationsAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<LocationWhere>;
};


export type CompanyLocationsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<CompanyLocationsConnectionSort>>;
  where?: InputMaybe<CompanyLocationsConnectionWhere>;
};


export type CompanySubsidiariesArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<CompanyOptions>;
  where?: InputMaybe<CompanyWhere>;
};


export type CompanySubsidiariesAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<CompanyWhere>;
};


export type CompanySubsidiariesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<CompanySubsidiariesConnectionSort>>;
  where?: InputMaybe<CompanySubsidiariesConnectionWhere>;
};


export type CompanyUsersArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<UserOptions>;
  where?: InputMaybe<UserWhere>;
};


export type CompanyUsersAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<UserWhere>;
};


export type CompanyUsersConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<CompanyUsersConnectionSort>>;
  where?: InputMaybe<CompanyUsersConnectionWhere>;
};

export type CompanyAggregateSelection = {
  __typename?: 'CompanyAggregateSelection';
  ID: IdAggregateSelectionNonNullable;
  count: Scalars['Int'];
  description: StringAggregateSelectionNullable;
  name: StringAggregateSelectionNonNullable;
};

export type CompanyCompanyHoldingsAggregationSelection = {
  __typename?: 'CompanyCompanyHoldingsAggregationSelection';
  count: Scalars['Int'];
  edge?: Maybe<CompanyCompanyHoldingsEdgeAggregateSelection>;
  node?: Maybe<CompanyCompanyHoldingsNodeAggregateSelection>;
};

export type CompanyCompanyHoldingsEdgeAggregateSelection = {
  __typename?: 'CompanyCompanyHoldingsEdgeAggregateSelection';
  stake: FloatAggregateSelectionNonNullable;
};

export type CompanyCompanyHoldingsNodeAggregateSelection = {
  __typename?: 'CompanyCompanyHoldingsNodeAggregateSelection';
  ID: IdAggregateSelectionNonNullable;
  description: StringAggregateSelectionNullable;
  name: StringAggregateSelectionNonNullable;
};

export type CompanyCompanySubsidiariesAggregationSelection = {
  __typename?: 'CompanyCompanySubsidiariesAggregationSelection';
  count: Scalars['Int'];
  edge?: Maybe<CompanyCompanySubsidiariesEdgeAggregateSelection>;
  node?: Maybe<CompanyCompanySubsidiariesNodeAggregateSelection>;
};

export type CompanyCompanySubsidiariesEdgeAggregateSelection = {
  __typename?: 'CompanyCompanySubsidiariesEdgeAggregateSelection';
  stake: FloatAggregateSelectionNonNullable;
};

export type CompanyCompanySubsidiariesNodeAggregateSelection = {
  __typename?: 'CompanyCompanySubsidiariesNodeAggregateSelection';
  ID: IdAggregateSelectionNonNullable;
  description: StringAggregateSelectionNullable;
  name: StringAggregateSelectionNonNullable;
};

export type CompanyConnectInput = {
  holdings?: InputMaybe<Array<CompanyHoldingsConnectFieldInput>>;
  locations?: InputMaybe<Array<CompanyLocationsConnectFieldInput>>;
  subsidiaries?: InputMaybe<Array<CompanySubsidiariesConnectFieldInput>>;
  users?: InputMaybe<Array<CompanyUsersConnectFieldInput>>;
};

export type CompanyConnectOrCreateInput = {
  holdings?: InputMaybe<Array<CompanyHoldingsConnectOrCreateFieldInput>>;
  locations?: InputMaybe<Array<CompanyLocationsConnectOrCreateFieldInput>>;
  subsidiaries?: InputMaybe<Array<CompanySubsidiariesConnectOrCreateFieldInput>>;
  users?: InputMaybe<Array<CompanyUsersConnectOrCreateFieldInput>>;
};

export type CompanyConnectOrCreateWhere = {
  node: CompanyUniqueWhere;
};

export type CompanyConnectWhere = {
  node: CompanyWhere;
};

export type CompanyCreateInput = {
  description?: InputMaybe<Scalars['String']>;
  holdings?: InputMaybe<CompanyHoldingsFieldInput>;
  locations?: InputMaybe<CompanyLocationsFieldInput>;
  name: Scalars['String'];
  subsidiaries?: InputMaybe<CompanySubsidiariesFieldInput>;
  users?: InputMaybe<CompanyUsersFieldInput>;
};

export type CompanyDeleteInput = {
  holdings?: InputMaybe<Array<CompanyHoldingsDeleteFieldInput>>;
  locations?: InputMaybe<Array<CompanyLocationsDeleteFieldInput>>;
  subsidiaries?: InputMaybe<Array<CompanySubsidiariesDeleteFieldInput>>;
  users?: InputMaybe<Array<CompanyUsersDeleteFieldInput>>;
};

export type CompanyDisconnectInput = {
  holdings?: InputMaybe<Array<CompanyHoldingsDisconnectFieldInput>>;
  locations?: InputMaybe<Array<CompanyLocationsDisconnectFieldInput>>;
  subsidiaries?: InputMaybe<Array<CompanySubsidiariesDisconnectFieldInput>>;
  users?: InputMaybe<Array<CompanyUsersDisconnectFieldInput>>;
};

export type CompanyEdge = {
  __typename?: 'CompanyEdge';
  cursor: Scalars['String'];
  node: Company;
};

export type CompanyHoldingsAggregateInput = {
  AND?: InputMaybe<Array<CompanyHoldingsAggregateInput>>;
  OR?: InputMaybe<Array<CompanyHoldingsAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  edge?: InputMaybe<CompanyHoldingsEdgeAggregationWhereInput>;
  node?: InputMaybe<CompanyHoldingsNodeAggregationWhereInput>;
};

export type CompanyHoldingsConnectFieldInput = {
  connect?: InputMaybe<Array<CompanyConnectInput>>;
  edge: OwnsCompanyCreateInput;
  where?: InputMaybe<CompanyConnectWhere>;
};

export type CompanyHoldingsConnectOrCreateFieldInput = {
  onCreate: CompanyHoldingsConnectOrCreateFieldInputOnCreate;
  where: CompanyConnectOrCreateWhere;
};

export type CompanyHoldingsConnectOrCreateFieldInputOnCreate = {
  edge: OwnsCompanyCreateInput;
  node: CompanyOnCreateInput;
};

export type CompanyHoldingsConnection = {
  __typename?: 'CompanyHoldingsConnection';
  edges: Array<CompanyHoldingsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type CompanyHoldingsConnectionSort = {
  edge?: InputMaybe<OwnsCompanySort>;
  node?: InputMaybe<CompanySort>;
};

export type CompanyHoldingsConnectionWhere = {
  AND?: InputMaybe<Array<CompanyHoldingsConnectionWhere>>;
  OR?: InputMaybe<Array<CompanyHoldingsConnectionWhere>>;
  edge?: InputMaybe<OwnsCompanyWhere>;
  edge_NOT?: InputMaybe<OwnsCompanyWhere>;
  node?: InputMaybe<CompanyWhere>;
  node_NOT?: InputMaybe<CompanyWhere>;
};

export type CompanyHoldingsCreateFieldInput = {
  edge: OwnsCompanyCreateInput;
  node: CompanyCreateInput;
};

export type CompanyHoldingsDeleteFieldInput = {
  delete?: InputMaybe<CompanyDeleteInput>;
  where?: InputMaybe<CompanyHoldingsConnectionWhere>;
};

export type CompanyHoldingsDisconnectFieldInput = {
  disconnect?: InputMaybe<CompanyDisconnectInput>;
  where?: InputMaybe<CompanyHoldingsConnectionWhere>;
};

export type CompanyHoldingsEdgeAggregationWhereInput = {
  AND?: InputMaybe<Array<CompanyHoldingsEdgeAggregationWhereInput>>;
  OR?: InputMaybe<Array<CompanyHoldingsEdgeAggregationWhereInput>>;
  stake_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  stake_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  stake_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  stake_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  stake_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  stake_EQUAL?: InputMaybe<Scalars['Float']>;
  stake_GT?: InputMaybe<Scalars['Float']>;
  stake_GTE?: InputMaybe<Scalars['Float']>;
  stake_LT?: InputMaybe<Scalars['Float']>;
  stake_LTE?: InputMaybe<Scalars['Float']>;
  stake_MAX_EQUAL?: InputMaybe<Scalars['Float']>;
  stake_MAX_GT?: InputMaybe<Scalars['Float']>;
  stake_MAX_GTE?: InputMaybe<Scalars['Float']>;
  stake_MAX_LT?: InputMaybe<Scalars['Float']>;
  stake_MAX_LTE?: InputMaybe<Scalars['Float']>;
  stake_MIN_EQUAL?: InputMaybe<Scalars['Float']>;
  stake_MIN_GT?: InputMaybe<Scalars['Float']>;
  stake_MIN_GTE?: InputMaybe<Scalars['Float']>;
  stake_MIN_LT?: InputMaybe<Scalars['Float']>;
  stake_MIN_LTE?: InputMaybe<Scalars['Float']>;
  stake_SUM_EQUAL?: InputMaybe<Scalars['Float']>;
  stake_SUM_GT?: InputMaybe<Scalars['Float']>;
  stake_SUM_GTE?: InputMaybe<Scalars['Float']>;
  stake_SUM_LT?: InputMaybe<Scalars['Float']>;
  stake_SUM_LTE?: InputMaybe<Scalars['Float']>;
};

export type CompanyHoldingsFieldInput = {
  connect?: InputMaybe<Array<CompanyHoldingsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<CompanyHoldingsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<CompanyHoldingsCreateFieldInput>>;
};

export type CompanyHoldingsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<CompanyHoldingsNodeAggregationWhereInput>>;
  ID_EQUAL?: InputMaybe<Scalars['ID']>;
  OR?: InputMaybe<Array<CompanyHoldingsNodeAggregationWhereInput>>;
  description_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  description_EQUAL?: InputMaybe<Scalars['String']>;
  description_GT?: InputMaybe<Scalars['Int']>;
  description_GTE?: InputMaybe<Scalars['Int']>;
  description_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  description_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  description_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  description_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  description_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  description_LT?: InputMaybe<Scalars['Int']>;
  description_LTE?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
  name_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  name_EQUAL?: InputMaybe<Scalars['String']>;
  name_GT?: InputMaybe<Scalars['Int']>;
  name_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  name_LT?: InputMaybe<Scalars['Int']>;
  name_LTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
};

export type CompanyHoldingsRelationship = OwnsCompany & {
  __typename?: 'CompanyHoldingsRelationship';
  cursor: Scalars['String'];
  node: Company;
  stake: Scalars['Float'];
};

export type CompanyHoldingsUpdateConnectionInput = {
  edge?: InputMaybe<OwnsCompanyUpdateInput>;
  node?: InputMaybe<CompanyUpdateInput>;
};

export type CompanyHoldingsUpdateFieldInput = {
  connect?: InputMaybe<Array<CompanyHoldingsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<CompanyHoldingsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<CompanyHoldingsCreateFieldInput>>;
  delete?: InputMaybe<Array<CompanyHoldingsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<CompanyHoldingsDisconnectFieldInput>>;
  update?: InputMaybe<CompanyHoldingsUpdateConnectionInput>;
  where?: InputMaybe<CompanyHoldingsConnectionWhere>;
};

export type CompanyLocationLocationsAggregationSelection = {
  __typename?: 'CompanyLocationLocationsAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<CompanyLocationLocationsNodeAggregateSelection>;
};

export type CompanyLocationLocationsNodeAggregateSelection = {
  __typename?: 'CompanyLocationLocationsNodeAggregateSelection';
  ID: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
};

export type CompanyLocationsAggregateInput = {
  AND?: InputMaybe<Array<CompanyLocationsAggregateInput>>;
  OR?: InputMaybe<Array<CompanyLocationsAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<CompanyLocationsNodeAggregationWhereInput>;
};

export type CompanyLocationsConnectFieldInput = {
  connect?: InputMaybe<Array<LocationConnectInput>>;
  where?: InputMaybe<LocationConnectWhere>;
};

export type CompanyLocationsConnectOrCreateFieldInput = {
  onCreate: CompanyLocationsConnectOrCreateFieldInputOnCreate;
  where: LocationConnectOrCreateWhere;
};

export type CompanyLocationsConnectOrCreateFieldInputOnCreate = {
  node: LocationOnCreateInput;
};

export type CompanyLocationsConnection = {
  __typename?: 'CompanyLocationsConnection';
  edges: Array<CompanyLocationsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type CompanyLocationsConnectionSort = {
  node?: InputMaybe<LocationSort>;
};

export type CompanyLocationsConnectionWhere = {
  AND?: InputMaybe<Array<CompanyLocationsConnectionWhere>>;
  OR?: InputMaybe<Array<CompanyLocationsConnectionWhere>>;
  node?: InputMaybe<LocationWhere>;
  node_NOT?: InputMaybe<LocationWhere>;
};

export type CompanyLocationsCreateFieldInput = {
  node: LocationCreateInput;
};

export type CompanyLocationsDeleteFieldInput = {
  delete?: InputMaybe<LocationDeleteInput>;
  where?: InputMaybe<CompanyLocationsConnectionWhere>;
};

export type CompanyLocationsDisconnectFieldInput = {
  disconnect?: InputMaybe<LocationDisconnectInput>;
  where?: InputMaybe<CompanyLocationsConnectionWhere>;
};

export type CompanyLocationsFieldInput = {
  connect?: InputMaybe<Array<CompanyLocationsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<CompanyLocationsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<CompanyLocationsCreateFieldInput>>;
};

export type CompanyLocationsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<CompanyLocationsNodeAggregationWhereInput>>;
  ID_EQUAL?: InputMaybe<Scalars['ID']>;
  OR?: InputMaybe<Array<CompanyLocationsNodeAggregationWhereInput>>;
  name_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  name_EQUAL?: InputMaybe<Scalars['String']>;
  name_GT?: InputMaybe<Scalars['Int']>;
  name_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  name_LT?: InputMaybe<Scalars['Int']>;
  name_LTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
};

export type CompanyLocationsRelationship = {
  __typename?: 'CompanyLocationsRelationship';
  cursor: Scalars['String'];
  node: Location;
};

export type CompanyLocationsUpdateConnectionInput = {
  node?: InputMaybe<LocationUpdateInput>;
};

export type CompanyLocationsUpdateFieldInput = {
  connect?: InputMaybe<Array<CompanyLocationsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<CompanyLocationsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<CompanyLocationsCreateFieldInput>>;
  delete?: InputMaybe<Array<CompanyLocationsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<CompanyLocationsDisconnectFieldInput>>;
  update?: InputMaybe<CompanyLocationsUpdateConnectionInput>;
  where?: InputMaybe<CompanyLocationsConnectionWhere>;
};

export type CompanyNetworkNode = {
  __typename?: 'CompanyNetworkNode';
  ID: Scalars['ID'];
  holdings: Array<Scalars['String']>;
  subsidiaries: Array<Scalars['String']>;
};

export type CompanyOnCreateInput = {
  description?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
};

export type CompanyOptions = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  /** Specify one or more CompanySort objects to sort Companies by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<CompanySort>>;
};

export type CompanyRelationInput = {
  holdings?: InputMaybe<Array<CompanyHoldingsCreateFieldInput>>;
  locations?: InputMaybe<Array<CompanyLocationsCreateFieldInput>>;
  subsidiaries?: InputMaybe<Array<CompanySubsidiariesCreateFieldInput>>;
  users?: InputMaybe<Array<CompanyUsersCreateFieldInput>>;
};

/** Fields to sort Companies by. The order in which sorts are applied is not guaranteed when specifying many fields in one CompanySort object. */
export type CompanySort = {
  ID?: InputMaybe<SortDirection>;
  description?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
};

export type CompanySubsidiariesAggregateInput = {
  AND?: InputMaybe<Array<CompanySubsidiariesAggregateInput>>;
  OR?: InputMaybe<Array<CompanySubsidiariesAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  edge?: InputMaybe<CompanySubsidiariesEdgeAggregationWhereInput>;
  node?: InputMaybe<CompanySubsidiariesNodeAggregationWhereInput>;
};

export type CompanySubsidiariesConnectFieldInput = {
  connect?: InputMaybe<Array<CompanyConnectInput>>;
  edge: OwnsCompanyCreateInput;
  where?: InputMaybe<CompanyConnectWhere>;
};

export type CompanySubsidiariesConnectOrCreateFieldInput = {
  onCreate: CompanySubsidiariesConnectOrCreateFieldInputOnCreate;
  where: CompanyConnectOrCreateWhere;
};

export type CompanySubsidiariesConnectOrCreateFieldInputOnCreate = {
  edge: OwnsCompanyCreateInput;
  node: CompanyOnCreateInput;
};

export type CompanySubsidiariesConnection = {
  __typename?: 'CompanySubsidiariesConnection';
  edges: Array<CompanySubsidiariesRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type CompanySubsidiariesConnectionSort = {
  edge?: InputMaybe<OwnsCompanySort>;
  node?: InputMaybe<CompanySort>;
};

export type CompanySubsidiariesConnectionWhere = {
  AND?: InputMaybe<Array<CompanySubsidiariesConnectionWhere>>;
  OR?: InputMaybe<Array<CompanySubsidiariesConnectionWhere>>;
  edge?: InputMaybe<OwnsCompanyWhere>;
  edge_NOT?: InputMaybe<OwnsCompanyWhere>;
  node?: InputMaybe<CompanyWhere>;
  node_NOT?: InputMaybe<CompanyWhere>;
};

export type CompanySubsidiariesCreateFieldInput = {
  edge: OwnsCompanyCreateInput;
  node: CompanyCreateInput;
};

export type CompanySubsidiariesDeleteFieldInput = {
  delete?: InputMaybe<CompanyDeleteInput>;
  where?: InputMaybe<CompanySubsidiariesConnectionWhere>;
};

export type CompanySubsidiariesDisconnectFieldInput = {
  disconnect?: InputMaybe<CompanyDisconnectInput>;
  where?: InputMaybe<CompanySubsidiariesConnectionWhere>;
};

export type CompanySubsidiariesEdgeAggregationWhereInput = {
  AND?: InputMaybe<Array<CompanySubsidiariesEdgeAggregationWhereInput>>;
  OR?: InputMaybe<Array<CompanySubsidiariesEdgeAggregationWhereInput>>;
  stake_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  stake_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  stake_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  stake_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  stake_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  stake_EQUAL?: InputMaybe<Scalars['Float']>;
  stake_GT?: InputMaybe<Scalars['Float']>;
  stake_GTE?: InputMaybe<Scalars['Float']>;
  stake_LT?: InputMaybe<Scalars['Float']>;
  stake_LTE?: InputMaybe<Scalars['Float']>;
  stake_MAX_EQUAL?: InputMaybe<Scalars['Float']>;
  stake_MAX_GT?: InputMaybe<Scalars['Float']>;
  stake_MAX_GTE?: InputMaybe<Scalars['Float']>;
  stake_MAX_LT?: InputMaybe<Scalars['Float']>;
  stake_MAX_LTE?: InputMaybe<Scalars['Float']>;
  stake_MIN_EQUAL?: InputMaybe<Scalars['Float']>;
  stake_MIN_GT?: InputMaybe<Scalars['Float']>;
  stake_MIN_GTE?: InputMaybe<Scalars['Float']>;
  stake_MIN_LT?: InputMaybe<Scalars['Float']>;
  stake_MIN_LTE?: InputMaybe<Scalars['Float']>;
  stake_SUM_EQUAL?: InputMaybe<Scalars['Float']>;
  stake_SUM_GT?: InputMaybe<Scalars['Float']>;
  stake_SUM_GTE?: InputMaybe<Scalars['Float']>;
  stake_SUM_LT?: InputMaybe<Scalars['Float']>;
  stake_SUM_LTE?: InputMaybe<Scalars['Float']>;
};

export type CompanySubsidiariesFieldInput = {
  connect?: InputMaybe<Array<CompanySubsidiariesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<CompanySubsidiariesConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<CompanySubsidiariesCreateFieldInput>>;
};

export type CompanySubsidiariesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<CompanySubsidiariesNodeAggregationWhereInput>>;
  ID_EQUAL?: InputMaybe<Scalars['ID']>;
  OR?: InputMaybe<Array<CompanySubsidiariesNodeAggregationWhereInput>>;
  description_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  description_EQUAL?: InputMaybe<Scalars['String']>;
  description_GT?: InputMaybe<Scalars['Int']>;
  description_GTE?: InputMaybe<Scalars['Int']>;
  description_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  description_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  description_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  description_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  description_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  description_LT?: InputMaybe<Scalars['Int']>;
  description_LTE?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
  name_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  name_EQUAL?: InputMaybe<Scalars['String']>;
  name_GT?: InputMaybe<Scalars['Int']>;
  name_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  name_LT?: InputMaybe<Scalars['Int']>;
  name_LTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
};

export type CompanySubsidiariesRelationship = OwnsCompany & {
  __typename?: 'CompanySubsidiariesRelationship';
  cursor: Scalars['String'];
  node: Company;
  stake: Scalars['Float'];
};

export type CompanySubsidiariesUpdateConnectionInput = {
  edge?: InputMaybe<OwnsCompanyUpdateInput>;
  node?: InputMaybe<CompanyUpdateInput>;
};

export type CompanySubsidiariesUpdateFieldInput = {
  connect?: InputMaybe<Array<CompanySubsidiariesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<CompanySubsidiariesConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<CompanySubsidiariesCreateFieldInput>>;
  delete?: InputMaybe<Array<CompanySubsidiariesDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<CompanySubsidiariesDisconnectFieldInput>>;
  update?: InputMaybe<CompanySubsidiariesUpdateConnectionInput>;
  where?: InputMaybe<CompanySubsidiariesConnectionWhere>;
};

export type CompanyUniqueWhere = {
  ID?: InputMaybe<Scalars['ID']>;
};

export type CompanyUpdateInput = {
  description?: InputMaybe<Scalars['String']>;
  holdings?: InputMaybe<Array<CompanyHoldingsUpdateFieldInput>>;
  locations?: InputMaybe<Array<CompanyLocationsUpdateFieldInput>>;
  name?: InputMaybe<Scalars['String']>;
  subsidiaries?: InputMaybe<Array<CompanySubsidiariesUpdateFieldInput>>;
  users?: InputMaybe<Array<CompanyUsersUpdateFieldInput>>;
};

export type CompanyUserUsersAggregationSelection = {
  __typename?: 'CompanyUserUsersAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<CompanyUserUsersNodeAggregateSelection>;
};

export type CompanyUserUsersNodeAggregateSelection = {
  __typename?: 'CompanyUserUsersNodeAggregateSelection';
  ID: IdAggregateSelectionNonNullable;
  email: StringAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
  photo: StringAggregateSelectionNonNullable;
};

export type CompanyUsersAggregateInput = {
  AND?: InputMaybe<Array<CompanyUsersAggregateInput>>;
  OR?: InputMaybe<Array<CompanyUsersAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<CompanyUsersNodeAggregationWhereInput>;
};

export type CompanyUsersConnectFieldInput = {
  connect?: InputMaybe<Array<UserConnectInput>>;
  where?: InputMaybe<UserConnectWhere>;
};

export type CompanyUsersConnectOrCreateFieldInput = {
  onCreate: CompanyUsersConnectOrCreateFieldInputOnCreate;
  where: UserConnectOrCreateWhere;
};

export type CompanyUsersConnectOrCreateFieldInputOnCreate = {
  node: UserOnCreateInput;
};

export type CompanyUsersConnection = {
  __typename?: 'CompanyUsersConnection';
  edges: Array<CompanyUsersRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type CompanyUsersConnectionSort = {
  node?: InputMaybe<UserSort>;
};

export type CompanyUsersConnectionWhere = {
  AND?: InputMaybe<Array<CompanyUsersConnectionWhere>>;
  OR?: InputMaybe<Array<CompanyUsersConnectionWhere>>;
  node?: InputMaybe<UserWhere>;
  node_NOT?: InputMaybe<UserWhere>;
};

export type CompanyUsersCreateFieldInput = {
  node: UserCreateInput;
};

export type CompanyUsersDeleteFieldInput = {
  delete?: InputMaybe<UserDeleteInput>;
  where?: InputMaybe<CompanyUsersConnectionWhere>;
};

export type CompanyUsersDisconnectFieldInput = {
  disconnect?: InputMaybe<UserDisconnectInput>;
  where?: InputMaybe<CompanyUsersConnectionWhere>;
};

export type CompanyUsersFieldInput = {
  connect?: InputMaybe<Array<CompanyUsersConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<CompanyUsersConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<CompanyUsersCreateFieldInput>>;
};

export type CompanyUsersNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<CompanyUsersNodeAggregationWhereInput>>;
  ID_EQUAL?: InputMaybe<Scalars['ID']>;
  OR?: InputMaybe<Array<CompanyUsersNodeAggregationWhereInput>>;
  email_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  email_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  email_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  email_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  email_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  email_EQUAL?: InputMaybe<Scalars['String']>;
  email_GT?: InputMaybe<Scalars['Int']>;
  email_GTE?: InputMaybe<Scalars['Int']>;
  email_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  email_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  email_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  email_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  email_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  email_LT?: InputMaybe<Scalars['Int']>;
  email_LTE?: InputMaybe<Scalars['Int']>;
  email_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  email_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  email_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  email_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  email_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
  name_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  name_EQUAL?: InputMaybe<Scalars['String']>;
  name_GT?: InputMaybe<Scalars['Int']>;
  name_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  name_LT?: InputMaybe<Scalars['Int']>;
  name_LTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
  photo_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  photo_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  photo_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  photo_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  photo_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  photo_EQUAL?: InputMaybe<Scalars['String']>;
  photo_GT?: InputMaybe<Scalars['Int']>;
  photo_GTE?: InputMaybe<Scalars['Int']>;
  photo_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  photo_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  photo_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  photo_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  photo_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  photo_LT?: InputMaybe<Scalars['Int']>;
  photo_LTE?: InputMaybe<Scalars['Int']>;
  photo_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  photo_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  photo_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  photo_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  photo_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
};

export type CompanyUsersRelationship = {
  __typename?: 'CompanyUsersRelationship';
  cursor: Scalars['String'];
  node: User;
};

export type CompanyUsersUpdateConnectionInput = {
  node?: InputMaybe<UserUpdateInput>;
};

export type CompanyUsersUpdateFieldInput = {
  connect?: InputMaybe<Array<CompanyUsersConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<CompanyUsersConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<CompanyUsersCreateFieldInput>>;
  delete?: InputMaybe<Array<CompanyUsersDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<CompanyUsersDisconnectFieldInput>>;
  update?: InputMaybe<CompanyUsersUpdateConnectionInput>;
  where?: InputMaybe<CompanyUsersConnectionWhere>;
};

export type CompanyWhere = {
  AND?: InputMaybe<Array<CompanyWhere>>;
  ID?: InputMaybe<Scalars['ID']>;
  ID_CONTAINS?: InputMaybe<Scalars['ID']>;
  ID_ENDS_WITH?: InputMaybe<Scalars['ID']>;
  ID_IN?: InputMaybe<Array<Scalars['ID']>>;
  ID_NOT?: InputMaybe<Scalars['ID']>;
  ID_NOT_CONTAINS?: InputMaybe<Scalars['ID']>;
  ID_NOT_ENDS_WITH?: InputMaybe<Scalars['ID']>;
  ID_NOT_IN?: InputMaybe<Array<Scalars['ID']>>;
  ID_NOT_STARTS_WITH?: InputMaybe<Scalars['ID']>;
  ID_STARTS_WITH?: InputMaybe<Scalars['ID']>;
  OR?: InputMaybe<Array<CompanyWhere>>;
  description?: InputMaybe<Scalars['String']>;
  description_CONTAINS?: InputMaybe<Scalars['String']>;
  description_ENDS_WITH?: InputMaybe<Scalars['String']>;
  description_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_NOT?: InputMaybe<Scalars['String']>;
  description_NOT_CONTAINS?: InputMaybe<Scalars['String']>;
  description_NOT_ENDS_WITH?: InputMaybe<Scalars['String']>;
  description_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_NOT_STARTS_WITH?: InputMaybe<Scalars['String']>;
  description_STARTS_WITH?: InputMaybe<Scalars['String']>;
  holdingsAggregate?: InputMaybe<CompanyHoldingsAggregateInput>;
  holdingsConnection_ALL?: InputMaybe<CompanyHoldingsConnectionWhere>;
  holdingsConnection_NONE?: InputMaybe<CompanyHoldingsConnectionWhere>;
  holdingsConnection_SINGLE?: InputMaybe<CompanyHoldingsConnectionWhere>;
  holdingsConnection_SOME?: InputMaybe<CompanyHoldingsConnectionWhere>;
  /** Return Companies where all of the related Companies match this filter */
  holdings_ALL?: InputMaybe<CompanyWhere>;
  /** Return Companies where none of the related Companies match this filter */
  holdings_NONE?: InputMaybe<CompanyWhere>;
  /** Return Companies where one of the related Companies match this filter */
  holdings_SINGLE?: InputMaybe<CompanyWhere>;
  /** Return Companies where some of the related Companies match this filter */
  holdings_SOME?: InputMaybe<CompanyWhere>;
  locationsAggregate?: InputMaybe<CompanyLocationsAggregateInput>;
  locationsConnection_ALL?: InputMaybe<CompanyLocationsConnectionWhere>;
  locationsConnection_NONE?: InputMaybe<CompanyLocationsConnectionWhere>;
  locationsConnection_SINGLE?: InputMaybe<CompanyLocationsConnectionWhere>;
  locationsConnection_SOME?: InputMaybe<CompanyLocationsConnectionWhere>;
  /** Return Companies where all of the related Locations match this filter */
  locations_ALL?: InputMaybe<LocationWhere>;
  /** Return Companies where none of the related Locations match this filter */
  locations_NONE?: InputMaybe<LocationWhere>;
  /** Return Companies where one of the related Locations match this filter */
  locations_SINGLE?: InputMaybe<LocationWhere>;
  /** Return Companies where some of the related Locations match this filter */
  locations_SOME?: InputMaybe<LocationWhere>;
  name?: InputMaybe<Scalars['String']>;
  name_CONTAINS?: InputMaybe<Scalars['String']>;
  name_ENDS_WITH?: InputMaybe<Scalars['String']>;
  name_IN?: InputMaybe<Array<Scalars['String']>>;
  name_NOT?: InputMaybe<Scalars['String']>;
  name_NOT_CONTAINS?: InputMaybe<Scalars['String']>;
  name_NOT_ENDS_WITH?: InputMaybe<Scalars['String']>;
  name_NOT_IN?: InputMaybe<Array<Scalars['String']>>;
  name_NOT_STARTS_WITH?: InputMaybe<Scalars['String']>;
  name_STARTS_WITH?: InputMaybe<Scalars['String']>;
  subsidiariesAggregate?: InputMaybe<CompanySubsidiariesAggregateInput>;
  subsidiariesConnection_ALL?: InputMaybe<CompanySubsidiariesConnectionWhere>;
  subsidiariesConnection_NONE?: InputMaybe<CompanySubsidiariesConnectionWhere>;
  subsidiariesConnection_SINGLE?: InputMaybe<CompanySubsidiariesConnectionWhere>;
  subsidiariesConnection_SOME?: InputMaybe<CompanySubsidiariesConnectionWhere>;
  /** Return Companies where all of the related Companies match this filter */
  subsidiaries_ALL?: InputMaybe<CompanyWhere>;
  /** Return Companies where none of the related Companies match this filter */
  subsidiaries_NONE?: InputMaybe<CompanyWhere>;
  /** Return Companies where one of the related Companies match this filter */
  subsidiaries_SINGLE?: InputMaybe<CompanyWhere>;
  /** Return Companies where some of the related Companies match this filter */
  subsidiaries_SOME?: InputMaybe<CompanyWhere>;
  usersAggregate?: InputMaybe<CompanyUsersAggregateInput>;
  usersConnection_ALL?: InputMaybe<CompanyUsersConnectionWhere>;
  usersConnection_NONE?: InputMaybe<CompanyUsersConnectionWhere>;
  usersConnection_SINGLE?: InputMaybe<CompanyUsersConnectionWhere>;
  usersConnection_SOME?: InputMaybe<CompanyUsersConnectionWhere>;
  /** Return Companies where all of the related Users match this filter */
  users_ALL?: InputMaybe<UserWhere>;
  /** Return Companies where none of the related Users match this filter */
  users_NONE?: InputMaybe<UserWhere>;
  /** Return Companies where one of the related Users match this filter */
  users_SINGLE?: InputMaybe<UserWhere>;
  /** Return Companies where some of the related Users match this filter */
  users_SOME?: InputMaybe<UserWhere>;
};

export type CreateCompaniesMutationResponse = {
  __typename?: 'CreateCompaniesMutationResponse';
  companies: Array<Company>;
  info: CreateInfo;
};

export type CreateInfo = {
  __typename?: 'CreateInfo';
  bookmark?: Maybe<Scalars['String']>;
  nodesCreated: Scalars['Int'];
  relationshipsCreated: Scalars['Int'];
};

export type CreateLocationsMutationResponse = {
  __typename?: 'CreateLocationsMutationResponse';
  info: CreateInfo;
  locations: Array<Location>;
};

export type CreateUsersMutationResponse = {
  __typename?: 'CreateUsersMutationResponse';
  info: CreateInfo;
  users: Array<User>;
};

export type DateTimeAggregateSelectionNonNullable = {
  __typename?: 'DateTimeAggregateSelectionNonNullable';
  max: Scalars['DateTime'];
  min: Scalars['DateTime'];
};

export type DeleteInfo = {
  __typename?: 'DeleteInfo';
  bookmark?: Maybe<Scalars['String']>;
  nodesDeleted: Scalars['Int'];
  relationshipsDeleted: Scalars['Int'];
};

export type EmissionCategory = {
  __typename?: 'EmissionCategory';
  ID: Scalars['ID'];
  children: Array<EmissionCategory>;
  childrenAggregate?: Maybe<EmissionCategoryEmissionCategoryChildrenAggregationSelection>;
  childrenConnection: EmissionCategoryChildrenConnection;
  name: Scalars['String'];
  parent?: Maybe<EmissionCategory>;
  parentAggregate?: Maybe<EmissionCategoryEmissionCategoryParentAggregationSelection>;
  parentConnection: EmissionCategoryParentConnection;
};


export type EmissionCategoryChildrenArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<EmissionCategoryOptions>;
  where?: InputMaybe<EmissionCategoryWhere>;
};


export type EmissionCategoryChildrenAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<EmissionCategoryWhere>;
};


export type EmissionCategoryChildrenConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<EmissionCategoryChildrenConnectionSort>>;
  where?: InputMaybe<EmissionCategoryChildrenConnectionWhere>;
};


export type EmissionCategoryParentArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<EmissionCategoryOptions>;
  where?: InputMaybe<EmissionCategoryWhere>;
};


export type EmissionCategoryParentAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<EmissionCategoryWhere>;
};


export type EmissionCategoryParentConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<EmissionCategoryParentConnectionSort>>;
  where?: InputMaybe<EmissionCategoryParentConnectionWhere>;
};

export type EmissionCategoryChildrenAggregateInput = {
  AND?: InputMaybe<Array<EmissionCategoryChildrenAggregateInput>>;
  OR?: InputMaybe<Array<EmissionCategoryChildrenAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<EmissionCategoryChildrenNodeAggregationWhereInput>;
};

export type EmissionCategoryChildrenConnectFieldInput = {
  connect?: InputMaybe<Array<EmissionCategoryConnectInput>>;
  where?: InputMaybe<EmissionCategoryConnectWhere>;
};

export type EmissionCategoryChildrenConnectOrCreateFieldInput = {
  onCreate: EmissionCategoryChildrenConnectOrCreateFieldInputOnCreate;
  where: EmissionCategoryConnectOrCreateWhere;
};

export type EmissionCategoryChildrenConnectOrCreateFieldInputOnCreate = {
  node: EmissionCategoryOnCreateInput;
};

export type EmissionCategoryChildrenConnection = {
  __typename?: 'EmissionCategoryChildrenConnection';
  edges: Array<EmissionCategoryChildrenRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type EmissionCategoryChildrenConnectionSort = {
  node?: InputMaybe<EmissionCategorySort>;
};

export type EmissionCategoryChildrenConnectionWhere = {
  AND?: InputMaybe<Array<EmissionCategoryChildrenConnectionWhere>>;
  OR?: InputMaybe<Array<EmissionCategoryChildrenConnectionWhere>>;
  node?: InputMaybe<EmissionCategoryWhere>;
  node_NOT?: InputMaybe<EmissionCategoryWhere>;
};

export type EmissionCategoryChildrenCreateFieldInput = {
  node: EmissionCategoryCreateInput;
};

export type EmissionCategoryChildrenDeleteFieldInput = {
  delete?: InputMaybe<EmissionCategoryDeleteInput>;
  where?: InputMaybe<EmissionCategoryChildrenConnectionWhere>;
};

export type EmissionCategoryChildrenDisconnectFieldInput = {
  disconnect?: InputMaybe<EmissionCategoryDisconnectInput>;
  where?: InputMaybe<EmissionCategoryChildrenConnectionWhere>;
};

export type EmissionCategoryChildrenFieldInput = {
  connect?: InputMaybe<Array<EmissionCategoryChildrenConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<EmissionCategoryChildrenConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<EmissionCategoryChildrenCreateFieldInput>>;
};

export type EmissionCategoryChildrenNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<EmissionCategoryChildrenNodeAggregationWhereInput>>;
  ID_EQUAL?: InputMaybe<Scalars['ID']>;
  OR?: InputMaybe<Array<EmissionCategoryChildrenNodeAggregationWhereInput>>;
  name_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  name_EQUAL?: InputMaybe<Scalars['String']>;
  name_GT?: InputMaybe<Scalars['Int']>;
  name_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  name_LT?: InputMaybe<Scalars['Int']>;
  name_LTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
};

export type EmissionCategoryChildrenRelationship = {
  __typename?: 'EmissionCategoryChildrenRelationship';
  cursor: Scalars['String'];
  node: EmissionCategory;
};

export type EmissionCategoryChildrenUpdateConnectionInput = {
  node?: InputMaybe<EmissionCategoryUpdateInput>;
};

export type EmissionCategoryChildrenUpdateFieldInput = {
  connect?: InputMaybe<Array<EmissionCategoryChildrenConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<EmissionCategoryChildrenConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<EmissionCategoryChildrenCreateFieldInput>>;
  delete?: InputMaybe<Array<EmissionCategoryChildrenDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<EmissionCategoryChildrenDisconnectFieldInput>>;
  update?: InputMaybe<EmissionCategoryChildrenUpdateConnectionInput>;
  where?: InputMaybe<EmissionCategoryChildrenConnectionWhere>;
};

export type EmissionCategoryConnectInput = {
  children?: InputMaybe<Array<EmissionCategoryChildrenConnectFieldInput>>;
  parent?: InputMaybe<EmissionCategoryParentConnectFieldInput>;
};

export type EmissionCategoryConnectOrCreateWhere = {
  node: EmissionCategoryUniqueWhere;
};

export type EmissionCategoryConnectWhere = {
  node: EmissionCategoryWhere;
};

export type EmissionCategoryCreateInput = {
  children?: InputMaybe<EmissionCategoryChildrenFieldInput>;
  name: Scalars['String'];
  parent?: InputMaybe<EmissionCategoryParentFieldInput>;
};

export type EmissionCategoryDeleteInput = {
  children?: InputMaybe<Array<EmissionCategoryChildrenDeleteFieldInput>>;
  parent?: InputMaybe<EmissionCategoryParentDeleteFieldInput>;
};

export type EmissionCategoryDisconnectInput = {
  children?: InputMaybe<Array<EmissionCategoryChildrenDisconnectFieldInput>>;
  parent?: InputMaybe<EmissionCategoryParentDisconnectFieldInput>;
};

export type EmissionCategoryEmissionCategoryChildrenAggregationSelection = {
  __typename?: 'EmissionCategoryEmissionCategoryChildrenAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<EmissionCategoryEmissionCategoryChildrenNodeAggregateSelection>;
};

export type EmissionCategoryEmissionCategoryChildrenNodeAggregateSelection = {
  __typename?: 'EmissionCategoryEmissionCategoryChildrenNodeAggregateSelection';
  ID: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
};

export type EmissionCategoryEmissionCategoryParentAggregationSelection = {
  __typename?: 'EmissionCategoryEmissionCategoryParentAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<EmissionCategoryEmissionCategoryParentNodeAggregateSelection>;
};

export type EmissionCategoryEmissionCategoryParentNodeAggregateSelection = {
  __typename?: 'EmissionCategoryEmissionCategoryParentNodeAggregateSelection';
  ID: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
};

export type EmissionCategoryOnCreateInput = {
  name: Scalars['String'];
};

export type EmissionCategoryOptions = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  /** Specify one or more EmissionCategorySort objects to sort EmissionCategories by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<EmissionCategorySort>>;
};

export type EmissionCategoryParentAggregateInput = {
  AND?: InputMaybe<Array<EmissionCategoryParentAggregateInput>>;
  OR?: InputMaybe<Array<EmissionCategoryParentAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<EmissionCategoryParentNodeAggregationWhereInput>;
};

export type EmissionCategoryParentConnectFieldInput = {
  connect?: InputMaybe<EmissionCategoryConnectInput>;
  where?: InputMaybe<EmissionCategoryConnectWhere>;
};

export type EmissionCategoryParentConnectOrCreateFieldInput = {
  onCreate: EmissionCategoryParentConnectOrCreateFieldInputOnCreate;
  where: EmissionCategoryConnectOrCreateWhere;
};

export type EmissionCategoryParentConnectOrCreateFieldInputOnCreate = {
  node: EmissionCategoryOnCreateInput;
};

export type EmissionCategoryParentConnection = {
  __typename?: 'EmissionCategoryParentConnection';
  edges: Array<EmissionCategoryParentRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type EmissionCategoryParentConnectionSort = {
  node?: InputMaybe<EmissionCategorySort>;
};

export type EmissionCategoryParentConnectionWhere = {
  AND?: InputMaybe<Array<EmissionCategoryParentConnectionWhere>>;
  OR?: InputMaybe<Array<EmissionCategoryParentConnectionWhere>>;
  node?: InputMaybe<EmissionCategoryWhere>;
  node_NOT?: InputMaybe<EmissionCategoryWhere>;
};

export type EmissionCategoryParentCreateFieldInput = {
  node: EmissionCategoryCreateInput;
};

export type EmissionCategoryParentDeleteFieldInput = {
  delete?: InputMaybe<EmissionCategoryDeleteInput>;
  where?: InputMaybe<EmissionCategoryParentConnectionWhere>;
};

export type EmissionCategoryParentDisconnectFieldInput = {
  disconnect?: InputMaybe<EmissionCategoryDisconnectInput>;
  where?: InputMaybe<EmissionCategoryParentConnectionWhere>;
};

export type EmissionCategoryParentFieldInput = {
  connect?: InputMaybe<EmissionCategoryParentConnectFieldInput>;
  connectOrCreate?: InputMaybe<EmissionCategoryParentConnectOrCreateFieldInput>;
  create?: InputMaybe<EmissionCategoryParentCreateFieldInput>;
};

export type EmissionCategoryParentNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<EmissionCategoryParentNodeAggregationWhereInput>>;
  ID_EQUAL?: InputMaybe<Scalars['ID']>;
  OR?: InputMaybe<Array<EmissionCategoryParentNodeAggregationWhereInput>>;
  name_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  name_EQUAL?: InputMaybe<Scalars['String']>;
  name_GT?: InputMaybe<Scalars['Int']>;
  name_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  name_LT?: InputMaybe<Scalars['Int']>;
  name_LTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
};

export type EmissionCategoryParentRelationship = {
  __typename?: 'EmissionCategoryParentRelationship';
  cursor: Scalars['String'];
  node: EmissionCategory;
};

export type EmissionCategoryParentUpdateConnectionInput = {
  node?: InputMaybe<EmissionCategoryUpdateInput>;
};

export type EmissionCategoryParentUpdateFieldInput = {
  connect?: InputMaybe<EmissionCategoryParentConnectFieldInput>;
  connectOrCreate?: InputMaybe<EmissionCategoryParentConnectOrCreateFieldInput>;
  create?: InputMaybe<EmissionCategoryParentCreateFieldInput>;
  delete?: InputMaybe<EmissionCategoryParentDeleteFieldInput>;
  disconnect?: InputMaybe<EmissionCategoryParentDisconnectFieldInput>;
  update?: InputMaybe<EmissionCategoryParentUpdateConnectionInput>;
  where?: InputMaybe<EmissionCategoryParentConnectionWhere>;
};

/** Fields to sort EmissionCategories by. The order in which sorts are applied is not guaranteed when specifying many fields in one EmissionCategorySort object. */
export type EmissionCategorySort = {
  ID?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
};

export type EmissionCategoryUniqueWhere = {
  ID?: InputMaybe<Scalars['ID']>;
};

export type EmissionCategoryUpdateInput = {
  children?: InputMaybe<Array<EmissionCategoryChildrenUpdateFieldInput>>;
  name?: InputMaybe<Scalars['String']>;
  parent?: InputMaybe<EmissionCategoryParentUpdateFieldInput>;
};

export type EmissionCategoryWhere = {
  AND?: InputMaybe<Array<EmissionCategoryWhere>>;
  ID?: InputMaybe<Scalars['ID']>;
  ID_CONTAINS?: InputMaybe<Scalars['ID']>;
  ID_ENDS_WITH?: InputMaybe<Scalars['ID']>;
  ID_IN?: InputMaybe<Array<Scalars['ID']>>;
  ID_NOT?: InputMaybe<Scalars['ID']>;
  ID_NOT_CONTAINS?: InputMaybe<Scalars['ID']>;
  ID_NOT_ENDS_WITH?: InputMaybe<Scalars['ID']>;
  ID_NOT_IN?: InputMaybe<Array<Scalars['ID']>>;
  ID_NOT_STARTS_WITH?: InputMaybe<Scalars['ID']>;
  ID_STARTS_WITH?: InputMaybe<Scalars['ID']>;
  OR?: InputMaybe<Array<EmissionCategoryWhere>>;
  childrenAggregate?: InputMaybe<EmissionCategoryChildrenAggregateInput>;
  childrenConnection_ALL?: InputMaybe<EmissionCategoryChildrenConnectionWhere>;
  childrenConnection_NONE?: InputMaybe<EmissionCategoryChildrenConnectionWhere>;
  childrenConnection_SINGLE?: InputMaybe<EmissionCategoryChildrenConnectionWhere>;
  childrenConnection_SOME?: InputMaybe<EmissionCategoryChildrenConnectionWhere>;
  /** Return EmissionCategories where all of the related EmissionCategories match this filter */
  children_ALL?: InputMaybe<EmissionCategoryWhere>;
  /** Return EmissionCategories where none of the related EmissionCategories match this filter */
  children_NONE?: InputMaybe<EmissionCategoryWhere>;
  /** Return EmissionCategories where one of the related EmissionCategories match this filter */
  children_SINGLE?: InputMaybe<EmissionCategoryWhere>;
  /** Return EmissionCategories where some of the related EmissionCategories match this filter */
  children_SOME?: InputMaybe<EmissionCategoryWhere>;
  name?: InputMaybe<Scalars['String']>;
  name_CONTAINS?: InputMaybe<Scalars['String']>;
  name_ENDS_WITH?: InputMaybe<Scalars['String']>;
  name_IN?: InputMaybe<Array<Scalars['String']>>;
  name_NOT?: InputMaybe<Scalars['String']>;
  name_NOT_CONTAINS?: InputMaybe<Scalars['String']>;
  name_NOT_ENDS_WITH?: InputMaybe<Scalars['String']>;
  name_NOT_IN?: InputMaybe<Array<Scalars['String']>>;
  name_NOT_STARTS_WITH?: InputMaybe<Scalars['String']>;
  name_STARTS_WITH?: InputMaybe<Scalars['String']>;
  parent?: InputMaybe<EmissionCategoryWhere>;
  parentAggregate?: InputMaybe<EmissionCategoryParentAggregateInput>;
  parentConnection?: InputMaybe<EmissionCategoryParentConnectionWhere>;
  parentConnection_NOT?: InputMaybe<EmissionCategoryParentConnectionWhere>;
  parent_NOT?: InputMaybe<EmissionCategoryWhere>;
};

export type EmissionFactor = {
  __typename?: 'EmissionFactor';
  CH4: Scalars['Float'];
  CO2: Scalars['Float'];
  CO2eCombined: Scalars['Float'];
  ID: Scalars['ID'];
  N2O: Scalars['Float'];
  category: EmissionCategory;
  categoryAggregate?: Maybe<EmissionFactorEmissionCategoryCategoryAggregationSelection>;
  categoryConnection: EmissionFactorCategoryConnection;
  measurements: Array<Measurement>;
  measurementsAggregate?: Maybe<EmissionFactorMeasurementMeasurementsAggregationSelection>;
  measurementsConnection: EmissionFactorMeasurementsConnection;
  method: EmissionFactorMethod;
  name: Scalars['String'];
  releaseDate: Scalars['DateTime'];
  unitDenominator: Unit;
  unitDenominatorAggregate?: Maybe<EmissionFactorUnitUnitDenominatorAggregationSelection>;
  unitDenominatorConnection: EmissionFactorUnitDenominatorConnection;
  unitNumerator: Unit;
  unitNumeratorAggregate?: Maybe<EmissionFactorUnitUnitNumeratorAggregationSelection>;
  unitNumeratorConnection: EmissionFactorUnitNumeratorConnection;
};


export type EmissionFactorCategoryArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<EmissionCategoryOptions>;
  where?: InputMaybe<EmissionCategoryWhere>;
};


export type EmissionFactorCategoryAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<EmissionCategoryWhere>;
};


export type EmissionFactorCategoryConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<EmissionFactorCategoryConnectionSort>>;
  where?: InputMaybe<EmissionFactorCategoryConnectionWhere>;
};


export type EmissionFactorMeasurementsArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<MeasurementOptions>;
  where?: InputMaybe<MeasurementWhere>;
};


export type EmissionFactorMeasurementsAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<MeasurementWhere>;
};


export type EmissionFactorMeasurementsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<EmissionFactorMeasurementsConnectionSort>>;
  where?: InputMaybe<EmissionFactorMeasurementsConnectionWhere>;
};


export type EmissionFactorUnitDenominatorArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<UnitOptions>;
  where?: InputMaybe<UnitWhere>;
};


export type EmissionFactorUnitDenominatorAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<UnitWhere>;
};


export type EmissionFactorUnitDenominatorConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<EmissionFactorUnitDenominatorConnectionSort>>;
  where?: InputMaybe<EmissionFactorUnitDenominatorConnectionWhere>;
};


export type EmissionFactorUnitNumeratorArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<UnitOptions>;
  where?: InputMaybe<UnitWhere>;
};


export type EmissionFactorUnitNumeratorAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<UnitWhere>;
};


export type EmissionFactorUnitNumeratorConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<EmissionFactorUnitNumeratorConnectionSort>>;
  where?: InputMaybe<EmissionFactorUnitNumeratorConnectionWhere>;
};

export type EmissionFactorCategoryAggregateInput = {
  AND?: InputMaybe<Array<EmissionFactorCategoryAggregateInput>>;
  OR?: InputMaybe<Array<EmissionFactorCategoryAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<EmissionFactorCategoryNodeAggregationWhereInput>;
};

export type EmissionFactorCategoryConnectFieldInput = {
  connect?: InputMaybe<EmissionCategoryConnectInput>;
  where?: InputMaybe<EmissionCategoryConnectWhere>;
};

export type EmissionFactorCategoryConnectOrCreateFieldInput = {
  onCreate: EmissionFactorCategoryConnectOrCreateFieldInputOnCreate;
  where: EmissionCategoryConnectOrCreateWhere;
};

export type EmissionFactorCategoryConnectOrCreateFieldInputOnCreate = {
  node: EmissionCategoryOnCreateInput;
};

export type EmissionFactorCategoryConnection = {
  __typename?: 'EmissionFactorCategoryConnection';
  edges: Array<EmissionFactorCategoryRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type EmissionFactorCategoryConnectionSort = {
  node?: InputMaybe<EmissionCategorySort>;
};

export type EmissionFactorCategoryConnectionWhere = {
  AND?: InputMaybe<Array<EmissionFactorCategoryConnectionWhere>>;
  OR?: InputMaybe<Array<EmissionFactorCategoryConnectionWhere>>;
  node?: InputMaybe<EmissionCategoryWhere>;
  node_NOT?: InputMaybe<EmissionCategoryWhere>;
};

export type EmissionFactorCategoryCreateFieldInput = {
  node: EmissionCategoryCreateInput;
};

export type EmissionFactorCategoryDeleteFieldInput = {
  delete?: InputMaybe<EmissionCategoryDeleteInput>;
  where?: InputMaybe<EmissionFactorCategoryConnectionWhere>;
};

export type EmissionFactorCategoryDisconnectFieldInput = {
  disconnect?: InputMaybe<EmissionCategoryDisconnectInput>;
  where?: InputMaybe<EmissionFactorCategoryConnectionWhere>;
};

export type EmissionFactorCategoryFieldInput = {
  connect?: InputMaybe<EmissionFactorCategoryConnectFieldInput>;
  connectOrCreate?: InputMaybe<EmissionFactorCategoryConnectOrCreateFieldInput>;
  create?: InputMaybe<EmissionFactorCategoryCreateFieldInput>;
};

export type EmissionFactorCategoryNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<EmissionFactorCategoryNodeAggregationWhereInput>>;
  ID_EQUAL?: InputMaybe<Scalars['ID']>;
  OR?: InputMaybe<Array<EmissionFactorCategoryNodeAggregationWhereInput>>;
  name_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  name_EQUAL?: InputMaybe<Scalars['String']>;
  name_GT?: InputMaybe<Scalars['Int']>;
  name_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  name_LT?: InputMaybe<Scalars['Int']>;
  name_LTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
};

export type EmissionFactorCategoryRelationship = {
  __typename?: 'EmissionFactorCategoryRelationship';
  cursor: Scalars['String'];
  node: EmissionCategory;
};

export type EmissionFactorCategoryUpdateConnectionInput = {
  node?: InputMaybe<EmissionCategoryUpdateInput>;
};

export type EmissionFactorCategoryUpdateFieldInput = {
  connect?: InputMaybe<EmissionFactorCategoryConnectFieldInput>;
  connectOrCreate?: InputMaybe<EmissionFactorCategoryConnectOrCreateFieldInput>;
  create?: InputMaybe<EmissionFactorCategoryCreateFieldInput>;
  delete?: InputMaybe<EmissionFactorCategoryDeleteFieldInput>;
  disconnect?: InputMaybe<EmissionFactorCategoryDisconnectFieldInput>;
  update?: InputMaybe<EmissionFactorCategoryUpdateConnectionInput>;
  where?: InputMaybe<EmissionFactorCategoryConnectionWhere>;
};

export type EmissionFactorConnectInput = {
  category?: InputMaybe<EmissionFactorCategoryConnectFieldInput>;
  measurements?: InputMaybe<Array<EmissionFactorMeasurementsConnectFieldInput>>;
  unitDenominator?: InputMaybe<EmissionFactorUnitDenominatorConnectFieldInput>;
  unitNumerator?: InputMaybe<EmissionFactorUnitNumeratorConnectFieldInput>;
};

export type EmissionFactorConnectOrCreateWhere = {
  node: EmissionFactorUniqueWhere;
};

export type EmissionFactorConnectWhere = {
  node: EmissionFactorWhere;
};

export type EmissionFactorCreateInput = {
  CH4: Scalars['Float'];
  CO2: Scalars['Float'];
  CO2eCombined: Scalars['Float'];
  N2O: Scalars['Float'];
  category?: InputMaybe<EmissionFactorCategoryFieldInput>;
  measurements?: InputMaybe<EmissionFactorMeasurementsFieldInput>;
  method: EmissionFactorMethod;
  name: Scalars['String'];
  releaseDate: Scalars['DateTime'];
  unitDenominator?: InputMaybe<EmissionFactorUnitDenominatorFieldInput>;
  unitNumerator?: InputMaybe<EmissionFactorUnitNumeratorFieldInput>;
};

export type EmissionFactorDeleteInput = {
  category?: InputMaybe<EmissionFactorCategoryDeleteFieldInput>;
  measurements?: InputMaybe<Array<EmissionFactorMeasurementsDeleteFieldInput>>;
  unitDenominator?: InputMaybe<EmissionFactorUnitDenominatorDeleteFieldInput>;
  unitNumerator?: InputMaybe<EmissionFactorUnitNumeratorDeleteFieldInput>;
};

export type EmissionFactorDisconnectInput = {
  category?: InputMaybe<EmissionFactorCategoryDisconnectFieldInput>;
  measurements?: InputMaybe<Array<EmissionFactorMeasurementsDisconnectFieldInput>>;
  unitDenominator?: InputMaybe<EmissionFactorUnitDenominatorDisconnectFieldInput>;
  unitNumerator?: InputMaybe<EmissionFactorUnitNumeratorDisconnectFieldInput>;
};

export type EmissionFactorEmissionCategoryCategoryAggregationSelection = {
  __typename?: 'EmissionFactorEmissionCategoryCategoryAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<EmissionFactorEmissionCategoryCategoryNodeAggregateSelection>;
};

export type EmissionFactorEmissionCategoryCategoryNodeAggregateSelection = {
  __typename?: 'EmissionFactorEmissionCategoryCategoryNodeAggregateSelection';
  ID: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
};

export type EmissionFactorMeasurementMeasurementsAggregationSelection = {
  __typename?: 'EmissionFactorMeasurementMeasurementsAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<EmissionFactorMeasurementMeasurementsNodeAggregateSelection>;
};

export type EmissionFactorMeasurementMeasurementsNodeAggregateSelection = {
  __typename?: 'EmissionFactorMeasurementMeasurementsNodeAggregateSelection';
  ID: IdAggregateSelectionNonNullable;
  amount: FloatAggregateSelectionNonNullable;
  end: DateTimeAggregateSelectionNonNullable;
  start: DateTimeAggregateSelectionNonNullable;
};

export type EmissionFactorMeasurementsAggregateInput = {
  AND?: InputMaybe<Array<EmissionFactorMeasurementsAggregateInput>>;
  OR?: InputMaybe<Array<EmissionFactorMeasurementsAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<EmissionFactorMeasurementsNodeAggregationWhereInput>;
};

export type EmissionFactorMeasurementsConnectFieldInput = {
  connect?: InputMaybe<Array<MeasurementConnectInput>>;
  where?: InputMaybe<MeasurementConnectWhere>;
};

export type EmissionFactorMeasurementsConnectOrCreateFieldInput = {
  onCreate: EmissionFactorMeasurementsConnectOrCreateFieldInputOnCreate;
  where: MeasurementConnectOrCreateWhere;
};

export type EmissionFactorMeasurementsConnectOrCreateFieldInputOnCreate = {
  node: MeasurementOnCreateInput;
};

export type EmissionFactorMeasurementsConnection = {
  __typename?: 'EmissionFactorMeasurementsConnection';
  edges: Array<EmissionFactorMeasurementsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type EmissionFactorMeasurementsConnectionSort = {
  node?: InputMaybe<MeasurementSort>;
};

export type EmissionFactorMeasurementsConnectionWhere = {
  AND?: InputMaybe<Array<EmissionFactorMeasurementsConnectionWhere>>;
  OR?: InputMaybe<Array<EmissionFactorMeasurementsConnectionWhere>>;
  node?: InputMaybe<MeasurementWhere>;
  node_NOT?: InputMaybe<MeasurementWhere>;
};

export type EmissionFactorMeasurementsCreateFieldInput = {
  node: MeasurementCreateInput;
};

export type EmissionFactorMeasurementsDeleteFieldInput = {
  delete?: InputMaybe<MeasurementDeleteInput>;
  where?: InputMaybe<EmissionFactorMeasurementsConnectionWhere>;
};

export type EmissionFactorMeasurementsDisconnectFieldInput = {
  disconnect?: InputMaybe<MeasurementDisconnectInput>;
  where?: InputMaybe<EmissionFactorMeasurementsConnectionWhere>;
};

export type EmissionFactorMeasurementsFieldInput = {
  connect?: InputMaybe<Array<EmissionFactorMeasurementsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<EmissionFactorMeasurementsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<EmissionFactorMeasurementsCreateFieldInput>>;
};

export type EmissionFactorMeasurementsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<EmissionFactorMeasurementsNodeAggregationWhereInput>>;
  ID_EQUAL?: InputMaybe<Scalars['ID']>;
  OR?: InputMaybe<Array<EmissionFactorMeasurementsNodeAggregationWhereInput>>;
  amount_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  amount_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  amount_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  amount_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  amount_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  amount_EQUAL?: InputMaybe<Scalars['Float']>;
  amount_GT?: InputMaybe<Scalars['Float']>;
  amount_GTE?: InputMaybe<Scalars['Float']>;
  amount_LT?: InputMaybe<Scalars['Float']>;
  amount_LTE?: InputMaybe<Scalars['Float']>;
  amount_MAX_EQUAL?: InputMaybe<Scalars['Float']>;
  amount_MAX_GT?: InputMaybe<Scalars['Float']>;
  amount_MAX_GTE?: InputMaybe<Scalars['Float']>;
  amount_MAX_LT?: InputMaybe<Scalars['Float']>;
  amount_MAX_LTE?: InputMaybe<Scalars['Float']>;
  amount_MIN_EQUAL?: InputMaybe<Scalars['Float']>;
  amount_MIN_GT?: InputMaybe<Scalars['Float']>;
  amount_MIN_GTE?: InputMaybe<Scalars['Float']>;
  amount_MIN_LT?: InputMaybe<Scalars['Float']>;
  amount_MIN_LTE?: InputMaybe<Scalars['Float']>;
  amount_SUM_EQUAL?: InputMaybe<Scalars['Float']>;
  amount_SUM_GT?: InputMaybe<Scalars['Float']>;
  amount_SUM_GTE?: InputMaybe<Scalars['Float']>;
  amount_SUM_LT?: InputMaybe<Scalars['Float']>;
  amount_SUM_LTE?: InputMaybe<Scalars['Float']>;
  end_EQUAL?: InputMaybe<Scalars['DateTime']>;
  end_GT?: InputMaybe<Scalars['DateTime']>;
  end_GTE?: InputMaybe<Scalars['DateTime']>;
  end_LT?: InputMaybe<Scalars['DateTime']>;
  end_LTE?: InputMaybe<Scalars['DateTime']>;
  end_MAX_EQUAL?: InputMaybe<Scalars['DateTime']>;
  end_MAX_GT?: InputMaybe<Scalars['DateTime']>;
  end_MAX_GTE?: InputMaybe<Scalars['DateTime']>;
  end_MAX_LT?: InputMaybe<Scalars['DateTime']>;
  end_MAX_LTE?: InputMaybe<Scalars['DateTime']>;
  end_MIN_EQUAL?: InputMaybe<Scalars['DateTime']>;
  end_MIN_GT?: InputMaybe<Scalars['DateTime']>;
  end_MIN_GTE?: InputMaybe<Scalars['DateTime']>;
  end_MIN_LT?: InputMaybe<Scalars['DateTime']>;
  end_MIN_LTE?: InputMaybe<Scalars['DateTime']>;
  start_EQUAL?: InputMaybe<Scalars['DateTime']>;
  start_GT?: InputMaybe<Scalars['DateTime']>;
  start_GTE?: InputMaybe<Scalars['DateTime']>;
  start_LT?: InputMaybe<Scalars['DateTime']>;
  start_LTE?: InputMaybe<Scalars['DateTime']>;
  start_MAX_EQUAL?: InputMaybe<Scalars['DateTime']>;
  start_MAX_GT?: InputMaybe<Scalars['DateTime']>;
  start_MAX_GTE?: InputMaybe<Scalars['DateTime']>;
  start_MAX_LT?: InputMaybe<Scalars['DateTime']>;
  start_MAX_LTE?: InputMaybe<Scalars['DateTime']>;
  start_MIN_EQUAL?: InputMaybe<Scalars['DateTime']>;
  start_MIN_GT?: InputMaybe<Scalars['DateTime']>;
  start_MIN_GTE?: InputMaybe<Scalars['DateTime']>;
  start_MIN_LT?: InputMaybe<Scalars['DateTime']>;
  start_MIN_LTE?: InputMaybe<Scalars['DateTime']>;
};

export type EmissionFactorMeasurementsRelationship = {
  __typename?: 'EmissionFactorMeasurementsRelationship';
  cursor: Scalars['String'];
  node: Measurement;
};

export type EmissionFactorMeasurementsUpdateConnectionInput = {
  node?: InputMaybe<MeasurementUpdateInput>;
};

export type EmissionFactorMeasurementsUpdateFieldInput = {
  connect?: InputMaybe<Array<EmissionFactorMeasurementsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<EmissionFactorMeasurementsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<EmissionFactorMeasurementsCreateFieldInput>>;
  delete?: InputMaybe<Array<EmissionFactorMeasurementsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<EmissionFactorMeasurementsDisconnectFieldInput>>;
  update?: InputMaybe<EmissionFactorMeasurementsUpdateConnectionInput>;
  where?: InputMaybe<EmissionFactorMeasurementsConnectionWhere>;
};

export enum EmissionFactorMethod {
  LocationBased = 'LOCATION_BASED',
  MarketBased = 'MARKET_BASED'
}

export type EmissionFactorOnCreateInput = {
  CH4: Scalars['Float'];
  CO2: Scalars['Float'];
  CO2eCombined: Scalars['Float'];
  N2O: Scalars['Float'];
  name: Scalars['String'];
  releaseDate: Scalars['DateTime'];
};

export type EmissionFactorOptions = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  /** Specify one or more EmissionFactorSort objects to sort EmissionFactors by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<EmissionFactorSort>>;
};

/** Fields to sort EmissionFactors by. The order in which sorts are applied is not guaranteed when specifying many fields in one EmissionFactorSort object. */
export type EmissionFactorSort = {
  CH4?: InputMaybe<SortDirection>;
  CO2?: InputMaybe<SortDirection>;
  CO2eCombined?: InputMaybe<SortDirection>;
  ID?: InputMaybe<SortDirection>;
  N2O?: InputMaybe<SortDirection>;
  method?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
  releaseDate?: InputMaybe<SortDirection>;
};

export type EmissionFactorUniqueWhere = {
  ID?: InputMaybe<Scalars['ID']>;
};

export type EmissionFactorUnitDenominatorAggregateInput = {
  AND?: InputMaybe<Array<EmissionFactorUnitDenominatorAggregateInput>>;
  OR?: InputMaybe<Array<EmissionFactorUnitDenominatorAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<EmissionFactorUnitDenominatorNodeAggregationWhereInput>;
};

export type EmissionFactorUnitDenominatorConnectFieldInput = {
  connect?: InputMaybe<UnitConnectInput>;
  where?: InputMaybe<UnitConnectWhere>;
};

export type EmissionFactorUnitDenominatorConnectOrCreateFieldInput = {
  onCreate: EmissionFactorUnitDenominatorConnectOrCreateFieldInputOnCreate;
  where: UnitConnectOrCreateWhere;
};

export type EmissionFactorUnitDenominatorConnectOrCreateFieldInputOnCreate = {
  node: UnitOnCreateInput;
};

export type EmissionFactorUnitDenominatorConnection = {
  __typename?: 'EmissionFactorUnitDenominatorConnection';
  edges: Array<EmissionFactorUnitDenominatorRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type EmissionFactorUnitDenominatorConnectionSort = {
  node?: InputMaybe<UnitSort>;
};

export type EmissionFactorUnitDenominatorConnectionWhere = {
  AND?: InputMaybe<Array<EmissionFactorUnitDenominatorConnectionWhere>>;
  OR?: InputMaybe<Array<EmissionFactorUnitDenominatorConnectionWhere>>;
  node?: InputMaybe<UnitWhere>;
  node_NOT?: InputMaybe<UnitWhere>;
};

export type EmissionFactorUnitDenominatorCreateFieldInput = {
  node: UnitCreateInput;
};

export type EmissionFactorUnitDenominatorDeleteFieldInput = {
  delete?: InputMaybe<UnitDeleteInput>;
  where?: InputMaybe<EmissionFactorUnitDenominatorConnectionWhere>;
};

export type EmissionFactorUnitDenominatorDisconnectFieldInput = {
  disconnect?: InputMaybe<UnitDisconnectInput>;
  where?: InputMaybe<EmissionFactorUnitDenominatorConnectionWhere>;
};

export type EmissionFactorUnitDenominatorFieldInput = {
  connect?: InputMaybe<EmissionFactorUnitDenominatorConnectFieldInput>;
  connectOrCreate?: InputMaybe<EmissionFactorUnitDenominatorConnectOrCreateFieldInput>;
  create?: InputMaybe<EmissionFactorUnitDenominatorCreateFieldInput>;
};

export type EmissionFactorUnitDenominatorNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<EmissionFactorUnitDenominatorNodeAggregationWhereInput>>;
  ID_EQUAL?: InputMaybe<Scalars['ID']>;
  OR?: InputMaybe<Array<EmissionFactorUnitDenominatorNodeAggregationWhereInput>>;
  name_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  name_EQUAL?: InputMaybe<Scalars['String']>;
  name_GT?: InputMaybe<Scalars['Int']>;
  name_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  name_LT?: InputMaybe<Scalars['Int']>;
  name_LTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
};

export type EmissionFactorUnitDenominatorRelationship = {
  __typename?: 'EmissionFactorUnitDenominatorRelationship';
  cursor: Scalars['String'];
  node: Unit;
};

export type EmissionFactorUnitDenominatorUpdateConnectionInput = {
  node?: InputMaybe<UnitUpdateInput>;
};

export type EmissionFactorUnitDenominatorUpdateFieldInput = {
  connect?: InputMaybe<EmissionFactorUnitDenominatorConnectFieldInput>;
  connectOrCreate?: InputMaybe<EmissionFactorUnitDenominatorConnectOrCreateFieldInput>;
  create?: InputMaybe<EmissionFactorUnitDenominatorCreateFieldInput>;
  delete?: InputMaybe<EmissionFactorUnitDenominatorDeleteFieldInput>;
  disconnect?: InputMaybe<EmissionFactorUnitDenominatorDisconnectFieldInput>;
  update?: InputMaybe<EmissionFactorUnitDenominatorUpdateConnectionInput>;
  where?: InputMaybe<EmissionFactorUnitDenominatorConnectionWhere>;
};

export type EmissionFactorUnitNumeratorAggregateInput = {
  AND?: InputMaybe<Array<EmissionFactorUnitNumeratorAggregateInput>>;
  OR?: InputMaybe<Array<EmissionFactorUnitNumeratorAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<EmissionFactorUnitNumeratorNodeAggregationWhereInput>;
};

export type EmissionFactorUnitNumeratorConnectFieldInput = {
  connect?: InputMaybe<UnitConnectInput>;
  where?: InputMaybe<UnitConnectWhere>;
};

export type EmissionFactorUnitNumeratorConnectOrCreateFieldInput = {
  onCreate: EmissionFactorUnitNumeratorConnectOrCreateFieldInputOnCreate;
  where: UnitConnectOrCreateWhere;
};

export type EmissionFactorUnitNumeratorConnectOrCreateFieldInputOnCreate = {
  node: UnitOnCreateInput;
};

export type EmissionFactorUnitNumeratorConnection = {
  __typename?: 'EmissionFactorUnitNumeratorConnection';
  edges: Array<EmissionFactorUnitNumeratorRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type EmissionFactorUnitNumeratorConnectionSort = {
  node?: InputMaybe<UnitSort>;
};

export type EmissionFactorUnitNumeratorConnectionWhere = {
  AND?: InputMaybe<Array<EmissionFactorUnitNumeratorConnectionWhere>>;
  OR?: InputMaybe<Array<EmissionFactorUnitNumeratorConnectionWhere>>;
  node?: InputMaybe<UnitWhere>;
  node_NOT?: InputMaybe<UnitWhere>;
};

export type EmissionFactorUnitNumeratorCreateFieldInput = {
  node: UnitCreateInput;
};

export type EmissionFactorUnitNumeratorDeleteFieldInput = {
  delete?: InputMaybe<UnitDeleteInput>;
  where?: InputMaybe<EmissionFactorUnitNumeratorConnectionWhere>;
};

export type EmissionFactorUnitNumeratorDisconnectFieldInput = {
  disconnect?: InputMaybe<UnitDisconnectInput>;
  where?: InputMaybe<EmissionFactorUnitNumeratorConnectionWhere>;
};

export type EmissionFactorUnitNumeratorFieldInput = {
  connect?: InputMaybe<EmissionFactorUnitNumeratorConnectFieldInput>;
  connectOrCreate?: InputMaybe<EmissionFactorUnitNumeratorConnectOrCreateFieldInput>;
  create?: InputMaybe<EmissionFactorUnitNumeratorCreateFieldInput>;
};

export type EmissionFactorUnitNumeratorNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<EmissionFactorUnitNumeratorNodeAggregationWhereInput>>;
  ID_EQUAL?: InputMaybe<Scalars['ID']>;
  OR?: InputMaybe<Array<EmissionFactorUnitNumeratorNodeAggregationWhereInput>>;
  name_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  name_EQUAL?: InputMaybe<Scalars['String']>;
  name_GT?: InputMaybe<Scalars['Int']>;
  name_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  name_LT?: InputMaybe<Scalars['Int']>;
  name_LTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
};

export type EmissionFactorUnitNumeratorRelationship = {
  __typename?: 'EmissionFactorUnitNumeratorRelationship';
  cursor: Scalars['String'];
  node: Unit;
};

export type EmissionFactorUnitNumeratorUpdateConnectionInput = {
  node?: InputMaybe<UnitUpdateInput>;
};

export type EmissionFactorUnitNumeratorUpdateFieldInput = {
  connect?: InputMaybe<EmissionFactorUnitNumeratorConnectFieldInput>;
  connectOrCreate?: InputMaybe<EmissionFactorUnitNumeratorConnectOrCreateFieldInput>;
  create?: InputMaybe<EmissionFactorUnitNumeratorCreateFieldInput>;
  delete?: InputMaybe<EmissionFactorUnitNumeratorDeleteFieldInput>;
  disconnect?: InputMaybe<EmissionFactorUnitNumeratorDisconnectFieldInput>;
  update?: InputMaybe<EmissionFactorUnitNumeratorUpdateConnectionInput>;
  where?: InputMaybe<EmissionFactorUnitNumeratorConnectionWhere>;
};

export type EmissionFactorUnitUnitDenominatorAggregationSelection = {
  __typename?: 'EmissionFactorUnitUnitDenominatorAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<EmissionFactorUnitUnitDenominatorNodeAggregateSelection>;
};

export type EmissionFactorUnitUnitDenominatorNodeAggregateSelection = {
  __typename?: 'EmissionFactorUnitUnitDenominatorNodeAggregateSelection';
  ID: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
};

export type EmissionFactorUnitUnitNumeratorAggregationSelection = {
  __typename?: 'EmissionFactorUnitUnitNumeratorAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<EmissionFactorUnitUnitNumeratorNodeAggregateSelection>;
};

export type EmissionFactorUnitUnitNumeratorNodeAggregateSelection = {
  __typename?: 'EmissionFactorUnitUnitNumeratorNodeAggregateSelection';
  ID: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
};

export type EmissionFactorUpdateInput = {
  CH4?: InputMaybe<Scalars['Float']>;
  CH4_ADD?: InputMaybe<Scalars['Float']>;
  CH4_DIVIDE?: InputMaybe<Scalars['Float']>;
  CH4_MULTIPLY?: InputMaybe<Scalars['Float']>;
  CH4_SUBTRACT?: InputMaybe<Scalars['Float']>;
  CO2?: InputMaybe<Scalars['Float']>;
  CO2_ADD?: InputMaybe<Scalars['Float']>;
  CO2_DIVIDE?: InputMaybe<Scalars['Float']>;
  CO2_MULTIPLY?: InputMaybe<Scalars['Float']>;
  CO2_SUBTRACT?: InputMaybe<Scalars['Float']>;
  CO2eCombined?: InputMaybe<Scalars['Float']>;
  CO2eCombined_ADD?: InputMaybe<Scalars['Float']>;
  CO2eCombined_DIVIDE?: InputMaybe<Scalars['Float']>;
  CO2eCombined_MULTIPLY?: InputMaybe<Scalars['Float']>;
  CO2eCombined_SUBTRACT?: InputMaybe<Scalars['Float']>;
  N2O?: InputMaybe<Scalars['Float']>;
  N2O_ADD?: InputMaybe<Scalars['Float']>;
  N2O_DIVIDE?: InputMaybe<Scalars['Float']>;
  N2O_MULTIPLY?: InputMaybe<Scalars['Float']>;
  N2O_SUBTRACT?: InputMaybe<Scalars['Float']>;
  category?: InputMaybe<EmissionFactorCategoryUpdateFieldInput>;
  measurements?: InputMaybe<Array<EmissionFactorMeasurementsUpdateFieldInput>>;
  method?: InputMaybe<EmissionFactorMethod>;
  name?: InputMaybe<Scalars['String']>;
  releaseDate?: InputMaybe<Scalars['DateTime']>;
  unitDenominator?: InputMaybe<EmissionFactorUnitDenominatorUpdateFieldInput>;
  unitNumerator?: InputMaybe<EmissionFactorUnitNumeratorUpdateFieldInput>;
};

export type EmissionFactorWhere = {
  AND?: InputMaybe<Array<EmissionFactorWhere>>;
  CH4?: InputMaybe<Scalars['Float']>;
  CH4_GT?: InputMaybe<Scalars['Float']>;
  CH4_GTE?: InputMaybe<Scalars['Float']>;
  CH4_IN?: InputMaybe<Array<Scalars['Float']>>;
  CH4_LT?: InputMaybe<Scalars['Float']>;
  CH4_LTE?: InputMaybe<Scalars['Float']>;
  CH4_NOT?: InputMaybe<Scalars['Float']>;
  CH4_NOT_IN?: InputMaybe<Array<Scalars['Float']>>;
  CO2?: InputMaybe<Scalars['Float']>;
  CO2_GT?: InputMaybe<Scalars['Float']>;
  CO2_GTE?: InputMaybe<Scalars['Float']>;
  CO2_IN?: InputMaybe<Array<Scalars['Float']>>;
  CO2_LT?: InputMaybe<Scalars['Float']>;
  CO2_LTE?: InputMaybe<Scalars['Float']>;
  CO2_NOT?: InputMaybe<Scalars['Float']>;
  CO2_NOT_IN?: InputMaybe<Array<Scalars['Float']>>;
  CO2eCombined?: InputMaybe<Scalars['Float']>;
  CO2eCombined_GT?: InputMaybe<Scalars['Float']>;
  CO2eCombined_GTE?: InputMaybe<Scalars['Float']>;
  CO2eCombined_IN?: InputMaybe<Array<Scalars['Float']>>;
  CO2eCombined_LT?: InputMaybe<Scalars['Float']>;
  CO2eCombined_LTE?: InputMaybe<Scalars['Float']>;
  CO2eCombined_NOT?: InputMaybe<Scalars['Float']>;
  CO2eCombined_NOT_IN?: InputMaybe<Array<Scalars['Float']>>;
  ID?: InputMaybe<Scalars['ID']>;
  ID_CONTAINS?: InputMaybe<Scalars['ID']>;
  ID_ENDS_WITH?: InputMaybe<Scalars['ID']>;
  ID_IN?: InputMaybe<Array<Scalars['ID']>>;
  ID_NOT?: InputMaybe<Scalars['ID']>;
  ID_NOT_CONTAINS?: InputMaybe<Scalars['ID']>;
  ID_NOT_ENDS_WITH?: InputMaybe<Scalars['ID']>;
  ID_NOT_IN?: InputMaybe<Array<Scalars['ID']>>;
  ID_NOT_STARTS_WITH?: InputMaybe<Scalars['ID']>;
  ID_STARTS_WITH?: InputMaybe<Scalars['ID']>;
  N2O?: InputMaybe<Scalars['Float']>;
  N2O_GT?: InputMaybe<Scalars['Float']>;
  N2O_GTE?: InputMaybe<Scalars['Float']>;
  N2O_IN?: InputMaybe<Array<Scalars['Float']>>;
  N2O_LT?: InputMaybe<Scalars['Float']>;
  N2O_LTE?: InputMaybe<Scalars['Float']>;
  N2O_NOT?: InputMaybe<Scalars['Float']>;
  N2O_NOT_IN?: InputMaybe<Array<Scalars['Float']>>;
  OR?: InputMaybe<Array<EmissionFactorWhere>>;
  category?: InputMaybe<EmissionCategoryWhere>;
  categoryAggregate?: InputMaybe<EmissionFactorCategoryAggregateInput>;
  categoryConnection?: InputMaybe<EmissionFactorCategoryConnectionWhere>;
  categoryConnection_NOT?: InputMaybe<EmissionFactorCategoryConnectionWhere>;
  category_NOT?: InputMaybe<EmissionCategoryWhere>;
  measurementsAggregate?: InputMaybe<EmissionFactorMeasurementsAggregateInput>;
  measurementsConnection_ALL?: InputMaybe<EmissionFactorMeasurementsConnectionWhere>;
  measurementsConnection_NONE?: InputMaybe<EmissionFactorMeasurementsConnectionWhere>;
  measurementsConnection_SINGLE?: InputMaybe<EmissionFactorMeasurementsConnectionWhere>;
  measurementsConnection_SOME?: InputMaybe<EmissionFactorMeasurementsConnectionWhere>;
  /** Return EmissionFactors where all of the related Measurements match this filter */
  measurements_ALL?: InputMaybe<MeasurementWhere>;
  /** Return EmissionFactors where none of the related Measurements match this filter */
  measurements_NONE?: InputMaybe<MeasurementWhere>;
  /** Return EmissionFactors where one of the related Measurements match this filter */
  measurements_SINGLE?: InputMaybe<MeasurementWhere>;
  /** Return EmissionFactors where some of the related Measurements match this filter */
  measurements_SOME?: InputMaybe<MeasurementWhere>;
  method?: InputMaybe<EmissionFactorMethod>;
  method_IN?: InputMaybe<Array<EmissionFactorMethod>>;
  method_NOT?: InputMaybe<EmissionFactorMethod>;
  method_NOT_IN?: InputMaybe<Array<EmissionFactorMethod>>;
  name?: InputMaybe<Scalars['String']>;
  name_CONTAINS?: InputMaybe<Scalars['String']>;
  name_ENDS_WITH?: InputMaybe<Scalars['String']>;
  name_IN?: InputMaybe<Array<Scalars['String']>>;
  name_NOT?: InputMaybe<Scalars['String']>;
  name_NOT_CONTAINS?: InputMaybe<Scalars['String']>;
  name_NOT_ENDS_WITH?: InputMaybe<Scalars['String']>;
  name_NOT_IN?: InputMaybe<Array<Scalars['String']>>;
  name_NOT_STARTS_WITH?: InputMaybe<Scalars['String']>;
  name_STARTS_WITH?: InputMaybe<Scalars['String']>;
  releaseDate?: InputMaybe<Scalars['DateTime']>;
  releaseDate_GT?: InputMaybe<Scalars['DateTime']>;
  releaseDate_GTE?: InputMaybe<Scalars['DateTime']>;
  releaseDate_IN?: InputMaybe<Array<Scalars['DateTime']>>;
  releaseDate_LT?: InputMaybe<Scalars['DateTime']>;
  releaseDate_LTE?: InputMaybe<Scalars['DateTime']>;
  releaseDate_NOT?: InputMaybe<Scalars['DateTime']>;
  releaseDate_NOT_IN?: InputMaybe<Array<Scalars['DateTime']>>;
  unitDenominator?: InputMaybe<UnitWhere>;
  unitDenominatorAggregate?: InputMaybe<EmissionFactorUnitDenominatorAggregateInput>;
  unitDenominatorConnection?: InputMaybe<EmissionFactorUnitDenominatorConnectionWhere>;
  unitDenominatorConnection_NOT?: InputMaybe<EmissionFactorUnitDenominatorConnectionWhere>;
  unitDenominator_NOT?: InputMaybe<UnitWhere>;
  unitNumerator?: InputMaybe<UnitWhere>;
  unitNumeratorAggregate?: InputMaybe<EmissionFactorUnitNumeratorAggregateInput>;
  unitNumeratorConnection?: InputMaybe<EmissionFactorUnitNumeratorConnectionWhere>;
  unitNumeratorConnection_NOT?: InputMaybe<EmissionFactorUnitNumeratorConnectionWhere>;
  unitNumerator_NOT?: InputMaybe<UnitWhere>;
};

export type FloatAggregateSelectionNonNullable = {
  __typename?: 'FloatAggregateSelectionNonNullable';
  average: Scalars['Float'];
  max: Scalars['Float'];
  min: Scalars['Float'];
  sum: Scalars['Float'];
};

export type IdAggregateSelectionNonNullable = {
  __typename?: 'IDAggregateSelectionNonNullable';
  longest: Scalars['ID'];
  shortest: Scalars['ID'];
};

export type Location = {
  __typename?: 'Location';
  ID: Scalars['ID'];
  activities: Array<Activity>;
  activitiesAggregate?: Maybe<LocationActivityActivitiesAggregationSelection>;
  activitiesConnection: LocationActivitiesConnection;
  company: Company;
  companyAggregate?: Maybe<LocationCompanyCompanyAggregationSelection>;
  companyConnection: LocationCompanyConnection;
  name: Scalars['String'];
};


export type LocationActivitiesArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<ActivityOptions>;
  where?: InputMaybe<ActivityWhere>;
};


export type LocationActivitiesAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<ActivityWhere>;
};


export type LocationActivitiesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<LocationActivitiesConnectionSort>>;
  where?: InputMaybe<LocationActivitiesConnectionWhere>;
};


export type LocationCompanyArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<CompanyOptions>;
  where?: InputMaybe<CompanyWhere>;
};


export type LocationCompanyAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<CompanyWhere>;
};


export type LocationCompanyConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<LocationCompanyConnectionSort>>;
  where?: InputMaybe<LocationCompanyConnectionWhere>;
};

export type LocationActivitiesAggregateInput = {
  AND?: InputMaybe<Array<LocationActivitiesAggregateInput>>;
  OR?: InputMaybe<Array<LocationActivitiesAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<LocationActivitiesNodeAggregationWhereInput>;
};

export type LocationActivitiesConnectFieldInput = {
  connect?: InputMaybe<Array<ActivityConnectInput>>;
  where?: InputMaybe<ActivityConnectWhere>;
};

export type LocationActivitiesConnectOrCreateFieldInput = {
  onCreate: LocationActivitiesConnectOrCreateFieldInputOnCreate;
  where: ActivityConnectOrCreateWhere;
};

export type LocationActivitiesConnectOrCreateFieldInputOnCreate = {
  node: ActivityOnCreateInput;
};

export type LocationActivitiesConnection = {
  __typename?: 'LocationActivitiesConnection';
  edges: Array<LocationActivitiesRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type LocationActivitiesConnectionSort = {
  node?: InputMaybe<ActivitySort>;
};

export type LocationActivitiesConnectionWhere = {
  AND?: InputMaybe<Array<LocationActivitiesConnectionWhere>>;
  OR?: InputMaybe<Array<LocationActivitiesConnectionWhere>>;
  node?: InputMaybe<ActivityWhere>;
  node_NOT?: InputMaybe<ActivityWhere>;
};

export type LocationActivitiesCreateFieldInput = {
  node: ActivityCreateInput;
};

export type LocationActivitiesDeleteFieldInput = {
  delete?: InputMaybe<ActivityDeleteInput>;
  where?: InputMaybe<LocationActivitiesConnectionWhere>;
};

export type LocationActivitiesDisconnectFieldInput = {
  disconnect?: InputMaybe<ActivityDisconnectInput>;
  where?: InputMaybe<LocationActivitiesConnectionWhere>;
};

export type LocationActivitiesFieldInput = {
  connect?: InputMaybe<Array<LocationActivitiesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<LocationActivitiesConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<LocationActivitiesCreateFieldInput>>;
};

export type LocationActivitiesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<LocationActivitiesNodeAggregationWhereInput>>;
  ID_EQUAL?: InputMaybe<Scalars['ID']>;
  OR?: InputMaybe<Array<LocationActivitiesNodeAggregationWhereInput>>;
  description_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  description_EQUAL?: InputMaybe<Scalars['String']>;
  description_GT?: InputMaybe<Scalars['Int']>;
  description_GTE?: InputMaybe<Scalars['Int']>;
  description_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  description_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  description_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  description_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  description_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  description_LT?: InputMaybe<Scalars['Int']>;
  description_LTE?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
};

export type LocationActivitiesRelationship = {
  __typename?: 'LocationActivitiesRelationship';
  cursor: Scalars['String'];
  node: Activity;
};

export type LocationActivitiesUpdateConnectionInput = {
  node?: InputMaybe<ActivityUpdateInput>;
};

export type LocationActivitiesUpdateFieldInput = {
  connect?: InputMaybe<Array<LocationActivitiesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<LocationActivitiesConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<LocationActivitiesCreateFieldInput>>;
  delete?: InputMaybe<Array<LocationActivitiesDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<LocationActivitiesDisconnectFieldInput>>;
  update?: InputMaybe<LocationActivitiesUpdateConnectionInput>;
  where?: InputMaybe<LocationActivitiesConnectionWhere>;
};

export type LocationActivityActivitiesAggregationSelection = {
  __typename?: 'LocationActivityActivitiesAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<LocationActivityActivitiesNodeAggregateSelection>;
};

export type LocationActivityActivitiesNodeAggregateSelection = {
  __typename?: 'LocationActivityActivitiesNodeAggregateSelection';
  ID: IdAggregateSelectionNonNullable;
  description: StringAggregateSelectionNullable;
};

export type LocationAggregateSelection = {
  __typename?: 'LocationAggregateSelection';
  ID: IdAggregateSelectionNonNullable;
  count: Scalars['Int'];
  name: StringAggregateSelectionNonNullable;
};

export type LocationCompanyAggregateInput = {
  AND?: InputMaybe<Array<LocationCompanyAggregateInput>>;
  OR?: InputMaybe<Array<LocationCompanyAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<LocationCompanyNodeAggregationWhereInput>;
};

export type LocationCompanyCompanyAggregationSelection = {
  __typename?: 'LocationCompanyCompanyAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<LocationCompanyCompanyNodeAggregateSelection>;
};

export type LocationCompanyCompanyNodeAggregateSelection = {
  __typename?: 'LocationCompanyCompanyNodeAggregateSelection';
  ID: IdAggregateSelectionNonNullable;
  description: StringAggregateSelectionNullable;
  name: StringAggregateSelectionNonNullable;
};

export type LocationCompanyConnectFieldInput = {
  connect?: InputMaybe<CompanyConnectInput>;
  where?: InputMaybe<CompanyConnectWhere>;
};

export type LocationCompanyConnectOrCreateFieldInput = {
  onCreate: LocationCompanyConnectOrCreateFieldInputOnCreate;
  where: CompanyConnectOrCreateWhere;
};

export type LocationCompanyConnectOrCreateFieldInputOnCreate = {
  node: CompanyOnCreateInput;
};

export type LocationCompanyConnection = {
  __typename?: 'LocationCompanyConnection';
  edges: Array<LocationCompanyRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type LocationCompanyConnectionSort = {
  node?: InputMaybe<CompanySort>;
};

export type LocationCompanyConnectionWhere = {
  AND?: InputMaybe<Array<LocationCompanyConnectionWhere>>;
  OR?: InputMaybe<Array<LocationCompanyConnectionWhere>>;
  node?: InputMaybe<CompanyWhere>;
  node_NOT?: InputMaybe<CompanyWhere>;
};

export type LocationCompanyCreateFieldInput = {
  node: CompanyCreateInput;
};

export type LocationCompanyDeleteFieldInput = {
  delete?: InputMaybe<CompanyDeleteInput>;
  where?: InputMaybe<LocationCompanyConnectionWhere>;
};

export type LocationCompanyDisconnectFieldInput = {
  disconnect?: InputMaybe<CompanyDisconnectInput>;
  where?: InputMaybe<LocationCompanyConnectionWhere>;
};

export type LocationCompanyFieldInput = {
  connect?: InputMaybe<LocationCompanyConnectFieldInput>;
  connectOrCreate?: InputMaybe<LocationCompanyConnectOrCreateFieldInput>;
  create?: InputMaybe<LocationCompanyCreateFieldInput>;
};

export type LocationCompanyNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<LocationCompanyNodeAggregationWhereInput>>;
  ID_EQUAL?: InputMaybe<Scalars['ID']>;
  OR?: InputMaybe<Array<LocationCompanyNodeAggregationWhereInput>>;
  description_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  description_EQUAL?: InputMaybe<Scalars['String']>;
  description_GT?: InputMaybe<Scalars['Int']>;
  description_GTE?: InputMaybe<Scalars['Int']>;
  description_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  description_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  description_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  description_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  description_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  description_LT?: InputMaybe<Scalars['Int']>;
  description_LTE?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
  name_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  name_EQUAL?: InputMaybe<Scalars['String']>;
  name_GT?: InputMaybe<Scalars['Int']>;
  name_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  name_LT?: InputMaybe<Scalars['Int']>;
  name_LTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
};

export type LocationCompanyRelationship = {
  __typename?: 'LocationCompanyRelationship';
  cursor: Scalars['String'];
  node: Company;
};

export type LocationCompanyUpdateConnectionInput = {
  node?: InputMaybe<CompanyUpdateInput>;
};

export type LocationCompanyUpdateFieldInput = {
  connect?: InputMaybe<LocationCompanyConnectFieldInput>;
  connectOrCreate?: InputMaybe<LocationCompanyConnectOrCreateFieldInput>;
  create?: InputMaybe<LocationCompanyCreateFieldInput>;
  delete?: InputMaybe<LocationCompanyDeleteFieldInput>;
  disconnect?: InputMaybe<LocationCompanyDisconnectFieldInput>;
  update?: InputMaybe<LocationCompanyUpdateConnectionInput>;
  where?: InputMaybe<LocationCompanyConnectionWhere>;
};

export type LocationConnectInput = {
  activities?: InputMaybe<Array<LocationActivitiesConnectFieldInput>>;
  company?: InputMaybe<LocationCompanyConnectFieldInput>;
};

export type LocationConnectOrCreateInput = {
  activities?: InputMaybe<Array<LocationActivitiesConnectOrCreateFieldInput>>;
  company?: InputMaybe<LocationCompanyConnectOrCreateFieldInput>;
};

export type LocationConnectOrCreateWhere = {
  node: LocationUniqueWhere;
};

export type LocationConnectWhere = {
  node: LocationWhere;
};

export type LocationCreateInput = {
  activities?: InputMaybe<LocationActivitiesFieldInput>;
  company?: InputMaybe<LocationCompanyFieldInput>;
  name: Scalars['String'];
};

export type LocationDeleteInput = {
  activities?: InputMaybe<Array<LocationActivitiesDeleteFieldInput>>;
  company?: InputMaybe<LocationCompanyDeleteFieldInput>;
};

export type LocationDisconnectInput = {
  activities?: InputMaybe<Array<LocationActivitiesDisconnectFieldInput>>;
  company?: InputMaybe<LocationCompanyDisconnectFieldInput>;
};

export type LocationEdge = {
  __typename?: 'LocationEdge';
  cursor: Scalars['String'];
  node: Location;
};

export type LocationOnCreateInput = {
  name: Scalars['String'];
};

export type LocationOptions = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  /** Specify one or more LocationSort objects to sort Locations by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<LocationSort>>;
};

export type LocationRelationInput = {
  activities?: InputMaybe<Array<LocationActivitiesCreateFieldInput>>;
  company?: InputMaybe<LocationCompanyCreateFieldInput>;
};

/** Fields to sort Locations by. The order in which sorts are applied is not guaranteed when specifying many fields in one LocationSort object. */
export type LocationSort = {
  ID?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
};

export type LocationUniqueWhere = {
  ID?: InputMaybe<Scalars['ID']>;
};

export type LocationUpdateInput = {
  activities?: InputMaybe<Array<LocationActivitiesUpdateFieldInput>>;
  company?: InputMaybe<LocationCompanyUpdateFieldInput>;
  name?: InputMaybe<Scalars['String']>;
};

export type LocationWhere = {
  AND?: InputMaybe<Array<LocationWhere>>;
  ID?: InputMaybe<Scalars['ID']>;
  ID_CONTAINS?: InputMaybe<Scalars['ID']>;
  ID_ENDS_WITH?: InputMaybe<Scalars['ID']>;
  ID_IN?: InputMaybe<Array<Scalars['ID']>>;
  ID_NOT?: InputMaybe<Scalars['ID']>;
  ID_NOT_CONTAINS?: InputMaybe<Scalars['ID']>;
  ID_NOT_ENDS_WITH?: InputMaybe<Scalars['ID']>;
  ID_NOT_IN?: InputMaybe<Array<Scalars['ID']>>;
  ID_NOT_STARTS_WITH?: InputMaybe<Scalars['ID']>;
  ID_STARTS_WITH?: InputMaybe<Scalars['ID']>;
  OR?: InputMaybe<Array<LocationWhere>>;
  activitiesAggregate?: InputMaybe<LocationActivitiesAggregateInput>;
  activitiesConnection_ALL?: InputMaybe<LocationActivitiesConnectionWhere>;
  activitiesConnection_NONE?: InputMaybe<LocationActivitiesConnectionWhere>;
  activitiesConnection_SINGLE?: InputMaybe<LocationActivitiesConnectionWhere>;
  activitiesConnection_SOME?: InputMaybe<LocationActivitiesConnectionWhere>;
  /** Return Locations where all of the related Activities match this filter */
  activities_ALL?: InputMaybe<ActivityWhere>;
  /** Return Locations where none of the related Activities match this filter */
  activities_NONE?: InputMaybe<ActivityWhere>;
  /** Return Locations where one of the related Activities match this filter */
  activities_SINGLE?: InputMaybe<ActivityWhere>;
  /** Return Locations where some of the related Activities match this filter */
  activities_SOME?: InputMaybe<ActivityWhere>;
  company?: InputMaybe<CompanyWhere>;
  companyAggregate?: InputMaybe<LocationCompanyAggregateInput>;
  companyConnection?: InputMaybe<LocationCompanyConnectionWhere>;
  companyConnection_NOT?: InputMaybe<LocationCompanyConnectionWhere>;
  company_NOT?: InputMaybe<CompanyWhere>;
  name?: InputMaybe<Scalars['String']>;
  name_CONTAINS?: InputMaybe<Scalars['String']>;
  name_ENDS_WITH?: InputMaybe<Scalars['String']>;
  name_IN?: InputMaybe<Array<Scalars['String']>>;
  name_NOT?: InputMaybe<Scalars['String']>;
  name_NOT_CONTAINS?: InputMaybe<Scalars['String']>;
  name_NOT_ENDS_WITH?: InputMaybe<Scalars['String']>;
  name_NOT_IN?: InputMaybe<Array<Scalars['String']>>;
  name_NOT_STARTS_WITH?: InputMaybe<Scalars['String']>;
  name_STARTS_WITH?: InputMaybe<Scalars['String']>;
};

export type LocationsConnection = {
  __typename?: 'LocationsConnection';
  edges: Array<LocationEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type Measurement = {
  __typename?: 'Measurement';
  ID: Scalars['ID'];
  activity: Activity;
  activityAggregate?: Maybe<MeasurementActivityActivityAggregationSelection>;
  activityConnection: MeasurementActivityConnection;
  amount: Scalars['Float'];
  end: Scalars['DateTime'];
  factors: Array<EmissionFactor>;
  factorsAggregate?: Maybe<MeasurementEmissionFactorFactorsAggregationSelection>;
  factorsConnection: MeasurementFactorsConnection;
  start: Scalars['DateTime'];
  unit: Unit;
  unitAggregate?: Maybe<MeasurementUnitUnitAggregationSelection>;
  unitConnection: MeasurementUnitConnection;
};


export type MeasurementActivityArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<ActivityOptions>;
  where?: InputMaybe<ActivityWhere>;
};


export type MeasurementActivityAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<ActivityWhere>;
};


export type MeasurementActivityConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<MeasurementActivityConnectionSort>>;
  where?: InputMaybe<MeasurementActivityConnectionWhere>;
};


export type MeasurementFactorsArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<EmissionFactorOptions>;
  where?: InputMaybe<EmissionFactorWhere>;
};


export type MeasurementFactorsAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<EmissionFactorWhere>;
};


export type MeasurementFactorsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<MeasurementFactorsConnectionSort>>;
  where?: InputMaybe<MeasurementFactorsConnectionWhere>;
};


export type MeasurementUnitArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<UnitOptions>;
  where?: InputMaybe<UnitWhere>;
};


export type MeasurementUnitAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<UnitWhere>;
};


export type MeasurementUnitConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<MeasurementUnitConnectionSort>>;
  where?: InputMaybe<MeasurementUnitConnectionWhere>;
};

export type MeasurementActivityActivityAggregationSelection = {
  __typename?: 'MeasurementActivityActivityAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<MeasurementActivityActivityNodeAggregateSelection>;
};

export type MeasurementActivityActivityNodeAggregateSelection = {
  __typename?: 'MeasurementActivityActivityNodeAggregateSelection';
  ID: IdAggregateSelectionNonNullable;
  description: StringAggregateSelectionNullable;
};

export type MeasurementActivityAggregateInput = {
  AND?: InputMaybe<Array<MeasurementActivityAggregateInput>>;
  OR?: InputMaybe<Array<MeasurementActivityAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<MeasurementActivityNodeAggregationWhereInput>;
};

export type MeasurementActivityConnectFieldInput = {
  connect?: InputMaybe<ActivityConnectInput>;
  where?: InputMaybe<ActivityConnectWhere>;
};

export type MeasurementActivityConnectOrCreateFieldInput = {
  onCreate: MeasurementActivityConnectOrCreateFieldInputOnCreate;
  where: ActivityConnectOrCreateWhere;
};

export type MeasurementActivityConnectOrCreateFieldInputOnCreate = {
  node: ActivityOnCreateInput;
};

export type MeasurementActivityConnection = {
  __typename?: 'MeasurementActivityConnection';
  edges: Array<MeasurementActivityRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type MeasurementActivityConnectionSort = {
  node?: InputMaybe<ActivitySort>;
};

export type MeasurementActivityConnectionWhere = {
  AND?: InputMaybe<Array<MeasurementActivityConnectionWhere>>;
  OR?: InputMaybe<Array<MeasurementActivityConnectionWhere>>;
  node?: InputMaybe<ActivityWhere>;
  node_NOT?: InputMaybe<ActivityWhere>;
};

export type MeasurementActivityCreateFieldInput = {
  node: ActivityCreateInput;
};

export type MeasurementActivityDeleteFieldInput = {
  delete?: InputMaybe<ActivityDeleteInput>;
  where?: InputMaybe<MeasurementActivityConnectionWhere>;
};

export type MeasurementActivityDisconnectFieldInput = {
  disconnect?: InputMaybe<ActivityDisconnectInput>;
  where?: InputMaybe<MeasurementActivityConnectionWhere>;
};

export type MeasurementActivityFieldInput = {
  connect?: InputMaybe<MeasurementActivityConnectFieldInput>;
  connectOrCreate?: InputMaybe<MeasurementActivityConnectOrCreateFieldInput>;
  create?: InputMaybe<MeasurementActivityCreateFieldInput>;
};

export type MeasurementActivityNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<MeasurementActivityNodeAggregationWhereInput>>;
  ID_EQUAL?: InputMaybe<Scalars['ID']>;
  OR?: InputMaybe<Array<MeasurementActivityNodeAggregationWhereInput>>;
  description_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  description_EQUAL?: InputMaybe<Scalars['String']>;
  description_GT?: InputMaybe<Scalars['Int']>;
  description_GTE?: InputMaybe<Scalars['Int']>;
  description_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  description_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  description_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  description_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  description_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  description_LT?: InputMaybe<Scalars['Int']>;
  description_LTE?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
};

export type MeasurementActivityRelationship = {
  __typename?: 'MeasurementActivityRelationship';
  cursor: Scalars['String'];
  node: Activity;
};

export type MeasurementActivityUpdateConnectionInput = {
  node?: InputMaybe<ActivityUpdateInput>;
};

export type MeasurementActivityUpdateFieldInput = {
  connect?: InputMaybe<MeasurementActivityConnectFieldInput>;
  connectOrCreate?: InputMaybe<MeasurementActivityConnectOrCreateFieldInput>;
  create?: InputMaybe<MeasurementActivityCreateFieldInput>;
  delete?: InputMaybe<MeasurementActivityDeleteFieldInput>;
  disconnect?: InputMaybe<MeasurementActivityDisconnectFieldInput>;
  update?: InputMaybe<MeasurementActivityUpdateConnectionInput>;
  where?: InputMaybe<MeasurementActivityConnectionWhere>;
};

export type MeasurementConnectInput = {
  activity?: InputMaybe<MeasurementActivityConnectFieldInput>;
  factors?: InputMaybe<Array<MeasurementFactorsConnectFieldInput>>;
  unit?: InputMaybe<MeasurementUnitConnectFieldInput>;
};

export type MeasurementConnectOrCreateWhere = {
  node: MeasurementUniqueWhere;
};

export type MeasurementConnectWhere = {
  node: MeasurementWhere;
};

export type MeasurementCreateInput = {
  activity?: InputMaybe<MeasurementActivityFieldInput>;
  amount: Scalars['Float'];
  end: Scalars['DateTime'];
  factors?: InputMaybe<MeasurementFactorsFieldInput>;
  start: Scalars['DateTime'];
  unit?: InputMaybe<MeasurementUnitFieldInput>;
};

export type MeasurementDeleteInput = {
  activity?: InputMaybe<MeasurementActivityDeleteFieldInput>;
  factors?: InputMaybe<Array<MeasurementFactorsDeleteFieldInput>>;
  unit?: InputMaybe<MeasurementUnitDeleteFieldInput>;
};

export type MeasurementDisconnectInput = {
  activity?: InputMaybe<MeasurementActivityDisconnectFieldInput>;
  factors?: InputMaybe<Array<MeasurementFactorsDisconnectFieldInput>>;
  unit?: InputMaybe<MeasurementUnitDisconnectFieldInput>;
};

export type MeasurementEmissionFactorFactorsAggregationSelection = {
  __typename?: 'MeasurementEmissionFactorFactorsAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<MeasurementEmissionFactorFactorsNodeAggregateSelection>;
};

export type MeasurementEmissionFactorFactorsNodeAggregateSelection = {
  __typename?: 'MeasurementEmissionFactorFactorsNodeAggregateSelection';
  CH4: FloatAggregateSelectionNonNullable;
  CO2: FloatAggregateSelectionNonNullable;
  CO2eCombined: FloatAggregateSelectionNonNullable;
  ID: IdAggregateSelectionNonNullable;
  N2O: FloatAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
  releaseDate: DateTimeAggregateSelectionNonNullable;
};

export type MeasurementFactorsAggregateInput = {
  AND?: InputMaybe<Array<MeasurementFactorsAggregateInput>>;
  OR?: InputMaybe<Array<MeasurementFactorsAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<MeasurementFactorsNodeAggregationWhereInput>;
};

export type MeasurementFactorsConnectFieldInput = {
  connect?: InputMaybe<Array<EmissionFactorConnectInput>>;
  where?: InputMaybe<EmissionFactorConnectWhere>;
};

export type MeasurementFactorsConnectOrCreateFieldInput = {
  onCreate: MeasurementFactorsConnectOrCreateFieldInputOnCreate;
  where: EmissionFactorConnectOrCreateWhere;
};

export type MeasurementFactorsConnectOrCreateFieldInputOnCreate = {
  node: EmissionFactorOnCreateInput;
};

export type MeasurementFactorsConnection = {
  __typename?: 'MeasurementFactorsConnection';
  edges: Array<MeasurementFactorsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type MeasurementFactorsConnectionSort = {
  node?: InputMaybe<EmissionFactorSort>;
};

export type MeasurementFactorsConnectionWhere = {
  AND?: InputMaybe<Array<MeasurementFactorsConnectionWhere>>;
  OR?: InputMaybe<Array<MeasurementFactorsConnectionWhere>>;
  node?: InputMaybe<EmissionFactorWhere>;
  node_NOT?: InputMaybe<EmissionFactorWhere>;
};

export type MeasurementFactorsCreateFieldInput = {
  node: EmissionFactorCreateInput;
};

export type MeasurementFactorsDeleteFieldInput = {
  delete?: InputMaybe<EmissionFactorDeleteInput>;
  where?: InputMaybe<MeasurementFactorsConnectionWhere>;
};

export type MeasurementFactorsDisconnectFieldInput = {
  disconnect?: InputMaybe<EmissionFactorDisconnectInput>;
  where?: InputMaybe<MeasurementFactorsConnectionWhere>;
};

export type MeasurementFactorsFieldInput = {
  connect?: InputMaybe<Array<MeasurementFactorsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<MeasurementFactorsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<MeasurementFactorsCreateFieldInput>>;
};

export type MeasurementFactorsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<MeasurementFactorsNodeAggregationWhereInput>>;
  CH4_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  CH4_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  CH4_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  CH4_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  CH4_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  CH4_EQUAL?: InputMaybe<Scalars['Float']>;
  CH4_GT?: InputMaybe<Scalars['Float']>;
  CH4_GTE?: InputMaybe<Scalars['Float']>;
  CH4_LT?: InputMaybe<Scalars['Float']>;
  CH4_LTE?: InputMaybe<Scalars['Float']>;
  CH4_MAX_EQUAL?: InputMaybe<Scalars['Float']>;
  CH4_MAX_GT?: InputMaybe<Scalars['Float']>;
  CH4_MAX_GTE?: InputMaybe<Scalars['Float']>;
  CH4_MAX_LT?: InputMaybe<Scalars['Float']>;
  CH4_MAX_LTE?: InputMaybe<Scalars['Float']>;
  CH4_MIN_EQUAL?: InputMaybe<Scalars['Float']>;
  CH4_MIN_GT?: InputMaybe<Scalars['Float']>;
  CH4_MIN_GTE?: InputMaybe<Scalars['Float']>;
  CH4_MIN_LT?: InputMaybe<Scalars['Float']>;
  CH4_MIN_LTE?: InputMaybe<Scalars['Float']>;
  CH4_SUM_EQUAL?: InputMaybe<Scalars['Float']>;
  CH4_SUM_GT?: InputMaybe<Scalars['Float']>;
  CH4_SUM_GTE?: InputMaybe<Scalars['Float']>;
  CH4_SUM_LT?: InputMaybe<Scalars['Float']>;
  CH4_SUM_LTE?: InputMaybe<Scalars['Float']>;
  CO2_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  CO2_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  CO2_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  CO2_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  CO2_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  CO2_EQUAL?: InputMaybe<Scalars['Float']>;
  CO2_GT?: InputMaybe<Scalars['Float']>;
  CO2_GTE?: InputMaybe<Scalars['Float']>;
  CO2_LT?: InputMaybe<Scalars['Float']>;
  CO2_LTE?: InputMaybe<Scalars['Float']>;
  CO2_MAX_EQUAL?: InputMaybe<Scalars['Float']>;
  CO2_MAX_GT?: InputMaybe<Scalars['Float']>;
  CO2_MAX_GTE?: InputMaybe<Scalars['Float']>;
  CO2_MAX_LT?: InputMaybe<Scalars['Float']>;
  CO2_MAX_LTE?: InputMaybe<Scalars['Float']>;
  CO2_MIN_EQUAL?: InputMaybe<Scalars['Float']>;
  CO2_MIN_GT?: InputMaybe<Scalars['Float']>;
  CO2_MIN_GTE?: InputMaybe<Scalars['Float']>;
  CO2_MIN_LT?: InputMaybe<Scalars['Float']>;
  CO2_MIN_LTE?: InputMaybe<Scalars['Float']>;
  CO2_SUM_EQUAL?: InputMaybe<Scalars['Float']>;
  CO2_SUM_GT?: InputMaybe<Scalars['Float']>;
  CO2_SUM_GTE?: InputMaybe<Scalars['Float']>;
  CO2_SUM_LT?: InputMaybe<Scalars['Float']>;
  CO2_SUM_LTE?: InputMaybe<Scalars['Float']>;
  CO2eCombined_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  CO2eCombined_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  CO2eCombined_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  CO2eCombined_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  CO2eCombined_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  CO2eCombined_EQUAL?: InputMaybe<Scalars['Float']>;
  CO2eCombined_GT?: InputMaybe<Scalars['Float']>;
  CO2eCombined_GTE?: InputMaybe<Scalars['Float']>;
  CO2eCombined_LT?: InputMaybe<Scalars['Float']>;
  CO2eCombined_LTE?: InputMaybe<Scalars['Float']>;
  CO2eCombined_MAX_EQUAL?: InputMaybe<Scalars['Float']>;
  CO2eCombined_MAX_GT?: InputMaybe<Scalars['Float']>;
  CO2eCombined_MAX_GTE?: InputMaybe<Scalars['Float']>;
  CO2eCombined_MAX_LT?: InputMaybe<Scalars['Float']>;
  CO2eCombined_MAX_LTE?: InputMaybe<Scalars['Float']>;
  CO2eCombined_MIN_EQUAL?: InputMaybe<Scalars['Float']>;
  CO2eCombined_MIN_GT?: InputMaybe<Scalars['Float']>;
  CO2eCombined_MIN_GTE?: InputMaybe<Scalars['Float']>;
  CO2eCombined_MIN_LT?: InputMaybe<Scalars['Float']>;
  CO2eCombined_MIN_LTE?: InputMaybe<Scalars['Float']>;
  CO2eCombined_SUM_EQUAL?: InputMaybe<Scalars['Float']>;
  CO2eCombined_SUM_GT?: InputMaybe<Scalars['Float']>;
  CO2eCombined_SUM_GTE?: InputMaybe<Scalars['Float']>;
  CO2eCombined_SUM_LT?: InputMaybe<Scalars['Float']>;
  CO2eCombined_SUM_LTE?: InputMaybe<Scalars['Float']>;
  ID_EQUAL?: InputMaybe<Scalars['ID']>;
  N2O_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  N2O_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  N2O_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  N2O_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  N2O_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  N2O_EQUAL?: InputMaybe<Scalars['Float']>;
  N2O_GT?: InputMaybe<Scalars['Float']>;
  N2O_GTE?: InputMaybe<Scalars['Float']>;
  N2O_LT?: InputMaybe<Scalars['Float']>;
  N2O_LTE?: InputMaybe<Scalars['Float']>;
  N2O_MAX_EQUAL?: InputMaybe<Scalars['Float']>;
  N2O_MAX_GT?: InputMaybe<Scalars['Float']>;
  N2O_MAX_GTE?: InputMaybe<Scalars['Float']>;
  N2O_MAX_LT?: InputMaybe<Scalars['Float']>;
  N2O_MAX_LTE?: InputMaybe<Scalars['Float']>;
  N2O_MIN_EQUAL?: InputMaybe<Scalars['Float']>;
  N2O_MIN_GT?: InputMaybe<Scalars['Float']>;
  N2O_MIN_GTE?: InputMaybe<Scalars['Float']>;
  N2O_MIN_LT?: InputMaybe<Scalars['Float']>;
  N2O_MIN_LTE?: InputMaybe<Scalars['Float']>;
  N2O_SUM_EQUAL?: InputMaybe<Scalars['Float']>;
  N2O_SUM_GT?: InputMaybe<Scalars['Float']>;
  N2O_SUM_GTE?: InputMaybe<Scalars['Float']>;
  N2O_SUM_LT?: InputMaybe<Scalars['Float']>;
  N2O_SUM_LTE?: InputMaybe<Scalars['Float']>;
  OR?: InputMaybe<Array<MeasurementFactorsNodeAggregationWhereInput>>;
  name_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  name_EQUAL?: InputMaybe<Scalars['String']>;
  name_GT?: InputMaybe<Scalars['Int']>;
  name_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  name_LT?: InputMaybe<Scalars['Int']>;
  name_LTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
  releaseDate_EQUAL?: InputMaybe<Scalars['DateTime']>;
  releaseDate_GT?: InputMaybe<Scalars['DateTime']>;
  releaseDate_GTE?: InputMaybe<Scalars['DateTime']>;
  releaseDate_LT?: InputMaybe<Scalars['DateTime']>;
  releaseDate_LTE?: InputMaybe<Scalars['DateTime']>;
  releaseDate_MAX_EQUAL?: InputMaybe<Scalars['DateTime']>;
  releaseDate_MAX_GT?: InputMaybe<Scalars['DateTime']>;
  releaseDate_MAX_GTE?: InputMaybe<Scalars['DateTime']>;
  releaseDate_MAX_LT?: InputMaybe<Scalars['DateTime']>;
  releaseDate_MAX_LTE?: InputMaybe<Scalars['DateTime']>;
  releaseDate_MIN_EQUAL?: InputMaybe<Scalars['DateTime']>;
  releaseDate_MIN_GT?: InputMaybe<Scalars['DateTime']>;
  releaseDate_MIN_GTE?: InputMaybe<Scalars['DateTime']>;
  releaseDate_MIN_LT?: InputMaybe<Scalars['DateTime']>;
  releaseDate_MIN_LTE?: InputMaybe<Scalars['DateTime']>;
};

export type MeasurementFactorsRelationship = {
  __typename?: 'MeasurementFactorsRelationship';
  cursor: Scalars['String'];
  node: EmissionFactor;
};

export type MeasurementFactorsUpdateConnectionInput = {
  node?: InputMaybe<EmissionFactorUpdateInput>;
};

export type MeasurementFactorsUpdateFieldInput = {
  connect?: InputMaybe<Array<MeasurementFactorsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<MeasurementFactorsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<MeasurementFactorsCreateFieldInput>>;
  delete?: InputMaybe<Array<MeasurementFactorsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<MeasurementFactorsDisconnectFieldInput>>;
  update?: InputMaybe<MeasurementFactorsUpdateConnectionInput>;
  where?: InputMaybe<MeasurementFactorsConnectionWhere>;
};

export type MeasurementOnCreateInput = {
  amount: Scalars['Float'];
  end: Scalars['DateTime'];
  start: Scalars['DateTime'];
};

export type MeasurementOptions = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  /** Specify one or more MeasurementSort objects to sort Measurements by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<MeasurementSort>>;
};

/** Fields to sort Measurements by. The order in which sorts are applied is not guaranteed when specifying many fields in one MeasurementSort object. */
export type MeasurementSort = {
  ID?: InputMaybe<SortDirection>;
  amount?: InputMaybe<SortDirection>;
  end?: InputMaybe<SortDirection>;
  start?: InputMaybe<SortDirection>;
};

export type MeasurementUniqueWhere = {
  ID?: InputMaybe<Scalars['ID']>;
};

export type MeasurementUnitAggregateInput = {
  AND?: InputMaybe<Array<MeasurementUnitAggregateInput>>;
  OR?: InputMaybe<Array<MeasurementUnitAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<MeasurementUnitNodeAggregationWhereInput>;
};

export type MeasurementUnitConnectFieldInput = {
  connect?: InputMaybe<UnitConnectInput>;
  where?: InputMaybe<UnitConnectWhere>;
};

export type MeasurementUnitConnectOrCreateFieldInput = {
  onCreate: MeasurementUnitConnectOrCreateFieldInputOnCreate;
  where: UnitConnectOrCreateWhere;
};

export type MeasurementUnitConnectOrCreateFieldInputOnCreate = {
  node: UnitOnCreateInput;
};

export type MeasurementUnitConnection = {
  __typename?: 'MeasurementUnitConnection';
  edges: Array<MeasurementUnitRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type MeasurementUnitConnectionSort = {
  node?: InputMaybe<UnitSort>;
};

export type MeasurementUnitConnectionWhere = {
  AND?: InputMaybe<Array<MeasurementUnitConnectionWhere>>;
  OR?: InputMaybe<Array<MeasurementUnitConnectionWhere>>;
  node?: InputMaybe<UnitWhere>;
  node_NOT?: InputMaybe<UnitWhere>;
};

export type MeasurementUnitCreateFieldInput = {
  node: UnitCreateInput;
};

export type MeasurementUnitDeleteFieldInput = {
  delete?: InputMaybe<UnitDeleteInput>;
  where?: InputMaybe<MeasurementUnitConnectionWhere>;
};

export type MeasurementUnitDisconnectFieldInput = {
  disconnect?: InputMaybe<UnitDisconnectInput>;
  where?: InputMaybe<MeasurementUnitConnectionWhere>;
};

export type MeasurementUnitFieldInput = {
  connect?: InputMaybe<MeasurementUnitConnectFieldInput>;
  connectOrCreate?: InputMaybe<MeasurementUnitConnectOrCreateFieldInput>;
  create?: InputMaybe<MeasurementUnitCreateFieldInput>;
};

export type MeasurementUnitNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<MeasurementUnitNodeAggregationWhereInput>>;
  ID_EQUAL?: InputMaybe<Scalars['ID']>;
  OR?: InputMaybe<Array<MeasurementUnitNodeAggregationWhereInput>>;
  name_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  name_EQUAL?: InputMaybe<Scalars['String']>;
  name_GT?: InputMaybe<Scalars['Int']>;
  name_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  name_LT?: InputMaybe<Scalars['Int']>;
  name_LTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
};

export type MeasurementUnitRelationship = {
  __typename?: 'MeasurementUnitRelationship';
  cursor: Scalars['String'];
  node: Unit;
};

export type MeasurementUnitUnitAggregationSelection = {
  __typename?: 'MeasurementUnitUnitAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<MeasurementUnitUnitNodeAggregateSelection>;
};

export type MeasurementUnitUnitNodeAggregateSelection = {
  __typename?: 'MeasurementUnitUnitNodeAggregateSelection';
  ID: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
};

export type MeasurementUnitUpdateConnectionInput = {
  node?: InputMaybe<UnitUpdateInput>;
};

export type MeasurementUnitUpdateFieldInput = {
  connect?: InputMaybe<MeasurementUnitConnectFieldInput>;
  connectOrCreate?: InputMaybe<MeasurementUnitConnectOrCreateFieldInput>;
  create?: InputMaybe<MeasurementUnitCreateFieldInput>;
  delete?: InputMaybe<MeasurementUnitDeleteFieldInput>;
  disconnect?: InputMaybe<MeasurementUnitDisconnectFieldInput>;
  update?: InputMaybe<MeasurementUnitUpdateConnectionInput>;
  where?: InputMaybe<MeasurementUnitConnectionWhere>;
};

export type MeasurementUpdateInput = {
  activity?: InputMaybe<MeasurementActivityUpdateFieldInput>;
  amount?: InputMaybe<Scalars['Float']>;
  amount_ADD?: InputMaybe<Scalars['Float']>;
  amount_DIVIDE?: InputMaybe<Scalars['Float']>;
  amount_MULTIPLY?: InputMaybe<Scalars['Float']>;
  amount_SUBTRACT?: InputMaybe<Scalars['Float']>;
  end?: InputMaybe<Scalars['DateTime']>;
  factors?: InputMaybe<Array<MeasurementFactorsUpdateFieldInput>>;
  start?: InputMaybe<Scalars['DateTime']>;
  unit?: InputMaybe<MeasurementUnitUpdateFieldInput>;
};

export type MeasurementWhere = {
  AND?: InputMaybe<Array<MeasurementWhere>>;
  ID?: InputMaybe<Scalars['ID']>;
  ID_CONTAINS?: InputMaybe<Scalars['ID']>;
  ID_ENDS_WITH?: InputMaybe<Scalars['ID']>;
  ID_IN?: InputMaybe<Array<Scalars['ID']>>;
  ID_NOT?: InputMaybe<Scalars['ID']>;
  ID_NOT_CONTAINS?: InputMaybe<Scalars['ID']>;
  ID_NOT_ENDS_WITH?: InputMaybe<Scalars['ID']>;
  ID_NOT_IN?: InputMaybe<Array<Scalars['ID']>>;
  ID_NOT_STARTS_WITH?: InputMaybe<Scalars['ID']>;
  ID_STARTS_WITH?: InputMaybe<Scalars['ID']>;
  OR?: InputMaybe<Array<MeasurementWhere>>;
  activity?: InputMaybe<ActivityWhere>;
  activityAggregate?: InputMaybe<MeasurementActivityAggregateInput>;
  activityConnection?: InputMaybe<MeasurementActivityConnectionWhere>;
  activityConnection_NOT?: InputMaybe<MeasurementActivityConnectionWhere>;
  activity_NOT?: InputMaybe<ActivityWhere>;
  amount?: InputMaybe<Scalars['Float']>;
  amount_GT?: InputMaybe<Scalars['Float']>;
  amount_GTE?: InputMaybe<Scalars['Float']>;
  amount_IN?: InputMaybe<Array<Scalars['Float']>>;
  amount_LT?: InputMaybe<Scalars['Float']>;
  amount_LTE?: InputMaybe<Scalars['Float']>;
  amount_NOT?: InputMaybe<Scalars['Float']>;
  amount_NOT_IN?: InputMaybe<Array<Scalars['Float']>>;
  end?: InputMaybe<Scalars['DateTime']>;
  end_GT?: InputMaybe<Scalars['DateTime']>;
  end_GTE?: InputMaybe<Scalars['DateTime']>;
  end_IN?: InputMaybe<Array<Scalars['DateTime']>>;
  end_LT?: InputMaybe<Scalars['DateTime']>;
  end_LTE?: InputMaybe<Scalars['DateTime']>;
  end_NOT?: InputMaybe<Scalars['DateTime']>;
  end_NOT_IN?: InputMaybe<Array<Scalars['DateTime']>>;
  factorsAggregate?: InputMaybe<MeasurementFactorsAggregateInput>;
  factorsConnection_ALL?: InputMaybe<MeasurementFactorsConnectionWhere>;
  factorsConnection_NONE?: InputMaybe<MeasurementFactorsConnectionWhere>;
  factorsConnection_SINGLE?: InputMaybe<MeasurementFactorsConnectionWhere>;
  factorsConnection_SOME?: InputMaybe<MeasurementFactorsConnectionWhere>;
  /** Return Measurements where all of the related EmissionFactors match this filter */
  factors_ALL?: InputMaybe<EmissionFactorWhere>;
  /** Return Measurements where none of the related EmissionFactors match this filter */
  factors_NONE?: InputMaybe<EmissionFactorWhere>;
  /** Return Measurements where one of the related EmissionFactors match this filter */
  factors_SINGLE?: InputMaybe<EmissionFactorWhere>;
  /** Return Measurements where some of the related EmissionFactors match this filter */
  factors_SOME?: InputMaybe<EmissionFactorWhere>;
  start?: InputMaybe<Scalars['DateTime']>;
  start_GT?: InputMaybe<Scalars['DateTime']>;
  start_GTE?: InputMaybe<Scalars['DateTime']>;
  start_IN?: InputMaybe<Array<Scalars['DateTime']>>;
  start_LT?: InputMaybe<Scalars['DateTime']>;
  start_LTE?: InputMaybe<Scalars['DateTime']>;
  start_NOT?: InputMaybe<Scalars['DateTime']>;
  start_NOT_IN?: InputMaybe<Array<Scalars['DateTime']>>;
  unit?: InputMaybe<UnitWhere>;
  unitAggregate?: InputMaybe<MeasurementUnitAggregateInput>;
  unitConnection?: InputMaybe<MeasurementUnitConnectionWhere>;
  unitConnection_NOT?: InputMaybe<MeasurementUnitConnectionWhere>;
  unit_NOT?: InputMaybe<UnitWhere>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createCompanies: CreateCompaniesMutationResponse;
  createLocations: CreateLocationsMutationResponse;
  createUsers: CreateUsersMutationResponse;
  deleteCompanies: DeleteInfo;
  deleteLocations: DeleteInfo;
  deleteUsers: DeleteInfo;
  updateCompanies: UpdateCompaniesMutationResponse;
  updateLocations: UpdateLocationsMutationResponse;
  updateUsers: UpdateUsersMutationResponse;
};


export type MutationCreateCompaniesArgs = {
  input: Array<CompanyCreateInput>;
};


export type MutationCreateLocationsArgs = {
  input: Array<LocationCreateInput>;
};


export type MutationCreateUsersArgs = {
  input: Array<UserCreateInput>;
};


export type MutationDeleteCompaniesArgs = {
  delete?: InputMaybe<CompanyDeleteInput>;
  where?: InputMaybe<CompanyWhere>;
};


export type MutationDeleteLocationsArgs = {
  delete?: InputMaybe<LocationDeleteInput>;
  where?: InputMaybe<LocationWhere>;
};


export type MutationDeleteUsersArgs = {
  delete?: InputMaybe<UserDeleteInput>;
  where?: InputMaybe<UserWhere>;
};


export type MutationUpdateCompaniesArgs = {
  connect?: InputMaybe<CompanyConnectInput>;
  connectOrCreate?: InputMaybe<CompanyConnectOrCreateInput>;
  create?: InputMaybe<CompanyRelationInput>;
  delete?: InputMaybe<CompanyDeleteInput>;
  disconnect?: InputMaybe<CompanyDisconnectInput>;
  update?: InputMaybe<CompanyUpdateInput>;
  where?: InputMaybe<CompanyWhere>;
};


export type MutationUpdateLocationsArgs = {
  connect?: InputMaybe<LocationConnectInput>;
  connectOrCreate?: InputMaybe<LocationConnectOrCreateInput>;
  create?: InputMaybe<LocationRelationInput>;
  delete?: InputMaybe<LocationDeleteInput>;
  disconnect?: InputMaybe<LocationDisconnectInput>;
  update?: InputMaybe<LocationUpdateInput>;
  where?: InputMaybe<LocationWhere>;
};


export type MutationUpdateUsersArgs = {
  connect?: InputMaybe<UserConnectInput>;
  connectOrCreate?: InputMaybe<UserConnectOrCreateInput>;
  create?: InputMaybe<UserRelationInput>;
  delete?: InputMaybe<UserDeleteInput>;
  disconnect?: InputMaybe<UserDisconnectInput>;
  update?: InputMaybe<UserUpdateInput>;
  where?: InputMaybe<UserWhere>;
};

export type OwnsCompany = {
  stake: Scalars['Float'];
};

export type OwnsCompanyCreateInput = {
  stake: Scalars['Float'];
};

export type OwnsCompanySort = {
  stake?: InputMaybe<SortDirection>;
};

export type OwnsCompanyUpdateInput = {
  stake?: InputMaybe<Scalars['Float']>;
  stake_ADD?: InputMaybe<Scalars['Float']>;
  stake_DIVIDE?: InputMaybe<Scalars['Float']>;
  stake_MULTIPLY?: InputMaybe<Scalars['Float']>;
  stake_SUBTRACT?: InputMaybe<Scalars['Float']>;
};

export type OwnsCompanyWhere = {
  AND?: InputMaybe<Array<OwnsCompanyWhere>>;
  OR?: InputMaybe<Array<OwnsCompanyWhere>>;
  stake?: InputMaybe<Scalars['Float']>;
  stake_GT?: InputMaybe<Scalars['Float']>;
  stake_GTE?: InputMaybe<Scalars['Float']>;
  stake_IN?: InputMaybe<Array<Scalars['Float']>>;
  stake_LT?: InputMaybe<Scalars['Float']>;
  stake_LTE?: InputMaybe<Scalars['Float']>;
  stake_NOT?: InputMaybe<Scalars['Float']>;
  stake_NOT_IN?: InputMaybe<Array<Scalars['Float']>>;
};

/** Pagination information (Relay) */
export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  companies: Array<Company>;
  companiesAggregate: CompanyAggregateSelection;
  companiesConnection: CompaniesConnection;
  companyNetwork: Array<CompanyNetworkNode>;
  locations: Array<Location>;
  locationsAggregate: LocationAggregateSelection;
  locationsConnection: LocationsConnection;
  users: Array<User>;
  usersAggregate: UserAggregateSelection;
  usersConnection: UsersConnection;
};


export type QueryCompaniesArgs = {
  options?: InputMaybe<CompanyOptions>;
  where?: InputMaybe<CompanyWhere>;
};


export type QueryCompaniesAggregateArgs = {
  where?: InputMaybe<CompanyWhere>;
};


export type QueryCompaniesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<CompanySort>>>;
  where?: InputMaybe<CompanyWhere>;
};


export type QueryCompanyNetworkArgs = {
  ID: Scalars['ID'];
};


export type QueryLocationsArgs = {
  options?: InputMaybe<LocationOptions>;
  where?: InputMaybe<LocationWhere>;
};


export type QueryLocationsAggregateArgs = {
  where?: InputMaybe<LocationWhere>;
};


export type QueryLocationsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<LocationSort>>>;
  where?: InputMaybe<LocationWhere>;
};


export type QueryUsersArgs = {
  options?: InputMaybe<UserOptions>;
  where?: InputMaybe<UserWhere>;
};


export type QueryUsersAggregateArgs = {
  where?: InputMaybe<UserWhere>;
};


export type QueryUsersConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<UserSort>>>;
  where?: InputMaybe<UserWhere>;
};

export enum SortDirection {
  /** Sort by field values in ascending order. */
  Asc = 'ASC',
  /** Sort by field values in descending order. */
  Desc = 'DESC'
}

export type StringAggregateSelectionNonNullable = {
  __typename?: 'StringAggregateSelectionNonNullable';
  longest: Scalars['String'];
  shortest: Scalars['String'];
};

export type StringAggregateSelectionNullable = {
  __typename?: 'StringAggregateSelectionNullable';
  longest?: Maybe<Scalars['String']>;
  shortest?: Maybe<Scalars['String']>;
};

export type Unit = {
  __typename?: 'Unit';
  ID: Scalars['ID'];
  alternativeUnits: Array<Unit>;
  alternativeUnitsAggregate?: Maybe<UnitUnitAlternativeUnitsAggregationSelection>;
  alternativeUnitsConnection: UnitAlternativeUnitsConnection;
  name: Scalars['String'];
};


export type UnitAlternativeUnitsArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<UnitOptions>;
  where?: InputMaybe<UnitWhere>;
};


export type UnitAlternativeUnitsAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<UnitWhere>;
};


export type UnitAlternativeUnitsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<UnitAlternativeUnitsConnectionSort>>;
  where?: InputMaybe<UnitAlternativeUnitsConnectionWhere>;
};

export type UnitAlternativeUnitsAggregateInput = {
  AND?: InputMaybe<Array<UnitAlternativeUnitsAggregateInput>>;
  OR?: InputMaybe<Array<UnitAlternativeUnitsAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<UnitAlternativeUnitsNodeAggregationWhereInput>;
};

export type UnitAlternativeUnitsConnectFieldInput = {
  connect?: InputMaybe<Array<UnitConnectInput>>;
  where?: InputMaybe<UnitConnectWhere>;
};

export type UnitAlternativeUnitsConnectOrCreateFieldInput = {
  onCreate: UnitAlternativeUnitsConnectOrCreateFieldInputOnCreate;
  where: UnitConnectOrCreateWhere;
};

export type UnitAlternativeUnitsConnectOrCreateFieldInputOnCreate = {
  node: UnitOnCreateInput;
};

export type UnitAlternativeUnitsConnection = {
  __typename?: 'UnitAlternativeUnitsConnection';
  edges: Array<UnitAlternativeUnitsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type UnitAlternativeUnitsConnectionSort = {
  node?: InputMaybe<UnitSort>;
};

export type UnitAlternativeUnitsConnectionWhere = {
  AND?: InputMaybe<Array<UnitAlternativeUnitsConnectionWhere>>;
  OR?: InputMaybe<Array<UnitAlternativeUnitsConnectionWhere>>;
  node?: InputMaybe<UnitWhere>;
  node_NOT?: InputMaybe<UnitWhere>;
};

export type UnitAlternativeUnitsCreateFieldInput = {
  node: UnitCreateInput;
};

export type UnitAlternativeUnitsDeleteFieldInput = {
  delete?: InputMaybe<UnitDeleteInput>;
  where?: InputMaybe<UnitAlternativeUnitsConnectionWhere>;
};

export type UnitAlternativeUnitsDisconnectFieldInput = {
  disconnect?: InputMaybe<UnitDisconnectInput>;
  where?: InputMaybe<UnitAlternativeUnitsConnectionWhere>;
};

export type UnitAlternativeUnitsFieldInput = {
  connect?: InputMaybe<Array<UnitAlternativeUnitsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<UnitAlternativeUnitsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<UnitAlternativeUnitsCreateFieldInput>>;
};

export type UnitAlternativeUnitsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<UnitAlternativeUnitsNodeAggregationWhereInput>>;
  ID_EQUAL?: InputMaybe<Scalars['ID']>;
  OR?: InputMaybe<Array<UnitAlternativeUnitsNodeAggregationWhereInput>>;
  name_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  name_EQUAL?: InputMaybe<Scalars['String']>;
  name_GT?: InputMaybe<Scalars['Int']>;
  name_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  name_LT?: InputMaybe<Scalars['Int']>;
  name_LTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
};

export type UnitAlternativeUnitsRelationship = {
  __typename?: 'UnitAlternativeUnitsRelationship';
  cursor: Scalars['String'];
  node: Unit;
};

export type UnitAlternativeUnitsUpdateConnectionInput = {
  node?: InputMaybe<UnitUpdateInput>;
};

export type UnitAlternativeUnitsUpdateFieldInput = {
  connect?: InputMaybe<Array<UnitAlternativeUnitsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<UnitAlternativeUnitsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<UnitAlternativeUnitsCreateFieldInput>>;
  delete?: InputMaybe<Array<UnitAlternativeUnitsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<UnitAlternativeUnitsDisconnectFieldInput>>;
  update?: InputMaybe<UnitAlternativeUnitsUpdateConnectionInput>;
  where?: InputMaybe<UnitAlternativeUnitsConnectionWhere>;
};

export type UnitConnectInput = {
  alternativeUnits?: InputMaybe<Array<UnitAlternativeUnitsConnectFieldInput>>;
};

export type UnitConnectOrCreateWhere = {
  node: UnitUniqueWhere;
};

export type UnitConnectWhere = {
  node: UnitWhere;
};

export type UnitCreateInput = {
  alternativeUnits?: InputMaybe<UnitAlternativeUnitsFieldInput>;
  name: Scalars['String'];
};

export type UnitDeleteInput = {
  alternativeUnits?: InputMaybe<Array<UnitAlternativeUnitsDeleteFieldInput>>;
};

export type UnitDisconnectInput = {
  alternativeUnits?: InputMaybe<Array<UnitAlternativeUnitsDisconnectFieldInput>>;
};

export type UnitOnCreateInput = {
  name: Scalars['String'];
};

export type UnitOptions = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  /** Specify one or more UnitSort objects to sort Units by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<UnitSort>>;
};

/** Fields to sort Units by. The order in which sorts are applied is not guaranteed when specifying many fields in one UnitSort object. */
export type UnitSort = {
  ID?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
};

export type UnitUniqueWhere = {
  ID?: InputMaybe<Scalars['ID']>;
};

export type UnitUnitAlternativeUnitsAggregationSelection = {
  __typename?: 'UnitUnitAlternativeUnitsAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<UnitUnitAlternativeUnitsNodeAggregateSelection>;
};

export type UnitUnitAlternativeUnitsNodeAggregateSelection = {
  __typename?: 'UnitUnitAlternativeUnitsNodeAggregateSelection';
  ID: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
};

export type UnitUpdateInput = {
  alternativeUnits?: InputMaybe<Array<UnitAlternativeUnitsUpdateFieldInput>>;
  name?: InputMaybe<Scalars['String']>;
};

export type UnitWhere = {
  AND?: InputMaybe<Array<UnitWhere>>;
  ID?: InputMaybe<Scalars['ID']>;
  ID_CONTAINS?: InputMaybe<Scalars['ID']>;
  ID_ENDS_WITH?: InputMaybe<Scalars['ID']>;
  ID_IN?: InputMaybe<Array<Scalars['ID']>>;
  ID_NOT?: InputMaybe<Scalars['ID']>;
  ID_NOT_CONTAINS?: InputMaybe<Scalars['ID']>;
  ID_NOT_ENDS_WITH?: InputMaybe<Scalars['ID']>;
  ID_NOT_IN?: InputMaybe<Array<Scalars['ID']>>;
  ID_NOT_STARTS_WITH?: InputMaybe<Scalars['ID']>;
  ID_STARTS_WITH?: InputMaybe<Scalars['ID']>;
  OR?: InputMaybe<Array<UnitWhere>>;
  alternativeUnitsAggregate?: InputMaybe<UnitAlternativeUnitsAggregateInput>;
  alternativeUnitsConnection_ALL?: InputMaybe<UnitAlternativeUnitsConnectionWhere>;
  alternativeUnitsConnection_NONE?: InputMaybe<UnitAlternativeUnitsConnectionWhere>;
  alternativeUnitsConnection_SINGLE?: InputMaybe<UnitAlternativeUnitsConnectionWhere>;
  alternativeUnitsConnection_SOME?: InputMaybe<UnitAlternativeUnitsConnectionWhere>;
  /** Return Units where all of the related Units match this filter */
  alternativeUnits_ALL?: InputMaybe<UnitWhere>;
  /** Return Units where none of the related Units match this filter */
  alternativeUnits_NONE?: InputMaybe<UnitWhere>;
  /** Return Units where one of the related Units match this filter */
  alternativeUnits_SINGLE?: InputMaybe<UnitWhere>;
  /** Return Units where some of the related Units match this filter */
  alternativeUnits_SOME?: InputMaybe<UnitWhere>;
  name?: InputMaybe<Scalars['String']>;
  name_CONTAINS?: InputMaybe<Scalars['String']>;
  name_ENDS_WITH?: InputMaybe<Scalars['String']>;
  name_IN?: InputMaybe<Array<Scalars['String']>>;
  name_NOT?: InputMaybe<Scalars['String']>;
  name_NOT_CONTAINS?: InputMaybe<Scalars['String']>;
  name_NOT_ENDS_WITH?: InputMaybe<Scalars['String']>;
  name_NOT_IN?: InputMaybe<Array<Scalars['String']>>;
  name_NOT_STARTS_WITH?: InputMaybe<Scalars['String']>;
  name_STARTS_WITH?: InputMaybe<Scalars['String']>;
};

export type UpdateCompaniesMutationResponse = {
  __typename?: 'UpdateCompaniesMutationResponse';
  companies: Array<Company>;
  info: UpdateInfo;
};

export type UpdateInfo = {
  __typename?: 'UpdateInfo';
  bookmark?: Maybe<Scalars['String']>;
  nodesCreated: Scalars['Int'];
  nodesDeleted: Scalars['Int'];
  relationshipsCreated: Scalars['Int'];
  relationshipsDeleted: Scalars['Int'];
};

export type UpdateLocationsMutationResponse = {
  __typename?: 'UpdateLocationsMutationResponse';
  info: UpdateInfo;
  locations: Array<Location>;
};

export type UpdateUsersMutationResponse = {
  __typename?: 'UpdateUsersMutationResponse';
  info: UpdateInfo;
  users: Array<User>;
};

export type User = {
  __typename?: 'User';
  ID: Scalars['ID'];
  companies: Array<Company>;
  companiesAggregate?: Maybe<UserCompanyCompaniesAggregationSelection>;
  companiesConnection: UserCompaniesConnection;
  email: Scalars['String'];
  name: Scalars['String'];
  photo: Scalars['String'];
};


export type UserCompaniesArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<CompanyOptions>;
  where?: InputMaybe<CompanyWhere>;
};


export type UserCompaniesAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<CompanyWhere>;
};


export type UserCompaniesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<UserCompaniesConnectionSort>>;
  where?: InputMaybe<UserCompaniesConnectionWhere>;
};

export type UserAggregateSelection = {
  __typename?: 'UserAggregateSelection';
  ID: IdAggregateSelectionNonNullable;
  count: Scalars['Int'];
  email: StringAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
  photo: StringAggregateSelectionNonNullable;
};

export type UserCompaniesAggregateInput = {
  AND?: InputMaybe<Array<UserCompaniesAggregateInput>>;
  OR?: InputMaybe<Array<UserCompaniesAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<UserCompaniesNodeAggregationWhereInput>;
};

export type UserCompaniesConnectFieldInput = {
  connect?: InputMaybe<Array<CompanyConnectInput>>;
  where?: InputMaybe<CompanyConnectWhere>;
};

export type UserCompaniesConnectOrCreateFieldInput = {
  onCreate: UserCompaniesConnectOrCreateFieldInputOnCreate;
  where: CompanyConnectOrCreateWhere;
};

export type UserCompaniesConnectOrCreateFieldInputOnCreate = {
  node: CompanyOnCreateInput;
};

export type UserCompaniesConnection = {
  __typename?: 'UserCompaniesConnection';
  edges: Array<UserCompaniesRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type UserCompaniesConnectionSort = {
  node?: InputMaybe<CompanySort>;
};

export type UserCompaniesConnectionWhere = {
  AND?: InputMaybe<Array<UserCompaniesConnectionWhere>>;
  OR?: InputMaybe<Array<UserCompaniesConnectionWhere>>;
  node?: InputMaybe<CompanyWhere>;
  node_NOT?: InputMaybe<CompanyWhere>;
};

export type UserCompaniesCreateFieldInput = {
  node: CompanyCreateInput;
};

export type UserCompaniesDeleteFieldInput = {
  delete?: InputMaybe<CompanyDeleteInput>;
  where?: InputMaybe<UserCompaniesConnectionWhere>;
};

export type UserCompaniesDisconnectFieldInput = {
  disconnect?: InputMaybe<CompanyDisconnectInput>;
  where?: InputMaybe<UserCompaniesConnectionWhere>;
};

export type UserCompaniesFieldInput = {
  connect?: InputMaybe<Array<UserCompaniesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<UserCompaniesConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<UserCompaniesCreateFieldInput>>;
};

export type UserCompaniesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<UserCompaniesNodeAggregationWhereInput>>;
  ID_EQUAL?: InputMaybe<Scalars['ID']>;
  OR?: InputMaybe<Array<UserCompaniesNodeAggregationWhereInput>>;
  description_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  description_EQUAL?: InputMaybe<Scalars['String']>;
  description_GT?: InputMaybe<Scalars['Int']>;
  description_GTE?: InputMaybe<Scalars['Int']>;
  description_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  description_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  description_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  description_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  description_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  description_LT?: InputMaybe<Scalars['Int']>;
  description_LTE?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
  name_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  name_EQUAL?: InputMaybe<Scalars['String']>;
  name_GT?: InputMaybe<Scalars['Int']>;
  name_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  name_LT?: InputMaybe<Scalars['Int']>;
  name_LTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
};

export type UserCompaniesRelationship = {
  __typename?: 'UserCompaniesRelationship';
  cursor: Scalars['String'];
  node: Company;
};

export type UserCompaniesUpdateConnectionInput = {
  node?: InputMaybe<CompanyUpdateInput>;
};

export type UserCompaniesUpdateFieldInput = {
  connect?: InputMaybe<Array<UserCompaniesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<UserCompaniesConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<UserCompaniesCreateFieldInput>>;
  delete?: InputMaybe<Array<UserCompaniesDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<UserCompaniesDisconnectFieldInput>>;
  update?: InputMaybe<UserCompaniesUpdateConnectionInput>;
  where?: InputMaybe<UserCompaniesConnectionWhere>;
};

export type UserCompanyCompaniesAggregationSelection = {
  __typename?: 'UserCompanyCompaniesAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<UserCompanyCompaniesNodeAggregateSelection>;
};

export type UserCompanyCompaniesNodeAggregateSelection = {
  __typename?: 'UserCompanyCompaniesNodeAggregateSelection';
  ID: IdAggregateSelectionNonNullable;
  description: StringAggregateSelectionNullable;
  name: StringAggregateSelectionNonNullable;
};

export type UserConnectInput = {
  companies?: InputMaybe<Array<UserCompaniesConnectFieldInput>>;
};

export type UserConnectOrCreateInput = {
  companies?: InputMaybe<Array<UserCompaniesConnectOrCreateFieldInput>>;
};

export type UserConnectOrCreateWhere = {
  node: UserUniqueWhere;
};

export type UserConnectWhere = {
  node: UserWhere;
};

export type UserCreateInput = {
  ID: Scalars['ID'];
  companies?: InputMaybe<UserCompaniesFieldInput>;
  email: Scalars['String'];
  name: Scalars['String'];
  photo: Scalars['String'];
};

export type UserDeleteInput = {
  companies?: InputMaybe<Array<UserCompaniesDeleteFieldInput>>;
};

export type UserDisconnectInput = {
  companies?: InputMaybe<Array<UserCompaniesDisconnectFieldInput>>;
};

export type UserEdge = {
  __typename?: 'UserEdge';
  cursor: Scalars['String'];
  node: User;
};

export type UserOnCreateInput = {
  ID: Scalars['ID'];
  email: Scalars['String'];
  name: Scalars['String'];
  photo: Scalars['String'];
};

export type UserOptions = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  /** Specify one or more UserSort objects to sort Users by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<UserSort>>;
};

export type UserRelationInput = {
  companies?: InputMaybe<Array<UserCompaniesCreateFieldInput>>;
};

/** Fields to sort Users by. The order in which sorts are applied is not guaranteed when specifying many fields in one UserSort object. */
export type UserSort = {
  ID?: InputMaybe<SortDirection>;
  email?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
  photo?: InputMaybe<SortDirection>;
};

export type UserUniqueWhere = {
  ID?: InputMaybe<Scalars['ID']>;
};

export type UserUpdateInput = {
  ID?: InputMaybe<Scalars['ID']>;
  companies?: InputMaybe<Array<UserCompaniesUpdateFieldInput>>;
  email?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  photo?: InputMaybe<Scalars['String']>;
};

export type UserWhere = {
  AND?: InputMaybe<Array<UserWhere>>;
  ID?: InputMaybe<Scalars['ID']>;
  ID_CONTAINS?: InputMaybe<Scalars['ID']>;
  ID_ENDS_WITH?: InputMaybe<Scalars['ID']>;
  ID_IN?: InputMaybe<Array<Scalars['ID']>>;
  ID_NOT?: InputMaybe<Scalars['ID']>;
  ID_NOT_CONTAINS?: InputMaybe<Scalars['ID']>;
  ID_NOT_ENDS_WITH?: InputMaybe<Scalars['ID']>;
  ID_NOT_IN?: InputMaybe<Array<Scalars['ID']>>;
  ID_NOT_STARTS_WITH?: InputMaybe<Scalars['ID']>;
  ID_STARTS_WITH?: InputMaybe<Scalars['ID']>;
  OR?: InputMaybe<Array<UserWhere>>;
  companiesAggregate?: InputMaybe<UserCompaniesAggregateInput>;
  companiesConnection_ALL?: InputMaybe<UserCompaniesConnectionWhere>;
  companiesConnection_NONE?: InputMaybe<UserCompaniesConnectionWhere>;
  companiesConnection_SINGLE?: InputMaybe<UserCompaniesConnectionWhere>;
  companiesConnection_SOME?: InputMaybe<UserCompaniesConnectionWhere>;
  /** Return Users where all of the related Companies match this filter */
  companies_ALL?: InputMaybe<CompanyWhere>;
  /** Return Users where none of the related Companies match this filter */
  companies_NONE?: InputMaybe<CompanyWhere>;
  /** Return Users where one of the related Companies match this filter */
  companies_SINGLE?: InputMaybe<CompanyWhere>;
  /** Return Users where some of the related Companies match this filter */
  companies_SOME?: InputMaybe<CompanyWhere>;
  email?: InputMaybe<Scalars['String']>;
  email_CONTAINS?: InputMaybe<Scalars['String']>;
  email_ENDS_WITH?: InputMaybe<Scalars['String']>;
  email_IN?: InputMaybe<Array<Scalars['String']>>;
  email_NOT?: InputMaybe<Scalars['String']>;
  email_NOT_CONTAINS?: InputMaybe<Scalars['String']>;
  email_NOT_ENDS_WITH?: InputMaybe<Scalars['String']>;
  email_NOT_IN?: InputMaybe<Array<Scalars['String']>>;
  email_NOT_STARTS_WITH?: InputMaybe<Scalars['String']>;
  email_STARTS_WITH?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  name_CONTAINS?: InputMaybe<Scalars['String']>;
  name_ENDS_WITH?: InputMaybe<Scalars['String']>;
  name_IN?: InputMaybe<Array<Scalars['String']>>;
  name_NOT?: InputMaybe<Scalars['String']>;
  name_NOT_CONTAINS?: InputMaybe<Scalars['String']>;
  name_NOT_ENDS_WITH?: InputMaybe<Scalars['String']>;
  name_NOT_IN?: InputMaybe<Array<Scalars['String']>>;
  name_NOT_STARTS_WITH?: InputMaybe<Scalars['String']>;
  name_STARTS_WITH?: InputMaybe<Scalars['String']>;
  photo?: InputMaybe<Scalars['String']>;
  photo_CONTAINS?: InputMaybe<Scalars['String']>;
  photo_ENDS_WITH?: InputMaybe<Scalars['String']>;
  photo_IN?: InputMaybe<Array<Scalars['String']>>;
  photo_NOT?: InputMaybe<Scalars['String']>;
  photo_NOT_CONTAINS?: InputMaybe<Scalars['String']>;
  photo_NOT_ENDS_WITH?: InputMaybe<Scalars['String']>;
  photo_NOT_IN?: InputMaybe<Array<Scalars['String']>>;
  photo_NOT_STARTS_WITH?: InputMaybe<Scalars['String']>;
  photo_STARTS_WITH?: InputMaybe<Scalars['String']>;
};

export type UsersConnection = {
  __typename?: 'UsersConnection';
  edges: Array<UserEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type CreateMeMutationVariables = Exact<{
  ID: Scalars['ID'];
  name: Scalars['String'];
  email: Scalars['String'];
  photo: Scalars['String'];
}>;


export type CreateMeMutation = { __typename?: 'Mutation', createUsers: { __typename?: 'CreateUsersMutationResponse', users: Array<{ __typename?: 'User', ID: string, name: string, email: string, photo: string }> } };

export type GetMeQueryVariables = Exact<{
  userID: Scalars['ID'];
}>;


export type GetMeQuery = { __typename?: 'Query', users: Array<{ __typename?: 'User', ID: string, name: string, email: string, photo: string }> };

export type CreateLocationMutationVariables = Exact<{
  companyID: Scalars['ID'];
  name: Scalars['String'];
}>;


export type CreateLocationMutation = { __typename?: 'Mutation', createLocations: { __typename?: 'CreateLocationsMutationResponse', locations: Array<{ __typename?: 'Location', ID: string, name: string }> } };

export type GetCompanyDashboardQueryVariables = Exact<{
  companyID?: InputMaybe<Scalars['ID']>;
}>;


export type GetCompanyDashboardQuery = { __typename?: 'Query', companies: Array<{ __typename?: 'Company', ID: string, name: string, description?: string | null, locations: Array<{ __typename?: 'Location', ID: string, name: string, activitiesAggregate?: { __typename?: 'LocationActivityActivitiesAggregationSelection', count: number } | null }> }> };

export type CreateSubsidiaryMutationVariables = Exact<{
  ID: Scalars['ID'];
  name: Scalars['String'];
  stake: Scalars['Float'];
}>;


export type CreateSubsidiaryMutation = { __typename?: 'Mutation', createCompanies: { __typename?: 'CreateCompaniesMutationResponse', companies: Array<{ __typename?: 'Company', ID: string, name: string }> } };

export type GetCompanyPreviewQueryVariables = Exact<{
  ID: Scalars['ID'];
}>;


export type GetCompanyPreviewQuery = { __typename?: 'Query', companies: Array<{ __typename?: 'Company', ID: string, name: string, usersAggregate?: { __typename?: 'CompanyUserUsersAggregationSelection', count: number } | null, locationsAggregate?: { __typename?: 'CompanyLocationLocationsAggregationSelection', count: number } | null, subsidiaries: Array<{ __typename?: 'Company', ID: string }> }> };

export type GetLocationDashboardQueryVariables = Exact<{
  locationID: Scalars['ID'];
}>;


export type GetLocationDashboardQuery = { __typename?: 'Query', locations: Array<{ __typename?: 'Location', ID: string, name: string, company: { __typename?: 'Company', name: string } }> };

export type CreateProjectMutationVariables = Exact<{
  userID: Scalars['ID'];
  companyName: Scalars['String'];
}>;


export type CreateProjectMutation = { __typename?: 'Mutation', createCompanies: { __typename?: 'CreateCompaniesMutationResponse', companies: Array<{ __typename?: 'Company', ID: string, name: string, description?: string | null }> } };

export type GetProjectsQueryVariables = Exact<{
  userID: Scalars['ID'];
}>;


export type GetProjectsQuery = { __typename?: 'Query', users: Array<{ __typename?: 'User', companiesConnection: { __typename?: 'UserCompaniesConnection', edges: Array<{ __typename?: 'UserCompaniesRelationship', node: { __typename?: 'Company', ID: string, name: string, description?: string | null } }> } }> };


export const CreateMeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateMe"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ID"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"photo"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createUsers"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"ID"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ID"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"photo"},"value":{"kind":"Variable","name":{"kind":"Name","value":"photo"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ID"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"photo"}}]}}]}}]}}]} as unknown as DocumentNode<CreateMeMutation, CreateMeMutationVariables>;
export const GetMeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetMe"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userID"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"ID"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userID"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ID"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"photo"}}]}}]}}]} as unknown as DocumentNode<GetMeQuery, GetMeQueryVariables>;
export const CreateLocationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateLocation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"companyID"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createLocations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"company"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"connect"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"node"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"ID"},"value":{"kind":"Variable","name":{"kind":"Name","value":"companyID"}}}]}}]}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"locations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ID"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<CreateLocationMutation, CreateLocationMutationVariables>;
export const GetCompanyDashboardDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCompanyDashboard"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"companyID"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"companies"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"ID"},"value":{"kind":"Variable","name":{"kind":"Name","value":"companyID"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ID"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"locations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ID"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"activitiesAggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetCompanyDashboardQuery, GetCompanyDashboardQueryVariables>;
export const CreateSubsidiaryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateSubsidiary"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ID"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"stake"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createCompanies"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"holdings"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"connect"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"node"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"ID"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ID"}}}]}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"edge"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"stake"},"value":{"kind":"Variable","name":{"kind":"Name","value":"stake"}}}]}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"companies"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ID"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<CreateSubsidiaryMutation, CreateSubsidiaryMutationVariables>;
export const GetCompanyPreviewDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCompanyPreview"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ID"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"companies"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"ID"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ID"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"options"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"1"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ID"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"usersAggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}},{"kind":"Field","name":{"kind":"Name","value":"locationsAggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}},{"kind":"Field","name":{"kind":"Name","value":"subsidiaries"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ID"}}]}}]}}]}}]} as unknown as DocumentNode<GetCompanyPreviewQuery, GetCompanyPreviewQueryVariables>;
export const GetLocationDashboardDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetLocationDashboard"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locationID"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"locations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"ID"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locationID"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ID"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"company"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<GetLocationDashboardQuery, GetLocationDashboardQueryVariables>;
export const CreateProjectDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateProject"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userID"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"companyName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createCompanies"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"companyName"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"users"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"connect"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"node"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"ID"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userID"}}}]}}]}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"companies"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ID"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]}}]} as unknown as DocumentNode<CreateProjectMutation, CreateProjectMutationVariables>;
export const GetProjectsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetProjects"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userID"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"ID"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userID"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"options"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"1"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"companiesConnection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ID"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetProjectsQuery, GetProjectsQueryVariables>;