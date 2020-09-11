import omit from 'lodash/omit'

export const simplifyDBDocument = (object: any) => omit({...object.toObject(), id: object._id}, ['_id'])
export const simplifyDBDocuments = (list: any[]) => list.map(simplifyDBDocument)
