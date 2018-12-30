
export function pushToArray(querySnapshot) {
  return  querySnapshot.doc.map(m=>({
        id:m.id,
        ...m.data()
    }))
  }

  export function pushToObject(docSnapshot) {
    return { id: docSnapshot.id, ...docSnapshot.data() }
  }