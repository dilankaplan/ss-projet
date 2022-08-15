import { gql } from "@apollo/client";

export const GET_USER_INFO = gql`
  query user {
    user {
      name
      firebaseUserUID
      code
      contact
      email
      address1
      address2
      address3
      city
      country
      postCode
      telephone
      telephone2
      mobile
      fax
      companyName
      contactName
      contactEmail
      userCode
      creditLimit
      currencyCode
      marketingEmailEnabled
      marketingSmsEnabled
      marketingNotificationEnabled
      showAllPricesIncludingVat
    }
  }
`;

export const GET_PRODUCT_LIST = gql`
  query products($index: Int!, $limit: Int!) {
    products(index: $index, limit: $limit) {
      products {
        price {
          price {
            price
          }
        }
        itemType
        weight
        id
        code
        description1
        description2
        description3
      }
      count
    }
  }
`;

export const GET_ORDERS = gql`
  query {
    orders {
      id
      orderName
      orderDate
      status
      total
      subTotal
      deliveryDate
    }
  }
`;
