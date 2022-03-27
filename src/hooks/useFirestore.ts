import { collection, onSnapshot } from "firebase/firestore";
import { useState, useEffect } from "react";
import { projectFirestore } from "../firebase/config";

const useFirestore = (images: any) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const unsub = onSnapshot(
      collection(projectFirestore, images),
      (docSnap) => {
        let documents: any = [];
        docSnap.docs.forEach((doc) => {
          documents.push({ ...doc.data(), id: doc.id });
        });

        setDocs(documents);
      }
    );

    return () => unsub();
  }, [images]);

  return { docs };
};

export default useFirestore;
