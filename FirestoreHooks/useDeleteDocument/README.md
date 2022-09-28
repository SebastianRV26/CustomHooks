# useDeleteDocument

Example:

```js
const [deleteDocument, loading] = useDelete();

await deleteDocument(
  "documents",
  documentId,
  "Se elimino el documento correctamente",
  "Error al eliminar el documento"
);
```
