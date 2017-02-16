Example of multiple query

```js
{
  apple: company(id: "1") {
    name
    description
		users {
      firstName
      age
    }
  }
  google:company(id: "2") {
    name
    description
		users {
      firstName
      age
    }
  }
}
```

Example of fragment

```js
{
  apple: company(id: "1") {
    ...companyDetails
  }
  google:company(id: "2") {
    ...companyDetails
  }
}

fragment companyDetails on Company {
  name
  description
  users {
    firstName
    age
  }
}
```

Mutation Example

```js
mutation {
  addUser(firstName: "Bob", age: 26) {
    id
    firstName
    age
  }
}
```