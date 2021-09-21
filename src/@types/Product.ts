//generated on https://www.graphql-code-generator.com

export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
    [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
};

export type Query = {
    __typename?: 'Query';
    currency: Array<Currency>;
    products: Array<Product>;
};

export type Product = {
    __typename?: 'Product';
    id: Scalars['Int'];
    title: Scalars['String'];
    image_url: Scalars['String'];
    price: Scalars['Float'];
    product_options: Array<ProductOption>;
};

export type ProductPriceArgs = {
    currency?: Maybe<Currency>;
};

export type ProductOption = {
    __typename?: 'ProductOption';
    title: Scalars['String'];
    prefix?: Maybe<Scalars['String']>;
    suffix?: Maybe<Scalars['String']>;
    options: Array<ProductOptionValue>;
};

export type ProductOptionValue = {
    __typename?: 'ProductOptionValue';
    id: Scalars['Int'];
    value: Scalars['String'];
};

export enum Currency {
    AED = 'AED',
    AFN = 'AFN',
    ALL = 'ALL',
    AMD = 'AMD',
    ANG = 'ANG',
    AOA = 'AOA',
    ARS = 'ARS',
    AUD = 'AUD',
    AWG = 'AWG',
    AZN = 'AZN',
    BAM = 'BAM',
    BBD = 'BBD',
    BDT = 'BDT',
    BGN = 'BGN',
    BIF = 'BIF',
    BMD = 'BMD',
    BND = 'BND',
    BOB = 'BOB',
    BRL = 'BRL',
    BSD = 'BSD',
    BWP = 'BWP',
    BZD = 'BZD',
    CAD = 'CAD',
    CDF = 'CDF',
    CHF = 'CHF',
    CLP = 'CLP',
    CNY = 'CNY',
    COP = 'COP',
    CRC = 'CRC',
    CVE = 'CVE',
    CZK = 'CZK',
    DJF = 'DJF',
    DKK = 'DKK',
    DOP = 'DOP',
    DZD = 'DZD',
    EGP = 'EGP',
    ETB = 'ETB',
    EUR = 'EUR',
    FJD = 'FJD',
    FKP = 'FKP',
    GBP = 'GBP',
    GEL = 'GEL',
    GIP = 'GIP',
    GMD = 'GMD',
    GNF = 'GNF',
    GTQ = 'GTQ',
    GYD = 'GYD',
    HKD = 'HKD',
    HNL = 'HNL',
    HRK = 'HRK',
    HTG = 'HTG',
    HUF = 'HUF',
    IDR = 'IDR',
    ILS = 'ILS',
    INR = 'INR',
    ISK = 'ISK',
    JMD = 'JMD',
    JPY = 'JPY',
    KES = 'KES',
    KHR = 'KHR',
    KMF = 'KMF',
    KRW = 'KRW',
    KSG = 'KSG',
    KYD = 'KYD',
    KZT = 'KZT',
    LAK = 'LAK',
    LBP = 'LBP',
    LKR = 'LKR',
    LRD = 'LRD',
    LSL = 'LSL',
    MAD = 'MAD',
    MDL = 'MDL',
    MGA = 'MGA',
    MKD = 'MKD',
    MMK = 'MMK',
    MNT = 'MNT',
    MOP = 'MOP',
    MRO = 'MRO',
    MUR = 'MUR',
    MVR = 'MVR',
    MWK = 'MWK',
    MXN = 'MXN',
    MYR = 'MYR',
    MZN = 'MZN',
    NAD = 'NAD',
    NGN = 'NGN',
    NIO = 'NIO',
    NOK = 'NOK',
    NPR = 'NPR',
    NZD = 'NZD',
    PAB = 'PAB',
    PEN = 'PEN',
    PGK = 'PGK',
    PHP = 'PHP',
    PKR = 'PKR',
    PLN = 'PLN',
    PYG = 'PYG',
    QAR = 'QAR',
    RON = 'RON',
    RSD = 'RSD',
    RUB = 'RUB',
    RWF = 'RWF',
    SAR = 'SAR',
    SBD = 'SBD',
    SCR = 'SCR',
    SEK = 'SEK',
    SGD = 'SGD',
    SHP = 'SHP',
    SLL = 'SLL',
    SOS = 'SOS',
    SRD = 'SRD',
    STD = 'STD',
    SVC = 'SVC',
    SZL = 'SZL',
    THB = 'THB',
    TJS = 'TJS',
    TOP = 'TOP',
    TRY = 'TRY',
    TTD = 'TTD',
    TWD = 'TWD',
    TZS = 'TZS',
    UAH = 'UAH',
    UGX = 'UGX',
    USD = 'USD',
    UYU = 'UYU',
    UZS = 'UZS',
    VND = 'VND',
    VUV = 'VUV',
    WST = 'WST',
    XAF = 'XAF',
    XCD = 'XCD',
    XOF = 'XOF',
    XPF = 'XPF',
    YER = 'YER',
    ZAR = 'ZAR',
    ZMW = 'ZMW',
}
