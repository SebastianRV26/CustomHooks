# useModifyDocument

Example:

```js
const [modifyDocument, loading] = useModifyDocument();

const document = {
  id: documentId,
  name: documentName,
  price: documentPrice,
};

await modifyDocument(
  "documents",
  document.id,
  document,
  "Documento modificado correctamente",
  "Error al modificar el documento"
);
```
