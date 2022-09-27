# useCreateDocument

Example:

```js
const [createDocument, loading] = useCreateDocument();

const document = {
  name: documentName,
  price: documentPrice,
};

const documentRef = doc(collection(db, "documents"));
await createDocument("documents", "Documento", document, documentRef);
```
