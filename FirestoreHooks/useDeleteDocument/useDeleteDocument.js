import { useState } from "react";
import { toast } from "react-toastify";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

const useDeleteDocument = () => {
  const [loading, setLoading] = useState(false);

  const useDeleteDocument = (collectionName, id, succesText, errorText) => {
    setLoading(true);
    const promise = deleteDoc(doc(db, collectionName, id)).finally(() =>
      setLoading(false)
    );
    return toast.promise(promise, {
      pending: "Enviando petición",
      success: succesText,
      error: errorText,
    });
  };

  return [useDeleteDocument, loading];
};

export default useDeleteDocument;
