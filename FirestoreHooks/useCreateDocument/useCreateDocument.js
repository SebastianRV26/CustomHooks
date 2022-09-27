import { useState } from "react";
import { collection, addDoc, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { db } from "../firebase/firebaseConfig";

const useCreateDocument = () => {
  const [loading, setLoading] = useState(false);

  const useCreateDocument = (collectionName, name, object, docRef = null) => {
    setLoading(true);

    let promise;
    if (docRef) {
      promise = setDoc(docRef, object).finally(() => setLoading(false));
    } else {
      promise = addDoc(collection(db, collectionName), object).finally(() =>
        setLoading(false)
      );
    }

    return toast.promise(promise, {
      pending: `Creando ${name.toLowerCase()}`,
      success: `${name} agregado exitosamente`,
      error: `Error al crear ${name.toLowerCase()}`,
    });
  };

  return [useCreateDocument, loading];
};

export default useCreateDocument;
