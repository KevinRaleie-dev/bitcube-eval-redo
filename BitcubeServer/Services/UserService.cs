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

            _users = database.GetCollection<User>(settings.UserCollectionName);

        }

        public List<User> Get() => _users.Find(user => true).ToList();

        public User Get(string id) =>
            _users.Find<User>(user => user.Id == id).FirstOrDefault();

        public User Create(User user)
        {
            var checkUser = _users.Find<User>(x => x.Email == user.Email).FirstOrDefault();
            if (checkUser != null)
            {
                throw new System.Exception("Account is already taken");
            }
            
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

        public User Login(string email, string password)
        {
            if (string.IsNullOrEmpty(email) || string.IsNullOrEmpty(password))
                return null;


            var user = _users.Find<User>(x => x.Email == email).FirstOrDefault();

            // check if the email exists
            if (user == null)
                return null;

            // check if the password matches
            bool isValidPassword = BCrypt.Net.BCrypt.Verify(password, user.Password);

            if (isValidPassword)
            {
                return user;
            }

            return null;

        }

        public void Update(string id, User userIn) =>
            _users.ReplaceOne(user => user.Id == id, userIn);

        public void Remove(User userIn) =>
            _users.DeleteOne(user => user.Id == userIn.Id);

        public void Remove(string id) =>
            _users.DeleteOne(user => user.Id == id);
    }
}