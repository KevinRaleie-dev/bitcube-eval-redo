using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;
using Newtonsoft.Json;

namespace BitcubeServer
{
    public class User
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id {get; set;}

        [BsonRequired]
        [JsonProperty("Email")]
        public string Email {get; set;}
        
        [BsonElement("Name")]
        [JsonProperty("Name")]
        public string FirstName { get; set;}

        [BsonElement("Surname")]
        [JsonProperty("Surname")]
        public string LastName {get; set;}

        [BsonRequired]
        [JsonProperty("Password")]
        public string Password {get; set;}
    }
}