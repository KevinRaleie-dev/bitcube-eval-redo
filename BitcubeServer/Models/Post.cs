using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;
using Newtonsoft.Json;


namespace BitcubeServer
{
    
    public class Post 
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }

        [BsonRequired]
        [BsonElement("Content")]
        [JsonProperty("Content")]    
        public string Content { get; set; }
    }
}