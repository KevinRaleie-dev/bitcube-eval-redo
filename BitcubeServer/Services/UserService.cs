using System.Collections.Generic;
using BitcubeServer.Models;
using MongoDB.Driver;
using BC = BCrypt.Net.BCrypt;

namespace BitcubeServer.Services
{
    public class UserService
    {
        private readonly IMongoCollection<User> _users;

        public UserService(IUsersDatabaseSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);

            // var options = new CreateIndexOptions() { Unique = true };
            // var field = new StringFieldDefinition<User>("Email");
            // var indexDefinition = new IndexKeysDefinitionBuilder<User>().Ascending(field);
            // var indexModel = new CreateIndexModel<User>(indexDefinition, options);

            _users = database.GetCollection<User>(settings.UserCollectionName);

        }

        public List<User> Get() => _users.Find(user => true).ToList();

        public User Get(string id) =>
            _users.Find<User>(user => user.Id == id).FirstOrDefault();

        public User Create(User user)
        {
            try
            {
                user.Password = BC.HashPassword(user.Password);
                _users.InsertOneAsync(user);
                return user;   
            }
            catch (System.Exception)    
            {
                throw;
            }
        }

        public void Update(string id, User userIn) => 
            _users.ReplaceOne(user => user.Id == id, userIn);
        
        public void Remove(User userIn) => 
            _users.DeleteOne(user => user.Id == userIn.Id);
        
        public void Remove(string id) =>
            _users.DeleteOne(user => user.Id == id);
    }
}