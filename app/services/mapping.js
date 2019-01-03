
export function pushToArray(querySnapshot) {
  return  querySnapshot.docs.map(m=>({
        id:m.id,
        ...m.data()
    }))
  }

  export function pushToObject(docSnapshot) {
    return { id: docSnapshot.id, ...docSnapshot.data() }
  }