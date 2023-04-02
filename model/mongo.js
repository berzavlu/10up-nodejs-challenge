class MongoModel {
  constructor(db) {
    this.db = db
  }

  getAllFilter(collection, query, order, fields) {
    return this.db
      .collection(collection)
      .find(query, {
        fields,
      })
      .sort(order)
      .toArray()
  }

  getAll(collection, query, order) {
    return this.db.collection(collection).find(query).sort(order).toArray()
  }

  get(collection, query) {
    return this.db.collection(collection).findOne(query)
  }

  delete(collection, query) {
    return this.db.collection(collection).deleteOne(query)
  }

  count(collection, query) {
    return this.db.collection(collection).count(query)
  }

  create(collection, query) {
    return this.db.collection(collection).insertOne(query, {
      upsert: true,
      returnNewDocument: true,
    })
  }

  update(collection, filter, data) {
    return this.db.collection(collection).updateOne(
      filter,
      {
        $set: data,
      }
    )
  }

  findAndUpdate(collection, filter, data) {
    return this.db.collection(collection).findOneAndUpdate(
      filter,
      data,
      {
        upsert: false, // insert a new document, if no existing document match the query 
        returnOriginal: false,
      }
    )
  }

  aggregate(collection, query) {
    return this.db.collection(collection).aggregate(query).toArray()
  }
}

module.exports = MongoModel
