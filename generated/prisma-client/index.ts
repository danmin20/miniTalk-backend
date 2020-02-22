// Code generated by Prisma (prisma@1.34.10). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export type Maybe<T> = T | undefined | null;

export interface Exists {
  message: (where?: MessageWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  message: (where: MessageWhereUniqueInput) => MessageNullablePromise;
  messages: (args?: {
    where?: MessageWhereInput;
    orderBy?: MessageOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Message>;
  messagesConnection: (args?: {
    where?: MessageWhereInput;
    orderBy?: MessageOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => MessageConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createMessage: (data: MessageCreateInput) => MessagePromise;
  updateMessage: (args: {
    data: MessageUpdateInput;
    where: MessageWhereUniqueInput;
  }) => MessagePromise;
  updateManyMessages: (args: {
    data: MessageUpdateManyMutationInput;
    where?: MessageWhereInput;
  }) => BatchPayloadPromise;
  upsertMessage: (args: {
    where: MessageWhereUniqueInput;
    create: MessageCreateInput;
    update: MessageUpdateInput;
  }) => MessagePromise;
  deleteMessage: (where: MessageWhereUniqueInput) => MessagePromise;
  deleteManyMessages: (where?: MessageWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  message: (
    where?: MessageSubscriptionWhereInput
  ) => MessageSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type MessageOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "text_ASC"
  | "text_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export type MessageWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
}>;

export interface MessageWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  text?: Maybe<String>;
  text_not?: Maybe<String>;
  text_in?: Maybe<String[] | String>;
  text_not_in?: Maybe<String[] | String>;
  text_lt?: Maybe<String>;
  text_lte?: Maybe<String>;
  text_gt?: Maybe<String>;
  text_gte?: Maybe<String>;
  text_contains?: Maybe<String>;
  text_not_contains?: Maybe<String>;
  text_starts_with?: Maybe<String>;
  text_not_starts_with?: Maybe<String>;
  text_ends_with?: Maybe<String>;
  text_not_ends_with?: Maybe<String>;
  AND?: Maybe<MessageWhereInput[] | MessageWhereInput>;
  OR?: Maybe<MessageWhereInput[] | MessageWhereInput>;
  NOT?: Maybe<MessageWhereInput[] | MessageWhereInput>;
}

export interface MessageCreateInput {
  id?: Maybe<ID_Input>;
  text: String;
}

export interface MessageUpdateInput {
  text?: Maybe<String>;
}

export interface MessageUpdateManyMutationInput {
  text?: Maybe<String>;
}

export interface MessageSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<MessageWhereInput>;
  AND?: Maybe<MessageSubscriptionWhereInput[] | MessageSubscriptionWhereInput>;
  OR?: Maybe<MessageSubscriptionWhereInput[] | MessageSubscriptionWhereInput>;
  NOT?: Maybe<MessageSubscriptionWhereInput[] | MessageSubscriptionWhereInput>;
}

export interface NodeNode {
  id: ID_Output;
}

export interface Message {
  id: ID_Output;
  text: String;
}

export interface MessagePromise extends Promise<Message>, Fragmentable {
  id: () => Promise<ID_Output>;
  text: () => Promise<String>;
}

export interface MessageSubscription
  extends Promise<AsyncIterator<Message>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  text: () => Promise<AsyncIterator<String>>;
}

export interface MessageNullablePromise
  extends Promise<Message | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  text: () => Promise<String>;
}

export interface MessageConnection {
  pageInfo: PageInfo;
  edges: MessageEdge[];
}

export interface MessageConnectionPromise
  extends Promise<MessageConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<MessageEdge>>() => T;
  aggregate: <T = AggregateMessagePromise>() => T;
}

export interface MessageConnectionSubscription
  extends Promise<AsyncIterator<MessageConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<MessageEdgeSubscription>>>() => T;
  aggregate: <T = AggregateMessageSubscription>() => T;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface MessageEdge {
  node: Message;
  cursor: String;
}

export interface MessageEdgePromise extends Promise<MessageEdge>, Fragmentable {
  node: <T = MessagePromise>() => T;
  cursor: () => Promise<String>;
}

export interface MessageEdgeSubscription
  extends Promise<AsyncIterator<MessageEdge>>,
    Fragmentable {
  node: <T = MessageSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateMessage {
  count: Int;
}

export interface AggregateMessagePromise
  extends Promise<AggregateMessage>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateMessageSubscription
  extends Promise<AsyncIterator<AggregateMessage>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface MessageSubscriptionPayload {
  mutation: MutationType;
  node: Message;
  updatedFields: String[];
  previousValues: MessagePreviousValues;
}

export interface MessageSubscriptionPayloadPromise
  extends Promise<MessageSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = MessagePromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = MessagePreviousValuesPromise>() => T;
}

export interface MessageSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<MessageSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = MessageSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = MessagePreviousValuesSubscription>() => T;
}

export interface MessagePreviousValues {
  id: ID_Output;
  text: String;
}

export interface MessagePreviousValuesPromise
  extends Promise<MessagePreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  text: () => Promise<String>;
}

export interface MessagePreviousValuesSubscription
  extends Promise<AsyncIterator<MessagePreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  text: () => Promise<AsyncIterator<String>>;
}

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.
*/
export type Int = number;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

export type Long = string;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "Message",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const Prisma = makePrismaClientClass<ClientConstructor<Prisma>>({
  typeDefs,
  models,
  endpoint: `https://us1.prisma.sh/lee-jeong-min-53b1fe/miniTalk-backend/dev`
});
export const prisma = new Prisma();
