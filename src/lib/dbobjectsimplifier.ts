export const simplifyDBDocument = (object: any) => ({...object.toObject(), id: object._id})
export const simplifyDBDocuments = (list: any[]) => list.map(simplifyDBDocument)
